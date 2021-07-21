const inputText=document.querySelector('#text');
const statElem=document.querySelector('#stat');

//new instance of class created
new Wordcounter(inputText);

const render=(event)=>{
    statElem.innerHTML=`<p><span style="font-size:1.5rem; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">You've written <span style="font-weight:bold;">${event.detail.wordStat.words} words </span>
    and <span style="font-weight:bold;">${event.detail.wordStat.characters} characters</span></span></p>`;
 
}

inputText.addEventListener('count',render);