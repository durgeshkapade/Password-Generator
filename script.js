
const capitalChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallChar =   'abcdefghijklmnopqrstuvwxyz';
const specialChar = '!@#$%^&*()_+{|}/:<>,.?';
const numChar  = '0123456789';


var isUppercase ,isLowercase,isNumber,isSymbol;
// option code 
document.querySelector('.options').addEventListener('click',()=>{
    isUppercase = document.querySelector('#uppercase').checked;
    isLowercase = document.querySelector('#lowercase').checked;
    isNumber = document.querySelector('#numbers').checked;
    isSymbol = document.querySelector('#symbols').checked;

});


var length;
document.querySelector('.slider').addEventListener('click', () => {
    // fetch the length of slider
    length = document.querySelector(".length_number").innerText;

});

function generate(Range){
    var password = '';
    for (var i = 0; i < length; i++) {
        var r = Math.floor(Math.random() * Range.length);
        password += Range[r];
    }
    if(password == ''){
        document.querySelector('#password').value = "Define any one of the following";
    }else{
        document.querySelector('#password').value = password;
    }
}

document.querySelector('#generate').addEventListener('click', () => {
    let Range = '';
    if(isUppercase){
        Range += capitalChar;
    }
    if(isLowercase){
        Range += smallChar;
    }
    if(isNumber){
        Range += numChar;
    }
    if(isSymbol){
        Range += specialChar;
    }
    generate(Range);
});






