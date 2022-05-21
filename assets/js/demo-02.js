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

button = document.getElementById("calculate")

button.addEventListener('click', () => {
    let day = document.getElementById("Day")
    let dayValue = day.options[day.selectedIndex].value

    let month = document.getElementById("Month")
    let monthValue = month.options[month.selectedIndex].value

    let year = document.getElementById("Year")
    let yearValue = year.options[year.selectedIndex].value

    let remainder = yearValue%4

    if (remainder === 0 && monthValue === 2){
        footerContent.innerText = "Feb has 29 days during a leap"
        return
    }
    console.log(yearValue % 4, monthValue)
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

    // 30 days month

    // 31 days month

    // 28 day month
        // if the current year is divisible by 4 or a leap year



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







