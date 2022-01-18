
function check(string) {
    var filtro = 'abcdefghijklmnñopqrstuvwxyz ';
    var i = 0;
    var continueReading = true
    while (i<string.length && continueReading) {
        if (filtro.indexOf(string[i]) == -1) {
            continueReading = false
        }
        i++
    }
    return continueReading
}

function encrypt() {
    document.getElementById("divResult").hidden = false;
    document.getElementById("titleCardResult").innerHTML = "encrypt message";
    var textToEncrypt = document.getElementById("message").value;
    var encryptedWord = "";
    var i = 0;
    if (check(textToEncrypt)) {
        for (i; i < textToEncrypt.length; i++) {
            encryptedWord += textToEncrypt[i];
            if (textToEncrypt[i] == "e") {
                encryptedWord += "nter";
            }
            if (textToEncrypt[i] == "i") {
                encryptedWord += "mes";
            }
            if (textToEncrypt[i] == "a") {
                encryptedWord += "i";
            }
            if (textToEncrypt[i] == "o") {
                encryptedWord += "ber";
            }
            if (textToEncrypt[i] == "u") {
                encryptedWord += "fat";
            }
        }
        var textArea = document.getElementById("textResult");
        textArea.innerHTML = encryptedWord;
    } else {
        var textArea = document.getElementById("textResult");
        textArea.innerHTML = "you only can use lowercase leters";
    }
}

function decrypt() {
    document.getElementById("divResult").hidden = false;
    document.getElementById("titleCardResult").innerHTML= "decrypted message";
    var textToDecrypt = document.getElementById("message").value;
    var i=0;
    if (check(textToDecrypt)) {
        while (textToDecrypt.indexOf("enter") != -1) {
            textToDecrypt = textToDecrypt.replace("enter", "e");
        }
        while (textToDecrypt.indexOf("imes") != -1) {
            textToDecrypt = textToDecrypt.replace("imes", "i");
        }
        while (textToDecrypt.indexOf("ai") != -1) {
            textToDecrypt = textToDecrypt.replace("ai", "a");
        }
        while (textToDecrypt.indexOf("ober") != -1) {
            textToDecrypt = textToDecrypt.replace("ober", "o");
        }
        while (textToDecrypt.indexOf("ufat") != -1) {
            textToDecrypt = textToDecrypt.replace("ufat", "u");
        }
        var textArea = document.getElementById("textResult");
        textArea.innerHTML = textToDecrypt;
    } else {
        var textArea = document.getElementById("textResult");
        textArea.innerHTML = "you only can use lowercase leters";
    }
}

function copyText() {
    var aux = document.createElement("textarea");
    aux.innerHTML = document.getElementById("textResult").innerHTML;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}