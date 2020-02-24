/*
/////////////////////////////////////////////////////////////////////////
//Language interchange
*/
function langEng(){
	$(".eng").css("display","block");
//	$(".fr").css("display","none");
	$(".chTr").css("display","none");
//	$(".chSi").css("display","none");
	$(".btnNav1").css("background-position","0px 0px");
	$(".btnNav2").css("background-position","-100px 0px");
	$(".btnNav3").css("background-position","-200px 0px");
	$(".btnNav4").css("background-position","-300px 0px");
	$(".btnNav5").css("background-position","-400px 0px");

    //change Eng photo in slide
    //$("#photo1").attr('src','promotion/promoEng.jpg');
}
function langTr(){
	$(".eng").css("display","none");
//	$(".fr").css("display","none");
	$(".chTr").css("display","block");
//	$(".chSi").css("display","none");
	$(".btnNav1").css("background-position","0px -60px");
	$(".btnNav2").css("background-position","-100px -60px");
	$(".btnNav3").css("background-position","-200px -60px");
	$(".btnNav4").css("background-position","-300px -60px");
	$(".btnNav5").css("background-position","-400px -60px");

    //change ChTr photo in slide
    //$("#photo1").attr('src','promotion/promoChTr.jpg');
}

/*
$("#frBtn").click(function(){
	$(".eng").css("display","none");
	$(".fr").css("display","block");
	$(".chTr").css("display","none");
	$(".chSi").css("display","none");
	$(".btnNav1").css("background-position","0px -30px");
	$(".btnNav2").css("background-position","-100px -30px");
	$(".btnNav3").css("background-position","-200px -30px");
	$(".btnNav4").css("background-position","-300px -30px");
	$(".btnNav5").css("background-position","-400px -30px");
});

$("#siBtn").click(function(){
	$(".eng").css("display","none");
	$(".fr").css("display","none");
	$(".chTr").css("display","none");
	$(".chSi").css("display","block");
	$(".btnNav1").css("background-position","0px -90px");
	$(".btnNav2").css("background-position","-100px -90px");
	$(".btnNav3").css("background-position","-200px -90px");
	$(".btnNav4").css("background-position","-300px -90px");
	$(".btnNav5").css("background-position","-400px -90px");
});
*/
/*
/////////////////////////////////////////////////////////////////////////
//map in information
*/
function initialize1() {
      if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map-canvas"));
        map.setCenter(new GLatLng(43.821742,-79.298514), 13);
        map.setUIToDefault();
      }
	  var point = new GLatLng(43.821742, -79.298514);
	  map.addOverlay(new GMarker(point));
}
/*
/////////////////////////////////////////////////////////////////////////
*/
function isI(){
    return (
        (navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1)
    );
}
/*
//Content Box interchange
//initalize
*/
var fadeSpeed=0;
/*$("#box1").fadeIn(0);
$("#box2").fadeOut(0);
$("#box3").fadeOut(0);
$("#box4").fadeOut(0);
$("#box5").fadeOut(0);
$("#box6").fadeOut(0);
*/
/*
$('#btn1').unbind('mouseenter mouseleave');
$('#btn1').css("background-image","url(img/btnHover.jpg)");
*/
$('#btn1').hover(
	function() {$(this).css("background-image","url(img/btnHover.jpg)");},
	function() {$(this).css("background-image","url(img/btn.jpg)");}
);
$('#btn2').hover(
	function() {$(this).css("background-image","url(img/btnHover.jpg)");},
	function() {$(this).css("background-image","url(img/btn.jpg)");}
);
$('#btn3').hover(
	function() {$(this).css("background-image","url(img/btnHover.jpg)");},
	function() {$(this).css("background-image","url(img/btn.jpg)");}
);
$('#btn4').hover(
	function() {$(this).css("background-image","url(img/btnHover.jpg)");},
	function() {$(this).css("background-image","url(img/btn.jpg)");}
);
$('#btn5').hover(
	function() {$(this).css("background-image","url(img/btnHover.jpg)");},
	function() {$(this).css("background-image","url(img/btn.jpg)");}
);


/////////////////////////////////////////////////////////////////////////
//photos interchange
//initialize
/////////////////////////////////////////////////////////////////////////
var currPhoto = 1;
var totPhoto = 8;//Total number of photos
var duration = 500;
var photoCycle = 5000;
var ready = 1;
$('#photoDot1').css({'border-color':'#3366FF','background-color':'#66FFFF'});
/*
//photo timeline
*/
function photoRun(){
	$("#photoTime").animate({width:'0%'},photoCycle,"linear",function(){$("#btnRight").trigger('click'); $("#photoTime").css('width','100%'); photoRun();});
}
photoRun();
/*
//Photo frame interchange. 1.jpg -> 2.jpg -> 3,jpg -> 4.jpg -> 5.jpg -> 1.jpg. minimum 2 photos
*/
$("#btnLeft").click(function() {
	function complete(){
		ready = 1;
	}
	if(ready==1){
		ready = 0;
		var centerP = document.getElementById('photo'+currPhoto);
		var leftP;
		if(currPhoto > 1){
			var temp = currPhoto-1;
			leftP = document.getElementById('photo'+temp);
		}
		else{
			leftP = document.getElementById('photo'+totPhoto);
		}
		
		if(currPhoto==1){
			currPhoto=totPhoto;
		}
		else{		
			currPhoto=currPhoto-1;
		}
		leftP.style.top = "0px";
		leftP.style.left = "-800px";
		/*
		//Set all photo to normal color
		*/
		$('#photoDot1').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot2').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot3').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot4').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot5').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot6').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot7').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot8').css({'border-color':'#666666','background-color':'#CCCCCC'});
		var photoD = document.getElementById('photoDot'+currPhoto);
		$(photoD).css({'border-color':'#3366FF','background-color':'#66FFFF'});		
		$(centerP).animate({left: '+=800'}, duration,complete);
		$(leftP).animate({left: '+=800'}, duration);
		/*
		//reset photoTime
		*/
		$("#photoTime").stop();
		$("#photoTime").css('width','100%');
		photoRun();	
	}	
});
$("#btnRight").click(function() {
	function complete(){
		ready = 1;
	}
	if(ready==1){
		ready = 0;
		var centerP = document.getElementById('photo'+currPhoto);
		var rightP;
		if(currPhoto < totPhoto){
			var temp = currPhoto+1;
			rightP = document.getElementById('photo'+temp);
		}
		else{
			rightP = document.getElementById('photo1');
		}
		if(currPhoto==totPhoto){
			currPhoto=1;
		}
		else{		
			currPhoto=currPhoto+1;
		}
		rightP.style.top = "0px";
		rightP.style.left = "800px";
		/*
		//Set all photo to normal color
		*/
		$('#photoDot1').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot2').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot3').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot4').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot5').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot6').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot7').css({'border-color':'#666666','background-color':'#CCCCCC'});
		$('#photoDot8').css({'border-color':'#666666','background-color':'#CCCCCC'});
		var photoD = document.getElementById('photoDot'+currPhoto);
		$(photoD).css({'border-color':'#3366FF','background-color':'#66FFFF'});
		$(centerP).animate({left: '-=800'}, duration, complete);
		$(rightP).animate({left: '-=800'}, duration);
		/*
		//reset photoTime
		*/
		$("#photoTime").stop();
		$("#photoTime").css('width','100%');
		photoRun();
	}	
});

$("#frameCenter").touchwipe({
	 wipeLeft: function() {
		$("#btnRight").trigger('click');
	 },
	 wipeRight: function() {  
		 $("#btnLeft").trigger('click');
	 },
});

/////////////////////////////////////////////////////////////////////////
//END OF photos interchange
/////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////
//Menu show and hidden
//Cate Button and cate List control
//initialize
/////////////////////////////////////////////////////////////////////////

var cateListDrop = 0;
var menuShowHideSpeed = "fast";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	menuShowHideSpeed = null;//menu open and close
	fadeSpeed=null;//box interchange
}
$("#menuBtn0").click(function(){//gallery
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen0").show(menuShowHideSpeed);
	//$("#slideCtr").css("left",($(window).width() - 400)/2); /*400 is width of cateList*/
	$(".slideCtr").show(menuShowHideSpeed);
});
$("#menuBtn1").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$("#cateBtn").css("left",($(window).width() - 300)/2); /*300 is width of cateBtn*/
	$("#cateList1").css("left",($(window).width() - 400)/2); /*400 is width of cateList*/
	$(".close").css("left",$(window).width()/2-430);
	$("#cateBtn").fadeIn("slow");
	$("#cateList1").fadeIn("slow");
	$(".close").fadeIn("slow");
	$("#menuScreen1").show(menuShowHideSpeed);
	$("#cateList1").trigger('click');//open cateList
});
$("#menuBtn2").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen2").show(menuShowHideSpeed);
});
$("#menuBtn3").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen3").show(menuShowHideSpeed);
});
$("#menuBtn4").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen4").show(menuShowHideSpeed);
});
$("#menuBtn5").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen5").show(menuShowHideSpeed);
});
$("#menuBtn6").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen6").show(menuShowHideSpeed);
});
$("#menuBtn7").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen7").show(menuShowHideSpeed);
});
$("#menuBtn8").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen8").show(menuShowHideSpeed);
});
$("#menuBtn9").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen8").show(menuShowHideSpeed);
});
$("#menuBtn10").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen10").show(menuShowHideSpeed);
});
$("#menuBtn11").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen11").show(menuShowHideSpeed);
});
$("#menuBtn12").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen8").show(menuShowHideSpeed);
});
$("#menuBtn13").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen13").show(menuShowHideSpeed);
});
$("#menuBtn14").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen14").show(menuShowHideSpeed);
});
$("#menuBtn15").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen8").show(menuShowHideSpeed);
});
$("#menuBtn16").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen16").show(menuShowHideSpeed);
});
$("#menuBtn17").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen8").show(menuShowHideSpeed);
});
$(".close").click(function(){
	$("body").css("overflow","auto");
	$("#cateBtn").hide(menuShowHideSpeed);
	$("#cateList1").hide(menuShowHideSpeed);
	$(".close").hide(menuShowHideSpeed);
	$("#slideCtr").hide(menuShowHideSpeed);
	slideStop();
	$("#menuScreen0").hide(menuShowHideSpeed);
	$("#menuScreen1").hide(menuShowHideSpeed);
	$("#menuScreen2").hide(menuShowHideSpeed);
	$("#menuScreen3").hide(menuShowHideSpeed);
	$("#menuScreen4").hide(menuShowHideSpeed);
	$("#menuScreen5").hide(menuShowHideSpeed);
	$("#menuScreen6").hide(menuShowHideSpeed);
	$("#menuScreen7").hide(menuShowHideSpeed);
	$("#menuScreen8").hide(menuShowHideSpeed);
	$("#menuScreen9").hide(menuShowHideSpeed);
	$("#menuScreen10").hide(menuShowHideSpeed);
	$("#menuScreen11").hide(menuShowHideSpeed);
	$("#menuScreen12").hide(menuShowHideSpeed);
	$("#menuScreen13").hide(menuShowHideSpeed);
	$("#menuScreen14").hide(menuShowHideSpeed);
    $("#menuScreen15").hide(menuShowHideSpeed);
    $("#menuScreen16").hide(menuShowHideSpeed);
    $("#menuScreen17").hide(menuShowHideSpeed);	
});

$(".menuScreen").click(function(){
	$(".close").trigger('click');				  
});

$(".menuImg").click(function(e) {
    e.stopPropagation();
});

$("#cateList1").click(function(){
	function complete(){ready = 1;}
	if(ready==1){	
		ready=0;
		if(cateListDrop == 0){
			$("#cateList1").animate({top: '+=700'},'slow',complete);
			cateListDrop = 1;
		}
		else{
			$("#cateList1").animate({top: '-=700'},'slow',complete);
			cateListDrop = 0;
		}
	}
});
/*
//Resize event
*/
$(window).resize(function() {
  $(".cateBtn").css("left",($(window).width() - 300)/2); /*300 is width of cateBtn*/
  $(".cateList").css("left",($(window).width() - 400)/2); /*400 is width of cateList*/
  $(".close").css("left",$(window).width()/2-430);
});
////////////////
//CateList1Btn
////////////////

$("#cateList1Btn1").click(function(){$("#menuScreen1").animate({scrollTop:1140},500);});
$("#cateList1Btn2").click(function(){$("#menuScreen1").animate({scrollTop:5600},500);});
$("#cateList1Btn3").click(function(){$("#menuScreen1").animate({scrollTop:11200},500);});
$("#cateList1Btn4").click(function(){$("#menuScreen1").animate({scrollTop:13460},500);});
$("#cateList1Btn5").click(function(){$("#menuScreen1").animate({scrollTop:17940},500);});
$("#cateList1Btn6").click(function(){$("#menuScreen1").animate({scrollTop:22400},500);});
$("#cateList1Btn7").click(function(){$("#menuScreen1").animate({scrollTop:24640},500);});
$("#cateList1Btn8").click(function(){$("#menuScreen1").animate({scrollTop:29120},500);});
$("#cateList1Btn9").click(function(){$("#menuScreen1").animate({scrollTop:31360},500);});
$("#cateList1Btn10").click(function(){$("#menuScreen1").animate({scrollTop:33600},500);});
$("#cateList1Btn11").click(function(){$("#menuScreen1").animate({scrollTop:34720},500);});
$("#cateList1Btn12").click(function(){$("#menuScreen1").animate({scrollTop:35840},500);});


/////////////////////////////////////////////////////////////////////////
//End Menu
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//Gallery show and hidden
//Gallery Button(menu.php, locations.php)
//initialize
/////////////////////////////////////////////////////////////////////////
var galleryShowHideSpeed = "fast";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	menuShowHideSpeed = null;//menu open and close
	fadeSpeed=null;//box interchange
}

$("#galleryBtnThornhill").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryThornhill").show(galleryShowHideSpeed);
});
$("#galleryBtnNorthYork").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryNorthYork").show(galleryShowHideSpeed);
});
$("#galleryBtnMarkham").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryMarkham").show(galleryShowHideSpeed);
});
$("#galleryBtnScarbo").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryScarbo").show(galleryShowHideSpeed);
});
$("#galleryBtnHwy7Leslie").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryHwy7Leslie").show(galleryShowHideSpeed);
});
$("#galleryBtnCenterPoint").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryCenterPoint").show(galleryShowHideSpeed);
});
$("#galleryBtnMississauga").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryMississauga").show(galleryShowHideSpeed);
});
$("#galleryBtnMapAll").click(function(){
	$("html, body").animate({ scrollTop: "0px"});
	$("body").css("overflow","hidden");
	$(".closeGallery").css("left",$(window).width()/2-430);
	$(".closeGallery").fadeIn("slow");
	$("#galleryMapAll").show(galleryShowHideSpeed);
});


$(".closeGallery").click(function(){
	$("body").css("overflow","auto");
	$(".closeGallery").hide(menuShowHideSpeed);
	$("#galleryThornhill").hide(menuShowHideSpeed);
	$("#galleryNorthYork").hide(galleryShowHideSpeed);
	$("#galleryMarkham").hide(galleryShowHideSpeed);
	$("#galleryScarbo").hide(galleryShowHideSpeed);
	$("#galleryHwy7Leslie").hide(galleryShowHideSpeed);
	$("#galleryCenterPoint").hide(galleryShowHideSpeed);
	$("#galleryMississauga").hide(galleryShowHideSpeed);
	$("#galleryMapAll").hide(galleryShowHideSpeed);
});

$(".galleryScreen").click(function(){
	$(".closeGallery").trigger('click');			  
});
$(".galleryCuisineThumb").click(function(e) {
    e.stopPropagation();
});
$(".galleryCuisineImgBox").click(function(e) {
    e.stopPropagation();
});
$(".galleryCuisineImg").click(function(e) {
    e.stopPropagation();
});
$(".galleryImg").click(function(e) {
    e.stopPropagation();
});
$(".slideCtr").click(function(e) {
    e.stopPropagation();
});



var currCThb = 1;
var l = 0;
var slideplaying = false;

$("#cg"+currCThb).show();
$("#"+currCThb).css("border-bottom-width","8px");
$("#slideCtrPrev").css("border-style","outset");
$("#slideCtrP").css("border-style","outset");
$("#slideCtrS").css("border-style","inset");
$("#slideCtrNext").css("border-style","outset");

$(".galleryCuisineThumb").click(function(){
    slideStop()
	var thumbClicked = this.id;
	$("#cg"+currCThb).fadeOut(500);
	$("#cg"+thumbClicked).delay(250).fadeIn(500);
	$("#"+currCThb).css("border-bottom-width","2px");
	$("#"+thumbClicked).css("border-bottom-width","8px");
	currCThb = parseInt(thumbClicked);
});

function slidePlay(){
	slideplaying = true;
	$("#slideCtrP").css("border-style","inset");
	$("#slideCtrS").css("border-style","outset");
	l = setInterval(function(){
					var next;
					if(currCThb >= 13){next = 1;}
					else{next = currCThb + 1;}
					$("#cg"+currCThb).fadeOut(500);
					$("#cg"+next).delay(250).fadeIn(500);
					$("#"+currCThb).css("border-bottom-width","2px");
					$("#"+next).css("border-bottom-width","8px");
					currCThb = next;
	},3000);
}

function slideStop(){
	$("#slideCtrP").css("border-style","outset");
	$("#slideCtrS").css("border-style","inset");
	clearInterval(l);
	slideplaying = false;
}

$("#slideCtrPrev").click(function(){
	if(slideplaying == true){
		slideStop();
	}
	var prev;
	if(currCThb == 1){prev = 13;}
	else{prev = currCThb - 1;}
	$("#cg"+currCThb).fadeOut(500);
	$("#cg"+prev).delay(250).fadeIn(500);
	$("#"+currCThb).css("border-bottom-width","2px");
	$("#"+prev).css("border-bottom-width","8px");
	currCThb = prev;
});

$("#slideCtrP").click(function(){
	if(slideplaying == false){
		slidePlay();
	}
});

$("#slideCtrS").click(function(){
	if(slideplaying == true){
		slideStop();
	}		   
});

$("#slideCtrNext").click(function(){
	if(slideplaying == true){
		slideStop();
	}
	var next;
	if(currCThb >= 13){next = 1;}
	else{next = currCThb + 1;}
	$("#cg"+currCThb).fadeOut(500);
	$("#cg"+next).delay(250).fadeIn(500);
	$("#"+currCThb).css("border-bottom-width","2px");
	$("#"+next).css("border-bottom-width","8px");
	currCThb = next;
});
/////////////////////////////////////////////////////////////////////////
//End Gallery
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
//Form
/////////////////////////////////////////////////////////////////////////
function validateEmail(){
	var x=document.forms["surveyForm"]["mail"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		$("#mail").css({background:"pink"});
		return false;
	}
	$("#mail").css({background:"white"});
	return true;
}

function validatePcode(){
	var x=document.forms["surveyForm"]["pCod"].value;
	var rgx = /^(\w{1})(\d{1})(\w{1})(\d{1})(\w{1})(\d{1})$/;
	if(rgx.test(x)){
		$("#pCod").css({background:"white"});
		return true;
	}
	$("#pCod").css({background:"pink"});
	return false;
}

function validateImgCode(){
	var x=document.forms["surveyForm"]["sCod"].value;
	var rgx = /^(\w{4})$/;
	if(rgx.test(x)){
		$("#sCod").css({background:"white"});
		return true;
	}
	$("#sCod").css({background:"pink"});
	return false;
}

function resetForm(){
	$("select#option").val("");
	$("input[type='radio']").prop("checked", false);
	$("textarea#text").val("");
	$("input#mail").val("");
	$("input#pCod").val("");
	$("input#sCod").val("");
}

$("#surveyForm").submit(function() {
	/*Check email and postal code format*/
	if(validateEmail()){
		if(validatePcode()){
			if(validateImgCode()){
				/*send data*/
				var data = "lang="+$("input#lang").val()
				+"&stor="+$('input[name=store]:checked', '#surveyForm').val()
				+"&food="+$('input[name=food]:checked', '#surveyForm').val()
				+"&drin="+$('input[name=drin]:checked', '#surveyForm').val()
				+"&serv="+$('input[name=serv]:checked', '#surveyForm').val()
				+"&clea="+$('input[name=clea]:checked', '#surveyForm').val()
				+"&deli="+$('input[name=deli]:checked', '#surveyForm').val()
				+"&comm="+encodeURIComponent($("textarea#text").val())
				+"&mail="+encodeURIComponent($("input#mail").val())
				+"&pCod="+$("input#pCod").val()
				+"&sCod="+$("input#sCod").val();
				
				$.ajax({url: "submit.php", type: "POST", data: data})
				.done(function(msg) { 
					if(msg.substr(0,1)==0){
						alert("Thank you!\nYour survey has been submitted.");
						resetForm();
					}
					else if(msg.substr(0,1)==1){
						alert("Security code not match");
					}
					else if(msg.substr(0,1)==2){
						alert("Server busy. Survey unable to submit.\nPlease try again later.");
					}
					else if(msg.substr(0,1)==3){
						alert("Daily survey limit excess.\nPlease try again later.");
					}
					else{
						alert("Broswer error!!!");
					}
					$("#reloadImgCode").trigger('click');
				})
				.fail(function() { alert("Survey unable to submit.\nPlease try again later."); });
			}
		}
		validateImgCode();
	}
	else{
		validatePcode();
		validateImgCode();
	}
	return false;
});

$("#resetBtn").click(function(){resetForm();});

$("#reloadImgCode").click(function(){
	d = new Date();
	$("#imgCode").attr("src", "imgCode.php?"+d.getTime());
});
/////////////////////////////////////////////////////////////////////////
//End Form
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
//Video div and video control
/////////////////////////////////////////////////////////////////
/*
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'ifZB9oojZ60?rel=0&showinfo=0',
	});
}
*/
/*
//pop video screen and play video
$("#photo2").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							
	//$("body").css("overflow-y","hidden");
	//$("body").css("overflow","hidden");
	$(".videoScreen").css("display","block");
	$("#iframeV").attr("src","https://www.youtube.com/embed/0jyaIblnhXY?autoplay=1&amp;showinfo=0&amp;rel=0");
	//$("#iframeV").attr("src","http://www.youtube.com/embed/s7xxCgBMSrI?autoplay=1&amp;showinfo=0&amp;rel=0");
});

$("#photo3").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							
	//$("body").css("overflow-y","hidden");
	//$("body").css("overflow","hidden");
	$(".videoScreen").css("display","block");
	$("#iframeV").attr("src","https://www.youtube.com/embed/72MVv7auI2U?autoplay=1&amp;showinfo=0&amp;rel=0");
	//$("#iframeV").attr("src","http://www.youtube.com/embed/GGbrril0fIM?autoplay=1&amp;showinfo=0&amp;rel=0");
});

//close video screen and stop video
$("#videoScreen").click(function(){
	//$("body").css("overflow-y","auto");	
	//$("body").css("overflow","auto");
	$(".videoScreen").css("display","none");
	$("#iframeV").attr("src","");
	//player.stopVideo();
});
*/
/////////////////////////////////////////////////////////////////
//End OF Video control
/////////////////////////////////////////////////////////////////

//////////////////////
//boxNewTaste
//////////////////////
$("#boxNewTaste").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen6").show(menuShowHideSpeed);
	//$('meta[name=viewport]').attr('content','width=1000');
});
/////////////////////
//END boxNewTaste
/////////////////////

//////////////////////
//boxNewChoice
//////////////////////
$("#boxNewChoice").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen15").show(menuShowHideSpeed);
});
/////////////////////
//END boxNewChoice
/////////////////////

/////////////////////
//boxHome2
/////////////////////
$("#boxHome2").click(function(){
	$("html, body").animate({ scrollTop: "0px"});							  
	$("body").css("overflow","hidden");
	$(".close").css("left",$(window).width()/2-430);
	$(".close").fadeIn("slow");
	$("#menuScreen2").show(menuShowHideSpeed);
});
/////////////////////
//END boxHome2
/////////////////////


//////////////////////////////////////////////////////////////////
//map screen 
//////////////////////////////////////////////////////////////////
var mapShowHideSpeed = "fast";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	mapShowHideSpeed = null;//map open and close
}

$("#mapBtnMarkham").click(function(){
	//$("html, body").animate({ scrollTop: "0px"});							  
	//$("body").css("overflow","hidden");
	$("#mapScreenMarkham").show(mapShowHideSpeed);
});

$("#mapBtnScarbo").click(function(){
	//$("html, body").animate({ scrollTop: "0px"});							  
	//$("body").css("overflow","hidden");
	$("#mapScreenScarbo").show(mapShowHideSpeed);
});

$("#mapBtnHwy7").click(function(){
	//$("html, body").animate({ scrollTop: "0px"});							  
	//$("body").css("overflow","hidden");
	$("#mapScreenHwy7").show(mapShowHideSpeed);
});
$("#mapBtnCenterPoint").click(function(){
	$("#mapScreenCenterPoint").show(mapShowHideSpeed);
});


//close map
$("#mapScreenMarkham").click(function(){
	//$("body").css("overflow","auto");
	$("#mapScreenMarkham").hide(mapShowHideSpeed);
});

$("#mapScreenScarbo").click(function(){
	//$("body").css("overflow","auto");
	$("#mapScreenScarbo").hide(mapShowHideSpeed);
});

$("#mapScreenHwy7").click(function(){
	//$("body").css("overflow","auto");
	$("#mapScreenHwy7").hide(mapShowHideSpeed);
});

$("#mapScreenCenterPoint").click(function(){
	$("#mapScreenCenterPoint").hide(mapShowHideSpeed);
});
//////////////////////////////////////////////////////////////////
//End map screen 
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//special Notice
//////////////////////////////////////////////////////////////////
$("#specialNotice").click(function(){
	$("#specialNotice").hide(mapShowHideSpeed);
});

//auto close
//$("#specialNoticeBox").animate({opacity: 1}, 100000, function(){$("#specialNotice").trigger('click');});

//////////////////////////////////////////////////////////////////
//End Special Notice
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//Cookie 
//////////////////////////////////////////////////////////////////
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//////////////////////////////////////////////////////////////////
//End Cookie 
//////////////////////////////////////////////////////////////////




