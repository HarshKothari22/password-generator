
//     //--------------------------------------------------------------
//     // this code is for changing the background color on clicking the button
//     //--------------------------------------------------------------



// const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerSet = "abcdefghijklmnopqrstuvwxyz";
// const numberSet = "0123456789";
// const symbolSet = "~!@#$%^&*()_=/";


// const getRandomData = (dataSet) => {
//     return dataSet[Math.floor(Math.random() * dataSet.length)];
// }

// //selectors:;
// const passBox = document.getElementById("pass-box");
// const totalChar = document.getElementById("total-char");
// const upperInput = document.getElementById("upper-case");
// const lowerInput = document.getElementById("lower-case");
// const symbolInput = document.getElementById("symbols");
// const numberInput = document.getElementById("numbers");


// const generatePassword = (password ="") => {
//     if(upperInput.checked){
//         password = password + getRandomData(upperSet);
//     }
//     if(lowerInput.checked){
//         password = password + getRandomData(lowerSet);
//     }
//     if(numberInput.checked){
//         password = password + getRandomData(numberSet);
//     }
//     if(symbolInput.checked){
//         password = password + getRandomData(symbolSet);
//     }

//     if(password.length <= totalChar.value){
//         return generatePassword(password);
//     }
//     passBox.innerText = truncateString(password,totalChar.value);
//     navigator.clipboard.writeText(passBox.innerText);//this will copy the code to the clipboard automatically.

// }



// function truncateString(str,num){
//     if(str.length > num){
//         let subStr = str.substring(0,num);
//         return subStr;
//     }else{
//         return str;
//     }
// };


// const getColor = () => {
//     const randomNumber = Math.floor(Math.random()*16777215);
    
//     const randomCode = "#" + randomNumber.toString(16);
    
//     document.body.style.backgroundColor = randomCode;

//     }
    
//     document.getElementById("btn").addEventListener("click",function(){
//         generatePassword();
//         getColor();
//     });



          // //--------------------------------------------------------------
          // // this code is for changing the background color on clicking the button
          // //--------------------------------------------------------------







    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "~!@#$%^&*()_=/";
    
    
    const getRandomData =(dataSet) => {
        return dataSet[Math.floor(Math.random() * dataSet.length)];
    }
    
    //selectors:;
    const passBox = document.getElementById("pass-box");
    const totalChar = document.getElementById("total-char");
    const upperInput = document.getElementById("upper-case");
    const lowerInput = document.getElementById("lower-case");
    const symbolInput = document.getElementById("symbols");
    const numberInput = document.getElementById("numbers");
    
    
    const generatePassword = (password ="") => {
        if(upperInput.checked){
            password = password + getRandomData(upperSet);
        }
        if(lowerInput.checked){
            password = password + getRandomData(lowerSet);
        }
        if(numberInput.checked){
            password = password + getRandomData(numberSet);
        }
        if(symbolInput.checked){
            password = password + getRandomData(symbolSet);
        }
    
        if(password.length <= totalChar.value){
            return generatePassword(password);
        }
        passBox.innerText = truncateString(password,totalChar.value);
        navigator.clipboard.writeText(passBox.innerText);//this will copy the code to the clipboard automatically.
    
    }

    
    function truncateString(str,num){
        if(str.length > num){
            let subStr = str.substring(0,num);
            return subStr;
        }else{
            return str;
        }
    };
    
    
    const getColor = () => {
        const randomNumber = Math.floor(Math.random()*16777215);
        
        const randomCode = "#" + randomNumber.toString(16);
        
        const spanColor = document.getElementsByTagName("span");

        for(let span of spanColor){
        span.style.backgroundColor = randomCode;
        }

    }
        
        document.getElementById("btn").addEventListener("click",function(){
            generatePassword();
            getColor();
        });
    

    // //--------------------------------------------------------------
    // // this code is for changing the span background color on clicking the button
    // //--------------------------------------------------------------
