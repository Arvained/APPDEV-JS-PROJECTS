const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
    console.log(question)
    const btn=question.querySelector('.question-btn')

    btn.addEventListener('click', ()=>{
        questions.forEach((item) => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})

/*modal*/

const modalBtn1 = document.querySelector('.modal-btn1')
const modal1 = document.getElementById('modal1')
const closeBtn1 = document.getElementById('close1')

const modalBtn2 = document.querySelector('.modal-btn2')
const modal2 = document.getElementById('modal2')
const closeBtn2 = document.getElementById('close2')

const modalBtn3 = document.querySelector('.modal-btn3')
const modal3 = document.getElementById('modal3')
const closeBtn3 = document.getElementById('close3')

const modalBtn4 = document.querySelector('.modal-btn4')
const modal4 = document.getElementById('modal4')
const closeBtn4 = document.getElementById('close4')

const modalBtn5 = document.querySelector('.modal-btn5')
const modal5 = document.getElementById('modal5')
const closeBtn5 = document.getElementById('close5')

const modalBtn6 = document.querySelector('.modal-btn6')
const modal6 = document.getElementById('modal6')
const closeBtn6 = document.getElementById('close6')

const modalBtn7 = document.querySelector('.modal-btn7')
const modal7 = document.getElementById('modal7')
const closeBtn7 = document.getElementById('close7')

const modalBtn8 = document.querySelector('.modal-btn8')
const modal8 = document.getElementById('modal8')
const closeBtn8 = document.getElementById('close8')

const modalBtn9 = document.querySelector('.modal-btn9')
const modal9 = document.getElementById('modal9')
const closeBtn9 = document.getElementById('close9')

const modalBtn10 = document.querySelector('.modal-btn10')
const modal10 = document.getElementById('modal10')
const closeBtn10 = document.getElementById('close10')

modalBtn1.addEventListener('click', () => {
    modal1.classList.add('open-modal')
})
closeBtn1.addEventListener('click', () => {
    modal1.classList.remove('open-modal')
})

modalBtn2.addEventListener('click', () => {
    modal2.classList.add('open-modal')
})
closeBtn2.addEventListener('click', () => {
    modal2.classList.remove('open-modal')
})

modalBtn3.addEventListener('click', () => {
    modal3.classList.add('open-modal')
})
closeBtn3.addEventListener('click', () => {
    modal3.classList.remove('open-modal')
})

modalBtn4.addEventListener('click', () => {
    modal4.classList.add('open-modal')
})
closeBtn4.addEventListener('click', () => {
    modal4.classList.remove('open-modal')
})

modalBtn5.addEventListener('click', () => {
    modal5.classList.add('open-modal')
})
closeBtn5.addEventListener('click', () => {
    modal5.classList.remove('open-modal')
})

modalBtn6.addEventListener('click', () => {
    modal6.classList.add('open-modal')
})
closeBtn6.addEventListener('click', () => {
    modal6.classList.remove('open-modal')
})

modalBtn7.addEventListener('click', () => {
    modal7.classList.add('open-modal')
})
closeBtn7.addEventListener('click', () => {
    modal7.classList.remove('open-modal')
})

modalBtn8.addEventListener('click', () => {
    modal8.classList.add('open-modal')
})
closeBtn8.addEventListener('click', () => {
    modal8.classList.remove('open-modal')
})

modalBtn9.addEventListener('click', () => {
    modal9.classList.add('open-modal')
})
closeBtn9.addEventListener('click', () => {
    modal9.classList.remove('open-modal')
})