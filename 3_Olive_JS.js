

function checkAge(age)
 {if (age && !isNaN(age)){
 
        if (age < 18){
            alert('You don’t have access cause your age is ' + age + ', it’s less then ' + 18 )
                    }
        else if (age >= 18 && age <= 60){
            alert('Welcome  !')
                    }
        else if (age > 60){
            alert('Keep calm and look Culture channel')
                    }
    } else alert('go away')
}

let a = prompt ('Enter your age')

checkAge (a)