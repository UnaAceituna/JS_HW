const age1 = 13
const age2 = 18
const age3 = 60

const checkAge = function checkAge(age)
{
    if (age < age2){
        console.log('You don’t have access cause your age is ' + age + ', it’s less then ' + age2 )
    }
        else if (age >= age2 && age < age3){
            console.log('Welcome  !')
        }
        else if (age >= age3){
            console.log('Keep calm and look Culture channel')
        } 
        else {
            console.log('Technical work')
        }
    }
    checkAge(17)
    checkAge(18)
    checkAge(60)
   
