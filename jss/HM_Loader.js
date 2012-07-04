/*HM_Loader.js
* Developed by  Fazal
*/
 
//title scroll begin

var repeat=10 //enter 0 to not repeat scrolling after 1 run, othersise, enter 1

//var title=document.title
var title="*Welcome to the Official  Website of S.S.I.T Tumkur                   *"

var leng=title.length

var start=1

function titlemove() {

  titl=title.substring(start, leng) + title.substring(0, start)

 //document.title=titl
 window.status= "Sri Siddhartha Institute of Technology, Tumkur "
  start++

  if (start==leng+1) {

    start=0

    if (repeat==0)

    return

  }

  setTimeout("titlemove()",140)

}

if (document.title)

titlemove()
//end title

