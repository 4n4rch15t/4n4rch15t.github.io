function slideUp() {
    var elem = document.getElementById("lockSreen");
    elem.style.transition = "all 0.5s ease-in-out";
    elem.style.height = "0px";
    setTimeout(function() {document.getElementById("lockScreenImg").style.display='none'},250)
    // setTimeout(function() {
    // //your code to be executed after 1 second
    // var elem = document.getElementById("lockSreen");
    // elem.style.display='none';
    // }, 500);
  }


  function slideDown(){
    var elem = document.getElementById("lockSreen");
    elem.style.transition = "all 0.5s ease-in-out";
    elem.style.height = "100%";
    setTimeout(function() {document.getElementById("lockScreenImg").style.display='block'},0)
  }

function menuButtonAnimation() {
  document.getElementById("menuButton").classList.toggle("change");
  document.getElementById("menu").classList.toggle("noShowMenu")
}

function openWriteUp(ele){
  var openlist = document.getElementsByClassName("writeups")
  for (var i=0;i<openlist.length;i++){
    openlist[i].style.display='none'
  }
  document.getElementById(ele).style.display='flex'
  menuButtonAnimation()
  document.getElementById("dockContent").classList.add("noShowDock")
}

function closeWriteUp(ele){
  document.getElementById(ele).style.display='none'
  document.getElementById("dockContent").classList.remove("noShowDock")
}

function closeAllWriteUps(){
  var openlist = document.getElementsByClassName("writeups")
  for (var i=0;i<openlist.length;i++){
    openlist[i].style.display='none'
  }
  document.getElementById("dockContent").classList.remove("noShowDock")
  document.getElementById("menu").classList.add("noShowMenu")
  document.getElementById("menuButton").classList.remove("change")
}


function openresume(){
  var openlist = document.getElementsByClassName("writeups")
  for (var i=0;i<openlist.length;i++){
    openlist[i].style.display='none'
  }
  document.getElementById("resume").style.display='flex'
}