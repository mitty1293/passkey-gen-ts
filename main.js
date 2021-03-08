import {generate_hash} from './sha256.js';

// DOM
const gen_btn = document.getElementById("gen_btn");
const copy_btn = document.getElementById("copy_btn");
const input_txt = document.getElementById("input_data");
const output_txt = document.getElementById("output_data");

// eventlistener
gen_btn.addEventListener('click', () => {
    output_txt.value = input_txt.value;
    console.log(generate_hash());
});

copy_btn.addEventListener('click', () => {
    output_txt.select();
    document.execCommand("Copy");
});