<!--
var nummidi=3
day=new Date()
seed=day.getTime()
ran=parseInt(((seed-(parseInt(seed/1000,10)*1000))/10)/100*nummidi+1,10)
if(ran==(1))
jpg=("img/library.jpg")
if(ran==(2))
jpg=("img/library.gif")
if(ran==(3))
jpg=("img/library2.jpg")
document.write('<IMG border=1 SRC="'+jpg+'">')
//-->