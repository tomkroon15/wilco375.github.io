if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	changeCSS("downloadsmobile.css");
	viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;');
}
function changeCSS(cssFile) {
	var link = document.querySelector("link[rel=stylesheet]");
	link.setAttribute("href", cssFile);
}