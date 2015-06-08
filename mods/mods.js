if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	changeCSS("modsmobile.css");
	viewport = document.querySelector("meta[name=viewport]");
	viewport.setAttribute('content', 'width=device-width; initial-scale=2.0; maximum-scale=2.0; user-scalable=0;');
}
function changeCSS(cssFile) {
	var link = document.querySelector("link[rel=stylesheet]");
	link.setAttribute("href", cssFile);
}