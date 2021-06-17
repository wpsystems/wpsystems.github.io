class Fetch {
    constructor () {
      this.lastResponse = null;
    }
  
    getInfo () {
      return {
        id: 'fetch',
        name: 'Fetch',
        blocks: [
          {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/test'
              }
            }
          }
        ]
      };
    }
  
    _fetch (url) {
      alert("hi there");
      return fetch(url)
        .then(r => {
          this.lastResponse = r;
          return r;
        });
    }
  
    get (args) {
        alert("hello world");

        return args.URL;

        /*
      return this._fetch(args.URL)
        .then(r => r.text())
        .catch(() => '');
        */
    }
  }
  
  Scratch.extensions.register(new Fetch());