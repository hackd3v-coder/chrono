let chonoStar = document.querySelector(".display")
let demarer = document.querySelector('.btn-start')
let reinitialiser = document.querySelector('.btn-reset')
let arret = document.querySelector('.btn-stop')
let interval;

let heure = 0
let minute = 0
let second = 0
let milliSecond = 0

function formatage(value){
    let valueFormat = value.toString()
    if (valueFormat.length < 2){
            valueFormat = '0' + valueFormat
    }
    return valueFormat
}

function chrono(){
    if (milliSecond === 99){
        second++
        milliSecond = 0
    }
    if (second === 59){
        minute++
        second = 0
    }
    if (minute === 59){
        heure++
        minute = 0
    }

    milliSecond++
    chonoStar.innerHTML = `${formatage(heure)}:${formatage(minute)}:${formatage(second)}<span class="milli">.${formatage(milliSecond)}</span>`
}


demarer.addEventListener('click',()=> {t = setInterval(chrono,10)})
arret.addEventListener('click', ()=>{
     clearInterval(t)

     })
reinitialiser.addEventListener('click',()=>{ 
    clearInterval(t);
    heure = 0
    minute = 0
    second = 0
    milliSecond = 0
    chonoStar.innerHTML = `${formatage(heure)}:${formatage(minute)}:${formatage(second)}<span class="milli">.${formatage(milliSecond)}</span>`

})
