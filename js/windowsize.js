function checkBrowserWidth()
{
	var theWidth = getBrowserWidth();
	// alert("the width = " + theWidth);
	var smallsheet = document.getElementById("smallscreen");
	if (theWidth > 850)
	{
 		smallsheet.setAttribute("media", "none");
 		smallsheet.setAttribute("rel", "alternate stylesheet");
	}
	else
	{
 		smallsheet.setAttribute("media", "screen");
 		smallsheet.setAttribute("rel", "stylesheet");
	}
}
 
 

function getBrowserWidth()
{
	if (window.innerWidth)
	{
		// alert("the window.innerWidth = " + window.innerWidth);
		return window.innerWidth;
	}
	else if (document.documentElement.clientWidth && (document.documentElement.clientWidth != 0))
	{
		// alert("the document.documentElement.clientWidth = " + document.documentElement.clientWidth);
		return document.documentElement.clientWidth;
	}
	else if (document.body.clientWidth)
	{
		// alert("the document.body.clientWidth = " + document.body.clientWidth);
		return document.body.clientWidth;
	}
	else
	{
		// alert("the width cannot be determined");
		return 0;
	}
}



// window.onload = function() {checkBrowserWidth();}
// onload takes too damn long and flash some of the unstyled content sometimes - yuck