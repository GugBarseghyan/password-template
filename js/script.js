const textBox = document.querySelector("#password");
const subBtn = document.querySelector("#subBtn");
const loading = document.querySelector(".length");

textBox.addEventListener("input",  function passWrite(){
    if (textBox.value.length <= 0){
        subBtn.classList.toggle("disable");
        subBtn.classList.remove("active");
        subBtn.value = "write a password";
        loading.style.width = "0%";
        subBtn.style.opacity = "0.2";
    }
    else if(textBox.value.length <= 4){
        subBtn.value = "Easy";
        loading.style.width = "20%";
        loading.style.backgroundColor = "rgb(165, 42, 42)";
        subBtn.style.opacity = "0.4";
        subBtn.classList.remove("active");
        subBtn.classList.toggle("disable");
    } 
    else if(textBox.value.length <= 6){
        subBtn.value = "Normal";
        loading.style.width = "50%";
        subBtn.style.opacity = "0.6";
        loading.style.backgroundColor = "rgb(209, 168, 31)";
        subBtn.classList.remove("disable");
        subBtn.classList.toggle("active");
    } 
    else if(textBox.value.length <= 8){
        subBtn.value = "Strong";
        loading.style.width = "80%";
        subBtn.style.opacity = "0.8";
        loading.style.backgroundColor = "rgb(240, 255, 32)";
        subBtn.classList.remove("disable");
        subBtn.classList.toggle("active");
    }
     else{
        subBtn.value = "Very Strong";
        loading.style.width = "100%";
        subBtn.style.opacity = "1";
        loading.style.backgroundColor = "rgb(39, 255, 32)";
        subBtn.classList.remove("disable");
        subBtn.classList.toggle("active");
    }
}
);