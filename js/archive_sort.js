<!-- Reverse Sort Archive Menu Blogger Hack --> 
<!-- originally created by Glenn from ROVEBERG.COM -->
<!-- modified by Al Abut on his 29th birthday (2/18/05) -->


function startThisParty(){
	var x = document.getElementById('archivemenu');
	if (!x) return;
	if(x){
		var archives = new Array();
		<BloggerArchives>
			archives[archives.length] = new Array('<$BlogArchiveURL$>', '<$BlogArchiveName$>');
		</BloggerArchives>

		for (var i=archives.length-1;i>=0;i--) {
			document.write('<option value=\"' + archives[i][0] + '\">' + archives[i][1] + '</option>');
		}
	}
}
window.onload = function() {startThisParty();}