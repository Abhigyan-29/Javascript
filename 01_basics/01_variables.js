// const means the valuea are locked
const accountId =  144553
// variables can be declared in two ways... let and var . But we use let. 
let accountEmail = "abhigyan@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Jaipur"
//  accountId = 2  // not allowed
 console.log(accountId);
 accountEmail = "hello@gmail.com"
 accountPassword = "5678"
  accountCity = "ranchi"
  console.table([accountId,accountEmail,accountPassword,accountCity,accountState ])
  /*
  prefer not to use var
  because of issue in block scope and functional scope
  */