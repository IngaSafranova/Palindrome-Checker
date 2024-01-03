const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');

const result = document.getElementById('result');


const checkPolindrome= () => {
  
    const inputText = input.value;
if (inputText === ''){
  alert('Please input a value')
}
 const regex = /[^a-zA-Z0-9]/g;
 const regex1 = /[^a-zA-Z0-9]/;
 const cleanText =inputText.replace(regex, '').toLowerCase();
 const reverseText = cleanText.split('').reverse().join('');
 const resultText = inputText;

if(cleanText === reverseText){
//   const character = inputText[0];
//  if(/[a-zA-Z0-9]/.test(character)){
//    return inputText;
//  } else {
//    inputText.slice(0,1)
//  }

result.innerText = `${resultText} is a palindrome`;

} else if (cleanText.length === 1){
  result.innerText = `${resultText} is a palindrome`;
 
} else {
  result.innerText = `${resultText} is not a palindrome`;
  
}

}

const clearText = (e)=>{
input.value = "";


}
  button.addEventListener('click',checkPolindrome);
  button.addEventListener('click',clearText)






