
var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    console.log(dets.x);
    // console.log(dets.y);
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrblur.style.left = dets.x - 250 + "px"
    crsrblur.style.top = dets.y - 250 + "px"
})



gsap.to(".nav", {
    backgroundColor: "rgb(67, 70, 69)",
    duration: 0.5,
    // height: "110",
    height: "80",
    scrollTrigger: {

        trigger: ".nav",

        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -50%",
        scrub: 1
    }



})


gsap.to(".main", {
    // backgroundColor: "rgb(60, 70, 69)",
    backgroundColor: "rgb(162, 163, 163)",
    // backgroundColor: 'red',
    
    blur: 10,
    // opacity:1,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2

    }

})


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
