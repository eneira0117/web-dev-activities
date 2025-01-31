//USE FOR LOOP TO COMPUTE THE SUM 1 - 20
function sum(){
    const num = document.getElementById('number').value;
    const display = document.getElementById('display');
     
    let sum = 0;
    let b = "";

    for (let a = 0; a <= num; a++) { 
        b +=  a + "<br>";
        sum += a;
    }

    b += "The total sum is: " + sum;
    display.innerHTML = b;
}
    
//using while loop for factorial 5 -1
function factorial(){
let num = document.getElementById('number').value;
let product = 1, answer = "";

while (num > 1) {  
    answer += num + "<br>";
    product *= num--; 
}

answer += "1<br>The total factorial of " + document.getElementById('number').value + " is " + product;
display.innerHTML = answer;

}


  function odd() { 
    const num = document.getElementById('number').value;
    let odd = 0;
    let b = "";

    
    for (let a = 1; a <= num; a++) {
        if (a % 2 !== 0) { 
            b += a + "<br>"; 
            odd += a; 
        }
    }

    display.innerHTML = b;
}

function even(){
  const num = document.getElementById('number').value;
  let even = 0;
  let b = "";
  
  for (let a = 1; a <= num; a++) {
      if (a % 2 === 0) {  
          b += a + "<br>";
          even += a;
      }
  }
  
  display.innerHTML = b;
  
}