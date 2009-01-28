<link id="basicstyle" rel="stylesheet" media="all" type="text/css" href="basic.css" />
 <link id="normalscreen" rel="alternate stylesheet" media="screen" type="text/css" href="norm.css" />
 <link id="widescreen" rel="alternate stylesheet" media="screen" type="text/css" href="wide.css" />

<script type="text/javascript"><!Ñ
 function detectMinWidth()
 {
 ÊÊif (window.screen && window.screen.width >= 800)
 ÊÊ{
 ÊÊÊvar smallsheet = document.getElementById("smallscreen");
 ÊÊÊif (smallsheet && smallsheet.setAttribute)
 	{
 		smallsheet.setAttribute("rel", "stylesheet");
 		smallsheet.setAttribute("media", "screen");
 	}
 ÊÊ}
 }
 if (window.addEventListener) window.addEventListener("load", detectMinWidth, false);
 else window.onload = detectMinWidth;
 //Ñ></script>
 
 
 
 function checkBrowserWidth()
{
	var theWidth = getBrowserWidth();

	if (theWidth > 800)
	{
		setStylesheet("Features 1024 x 768");
		
		setColumnHeights();
	}
	else
	{
		setStylesheet("Features");
		
		setColumnHeights("auto");
	}
	
	return true;
}
