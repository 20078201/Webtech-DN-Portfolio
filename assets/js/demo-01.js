/*
* File Name: demo-01.js
* Author: Nhat-Dat Ngo
* Date: 12/05/2022
*
*
* */
const content = document.getElementById("card_content")

let text = ""

function multiply(num1, num2) {
    return String(num1 * num2)
}

function changeTimeTable(){
    let select = document.getElementById("selectNumber")
    let value = select.options[select.selectedIndex].value

    for (let i = 1; i < 13; i++) {
        text += `${i} x ${value} = ${multiply(i, value)} \n`
    }

    content.innerText = text

    text = ""
}

// changeTimeTable()





