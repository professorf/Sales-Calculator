addEventListener("load", main)

// Entry point after all code is loaded
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

function calculateSales() {
// input
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
// processing
    Tax=Price*TaxRate
    Total=Price+Tax
// output 
    spTotal.innerHTML=Total.toFixed(2)
}

function foo() {
}
