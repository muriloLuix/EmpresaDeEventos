const btn = document.getElementById('changeColor');
const body = document.body;
const h1 = document.querySelector('.h1Form');
const form = document.querySelector('.formLight')
const btnReturn = document.querySelector('.btnReturn')
const buttonChange = document.querySelector('.button')
const ball = document.querySelector('.ball')

document.querySelector('.ball').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    if (body.classList.contains('bodyDark')) {
        body.classList.remove('bodyDark');
        body.classList.add('bodyWhite');
        h1.classList.add('blackText');
        form.classList.add('formDark')
        btnReturn.classList.add('btnReturnDark')
        buttonChange.classList.add('buttonLight')
        ball.classList.add('ballDark')
      } else {
        body.classList.remove('bodyWhite');
        body.classList.add('bodyDark');
        h1.classList.remove('blackText');
        form.classList.remove('formDark')
        btnReturn.classList.remove('btnReturnDark')
        buttonChange.classList.remove('buttonLight')
        ball.classList.remove('ballDark')
      }
});
