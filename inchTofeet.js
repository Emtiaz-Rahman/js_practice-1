function milesTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var merathon = milesTokilometer(26.2);
console.log('merathon in km:', merathon);



function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}
var result = inchTofeet(242);
console.log('result:', result);
