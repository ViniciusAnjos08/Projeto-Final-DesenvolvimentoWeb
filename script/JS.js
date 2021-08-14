const obj_img1_1 = document.querySelector('#album1-1')
const obj_img2_1 = document.querySelector('#album2-1')
const obj_img3_1 = document.querySelector('#album3-1')
const obj_img4_1 = document.querySelector('#album4-1')

const obj_img1_2 = document.querySelector('#album1-2')
const obj_img2_2 = document.querySelector('#album2-2')
const obj_img3_2 = document.querySelector('#album3-2')
const obj_img4_2 = document.querySelector('#album4-2')

const obj_img1_3 = document.querySelector('#album1-3')
const obj_img2_3 = document.querySelector('#album2-3')
const obj_img3_3 = document.querySelector('#album3-3')
const obj_img4_3 = document.querySelector('#album4-3')

const obj_img1_4 = document.querySelector('#album1-4')
const obj_img2_4 = document.querySelector('#album2-4')
const obj_img3_4 = document.querySelector('#album3-4')
const obj_img4_4 = document.querySelector('#album4-4')



obj_img1_1.addEventListener('click', Fun1)
obj_img2_1.addEventListener('click', Fun2)
obj_img3_1.addEventListener('click', Fun3)
obj_img4_1.addEventListener('click', Fun4)

obj_img1_2.addEventListener('click', Fun5)
obj_img2_2.addEventListener('click', Fun6)
obj_img3_2.addEventListener('click', Fun7)
obj_img4_2.addEventListener('click', Fun8)

obj_img1_3.addEventListener('click', Fun9)
obj_img2_3.addEventListener('click', Fun10)
obj_img3_3.addEventListener('click', Fun11)
obj_img4_3.addEventListener('click', Fun12)

obj_img1_4.addEventListener('click', Fun13)
obj_img2_4.addEventListener('click', Fun14)
obj_img3_4.addEventListener('click', Fun15)
obj_img4_4.addEventListener('click', Fun16)

function Fun1(){
    document.getElementById("img1").src="style/p1.png";
}

function Fun2(){
    document.getElementById("img1").src="style/i1.png";
}

function Fun3(){
    document.getElementById("img1").src="style/m1.png";
}

function Fun4(){
    document.getElementById("img1").src="style/d1.png";
}


function Fun5(){
    document.getElementById("img2").src="style/p2.png";
}

function Fun6(){
    document.getElementById("img2").src="style/i2.png";
}

function Fun7(){
    document.getElementById("img2").src="style/m2.png";
}

function Fun8(){
    document.getElementById("img2").src="style/d2.png";
}



function Fun9(){
    document.getElementById("img3").src="style/p3.png";
}

function Fun10(){
    document.getElementById("img3").src="style/i3.png";
}

function Fun11(){
    document.getElementById("img3").src="style/m3.png";
}

function Fun12(){
    document.getElementById("img3").src="style/d3.png";
}



function Fun13(){
    document.getElementById("img4").src="style/p4.png";
}

function Fun14(){
    document.getElementById("img4").src="style/i4.png";
}

function Fun15(){
    document.getElementById("img4").src="style/m4.png";
}

function Fun16(){
    document.getElementById("img4").src="style/d4.png";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}