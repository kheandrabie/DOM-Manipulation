let click= document.getElementById ("signout").onclick = () => {
    alert ("You successfully signed out");
  };

let scroll = window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop >= 100) {
    document.getElementById("myP").className = "test";
    
  } else {
    document.getElementById("myP").className = "bg_navbar";
  }
}

let over = document.getElementById("ul-hover").onmouseover = function() {mouseOver()};
document.getElementById("ul-hover").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("ul-hover").style.color = "red";
}

function mouseOut() {
  document.getElementById("ul-hover").style.color = "white";
}