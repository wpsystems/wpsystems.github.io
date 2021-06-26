const test = require('tap').test;
const Keyboard = require('../../src/io/keyboard');
const Runtime = require('../../src/engine/runtime');

test('spec', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    t.type(k, 'object');
    t.type(k.postData, 'function');
    t.type(k.getKeyIsDown, 'function');
    t.end();
});

test('space key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: ' ',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, ['space']);
    t.strictEquals(k.getKeyIsDown('space'), true);
    t.strictEquals(k.getKeyIsDown('any'), true);
    t.end();
});

test('letter key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: 'a',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, ['A']);
    t.strictEquals(k.getKeyIsDown(65), true);
    t.strictEquals(k.getKeyIsDown('a'), true);
    t.strictEquals(k.getKeyIsDown('A'), true);
    t.strictEquals(k.getKeyIsDown('any'), true);
    t.end();
});

test('number key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: '1',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, ['1']);
    t.strictEquals(k.getKeyIsDown(49), true);
    t.strictEquals(k.getKeyIsDown('1'), true);
    t.strictEquals(k.getKeyIsDown('any'), true);
    t.end();
});

test('non-english key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: '日',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, ['日']);
    t.strictEquals(k.getKeyIsDown('日'), true);
    t.strictEquals(k.getKeyIsDown('any'), true);
    t.end();
});

/* tw: disable test: we intentionally add support for modifier keys
test('ignore modifier key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: 'Shift',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, []);
    t.strictEquals(k.getKeyIsDown('any'), false);
    t.end();
});
*/

test('keyup', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: 'ArrowLeft',
        isDown: true
    });
    k.postData({
        key: 'ArrowLeft',
        isDown: false
    });
    t.strictDeepEquals(k._keysPressed, []);
    t.strictEquals(k.getKeyIsDown('left arrow'), false);
    t.strictEquals(k.getKeyIsDown('any'), false);
    t.end();
});

test('tw: extended spec', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    t.type(k.getLastKeyPressed, 'function');
    t.end();
});

test('tw: extended key support', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: 'Backspace',
        isDown: true
    });
    t.strictDeepEquals(k._keysPressed, ['backspace']);
    t.strictEqual(k.getKeyIsDown('backspace'), true);
    t.end();
});

test('tw: last key pressed', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    t.strictEqual(k.getLastKeyPressed(), '');
    k.postData({
        key: 'a',
        isDown: true
    });
    t.strictEqual(k.getLastKeyPressed(), 'a');
    k.postData({
        key: 'b',
        isDown: true
    });
    t.strictEqual(k.getLastKeyPressed(), 'b');
    t.end();
});

test('holding shift and key, releasing shift, then releasing key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    // Press Shift+2 to produce @
    k.postData({
        key: '@',
        isDown: true,
        keyCode: 50
    });
    t.equal(k.getKeyIsDown('2'), false);
    t.equal(k.getKeyIsDown('@'), true);
    t.equal(k.getKeyIsDown('any'), true);
    // Release shift, then release 2
    k.postData({
        key: 'Shift',
        isDown: false,
        keyCode: 16
    });
    k.postData({
        key: '2',
        isDown: false,
        keyCode: 50
    });
    t.equal(k.getKeyIsDown('@'), false);
    t.equal(k.getKeyIsDown('2'), false);
    t.equal(k.getKeyIsDown('any'), false);

    t.end();
});

test('holding shift and key, releasing shift, waiting, then releasing key', t => {
    const rt = new Runtime();
    const k = new Keyboard(rt);

    k.postData({
        key: '@',
        isDown: true,
        keyCode: 50
    });
    t.equal(k.getKeyIsDown('2'), false);
    t.equal(k.getKeyIsDown('@'), true);
    t.equal(k.getKeyIsDown('any'), true);
    k.postData({
        key: 'Shift',
        isDown: false,
        keyCode: 16
    });
    // But 2 is still being held, so it will send a press event
    k.postData({
        key: '2',
        isDown: true,
        keyCode: 50
    });
    t.equal(k.getKeyIsDown('@'), false);
    t.equal(k.getKeyIsDown('2'), true);
    t.equal(k.getKeyIsDown('any'), true);
    // And now we release 2
    k.postData({
        key: '2',
        isDown: false,
        keyCode: 50
    });
    t.equal(k.getKeyIsDown('@'), false);
    t.equal(k.getKeyIsDown('2'), false);
    t.equal(k.getKeyIsDown('any'), false);

    t.end();
});
