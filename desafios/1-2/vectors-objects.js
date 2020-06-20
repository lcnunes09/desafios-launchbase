const developer = {
    name: "Luciana",
    age: 32,
    technology: [
        {
            name: "JavaScript",
            specialty: "Web"
        },
        {
            name: "Python",
            specialty: "Data Science"
        },
        {
            name: "PHP",
            specialty: "Web"
        }
    ]
}

console.log(`Developer ${developer.name} has ${developer.age} years old and uses the technology ${developer.technology[0].name} and has the ${developer.technology[0].specialty} specialty.`)