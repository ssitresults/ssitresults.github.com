// JavaScript Document

//xZXZXZ
//Contents for menu 1
var menu1=new Array()
menu1[0]='<a href="library.htm" style="font-weight:normal;color:#000000;"> Library & Info Centre</a>'
menu1[1]='<a href="gmedic.htm" style="font-weight:normal;color:#000000;">G-MEDIC & STEP</a>'
menu1[2]='<a href="distant.htm" style="font-weight:normal;color:#000000;">Distance Education </a>'
menu1[3]='<a href="sscms.htm" style="font-weight:normal;color:#000000;">Center for Media Studies</a>'
menu1[4]='<a href="health.htm" style="font-weight:normal;color:#000000;">Health Center</a>'

//Contents for menu 2, and so on
var menu2=new Array()
menu2[0]='<a href="mca.htm" style="font-weight:normal;color:#000000;">M.C.A  Department</a>'
menu2[1]='<a href="civil.htm" style="font-weight:normal;color:#000000;">Civil Engineering</a>'
menu2[2]='<a href="chemistry.htm" style="font-weight:normal;color:#000000;">Chemistry Department</a>'
menu2[3]='<a href="cse.htm" style="font-weight:normal;color:#000000;">Computer Science</a>'
menu2[4]='<a href="eee.htm" style="font-weight:normal;color:#000000;">Electrical & Electronics</a>'
menu2[5]='<a href="ece.htm" style="font-weight:normal;color:#000000;">Electronics & Commn.</a>'
menu2[6]='<a href="inds.htm" style="font-weight:normal;color:#000000;">Industrial Eng & Mngmt</a>'
menu2[7]='<a href="ifs.htm" style="font-weight:normal;color:#000000;">Information Science</a>'
menu2[8]='<a href="maths.htm" style="font-weight:normal;color:#000000;">Mathematics Department</a>'
menu2[9]='<a href="mech.htm" style="font-weight:normal;color:#000000;">Mechanical Eng</a>'
menu2[10]='<a href="mee.htm" style="font-weight:normal;color:#000000;">Medical Electronics</a>'
menu2[11]='<a href="physics.htm" style="font-weight:normal;color:#000000;">Physics Department</a>'
menu2[12]='<a href="tce.htm" style="font-weight:normal;color:#000000;">Tele-Communcation</a>'

var menu3=new Array()
menu3[0]='<a href="secretary.htm" style="font-weight:normal;color:#000000;">Secretary</a>'
menu3[1]='<a href="js.htm" style="font-weight:normal;color:#000000;">Joint Secretary</a>'
menu3[2]='<a href="ao.htm" style="font-weight:normal;color:#000000;">Administrative Officer</a>'
menu3[3]='<a href="principal.htm" style="font-weight:normal;color:#000000;">Principal</a>'
menu3[4]='<a href="vp.htm" style="font-weight:normal;color:#000000;">Vice Principal</a>'



var menu4=new Array()
menu4[0]='<a href="./alumni/alumnihome.jsp" style="font-weight:normal;color:#000000;">Alumni Association</a>'
menu4[1]='<a href="cultu.htm" style="font-weight:normal;color:#000000;">Cultural Activities</a>'
menu4[2]='<a href="ncc.htm" style="font-weight:normal;color:#000000;">National Cadet Corps</a>'
menu4[3]='<a href="nss.htm" style="font-weight:normal;color:#000000;">National Service Scheme</a>'
menu4[4]='<a href="sports.htm" style="font-weight:normal;color:#000000;">Sports Activities</a>'
menu4[5]='<a href="varsity.htm" style="font-weight:normal;color:#000000;">Varsity Circle</a>'

var menu5=new Array()
menu5[0]='<a href="contacts.htm" style="font-weight:normal;color:#000000;">Contacts</a>'
menu5[1]='<a href="tele.htm" style="font-weight:normal;color:#000000;">Telephone Directory</a>'
menu5[2]='<a href="guest.jsp?id=1st" style="font-weight:normal;color:#000000;">Guest Book</a>'
menu5[3]='<a href="credits.htm" style="font-weight:normal;color:#000000;">Credits</a>'
menu5[4]='<a href="feedb.htm" style="font-weight:normal;color:#000000;">Write to webmaster</a>'
        

var menu6=new Array()
menu6[0]='<a href="profile.htm" style="font-weight:normal;color:#000000;"> Profile of the Institution</a>'
menu6[1]='<a href="mgmt.htm" style="font-weight:normal;color:#000000;"> Management</a>'
menu6[2]='<a href="courses.htm" style="font-weight:normal;color:#000000;">Courses Offered</a>'
menu6[3]='<a href="facilities.htm" style="font-weight:normal;color:#000000;">Facilities</a>'
	
var menuwidth='165px' //default menu width
var menubgcolor='#ffffff'  //menu bgcolor
var disappeardelay=250  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick="yes" //hide menu when user clicks within menu?

/////No further editting needed

var ie4=document.all
var ns6=document.getElementById&&!document.all

if (ie4||ns6)
document.write('<div id="dropmenudiv" style="visibility:hidden;width:'+menuwidth+';background-color:'+menubgcolor+'" onMouseover="clearhidemenu()" onMouseout="dynamichide(event)"></div>')

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}


function showhide(obj, e, visible, hidden, menuwidth){
if (ie4||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (menuwidth!=""){
dropmenuobj.widthobj=dropmenuobj.style
dropmenuobj.widthobj.width=menuwidth
}
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie4 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var topedge=ie4 && !window.opera? iecompattest().scrollTop : window.pageYOffset
var windowedge=ie4 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure){ //move up?
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
if ((dropmenuobj.y-topedge)<dropmenuobj.contentmeasure) //up no good either?
edgeoffset=dropmenuobj.y+obj.offsetHeight-topedge
}
}
return edgeoffset
}
function populatemenu(what){
if (ie4||ns6)
dropmenuobj.innerHTML=what.join("")
}

function dropdownmenu(obj, e, menucontents, menuwidth)
{
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
clearhidemenu()
dropmenuobj=document.getElementById? document.getElementById("dropmenudiv") : dropmenudiv
populatemenu(menucontents)

if (ie4||ns6){
showhide(dropmenuobj.style, e, "visible", "hidden", menuwidth)
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}

return clickreturnvalue()
}

function clickreturnvalue(){
if (ie4||ns6) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie4&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function hidemenu(e){
if (typeof dropmenuobj!="undefined"){
if (ie4||ns6)
dropmenuobj.style.visibility="hidden"
}
}

function delayhidemenu(){
if (ie4||ns6)
delayhide=setTimeout("hidemenu()",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

if (hidemenu_onclick=="yes")
document.onclick=hidemenu







