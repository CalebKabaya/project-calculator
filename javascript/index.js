// // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// //  where;

// //  CC - is the century digits. For example 1989 has CC = 19

// //  YY - is the Year digits (1989 has YY = 89)

// //  MM -  is the Month

// //  DD - is the Day of the month ;

// //  mod - is the modulus function ( % )
// // Male
// // Sunday: Kwasi

// // Monday: Kwadwo

// // Tuesday: Kwabena

// // Wednesday: Kwaku

// // Thursday:  Yaw

// // Friday: Kofi

// // Saturday: Kwame

// // Female
// // Sunday: Akosua

// // Monday: Adwoa

// // Tuesday: Adwoa

// // Wednesday: Akua

// // Thursday:  Yaa

// // Friday: Afua

// // Saturday: Ama


// Selection

//variable name section


function calc() {
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var DD = document.getElementById("date").value;
  var year = document.getElementById("year").value;
  var MM = document.getElementById("month").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  // GENDER CHECK
  if (document.getElementById("male").checked) {
    var gender = 'male';

  } else {
    var gender = 'female';
  }
  //selection for the month section incluiding the various allerts
  // validation
  if (MM < 1 || MM > 12) {
    alert("PLEASE ENTER A VALID MONTH NUMBER (FROM 1 TO 12) !!");
  } else if (DD < 1 || DD > 31) {
    alert("PEASE ENTER A VALID DAY NUMBER (FROM 1 TO 31)");
  } else if (year <= 1900 || year >= 2022) {
    alert("PEASE ENTER A VALID YEAR (FROM 1900 TO 2022)");
  }
  // calculate
  var YY = year.slice(0, 2);
  var CC = year.slice(2);

  // (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
  var dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
  // MALE NAMES
  if (male) {
    if (dayOfTheWeek == 1) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Monday and your Akan name is.. " + maleNames[1]);
    } else if (dayOfTheWeek == 2) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Tuesday and your Akan name is.. " + maleNames[2]);
    } else if (dayOfTheWeek == 3) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Wednesday and your Akan name is.. " + maleNames[3]);
    } else if (dayOfTheWeek == 4) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Thursday and your Akan name is.. " + maleNames[4]);
    } else if (dayOfTheWeek == 5) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Friday and your Akan name is.. " + maleNames[5]);
    } else if (dayOfTheWeek == 6) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Saturday and your Akan name is.. " + maleNames[6]);
    } else if (dayOfTheWeek == 0) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Sunday and your Akan name is.. " + maleNames[0]);
    }
  }
  // FEMALE NAMES
  else if (female) {
    if (dayOfTheWeek == 1) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Monday and your Akan name is.. " + femaleNames[1]);
    } else if (dayOfTheWeek == 2) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Tuesday and your Akan name is.. " + femaleNames[2]);
    } else if (dayOfTheWeek == 3) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Wednesday and your Akan name is.. " + femaleNames[3]);
    } else if (dayOfTheWeek == 4) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Thursday and your Akan name is.. " + femaleNames[4]);
    } else if (dayOfTheWeek == 5) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Friday and your Akan name is.. " + femaleNames[5]);
    } else if (dayOfTheWeek == 6) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Saturday and your Akan name is.. " + femaleNames[6]);
    } else if (dayOfTheWeek == 0) {
      document.getElementById("results").innerHTML =
        alert("Hello, You were born on Sunday and your Akan name is.. " + femaleNames[0]);
    }
  } else {
    alert("PLEASE FILL IN THE FORM BEFORE SUBMITTING IT");
  }
}


document.querySelector(document).ready(function () {
  document.querySelector('user').submit(function (e) {
    e.preventDefault();

  });
});
// function submit (){
//         return calc()
//       }