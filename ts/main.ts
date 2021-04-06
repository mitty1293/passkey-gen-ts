import {computeHash} from './compute_hash';

// DOM
const gen_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("gen_btn");
const copy_btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("copy_btn");
const input_txt: HTMLInputElement = <HTMLInputElement>document.getElementById("input_data");
const output_txt: HTMLInputElement = <HTMLInputElement>document.getElementById("output_data");

// eventlistener
gen_btn.addEventListener('click', () => {
    output_txt.value = computeHash(input_txt.value);
});

copy_btn.addEventListener('click', () => {
    output_txt.select();
    document.execCommand("Copy");
});