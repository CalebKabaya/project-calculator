// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//  where;

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month ;

//  mod - is the modulus function ( % )
// Male
// Sunday: Kwasi

// Monday: Kwadwo

// Tuesday: Kwabena

// Wednesday: Kwaku

// Thursday:  Yaw

// Friday: Kofi

// Saturday: Kwame

// Female
// Sunday: Akosua

// Monday: Adwoa

// Tuesday: Adwoa

// Wednesday: Akua

// Thursday:  Yaa

// Friday: Afua

// Saturday: Ama

var CC;
var YY;
var MM;
var DD;
var d;
var weekDay;
var femaleNames=["Akosua","Adwoa","Adwoa"," Akua","Yaa","Afua","Ama"];
var maleNames=["Kwasi","Kwadwo"," Kwabena","Kwaku"," Yaw","Kofi","Kwame"];
var dayName=["Sunday","Monday"," Tuesday"," Wednesday"," Thursday","Friday","Saturday"];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
       alert( "Please provide a valid year of birth! eg 2019" );
       document.myForm.year.focus() ;
       return false;
    }
    else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
       alert( "Please provide your month of birth! between 1 and 12" );
       document.myForm.month.focus() ;
       return false;
    }
    else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
       alert( "Please provide a valid date that you were born in!" );
       document.myForm.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
        return false;
    }   
    else{
      return true ;
    }
    
  }

// function to calculate day of the week

function dayOfWeek(){
    yOfBirth = document.getElementById("YofBirth") .value;
    CC =parseInt(yOfBirth.substring(0,2));
    YY =parseInt(yOfBirth.substring(2,4));
    MM = parseInt(document.getElementById("MofBirth").value);
    DD = parseInt(document.getElementById("DofBirth").value);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    console.log(d);
    return (Math.floor(d));

  }
 
  function getGender (){
    var genders = document.getElementsByName("gender");
    if(genders[0].checked == true){
      var gender = "male";
    }
    else if(genders[1].checked == true){
      var gender = "female";
    }
    else{
      return false;
    }
    switch(gender){
      case "male":
        if (weekDay == 1){
          alert("You were born on " +dayName[0] + " and Your akan name is " +maleNames[0]+"!");
        }
        else if(weekDay == 2){
          alert("You were born on "+dayName[1] + " and Your akan name is " +maleNames[1]+"!");
        }
        else if(weekDay == 3){
          alert("You were born on " +dayName[2]+ " and Your akan name is " +maleNames[2]+"!");
        }
        else if(weekDay == 4){
          alert("You were born on "+dayName[3] +  " and Your akan name is " +maleNames[3]+"!");
        }
        else if(weekDay == 5){
          alert("You were born on "+dayName[4] +  " and Your akan name is " +maleNames[4]+"!");
        }
        else if(weekDay== 6){
          alert("You were born on "+dayName[5] +  " and Your akan name is " +maleNames[5]+"!");
        }
        else if(weekDay == -0){
          alert("You were born on "+dayName[6] + " and Your akan name is " +maleNames[6]+"!");
        }
      break;
      case "female":
        if (weekDay == 1){
          alert("You were born on "+dayName[0] + " and Your akan name is  " +femaleNames[0]+"!");
        }
        else if(weekDay== 2){
          alert("You were born on " +dayName[1] + " and Your akan name is " +femaleNames[1]+"!");
        }
        else if(weekDay == 3){
          alert("You were born on " +dayName[2] + " and Your akan name is " +femaleNames[2]+"!");
        }
        else if(weekDay == 4){
          alert("You were born on " +dayName[3] + " and Your akan name is " +femaleNames[3]+"!");
        }
        else if(weekDay == 5){
          alert("You were born on " +dayName[4] + " and Your akan name is " +femaleNames[4]+"!");
        }
        else if(weekDay == 6){
          alert("You were born on " +dayName[5] + " and Your akan name is " + femaleNames[5]+"!");
        }else if(weekDay == -0){ 
          alert("You were born on " +dayName[6] + " and Your akan name is " +femaleNames[6]+"!");
        }
      break
      default:
            
    }
  }
  function submit (){
    weekDay = dayOfWeek();
     getGender();
  }
