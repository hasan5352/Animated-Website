
// Loco motive 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeou
function mouseFollower(xscale, yscale){
    window.addEventListener("mousemove", (event)=>{
        document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
    })
}
function skewMouseFollower (){
    // default values
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;
    window.addEventListener("mousemove", (event)=>{
        
        xscale = gsap.utils.clamp(.8,1.2,event.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,event.clientY - yprev);

        xprev = event.clientX;
        yprev = event.clientY;

        mouseFollower(xscale, yscale);

        // let timeout = setTimeout(function(){
        //     document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(1, 1)`;
        // }, 100)
        // clearTimeout(timeout);

    })
}

function page1Animate(){
    let timeline = gsap.timeline();
    timeline.from("#nav",{
        y: -10,
        opacity:0,
        ease: Expo.easeInOut,
        duration: 2
    }) .from("#home-footer",{
        y: -10,
        opacity:0,
        ease: Expo.easeInOut,
        duration: 2
    }, "<") .to(".boundel",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
    }, "<") 
}

document.querySelectorAll(".elem").forEach((elem)=>{
    let rotate = 0;
    let diff = 0;

    elem.addEventListener("mouseleave", (event)=>{
        let img = elem.querySelector("img");
        gsap.to(img, {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        })
    })

    elem.addEventListener("mousemove", (event)=>{
        let img = elem.querySelector("img");
        let rect = elem.getBoundingClientRect();
        diff = event.clientX - rotate;
        rotate = event.clientX;

        gsap.to(img, {
            opacity: 1,
            ease: Power3,
            top: Math.max(-20, Math.min(event.clientY - rect.top - img.offsetHeight/2, rect.height - img.offsetHeight)),
            left : Math.max(0, Math.min(event.clientX - rect.left - img.offsetWidth/2, rect.width - img.offsetWidth)),
            rotate: gsap.utils.clamp(-20,20,diff),
        })
    })
});

skewMouseFollower();
page1Animate();
