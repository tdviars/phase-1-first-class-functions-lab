const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function (number1){
        return number1 * number
    }
}

function fareDoubler(number){
    return number * 2
}

function fareTripler(number){
    return number * 3
}

function selectDifferentDrivers(array, funct){
    return funct(array)
}