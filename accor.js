const btn = document.querySelectorAll('.question-btn');
// console.log(btn);
const questionText = document.querySelectorAll('.question-text');
// console.log(questionText);

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',()=>{
        // console.log(e.target.classList)

        for(let j = 0;j < questionText.length; j++){
            if(questionText[j] != questionText[i]){
                questionText[j].classList.remove('show')
            }
        }
        
          questionText[i].classList.toggle('show');

    });
};



