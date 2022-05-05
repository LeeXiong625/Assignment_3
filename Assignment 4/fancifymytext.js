function bigger(){
    var words = document.getElementById("words");
    words.style.fontSize="24pt";
}

function fancy(){
    var words = document.getElementById("words");
    
    if(document.getElementById("FancyShmancy").checked){
        words.style.fontWeight = 'bold';
        words.style.color = 'blue';
        words.style.textDecoration = 'underline';
    }else if(document.getElementById("BoringBetty").checked){
        words.style.fontWeight = 'normal';
        words.style.color = 'black';
        words.style.textDecoration = 'none';
    }
}

function moo(){
    var words = document.getElementById("words");
    var parts = words.value.split(".");
    words.value = parts.join("-Moo.");
}
