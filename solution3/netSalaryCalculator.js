// created a function to calculate tax
function taxCalculator(grossSalary){
    //created an object with keys that have functions 
    const deductions =  {
        payee : function (){
            if (grossSalary<24000){
                return (10/100) * grossSalary ;
            }else if (grossSalary>=24000 && grossSalary<=32333){
                return (25/100) * grossSalary;
            }else if (grossSalary>=32334 && grossSalary<=500000){
                return (30/100) * grossSalary;
            }else if(grossSalary>=500001 && grossSalary<=800000){
                return (32.5/100) * grossSalary;
            }else{
                return (35/100) * grossSalary ;
            }
        },
        healthFund : function(){

            if(grossSalary<5999){
                return  150;
            }else if(grossSalary>=6000 && grossSalary<=7999){
                return 300 ;
            }else if (grossSalary>=8000 && grossSalary<= 11999){
                return 400
            }else if (grossSalary>=12000 && grossSalary<=14999){
                return 500;
            }else if(grossSalary>=15000 && grossSalary <= 19999){
                return 600;
            }else if(grossSalary>=20000 && grossSalary <= 24999){
                return 750;
            }else if(grossSalary>=25000 && grossSalary <= 29999){
                return 850;
            }else if(grossSalary>=30000 && grossSalary <= 34999){
                return 900;
            }else if(grossSalary>=35000 && grossSalary <= 39999){
                return 950;
            }else if(grossSalary>=40000 && grossSalary <= 44999){
                return 1000;
            }else if(grossSalary>=45000 && grossSalary <= 49999){
                return 1100;
            }else if(grossSalary>=50000 && grossSalary <= 59999){
                return 1200;
            }else if(grossSalary>=60000 && grossSalary <= 69999){
                return 1300;
            }else if(grossSalary>=70000 && grossSalary <= 79999){
                return 1400;
            }else if(grossSalary>=80000 && grossSalary <= 89999){
                return 1500;
            }else if(grossSalary>=90000 && grossSalary <= 99999){
                return 1600;
            }else {
                return 1700;
            }
        },
        nssf : function(){
            return (6/100) * grossSalary;
        }
    };
    // declaring variable net salary and assigning it the calculations
    const netSalary = grossSalary - deductions.payee() - deductions.healthFund() - deductions.nssf();
    console.log("grossSalary", grossSalary);
    console.log("payee",deductions.payee());
    console.log("NHIF",deductions.healthFund())
    console.log("NSSF",deductions.nssf())
    return netSalary;
}
module.exports = taxCalculator;