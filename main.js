import {computeHash} from './compute_hash.js';
//const hash = require('./compute_hash');

// DOM
const gen_btn = document.getElementById("gen_btn");
const copy_btn = document.getElementById("copy_btn");
const input_txt = document.getElementById("input_data");
const output_txt = document.getElementById("output_data");

// eventlistener
gen_btn.addEventListener('click', () => {
    output_txt.value = computeHash(input_txt.value);
    //output_txt.value = hash.computeHash(input_txt.value);
});

copy_btn.addEventListener('click', () => {
    output_txt.select();
    document.execCommand("Copy");
});