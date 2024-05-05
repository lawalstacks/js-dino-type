const words ='you me and the for always love you any time see you don\'t you get banger next door like frontend engineer used to do like a professional developer not a real estate developer it'.split(' ');
const wordsCount = words.length;
console.log(words)
console.log(wordsCount);

newGame();
function randomWords(){
  const randomIndex = Math.floor(Math.random() * wordsCount);
  return words[randomIndex];
}

function formatWords(word){
  return `<div class = "word"><span class ="letter">${word.split('').join('</span><span class="letter">')}</span></div>`
}

function newGame(){
    document.getElementById('words').innerHTML = '';
    for(i = 0; i < 200; i++){
    document.getElementById('words').innerHTML += formatWords(randomWords());
    }
    
    document.getElementById('game').addEventListener('click', ev => {
    
      const key = ev.key;
    })
}

