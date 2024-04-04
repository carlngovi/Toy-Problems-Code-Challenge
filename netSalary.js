const prompt = require("prompt-sync")()
function netSalary() {

    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
 
    // GROSS SALARY
    const grossSalary = basicSalary + benefits;
 
    // PAYEE
    let payee;
    if (grossSalary <= 24000) {
      payee = 0.1 * grossSalary;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      payee = 2400 + 0.25 * (grossSalary - 24000);
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
      payee = 4483.25 + 0.3 * (grossSalary - 32333);
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        payee = 144783.35+ 0.325 * (grossSalary - 500000);
    } else {
        payee = 234783.35 + 0.35 * (grossSalary - 800000);
    }
 
    // NHIF
    let nhif;
    if (grossSalary <= 5999) {
      nhif = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhif = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      nhif = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      nhif = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      nhif = 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      nhif = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      nhif = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      nhif = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      nhif = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      nhif = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      nhif = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      nhif = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      nhif = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      nhif = 1600;
    } else if (grossSalary >= 100000) {
      nhif = 1700;
    }
 
    // NSSF
    const nssf = 0.06 * grossSalary;
 
    // NET SALARY
    const netSalary = grossSalary - (payee + nhif + nssf);

  //OUTPUT
    console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
    console.log(`Payee : Ksh ${payee.toFixed(2)}`);
    console.log(`NHIF : Ksh ${nhif.toFixed(2)}`);
    console.log(`NSSF : Ksh ${nssf.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}
// CALLING THE FUNCTION
netSalary(50000);