<link id="basicstyle" rel="stylesheet" media="all" type="text/css" href="basic.css" />
 <link id="normalscreen" rel="alternate stylesheet" media="screen" type="text/css" href="norm.css" />
 <link id="widescreen" rel="alternate stylesheet" media="screen" type="text/css" href="wide.css" />

<script type="text/javascript"><!�
 function detectMinWidth()
 {
 ��if (window.screen && window.screen.width >= 800)
 ��{
 ���var smallsheet = document.getElementById("smallscreen");
 ���if (smallsheet && smallsheet.setAttribute)
 	{
 		smallsheet.setAttribute("rel", "stylesheet");
 		smallsheet.setAttribute("media", "screen");
 	}
 ��}
 }
 if (window.addEventListener) window.addEventListener("load", detectMinWidth, false);
 else window.onload = detectMinWidth;
 //�></script>
 
 
 
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
