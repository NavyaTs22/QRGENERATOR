
let qrcode = new QRCode(document.querySelector(".qrcode"));

qrcode.makeCode("scan me cutie!");

function generateQr() {
    if (
        document.querySelector("input").value === "" ||
        document.querySelector("input").value === " ")
         {
        alert(
            "Input Field Can not be blank!"
        );} 
    else {
        qrcode.makeCode(document.querySelector("input").value);
}}