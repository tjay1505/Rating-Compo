const star = document.getElementById('star')
const spanTag = document.querySelectorAll("span")
for (let index = 0; index < spanTag.length; index++) {
    spanTag[index].addEventListener('click',(e) => { 
        forStore(e.target.innerText)
    })
}

const starImg = "./images/icon-star.svg"
const update = document.getElementById('update')
function forStore(s){
    star.innerHTML = ''
    update.innerText = s
    for(let x = 0 ; x < s ; x++){
        const newStar = document.createElement('img')
        newStar.setAttribute('src',starImg)
        star.appendChild(newStar)
    }
}

const model1 = document.getElementById('model')
const model2 = document.getElementById('model2')
function jobDone(){
    model1.style.display = 'none'
    model2.style.display = 'flex'
}

const tool = document.getElementById('tooltip')
setInterval(() => {
    tool.style.display = 'none'
} ,3000)
