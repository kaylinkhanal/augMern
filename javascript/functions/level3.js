//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600

const rideDetails = {
  pickup: "balaju",
  destination: "thamel",
  distance: "20km",
  unitKmPrice: 30,
};

const finalPrice = () => {
  return rideDetails.unitKmPrice * parseInt(rideDetails.distance);
};
console.log(finalPrice());
//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 = {
  status: "onTheWay",
};
const status2 = {
  status: "success",
};
const status3 = {
  status: "success",
};
const checkIfSuccess = (obj) => {
  if (obj.status == "success") {
    return true;
  } else {
    return false;
  }
};
console.log(checkIfSuccess(status1));
console.log(checkIfSuccess(status2));
console.log(checkIfSuccess(status3));
// checkIfSucces(status1); //should return false

// checkIfSucces(status2); //should return true
