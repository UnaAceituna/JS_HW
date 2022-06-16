function checkAge(age)
{
    if (age < 18){
        console.log('You don’t have access cause your age is ' + age + ', it’s less then ' + 18 )
    }
        else if (age >= 18 && age <= 60){
            console.log('Welcome  !')
        }
        else if (age > 60){
            console.log('Keep calm and look Culture channel')
        }
    
    }

    checkAge(33)