const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {

    let Name = document.getElementById("Name").value
    let Address = document.getElementById("Address").value
    let Telephone = document.getElementById("Telephone").value
    let Major = document.getElementById("Major").value

    //console.log(Name + Address + Telephone + Major)

    let x = `Hello! ` + Name + ` I see that you are from ` + Address + `and you are also pursuing ` + Major + ` and you can be contacted using ` + Telephone + `.`

    document.getElementById("output1").innerHTML = x
})

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
    let Sales = document.getElementById("Sales").value
    let Profit = Sales * 0.23

    let y = `Your sales are ` + Sales + 
    ` and your profit is ` + Profit + `.` 

    document.getElementById("output2").innerHTML = y
})


const btn3 = document.getElementById("btn3")

btn3.addEventListener("click", () => {
    let Distance1 = 60 * 5
    let Distance2 = 60 * 8
    let Distance3 = 60 * 12

    let a = `The distance that the car will travel in 5 hours is ` + Distance1 + ` miles.`
    let b = `The distance that the car will travel in 8 hours is ` + Distance2 + ` miles.`
    let c = `The distance that the car will travel in 12 hours is ` + Distance3 + ` miles.`

    document.getElementById("output3").innerHTML = a
    document.getElementById("output4").innerHTML = b
    document.getElementById("output5").innerHTML = c
})


const btn4 = document.getElementById("btn4")

btn4.addEventListener("click", () => {
    let Miles = document.getElementById("Miles").value
    let Gallons = document.getElementById("Gallons").value
    let mpg = Miles / Gallons

    let z = `Cars miles per gallon ` + mpg 

    document.getElementById("output6").innerHTML = z
})

const btn5 = document.getElementById("btn5")

btn5.addEventListener("click", () => {
    let Temp = document.getElementById("Temp").value
    let Farenheit = 9/5 * Temp + 32

    let e = `Converted to ` + Farenheit + ` degrees`

    document.getElementById("output7").innerHTML = e
})

const btn6 = document.getElementById("btn6")

btn6.addEventListener("click", () => {
    let Cookie = document.getElementById("Cookie").value
    let Calories = Cookie * 75

    let d = `You consumed ` + Calories + ` calories by eating ` + Cookie + ` cookies.`

    document.getElementById("output8").innerHTML = d
})

const btn7 = document.getElementById("btn7")

btn7.addEventListener("click", () => {
    let Male = document.getElementById("Male").value * 1
    let Female = document.getElementById("Female").value * 1
    let MplusF = Male + Female
    let MalePercent = Male / MplusF * 100
    let FemalePercent = Female / MplusF * 100

    let f = `The percentage of males in the class is ` + MalePercent + `% and the percentage of females in the class is ` + FemalePercent + `%`

    document.getElementById("output9").innerHTML = f
})
