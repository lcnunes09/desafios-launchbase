users = [
    {
        name: "Jose",
        gender: "M",
        age: 60,
        yearsContribution: 30
    },
    {
        name: "Silvana",
        gender: "F",
        age: 48,
        yearsContribution: 23
    }
]

yearsOfContributionPerGender = function (gender) {
    if (gender === "M") {
        return 35
    } else if (gender === "F") {
        return 30
    } else {
        return false
    }
}

minYearsSumContributionAndAgePerGender = function (gender) {
    if (gender === "M") {
        return 90
    } else if (gender === "F") {
        return 85
    } else {
        return false
    }
}

function checkIfUserCanRetireOrNot(age, gender) {
    const minTotalContributionAndAge = minYearsSumContributionAndAgePerGender(gender)
    const minYearsContribution = yearsOfContributionPerGender(gender)
    const sumTotalContributor = minYearsContribution + age;

    if (sumTotalContributor >= minTotalContributionAndAge) {
        return true
    } else {
        return false
    }
}

function messageIfUserCanRetireOrNot(users){
    users.forEach(user => {
        if (checkIfUserCanRetireOrNot(user.age, user.gender)) {
            console.log(user.name + " you can retire!")
        } else {
            console.log(user.name + " you can't retire!")
        }
    });
}

messageIfUserCanRetireOrNot(users)