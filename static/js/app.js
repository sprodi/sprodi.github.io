document.getElementById('toggle').addEventListener('click', function() {
  let htmlClasses = document.querySelector('html').classList;
  if(localStorage.theme == 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme')
  } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
  }
});


if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark')
}





var controller = new ScrollMagic.Controller({
   globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "200%" // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
   }
});

var scroll = new SmoothScroll('a[href*="#"]');


function navToggle() {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('menu');

  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
}




const callback = function (entries) {
  entries.forEach((entry) => {
    // console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeInRight");
      entry.target.classList.add("md:animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeInRight");
      entry.target.classList.remove("md:animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// disable right click on images
$(document).ready(function() {
  $("img").on("contextmenu",function(){
     return false;
  }); 
});


// skills text animation
var text = ["Illustrator", "InDesign", "AfterEffects", "Photoshop"];
var counter = 0;
var elem = $("#adobe");
setInterval(change, 3000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}

var text2 = ["Pages", "Keynote"];
var counter2 = 0;
var elem2 = $("#apple");
setInterval(change2, 3000);
function change2() {
    elem2.fadeOut(function(){
        elem2.html(text2[counter2]);
        counter2++;
        if(counter2 >= text2.length) { counter2 = 0; }
        elem2.fadeIn();
    });
}

var text3 = ["CSS", "TailwindCSS", "Bootstrap", "HTML"];
var counter3 = 0;
var elem3 = $("#fEnd");
setInterval(change3, 3000);
function change3() {
    elem3.fadeOut(function(){
        elem3.html(text3[counter3]);
        counter3++;
        if(counter3 >= text3.length) { counter3 = 0; }
        elem3.fadeIn();
    });
}

var text4 = ["Python - Django", "JavaScript"];
var counter4 = 0;
var elem4 = $("#bEnd");
setInterval(change4, 3000);
function change4() {
    elem4.fadeOut(function(){
        elem4.html(text4[counter4]);
        counter4++;
        if(counter4 >= text4.length) { counter4 = 0; }
        elem4.fadeIn();
    });
}