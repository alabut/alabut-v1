						document.write('<option selected=\"selected\"\"> Archives </option>');

					var archives = new Array();
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_04_01_index.html', '04/01/2003 - 04/30/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_05_01_index.html', '05/01/2003 - 05/31/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_06_01_index.html', '06/01/2003 - 06/30/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_07_01_index.html', '07/01/2003 - 07/31/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_08_01_index.html', '08/01/2003 - 08/31/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_09_01_index.html', '09/01/2003 - 09/30/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2003_10_01_index.html', '10/01/2003 - 10/31/2003');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_01_01_index.html', '01/01/2004 - 01/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_02_01_index.html', '02/01/2004 - 02/29/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_04_01_index.html', '04/01/2004 - 04/30/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_05_01_index.html', '05/01/2004 - 05/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_06_01_index.html', '06/01/2004 - 06/30/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_07_01_index.html', '07/01/2004 - 07/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_08_01_index.html', '08/01/2004 - 08/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_09_01_index.html', '09/01/2004 - 09/30/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_10_01_index.html', '10/01/2004 - 10/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_11_01_index.html', '11/01/2004 - 11/30/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2004_12_01_index.html', '12/01/2004 - 12/31/2004');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2005_01_01_index.html', '01/01/2005 - 01/31/2005');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2005_02_01_index.html', '02/01/2005 - 02/28/2005');
					
						archives[archives.length] = new Array('http://alabut.com/nonsense/archive/2005_03_01_index.html', '03/01/2005 - 03/31/2005');
					

					for (var i=archives.length-1;i>=0;i--) {
						document.write('<option value=\"' + archives[i][0] + '\">' + archives[i][1] + '</option>');
					}