let HitCount = document.getElementById("hit-count")

let BudCount = document.getElementById("bud-count")

let saveHit = document.getElementById("save-hit")

let saveBud = document.getElementById("save-bud")

let hcount = 0

function Hit()
{
    hcount += 1
    HitCount.textContent = hcount
}

let bcount = 0

function Bud()
{
    bcount += 1
    BudCount.textContent = bcount
}

function Rec()
{
    let HitStr = hcount + " - "
    let BudStr = bcount + " - "

    saveHit.textContent += HitStr
    saveBud.textContent += BudStr

    HitCount.textContent = 0
    hcount = 0

    BudCount.textContent = 0
    bcount = 0
}


