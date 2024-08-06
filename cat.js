function buttonOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("heading").textContent = "Switched Off";
    document.getElementById("switchedOff").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchedOn").style.backgroundColor = "#22c55e";

}


function buttonOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("heading").textContent = "Switched On";
    document.getElementById("switchedOff").style.backgroundColor = "#e12d39";
    document.getElementById("switchedOn").style.backgroundColor = "#cbd2d9";

}
