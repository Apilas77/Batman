document.addEventListener("DOMContentLoaded",() => {
    console.log("Prêt")
    let element;
    // element = document.getElementsByTagName('div')[0]
    element = document.querySelector('div:nth-of-type(1)') 
    element.style.color = 'red'
})