let lft = document.getElementById("left-place");

let sliding = e => {
    let slide = e.clientX / window.innerWidth * 100;
    lft.style.width = `${slide}%`;
}

document.onmousemove = e => sliding(e);
document.ontouchmove = e => sliding(e.touches[0]);
