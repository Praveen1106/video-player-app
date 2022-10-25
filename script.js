
function func() { 
    var vid2 = document.getElementById("b1");
    vid2.style.visibility = "visible"

    var vid3 = document.getElementById("b2");
    vid3.style.visibility = "visible"

    var google = document.getElementById("b3");
    google.style.visibility = "visible"
  } 

function myFunction() { 
    var vid = document.getElementById("v1")
    var times = vid.duration;
    
    const myTimeout = setTimeout(func, (times *1000/2 ));
  } 


//   (times*1000/20)

function playV2(){
    var vid = document.getElementById("v1")
    vid.setAttribute('src', '/videos/V2.mp4')
    document.getElementById("b1").style.visibility = "hidden"
    document.getElementById("b2").style.visibility = "hidden"
    document.getElementById("b3").style.visibility = "hidden"

  }



function playV3(){
    var vid = document.getElementById("v1")
    vid.setAttribute('src', '/videos/V3.mp4')
    document.getElementById("b1").style.visibility = "hidden"
    document.getElementById("b2").style.visibility = "hidden"
    document.getElementById("b3").style.visibility = "hidden"

  }