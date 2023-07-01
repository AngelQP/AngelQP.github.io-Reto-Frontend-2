const $ = (element) => document.querySelector(element);

const diceBtn = $('#diceBtn');
const advice = $('#advice');
const adviceId = $('#adviceId');

getAdvice();

diceBtn.addEventListener('click',() =>{
  // Llamar al api con await
  // const resp = await fetch(`https://api.adviceslip.com/advice/1`);
  // const data = await resp.json();
  // console.log(data);

  getAdvice();
} );

function getAdvice() {
  // Llamar al API con fetch
  // URL ADVICE RANDOM: https://api.adviceslip.com/advice
  // URL ADVICE POR ID https://api.adviceslip.com/advice/1
  fetch(`https://api.adviceslip.com/advice`)
    .then(resp => {
      if(resp.status !== 200) {
        return new Error("Algo salio mal")
      }      
      return resp.json();
    } )
    .then(data => {
      // console.log(data);
      const {advice: adviceMsg, id} = data.slip;
      advice.innerText = adviceMsg;
      adviceId.innerText = id;
    })
    .catch(err => {
      console.log(err)
      advice.innerText = "Ocurrio un problema. Intentalo nuevamente.";
      adviceId.innerText = ":(";
    })
}