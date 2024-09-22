function getValueById(id) {
    const value = document.getElementById(id).value;
    const number = parseFloat(value);
    return number;
}