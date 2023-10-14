function reverseString(string){
    if(string.length === 0){
        return '';
    }
    return string.split('').reverse().join('');

}
export default reverseString;