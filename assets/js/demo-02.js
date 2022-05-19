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

    if (currentMonth === birthdayMonth && currentDay === birthdayDay){
        footerContent.innerText = "Happy Birthday! 🎂"
    }
    
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

    age.innerText = `You are ${ageYear} years, ${ageMonth} months and ${ageDays} days young`
    days.innerText = `${remainingDaysTillBirthday} days until your birthday`

})







