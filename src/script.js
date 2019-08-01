let slider_content = document.getElementById('slider_slide');
let counter_content = document.getElementById('counter');


console.log(slider_content);

let imag = ['a','b', 'c', 'd','e'];

let i = imag.length;

function nextImage(){
    if (i<imag.length) {
        i= i+1;
    }else{
        i = 1;
    }
    slider_content.innerHTML = "<img src = image/"+imag[i-1]+".jpg>";
    counter_content.innerHTML = "<span>1/"+(i)+"</span> <p class=\"counter_text\">Наши клуби</p>";
}

function prewImage(){

    if (i<imag.length+1 && i>1) {
        i= i-1;
    }else{
        i = imag.length;
    }
    slider_content.innerHTML = "<img src=image/"+imag[i-1]+".jpg>";
    counter_content.innerHTML ="<span>1/"+(i)+"</span>";
}

