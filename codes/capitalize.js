const capitalize = (string) => {
    if (string.length === 0){
        return ''
    }
    const cap = string.toLowerCase();
    return cap.charAt(0).toUpperCase() + cap.slice(1);
}

export default capitalize;