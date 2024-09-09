//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600
const rideDetails = {
  pickup: "balaju",
  destination: "thamel",
  distance: "20km",
  unitKmPrice: 30,
};
const calcPrice = () => {
  return rideDetails.unitKmPrice * parseInt(rideDetails.distance);
};
console.log(calcPrice());







//Q2 write a js function that checks if the object has status success or not
//should return true or false
const status1 = {
  status: "onTheWay",
};
const status2 = {
  status: "success",
};
const checkIfSucces = (obj) => {
  //write your code here
  if (obj.status === "success") return true;
  return false;
};
console.log(checkIfSucces(status1));//should return false
console.log(checkIfSucces(status2)); //should return true
