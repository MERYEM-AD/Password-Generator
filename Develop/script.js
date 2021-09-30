//Declaration of Variables 


const special_char=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'","]","^","_","`","{","|","}","~"];
const numeric_char=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabetUppercase_char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLowercase_char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let q2,q3,q4,q5; //question 1 inside getNumber() function
let userNumber,index;
let randomList=[];
let password=[];
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

function Special_ch(s) {

          if(s){

                      index = Math.floor(Math.random() * special_char.length);
                      randomList.unshift(special_char[index]) ;
                    }
                  }


/***** Numeric_ch(x) function tests if the the User confirm that the Numeric charactere as part of password
 * IF TRUE  then apply a random function on the numeric charactere array and add it into a randoList collection
 * IF NOT Skip  */


 function Numeric_ch(n) {

          if(n){

                      index = Math.floor(Math.random() * numeric_char.length);
                      randomList.push(numeric_char[index]) ;
                    }
                  }


/***** Uppercase_ch(x) function tests if the the User confirm that the Uppercase charactere as part of password
 * IF TRUE  then apply a random function on the alphabetUppercase charactere array and add it into a randoList collection
 * IF NOT Skip  */

 function Uppercase_ch(u) {

            if(u){

                        index = Math.floor(Math.random() *  alphabetUppercase_char.length);
                        randomList.push( alphabetUppercase_char[index]) ;
                      }
                    }



/***** Lowercase_ch(x) function tests if the the User confirm that the Lowercase charactere as part of password but we have 3 cases :
 *  1)-IF optionChar is TRUE and the randomList lenght not equal 0 (don't empty) then apply a random function on the alphabetUppercase charactere 
 array and add it into a randoList collection;

 *  2)- IF optionChar is TRUE and the randomList lenght equal 0 (Empty) OR optionChar is FALSE and the randomList is Empty then 
 apply a random function on the alphabetLowercase charactere array and add it into a randoList collection;
 
 *  3)- ELSE SKIP (don't do NOTHING)*/


 function Lowercase_ch(l) {

            if((l==true) && ((randomList.length)!== 0) ){   // T + T = T
              
                        index = Math.floor(Math.random() *  alphabetLowercase_char.length);
                        randomList.push(alphabetLowercase_char[index]);
              }
            else if(((l) && ((randomList.length)== 0)) || ((!l) && ((randomList.length)== 0))  ){ //T+F=F OR F+F=F
                        index = Math.floor(Math.random() *  alphabetLowercase_char.length);
                        randomList.unshift(alphabetLowercase_char[index]) ;
              }
            else{ 

                    //Skip and do Nothing
            }


              
}




/***** generatePassword(x) function return the password as string after fill up it with the randomList collection */ 

  function generatePassword(Number) {

              for(let i=0;i<Number;i=password.length){
                
                for(let y=0;y<randomList.length;y++){
                  
                  password[i]=randomList[y];
                  i++;
                 }
                 randomList=[];
                Special_ch(q2);
                Numeric_ch(q3);
                Uppercase_ch(q4);
                Lowercase_ch(q5);
              }
              
              let code = password.splice((Number),(password.length-Number));
              randomList=[];
              return password.join("");
             }


/***** freePassword(x) function reset the password array after generation the password */          
  function freePassword(p) {
               password=[];
              }
  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


let Number_char =getNumber();
q2= window.confirm("Do you want Special charactere : ");
q3=window.confirm("Do you want numeric charactere : ");
q4=window.confirm("Do you want UpperCase charactere : ");
q5=window.confirm("Do you want Lowercase charactere : ");


Special_ch(q2);
Numeric_ch(q3);
Uppercase_ch(q4);
Lowercase_ch(q5);


  var password = generatePassword(Number_char);
  /**Display the password in an alert  */
    //window.alert("Password is :"+password); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  freePassword(password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
