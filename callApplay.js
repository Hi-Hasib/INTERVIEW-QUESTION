const   normalPerson = {
    firstName: "Rahim",
    lastName : "uddin",
    salary   :15000,
    getFullName: function(){
     console.log(this.firstName,this.lastName);
    },
    chargeBill:function(amount){
        this.salary = this.salary - amount
        return this.salary
    }
}
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000)
console.log(normalPerson.salary)


const heroPerson = {
    firstName:"Hero",
    lastName:"Balam", 
     salary :25000
}
const friendlyPerson = {
    firstName:"Hero",
    lastName :"Golam",
    salary   :20000
}

normalPerson.chargeBill.call(heroPerson,1000,100,10);
normalPerson.chargeBill.call(heroPerson,3000,300,30);
console.log(heroPerson.salary)
normalPerson.chargeBill.call(friendlyPerson,5000,500,50)
console.log(friendlyPerson)





const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary);
console.log(heroPerson.salary);

// const friendlyPerson = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPerson(1000);
// console.log(friendlyPerson.salary)




