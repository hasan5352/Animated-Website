
// Loco motive 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouseFollower(){
    window.addEventListener("mousemove", (event)=>{
        console.log(event.clientX, event.clientY);
        let minicircle = document.querySelector("#minicircle");
        minicircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    })
}

mouseFollower();