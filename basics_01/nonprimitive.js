const username = {
    firstname : "Samrat",
    id : 1234,
    location : "Garhbeta",
    isLoggedIn : true 
};

username.firstname = "Shreya"; // in object the referrence to the memory location is constant but you can actually change the value in key of the objects even if the variable is declared as a constant

/*
  if a object is declared as a constant , that does not mean that the values in the keys cant be changed
  it actually means that the memory location that the object is having is fixed but the values 
   in the object keys are actually mutable

   like it is shown in the username.firstname key " the value is changed to Shreya from Samrat"
*/

username.lastname = "Sarkar"; //you can insert new key with a value in the object even if it is not there initially while declaration

// console.log(username.location);
// console.log(username.firstname);
// console.log(username.lastname);
// console.log(username.id);
// console.log(typeof username);

console.log(username);


