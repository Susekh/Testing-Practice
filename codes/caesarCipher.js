function caesarCipher(string, shift){
    let sArry = string.split('');
    let cipherVar;
    for(let i = 0; i < sArry.length; i++){
        cipherVar = sArry[i].charCodeAt(0);
        if(65<= cipherVar && cipherVar <= 90 || 97<= cipherVar && cipherVar <= 122 ){
            switch(cipherVar){
                case 90:
                    cipherVar = 64 + shift;
                    break;
                case 122:
                    cipherVar = 96 + shift;
                    break;
                default:
                    cipherVar = cipherVar + shift;
            }
        }
        sArry[i] = String.fromCharCode(cipherVar);
    }
    string = sArry.join('');
    return string;
}


export default caesarCipher;



