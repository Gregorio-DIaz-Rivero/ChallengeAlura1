function encrypt(){
    var divResult = document.getElementById("divResult").hidden = false
    var titlecardresult = document.getElementById("titleCardResult").innerHTML= "encrypt message"
    var textToEncrypt = document.getElementById("message").value
    var encryptedWord = ""
    var i=0
    for (i;i<textToEncrypt.length;i++){
        encryptedWord += textToEncrypt[i]
        console.log(textToEncrypt[i])
        if (textToEncrypt[i] =='e') {
            encryptedWord += "nter"
        }
        if (textToEncrypt[i] =='i') {
            encryptedWord += "mes"
        }
        if (textToEncrypt[i] =='a') {
            encryptedWord += 'i'
        }
        if (textToEncrypt[i] =='o') {
            encryptedWord += "ber"
        }
        if (textToEncrypt[i] =='u') {
            encryptedWord += "fat"
        }
    }
    var textArea = document.getElementById("textResult")
    textArea.innerHTML = encryptedWord
}

function decrypt() {
    var divResult = document.getElementById("divResult").hidden = false
    var titlecardresult = document.getElementById("titleCardResult").innerHTML= "decrypted message"
    var textToDecrypt = document.getElementById("message").value
    var i=0
    while (textToDecrypt.indexOf("enter") !=-1){
        textToDecrypt = textToDecrypt.replace("enter", 'e')
    }
    while (textToDecrypt.indexOf("imes") !=-1){
        textToDecrypt = textToDecrypt.replace("imes", 'i')
    }
    while (textToDecrypt.indexOf("ai") !=-1){
        textToDecrypt = textToDecrypt.replace("ai", 'a')
    }
    while (textToDecrypt.indexOf("ober") !=-1){
        textToDecrypt = textToDecrypt.replace("ober", 'o')
    }
    while (textToDecrypt.indexOf("ufat") !=-1){
        textToDecrypt = textToDecrypt.replace("ufat", 'u')
    }

    var textArea = document.getElementById("textResult")
    textArea.innerHTML = textToDecrypt
}