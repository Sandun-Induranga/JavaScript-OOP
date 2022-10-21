/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/

// console.log("Hello there im from the console");

//todo ***************************      JS Objects       ***************************
/*
*
*
*  todo  Can add object properties dynamically
*
*             var customer = {
                id:'C001'
            };

            customer.name = "Dasun"
            delete customer.id

    --- JS Property Descriptors ---
*
*   A Mechanism that use to change the behaviour of a object
*       writable
*       enumerable - Property visibility closed
*       configurable - If this changed to false, can't change any property descriptor again

        - writable


        Object.defineProperty(customer, 'id',{
                writable: false
        });
*
*       Object.getOwnPropertyDescriptor(customer,"id");
*
*   There are two type of properties
*       1. Data properties
*               If value is directly assigned
*
*                   value : true
*                   writable: true
*                   configurable: true
*                   enumerable: true
*
*           var c = {
*               id: "C001"  // Data Property
*           }
*       2. Accessor properties
*               If value is directly not assigned
*
*                   configurable: false;
*                   enumerable: false;
*                   set
*                   get
*
*                   // line 60
*
*
*/


//
// var c = {
//     id:'C001'
// }
//
// Object.defineProperty(c,'salary',{
//     configurable: true,
//     enumerable: true,
//     get(){
//         return salary;
//     },
//     set(v){
//         salary = v;
//     }
// });

// var calculate = {
//     a:100,
//     b:200,
//     calculateTotal: function calculateTotal(x){
//         console.log('value'+ x)
//     }
// }
//
// var car = {
//     Make:'',
//     Year:"",
//     setMake: function set(make){
//         this.Make = make;
//     },
//     setYear: function set(year){
//         this.Year = year;
//     },
//     park: function park(){
//         console.log(this.Make+"-"+this.Year+ " is parking")
//     }
// }

/*
*
* ************************************* Functional Base Object ****************************************
*
*   function Customer(){
*       this.id = 'C001'
*   }
*
*   var customer = new Customer();
* */

// function Customer() {
//     this.id = "C001"
// }
//
// var customer = new Customer();
// console.log(customer)

function Car(make,year) {
    this.make = make;
    this.year = year;
    // this.park = function park(){
    //     console.log(`${this.make} - ${this.year} Parked`)
    // }
}

Object.getOwnPropertyDescriptor(Car,{
    enumerable:false,
    configurable:false
});

var car1 = new Car("BMW","2022");
console.log(car1);
