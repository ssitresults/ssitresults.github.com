<!--
//Degined and devoloped by  fazal.C.A 
/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="black";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#3A6D98";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="#ffFFFF";
linkFontColor="white";
linkOverBGColor="#abcdef";
linkTarget="_top";
linkAlign="Left";
barBGColor="#333333";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="QUICK MENU"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["<font color='black' size=2> HOME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </font>", "index.jsp", "_parent"]
ssmItems[2]=["<font color='black'> Institute Profile  </font>", "profile.htm",""]
ssmItems[3]=["<font color='black'>  Management &nbsp; &nbsp; &nbsp; &nbsp; </font>", "mgmt.htm", ""]
ssmItems[4]=["<font color='black'> Joint Secretary </font>", "js.htm", ""]
ssmItems[5]=["<font color='black'>  Courses Offered </font>", "courses.htm", ""]
ssmItems[6]=["<font color='black'>  Central Library </font>", "library.htm", ""]
ssmItems[7]=["<font color='black'> How to Reach</font>", "loc.htm", ""]
ssmItems[8]=["<font color='black'> Photo Gallery </font>", "album.jsp", ""]
ssmItems[9]=["<font color='black'> Contact Us </font>", "feedb.htm", ""]
ssmItems[10]=["<font color='black'> Credits &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </font>", "credits.htm", ""]

ssmItems[11]=["External Links", "", ""] //create header
ssmItems[12]=["<font color='black'> Link Center </font>", "links.htm", ""]

buildMenu();

//-->