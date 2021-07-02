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
    } else {
      entry.target.classList.remove("animate-fadeInRight");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});



const callback2 = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeInUp");
    } else {
      entry.target.classList.remove("animate-fadeInUp");
    }
  });
};

const observer2 = new IntersectionObserver(callback2);

const targets2 = document.querySelectorAll(".js-scroll-up");
targets2.forEach(function (target) {
  target.classList.add("opacity-0");
  observer2.observe(target);
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