const users = [
    {
        name: "Carlos",
        technologies: ["HTML", "CSS"]
    },
    {
        name: "Jasmine",
        technologies: ["JavaScript", "CSS"]
    },
    {
        name: "Tuane",
        technologies: ["HTML", "Node.js"]
    }
]

function checkIfUserIsCSSProgrammer(technologies) {
    for (let technology of technologies) {
        if (technology === 'CSS') {
            return true
        }
    }

    return false
}

function userTechStack(users) {
    for (let user of users) {
        messageUserTechStack(user)
    }
}

function userCSSProgrammer(users) {
    for (let user of users) {
        userIsCSSProgrammer = checkIfUserIsCSSProgrammer(user.technologies)
        if (userIsCSSProgrammer) {
            messageUserIsCSSProgrammer(user)
        }
    }
}

function messageUserTechStack(user) {
    console.log(`${user.name}'s Tech Stack: ${user.technologies.join(", ")}`)
}

function messageUserIsCSSProgrammer(user) {
    console.log(`User ${user.name} develop using CSS`)
}

userTechStack(users)
console.log("===============================")
userCSSProgrammer(users)
