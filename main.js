// DOM
const gen_btn = document.getElementById("gen_btn");
const copy_btn = document.getElementById("copy_btn");
const input_txt = document.getElementById("input_data");
const output_txt = document.getElementById("output_data");

// function
function generate(){
    output_txt.value = input_txt.value;
}

function cp(){
    output_txt.select();
    document.execCommand("Copy");
}

// eventlistener
gen_btn.addEventListener('click', generate, false);
copy_btn.addEventListener('click', cp, false);