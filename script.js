var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 9000);
}



function abrirf1() {
    document.getElementById("abrirfecharf1").style.display = "block";
    document.getElementById("abrirfecharf2").style.display = "none";
    document.getElementById("abrirfecharf3").style.display = "none";
    document.getElementById("abrirfecharf4").style.display = "none";
}


function fecharf1() {
    document.getElementById("abrirfecharf1").style.display = "none";
}


function abrirf2() {
    document.getElementById("abrirfecharf2").style.display = "block";
    document.getElementById("abrirfecharf1").style.display = "none";
    document.getElementById("abrirfecharf3").style.display = "none";
    document.getElementById("abrirfecharf4").style.display = "none";
}


function fecharf2() {
    document.getElementById("abrirfecharf2").style.display = "none";
}

function abrirf3() {
    document.getElementById("abrirfecharf3").style.display = "block";
    document.getElementById("abrirfecharf1").style.display = "none";
    document.getElementById("abrirfecharf2").style.display = "none";
    document.getElementById("abrirfecharf4").style.display = "none";
}


function fecharf3() {
    document.getElementById("abrirfecharf3").style.display = "none";
}

function abrirf4() {
    document.getElementById("abrirfecharf4").style.display = "block";
    document.getElementById("abrirfecharf1").style.display = "none";
    document.getElementById("abrirfecharf2").style.display = "none";
    document.getElementById("abrirfecharf3").style.display = "none";
}


function fecharf4() {
    document.getElementById("abrirfecharf4").style.display = "none";
}