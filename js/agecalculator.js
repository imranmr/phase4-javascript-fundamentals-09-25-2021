let currentYear = 2021;

function ageCalculator(yearOfBirth) {
  console.log(`User age is : ${currentYear-yearOfBirth}`);
}

function retirementCalculator(username,yearOfBirth){
    let age = currentYear - yearOfBirth;
    if(age>60) {
        console.log(`Employee ${username} is already retired !`);
    } else {
        console.log(`Your remaining age for retirement is :${60-age}`);
    }
}


let yearOfBirth = 1980;
ageCalculator(yearOfBirth);
retirementCalculator("John Smith",yearOfBirth);
retirementCalculator("John Smith",1890);