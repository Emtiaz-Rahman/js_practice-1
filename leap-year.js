function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }

}
let myYear = 2087;
myYear = 2022;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year:', isMyYearLeapYear);