const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)
    calculateBalance(transaction)
}

function getUserTransactions(user){
    return transactions = user.transactions
}

function calculateBalance(transaction) {
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type){
    let creditOrDebitTransaction = []
    transactions = getUserTransactions(user)

    for (transaction of transactions){
        if (transaction.type === type){
            creditOrDebitTransaction.push(transaction.value)
        }
    }

    higherTransaction = {
        type: type,
        value: Math.max.apply(Math, creditOrDebitTransaction)
    }
    
    console.log(higherTransaction)
}

function getAverageTransactionValue(){
    let sumTransactions = 0
    transactions = getUserTransactions(user)
    
    for (transaction of transactions) {
        sumTransactions += transaction.value
    }

    average = sumTransactions / transactions.length

    console.log(`Average transactions: ${average}`)
}

function getTransactionsCount(){
    let countCreditTransactions = 0
    let countDebitTransactions = 0
    transactions = getUserTransactions(user)

    for (transaction of transactions) { 
        if (transaction.type === 'credit') {
            countCreditTransactions += 1
        } else {
            countDebitTransactions += 1
        }
    }

    transactionsCount = { 
        credit: countCreditTransactions,
        debit: countDebitTransactions
    }

    console.log(transactionsCount)
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()