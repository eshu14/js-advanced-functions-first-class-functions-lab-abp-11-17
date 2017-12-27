// Code your solution in this file!

const returnFirstTwoDrivers=function (arrDrivers){
  return arrDrivers.slice(0,2);
 };
const returnLastTwoDrivers=function (arrDrivers){
  return arrDrivers.slice(arrDrivers.length-2,arrDrivers.length);
};
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fare){
    return multiplier*fare;
  }
}
const fareDoubler2=createFareMultiplier()();

function fareDoubler(fare)
{
  return fareDoubler2;
}

function fareTripler(fare)
{
  return createFareMultiplier(3);
}
/*function selectDifferentDrivers(arrayOfDrivers, function)
{

}
*/
