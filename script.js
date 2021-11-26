function tipAmountPerPerson (bill, tipPercent, people) {
    return (bill*tipPercent)/people
}
function totalPerPerson (bill, tipPercent, people) {
    return (bill + (bill*tipPercent))/people
}

console.log(tipAmountPerPerson(142.55, 0.15, 5))
console.log(totalPerPerson(142.55, 0.15, 5))
