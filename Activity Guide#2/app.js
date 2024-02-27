const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {

    let Seconds = document.getElementById("Seconds").value
    if (Seconds >= 86400){
        var a = Seconds/86400
        var b = `day/s`
    }else if (Seconds >= 3600){
        var a = Seconds/3600
        var b = `hour/s`
    }else if (Seconds >= 60){
        var a = Seconds / 60
        var b = `minute/s`
    }

    document.getElementById("output1").innerHTML = `There are ` + a + ` ` + b + ` in those seconds.`
})

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {

    let Weight = document.getElementById("Weight").value
    if (Weight <= 2){
        var c = `$1.10`
    }else if (Weight <= 6){
        var c = `$2.20`
    }else if (Weight <= 10){
        var c = `$3.70`
    }else if (Weight > 10 ){
        var c = `$3.80`
    }

    document.getElementById("output2").innerHTML = `Your shipping charges based on the weight of your package are ` + c 
})

btn3.addEventListener("click", ()=>{
    let amount = document.getElementById("amount").value
    let total = amount * 99
    if (amount >= 10 & amount <= 19){
        var d = total * .20
        var e = total - d
    } else if (amount >= 20 & amount <= 49){
        var d = total * .30
        var e = total - d
    } else if (amount >= 50 & amount <= 99){
        var d = total * .40
        var e = total - d
    } else if (amount >= 100){
        var d = total * .50
        var e = total - d
    } else {
        var d = 0
        var e = total
    }
    
    document.getElementById("output3").innerHTML = 'The discount is $' + d + ' and the total is $' + e + '.'
})

btn4.addEventListener("click", ()=>{
    let mass = document.getElementById("mass").value
    let weight = mass * 9.8
    
    if (weight > 1000){
        document.getElementById("output4").innerHTML = 'Too heavy'
    } else if (weight < 10){
        document.getElementById("output4").innerHTML = 'Too light'
    } else {
        document.getElementById("output4").innerHTML = 'The weight of the object is ' + weight + ' Newtons.'
    }

})
