console.log("JS linked")


let answers = document.querySelectorAll('.answer');
let scoreBox = document.querySelector('#scoreBox')
let resultsGrid = document.querySelector('#resultsGrid')
let answer6 = document.querySelector('#answer6')
let answer9 = document.querySelector('#answer9')
let answer10 = document.querySelector('#answer10')

function countScore() {
    let score = 10
    answers.forEach(answer =>{
        if (answer.classList.contains("hidden")){
            score -= 1
        }
    })
    return score
}

let input = document.querySelector('#inputBox')
console.log(input)
input.addEventListener("input", e=>{
    answers.forEach(answer =>{
        if (input.value == answer.innerHTML){
            answer.classList.remove('hidden');
            input.value = ''
            input.removeAttribute('placeholder')
        } // for each answer, check if input equals text inside
    })
    if (input.value == "Ani"){
        answer10.classList.remove('hidden');
        input.value = ''
        input.removeAttribute('placeholder')
    } else if ((input.value == "Holy Musical Batman") || (input.value == "Holy Musical B@man") || (input.value == "Holy Musical B@tman")){
        answer6.classList.remove('hidden')
        input.value = ''
        input.removeAttribute('placeholder')
    } else if ((input.value == "Trail to Oregon") || (input.value == "The Trail to Oregon")){
        answer9.classList.remove('hidden')
        input.value = ''
        input.removeAttribute('placeholder')
    }
    if (countScore() == 10) {
        scoreBox.innerHTML = (`Score: 10/10 Success!`);
        resultsGrid.classList.add ('success')
    } else {
        scoreBox.innerHTML = (`Score: ${countScore()}/10`);
    }
})