var i = 0;
var timer;
var path = [];

path[0] = "a.jpg";
path[1] = "b.jpg";
path[2] = "c.jpg";
path[3] = "c.jpg";
function changeImage(){
    document.getElementById("slide").src=path[i];

    if(i < path.length - 1){
        i++;
    }else {
        i = 0;
    }

    timer = setTimeout("changeImage()", 3000);
}

  function stopShow(){
      clearTimeout(timer);
  }

  function runShow() {
      changeImage();
  }

   window.onload = runShow;
