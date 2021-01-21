//github repo link-

//kilometer to meter conversion function
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var kilometer10 = kilometerToMeter(10);
console.log(kilometer10);

//budgetCalculator function
function budgetCalculator(clock, phone, laptop) {
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = clockPrice + phonePrice + laptopPrice;
    return totalBudget;
}
var myBudget = budgetCalculator(3, 4, 2);
console.log(myBudget);

//hotelCost function
function hotelCost(totalDays) {
    var totalRent = 0;
    if (totalDays <= 10) {
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