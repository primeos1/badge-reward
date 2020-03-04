init();
//here the value is stored
function myFunction() {
var x=document.getElementById("amounts").value;
document.getElementById("demo").innerHTML=x;
var y =Math.floor (x / 500);

document.getElementById("unedi").value=y;
var a = document.getElementById("uned").value;
var z = (y+a*1);
document.getElementById("uned").value=z;
var d =document.getElementById("inpu").value;
    var c = ((d*1) + (x*1));
    document.getElementById("inpu").value=c;
    if (y>=1)
    {
        alert("congratulation you get  "+ Math.floor(x / 500)+"  points")
    }
  
    else {
        alert("you do not have any reward point")
    }
    document.getElementById('amounts').value=""
}

 y;
