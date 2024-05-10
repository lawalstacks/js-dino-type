const words ='you me and the for always love you any time see you don\'t you get banger next door like frontend engineer used to do like a professional developer not a real estate developer it'.split(' ');
const wordsCount = words.length;


//virtualkeyboards
const firstKeys = ['q','w','e','r','t','y','u','i','o','p'];
const secondKeys = ['a','s','d','f','g','h','j','k','l'];
const thirdKeys = ['∆','z','x','c','v','b','n','m','×'];
const space = [" "];


console.log(words)
console.log(wordsCount);

newGame();
function randomWords(){
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex - 1];
}

function formatWords(word){
  return `<div class = "word"><span class ="letter">${word.split('').join('</span><span class="letter">')}</span></div>`
}
function addClass(el,name){
el.className += " " + name;
console.log(el)
}

function removeClass(el,name){
  el.className = el.className.replace(name," ");
}

function newGame(){
    document.getElementById('words').innerHTML = '';
    for(i = 0; i < 200; i++){
    document.getElementById('words').innerHTML += formatWords(randomWords());
    }
    addClass(document.querySelector('.word'),'current');
  addClass(document.querySelector('.letter'),'current');
}

    document.getElementById('game').addEventListener('keyup', ev => {
    
      const key = ev.key;
      const currentWord = document.querySelector('.word.current');
      const currentLetter = document.querySelector('.letter.current');
      const expected = currentLetter.innerHTML;
      const isLetter = key.length === 1 && key !== ' ';
      const isSpace = key === " ";
      
     if(isLetter){
        if(currentLetter){
          addClass(currentLetter,key === expected?'correct': 'incorrect');
          removeClass(currentLetter,'current');
          addClass(currentLetter.nextSibling,'current');
        }
        console.log(currentLetter)
      }
      if(isSpace){
        if(expected !== " "){
          let lettersToInvalidare = [...document.querySelectorAll('.word.current .letter:not(.current)')];
          lettersToInvalidare.forEach((letter)=>{
            addClass(letter,'incorrect');
          })
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling,'current');
      }
    })
    
   
   
   //Virtual keyboard development
   
  let firstRow = []; let secondRow = []; let thirdRow = []; let spaceBar;
  const firstRowHtML = document.querySelector('.first-row');
  const secondRowHtML = document.querySelector('.second-row');
  const thirdRowHtML = document.querySelector('.third-row');
  const spaceBarHTML = document.querySelector('.space-bar');

   generateKeyboard();
  function generateKeys(){
  firstKeys.forEach((key) =>{
    firstRow.push(`<span class= "keys" data-key-id="${key}">${key}</span>`);
    });

  secondKeys.forEach((key) => {
    secondRow.push(`<span class= "keys" data-key-id="${key}">${key}</span>`);
  });
  
  thirdKeys.forEach((key) => {
    thirdRow.push(`<span class= "keys" data-key-id="${key}">${key}</span>`);
  });
  
  spaceBar = `<span class= "keys space" data-key-id="${space[0]}">Spacebar</span>`
  }
  
  function generateKeyboard(){
    generateKeys();
   firstRowHtML.innerHTML = firstRow.join('');
   secondRowHtML.innerHTML = secondRow.join('');
   thirdRowHtML.innerHTML = thirdRow.join('');
   spaceBarHTML.innerHTML = spaceBar;
  }
   
 document.querySelectorAll('.keys').forEach((key) => {
   key.addEventListener('click', ()=>{
     let virtualKey = key.dataset.keyId;
    if(virtualKey === "∆"){virtualKey = "shift"}
    if(virtualKey === "×"){virtualKey = "BackSpace"}
       const currentWord = document.querySelector('.word.current');
       const currentLetter = document.querySelector('.letter.current');
       const expected = currentLetter.innerHTML;
       const isLetter = virtualKey.length === 1 && virtualKey !== ' ';
       const isSpace = virtualKey === " ";
 
       if (isLetter) {
         if (currentLetter) {
           addClass(currentLetter, virtualKey === expected ? 'correct' : 'incorrect');
           removeClass(currentLetter, 'current');
           addClass(currentLetter.nextSibling, 'current');
           console.log(currentLetter)
         }
       }
       
       if (isSpace){
         if (expected !== " "){
           let lettersToInvalidare = [...document.querySelectorAll('.word.current .letter:not(.current)')];
           lettersToInvalidare.forEach((letter) => {
             addClass(letter,'incorrect');
           })
         }
        removeClass(currentWord,'current');
        addClass(currentWord.nextSibling,'current');
       }    
   })
 })