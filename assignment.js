// https://github.com/motiullahsajit/assignment.js

//kilometerToMeter conversion function
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Please Enter A Positive Value";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var kilometer10 = kilometerToMeter(10);
console.log(kilometer10);
var negativeValue = kilometerToMeter(-5);
console.log(negativeValue);

//budgetCalculator function
function budgetCalculator(clock, phone, laptop) {
    if (clock < 0) {
        return "Please Enter A Valid Value"
    }
    else if (phone < 0) {
        return "Please Enter A Valid Value"
    }
    else if (laptop < 0) {
        return "Please Enter A Valid Value"
    }
    else {
        var clockPrice = clock * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalBudget = clockPrice + phonePrice + laptopPrice;
        return totalBudget;
    }
}
var myBudget = budgetCalculator(4, 4, 4);
console.log(myBudget);
var invalid = budgetCalculator(3, 4, -2);
console.log(invalid);

//hotelCost function
function hotelCost(totalDays) {
    var totalRent = 0;
    if (totalDays < 0) {
        return "Please give a valid input"
    }
    else if (totalDays <= 10) {
        totalRent = totalDays * 100;
    }
    else if (totalDays <= 20) {
        var first10Days = 10 * 100;
        var otherDays = totalDays - 10;
        var after10Days = otherDays * 80;
        totalRent = first10Days + after10Days;
    }
    else {
        var first10Days = 10 * 100;
        var after10Days = 10 * 80;
        var otherDays = totalDays - 20;
        var after20Days = otherDays * 50;
        totalRent = first10Days + after10Days + after20Days;
    }
    return totalRent;
}
var myHotelRent = hotelCost(27);
console.log(myHotelRent);
var hotelRent = hotelCost(-7);
console.log(hotelRent);

//megaFriend function
var string = ['Jamal', 'Kafi', 'Mahmudur', 'Srabon'];
function megaFriend(string) {
    if (string == 0) {
        return "Please give a input"
    }
    else {
        var megaName = string[0];
        for (var i = 0; i < string.length; i++) {
            var element = string[i];
            if (element.length > megaName.length) {
                megaName = element;
            }
        }
        return megaName;
    }
}
var result = megaFriend(string);
console.log(result);
var result2 = megaFriend(['Jamal', 'Kafi', 'Srabonti', 'Mahmudur']);
console.log(result2);