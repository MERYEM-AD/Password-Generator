//Declaration of Variables 


const special_char=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'","]","^","_","`","{","|","}","~"];
const numeric_char=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabetUppercase_char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLowercase_char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let userNumber ;
let randomList=[];
const generateCode=1;

/***** getNumber() function tests if the length of the password entered by the USER is at least 8 characters and no more than 128 characters 
 * IF TRUE the function will return the length number ;
 * IF NOT the function will re-ask the USER to re-enter the right number which is at least 8 and no more than 128 ****** */

function getNumber() { 

          for(let i=0;i<generateCode;i++){ 
      
            userNumber = window.prompt("How many character would you like your password contains : ");

                    if((userNumber>=8 && userNumber<=128)){ 

                      window.alert("Thank you you have entred :"+userNumber);
                      return (userNumber);
                              
                    }
                    
                    else {


                              window.alert("Sorry, you have entred "+userNumber+" Please enter a number at least 8 and 128");
                              i--;
                            
                          }
 
                        }
                      }



/***** Special_ch(x) function tests if the the User confirm that the special charactere as part of password
 * IF TRUE  then apply a random function on the special charactere array and add it into a randoList collection
 * IF NOT Skip  */

function Special_ch(optionChar) {

          if(optionChar){

                      index = Math.floor(Math.random() * special_char.length);
                      randomList.unshift(special_char[index]) ;
                    }
                  }


/***** Numeric_ch(x) function tests if the the User confirm that the Numeric charactere as part of password
 * IF TRUE  then apply a random function on the numeric charactere array and add it into a randoList collection
 * IF NOT Skip  */


 function Numeric_ch(optionChar) {

          if(optionChar){

                      index = Math.floor(Math.random() * numeric_char.length);
                      randomList.push(numeric_char[index]) ;
                    }
                  }



























// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
