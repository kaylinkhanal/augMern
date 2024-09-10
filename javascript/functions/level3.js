//Q1. write a js function that  can  calculates the final price---------------
// formula is distance multiply unitKmPrice
//expected output is 600

const rideDetails = {
  pickup: "balaju",
  destination: "thamel",
  distance: "20km",
  unitKmPrice: 30,
};
distanceNum = parseInt(rideDetails.distance);
console.log(distanceNum);

const totalFair = (km, perKm) => {
  return km * perKm;
};
console.log(totalFair(distanceNum, rideDetails.unitKmPrice));

//-----------------------------------------------------------------------

//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 = {
  status: "onTheWay",
};
const status2 = {
  status: "success",
};
const checkIfSucces = (statusCondition) => {
  //write your code here

  if (statusCondition === "success") return true;
  return false;
};

console.log(checkIfSucces(status1.status)); //should return false

console.log(checkIfSucces(status2.status)); //should return true
