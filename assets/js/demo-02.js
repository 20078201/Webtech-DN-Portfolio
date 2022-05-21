/*
* Birthday Calculator
* File Name: demo-01.js
* Author: Nhat-Dat Ngo
* Date: 19/05/2022
*
*
* */
let footerContent = document.getElementById("card_footer")
let age = document.getElementById("age")
let days = document.getElementById("daysLeftTillBirthday")

const greetings = {
    English: 'Happy Birthday',
    French: 'Joyeux anniversaire!',
    German: 'Alles Gute zum Geburtstag!',
    Italian: 'Buon compleanno!',
    Welsh: 'Penblwydd hapus!',
    Klingon: 'qoSlIj DatIvjaj',
    Bulgarian: 'Chestit Rozhden den!',
    Chinese: 'Shēngrì kuàilè!',
    Danish: 'Tillykke med fødselsdagen!',
    Finnish: 'Hyvää syntymäpäivää!',
    Hindi: 'janmadin mubaarak!',
    Japanese: 'Otanjōbiomedetōgozaimasu!',
    Persian: 'تولدت مبارک!'
}

const list_of_languages = ["English", 'French', 'German', 'Italian','Welsh', 'Klingon', 'Bulgarian',
                        'Chinese', 'Danish', 'Finnish', 'Hindi', 'Japanese', 'Persian']

// mdn wed doc generating random numbers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let day = document.getElementById("Day")

let month = document.getElementById("Month")

let year = document.getElementById("Year")

let monthDropDown = document.getElementById("Month")
let yearDropDown = document.getElementById("Year")

monthDropDown.addEventListener("change", () => {
    day.options[30].disabled=false
    day.options[29].disabled=false
    day.options[28].disabled=false

    let monthValue = month.options[month.selectedIndex].value
    let yearValue = year.options[year.selectedIndex].value
    let dayValue = day.options[day.selectedIndex].value

    if (monthValue === "4" || monthValue === "6" || monthValue === "9" || monthValue === "11"){
        day.options[30].disabled=true
        if (dayValue === "31"){
            day.selectedIndex = "29"
        }
    }
    else if (monthValue === "2" && parseInt(yearValue)%4 === 0){
        day.options[30].disabled=true
        day.options[29].disabled=true
        if (dayValue === "31" || dayValue === "30"){
            day.selectedIndex = "28"
        }
    }
    else if (monthValue === "2"){
        day.options[30].disabled=true
        day.options[29].disabled=true
        day.options[28].disabled=true
        if (dayValue === "31" || dayValue === "30" || dayValue === "29"){
            day.selectedIndex = "27"
        }
    }

})

const button = document.getElementById("calculate")

button.addEventListener('click', () => {
    let yearValue = year.options[year.selectedIndex].value
    let monthValue = month.options[month.selectedIndex].value
    let dayValue = day.options[day.selectedIndex].value

    // Time object for current date
    let today = new Date()

    // Time object with birthday
    let birthdayDate = new Date(`${yearValue},${monthValue},${dayValue}`)

    // set the years, months, days  to correct value
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1
    let currentDay = today.getDate()

    let birthdayYear = birthdayDate.getFullYear()
    let birthdayMonth = birthdayDate.getMonth()
    let birthdayDay = birthdayDate.getDate()
    
    let upcomingBDay = new Date(currentYear, birthdayMonth, birthdayDay)

    const one_day = 1000 * 60 * 60 * 24

    // Verification of the date the user entered (leap year etc)

    // 30 days month (April, June, September, November)

    let monthInt = parseInt(monthValue)
    let dayInt = parseInt(dayValue)
    let yearInt = parseInt(yearValue)

    if (currentMonth === birthdayMonth+1 && currentDay === birthdayDay){
        const index = getRandomInt(list_of_languages.length)
        const lang = list_of_languages[index]
        for (let greet in greetings){
            if (greet === lang){
                footerContent.innerText = `[${lang}]` + ' ' + greetings[greet]
                return
            }
        }
    }

    // If the user birthday is not today run the code below

    if (today > upcomingBDay){
        upcomingBDay.setFullYear(today.getFullYear() + 1)
    }

    let remainingDaysTillBirthday = Math.ceil((upcomingBDay.getTime() - today.getTime()) / one_day)

    // Get Years
    let ageYear = currentYear - birthdayYear
    let ageMonth, ageDays

    // Get Months
    if (currentMonth >= birthdayMonth){
        // get months when current month is greater
        ageMonth = currentMonth - birthdayMonth
    } else {
        ageYear--
        ageMonth = 12 + currentMonth + birthdayMonth
    }

    // Get days
    if (currentDay >= birthdayDay){
        ageDays = currentDay - birthdayDay
    } else {
        ageMonth--
        ageDays = 31 + currentDay - birthdayDay
    }

    if (ageMonth < 0){
        ageMonth = 11
        ageYear--
    }

    let age = `You are ${ageYear} years, ${ageMonth} months and ${ageDays} days young`
    let innerText = `${remainingDaysTillBirthday} days until your birthday`

    footerContent.innerText = `${age} \n\n ${innerText}`
    

})







