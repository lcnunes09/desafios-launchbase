const users = [
    {
        name: "Salvio",
        incomes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        incomes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        incomes: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sumValues(numbers) {
    let sum = 0

    numbers.forEach(number => {
        sum = sum + number
    })

    return sum
}

function calculateBalance(incomes, expenses) {
    return balance = incomes - expenses
}

function balanceCreditOrDebit(balance) {
    if (balance >= 0) {
        creditOrDebit = 'CREDIT'
    } else {
        creditOrDebit = 'DEBIT'
    }

    return creditOrDebit
}

function calculateTotalPerUser(user) {
    let totalIncomes = 0
    let totalExpenses = 0

    totalIncomes = sumValues(user.incomes)
    totalExpenses = sumValues(user.expenses)

    userBalance = calculateBalance(totalIncomes, totalExpenses)

    return userBalance
}

function userMessage(name, balance) {
    creditOrDebit = balanceCreditOrDebit(balance)

    console.log(`${name} has ${creditOrDebit} balance of ${balance}`)
}


function totalUsers(users) {
    users.forEach(user => {
        balanceUser = calculateTotalPerUser(user)
        userMessage(user.name, balanceUser)
    });
}

totalUsers(users)

