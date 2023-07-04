const scenario = {
     murderer: 'Miss Scarlet',
     room: 'Library',
     weapon: 'Rope'
};
  
const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}
  
const verdict = declareMurderer();
console.log(verdict);

//I expect the murderer to be Miss Scarlet, as that's what is being declared within the object, so when the function is called it takes that information from the object using ${scenario.murderer}

const murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
   return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//  The murderer will be Professor Plum as const variables cannot be reassigned, trying to reassign will cause the code to break, so even though there is a function to change the murderer, it will run but go back up to line 18 where the function is being made and will fail, the bottom two lines will never run. 

let murderer = 'Professor Plum';

const declareMurderer = function() {
   let murderer = 'Mrs. Peacock';
   return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// // //the first verdict will be Mrs. Peacock, as firstVerdict has been assigned the declareMurderer function, in which Mrs.Peacock has been assigned the murderer.
// // // Where professor plum has been assigned it is a global scope so anything outside of the function can use it, but cannot be used inside the function

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// //suspect three will be Mrs.Peacock

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

  //The new weapon is the revolver! 
  //as the scenario.weapon was assigned the value of newWeapon, then the function to declare the weapon is returning the newly assigned scenario weapon, which is being called in the final stage and passed in to the function as the 'Revolver', the new declare weapon function is being assigned to verdict, so when we use the method log it print the new weapon

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer will be Mrs.White as the function is being declared inside of the changeMurderer function, 