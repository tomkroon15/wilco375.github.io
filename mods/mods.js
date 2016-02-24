function adBlockNotDetected() {
}

function adBlockDetected() {
    alert("AdBlock was detected. Please consider supporting me and my work by disabling AdBlock or adding this website to an exception filter");
}

if(typeof fuckAdBlock === "undefined") {
    adBlockDetected();
} else {
    fuckAdBlock.onDetected(adBlockDetected);
    fuckAdBlock.onNotDetected(adBlockNotDetected);
    fuckAdBlock.on(true, adBlockDetected);
    fuckAdBlock.on(false, adBlockNotDetected);
}

function onMobileNavbarClick(){
	var navbar = document.getElementById("navigation_bar");
	if(navbar.style.display == "none"){
		navbar.style.display =  "block";
	}else{
		navbar.style.display =  "none";
	}
}
