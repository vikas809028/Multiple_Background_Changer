const button= document.getElementById('btn');
const color = document.querySelector('.color');
const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

button.addEventListener('click',() => {
    const hexcolor = generateHexColor();
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
})

const generateHexColor = () => {
    let hexcolor = '#';
    for(let i =0;i<6;i++){
        hexcolor+= hex[generateRandomNumber()]
    }
        return hexcolor;
    
}

const generateRandomNumber = () => {
    return Math.floor(Math.random()*hex.length)
    
}
