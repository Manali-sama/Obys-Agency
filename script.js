function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

function cursorAnime(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1
    });

    var videoBox = document.querySelector("#vid-container")
    var video = document.querySelector("#vid-container video")
    videoBox.addEventListener("mouseenter", function(){
        videoBox.addEventListener("mousemove", function(dets){
            gsap.to(".mousefollower",{
                opacity: 0
            })
            gsap.to("#vid-cursor",{
                left: dets.x - 500,
                top: dets.y - 200
            })
        })
    })
    videoBox.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower",{
            opacity: 1
        })
        gsap.to("#vid-cursor",{
            left: "70%",
            top: "-10%"
        })
    })
    var flag = 0
    videoBox.addEventListener("click", function(){
        if(flag == 0){
            video.play()
        video.style.opacity = 1
        document.querySelector("#vid-cursor").innerHTML = `<i class="ri-pause-fill"></i>`
        gsap.to("#vid-cursor",{
            scale: 0.5
        })
        flag = 1
        }
        else{
            video.pause()
            video.style.opacity = 0
            document.querySelector("#vid-cursor").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#vid-cursor",{
                scale: 1
            })
            flag = 0
        }
    })
}

function gsapAnime(){
    var tl = gsap.timeline()
tl.from(".heading h1",{
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})

tl.from("#counter h4 , #counter h5",{
    opacity: 0,
    onStart: function(){
        var h4 = document.querySelector("#counter h4")
var count = 0
var timer = setInterval(() => {
    if(count<100){
        count++
        h4.textContent = count 
    }
}, 27);
    }
})

tl.to("#loader",{
    opacity: 0,
    duration: 0.4,
    delay: 2.7
})

tl.from("#page1",{
    y: 160,
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    ease: Power4
})

tl.to("#loader",{
    display: "none"
})

tl.from("nav .links h3",{
    opacity: 0
})

tl.from("#one h1, #two h1,#three span, #three h3, #four h1",{
    y: 160,
    stagger: 0.2
})
}

function sheryAnime(){
    Shery.makeMagnet("nav .links h3, nav .menubar" /* Element to target.*/, {});

Shery.imageEffect(".img-container",{
    style: 5,
    config: {"a":{"value":2.29,"range":[0,30]},"b":{"value":-0.54,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7666557722625823},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.53,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}},
    gooey: true
})
}

function flagAnime(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#flag",{
            left: dets.x,
            top: dets.y
        })
    })
    var three = document.querySelector("#three")
    three.addEventListener("mouseenter", function(){
        gsap.to("#flag", {
            opacity: 1
        })
    })
    three.addEventListener("mouseleave", function(){
        gsap.to("#flag", {
            opacity: 0
        })
    })
}

function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("footer h1").innerHTML = clutter
    document.querySelector("footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("footer h2").innerHTML = clutter2
  
  
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      gsap.to("footer h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      gsap.to("footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
  
      })
      gsap.to("footer h2 span", {
        opacity: 0,
        stagger: 0.05
      })
    })
  }

locoscroll();
cursorAnime();
gsapAnime();
sheryAnime();
flagAnime();
footerAnimation();
