

let button = document.getElementById('btn')
let imgu = document.getElementById('imguser')
let imgc = document.getElementById('imguser')
let imgcomp = document.getElementById('imgcomp')
let message = document.getElementById('message')


button.addEventListener('click', ()=>{
    let user = Math.floor(Math.random()*6)+1
    console.log(user)
    let computer = Math.floor(Math.random()*6)+1
    console.log(computer)

    switch(user){
        case 1:
imgc.src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg"
break;
case 2:
    imgc.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg"
    break;
    case 3:
        imgc.src= "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg"
        break;
        case 4:
            imgc.src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg"
break;
case 5:
    imgc.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg"
    break;
    case 6:
        imgc.src = "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
        break;
    }

    switch(computer){
        case 1:
imgcomp.src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg"
break;
case 2:
    imgcomp.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg"
    break;
    case 3:
        imgcomp.src= "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg"
        break;
        case 4:
            imgcomp.src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg"
break;
case 5:
    imgcomp.src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg"
    break;
    case 6:
        imgcomp.src = "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg"
        break;
    }
if(user == computer){
  message.innerText=  'You Win💥'
  
}else{
  message.innerText=  'You Lose😫'
     
}
})



