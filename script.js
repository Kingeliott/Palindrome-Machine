const text = document.getElementById("text-input");
const textInput = text.value;
const checkBtn = document.getElementById("check-btn");
const results = document.getElementById("result");


const wordCheck = () => {
  const textInput = document.getElementById("text-input").value;
  const cleanStr = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
const firstHalf = cleanStr.slice(0, Math.floor(cleanStr.length / 2));
const secondHalf = cleanStr.slice(Math.ceil(cleanStr.length / 2));

const reversedSecondHalf = secondHalf.split('').reverse().join('');

return {firstHalf, reversedSecondHalf}
}




const palindromeCheck = () => {
  const textInput = text.value;
  if (!textInput) {
  alert("Please input a value!");
  return;

}
  const  {firstHalf, reversedSecondHalf} = wordCheck();
  if (firstHalf === reversedSecondHalf) {
    results.textContent =  `${textInput} is a palindrome`
  }else{
    results.textContent =  `${textInput} is not a palindrome`
  }
}

checkBtn.addEventListener("click", palindromeCheck)

