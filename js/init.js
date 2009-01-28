checkBrowserWidth();
window.onresize = checkBrowserWidth;
if(window.onresize){
	window.onresize = checkBrowserWidth;
	// alert("window resizing works as it should!");
} else {
	// alert("resizing the window doesn't work!");
}

function WindowOnload(f) {
    var prev=window.onload;
        window.onload=function(){ if(prev)prev(); f(); }
}

// WindowOnload(initTiki);
