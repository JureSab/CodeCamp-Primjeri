
var cars = [        //inicijalizacija niza objekata
    {                           //prvi objekt cars[0]
        fuelType : 'Diesel',    //key : value prvoga objekta
        price : 12500,
        maxSpeed: 230
    },
    {
        fuelType : 'Petrol',
        price : 124500,
        maxSpeed: 330
    },
    {
        fuelType : 'Diesel',
        price : 500,
        maxSpeed: 90
    },
    {
        fuelType : 'Electric',
        price : 300000,
        maxSpeed: 370
    },
    {
        fuelType : 'LPG',
        price : 1000,
        maxSpeed: 150
    },
]
function print(niz){                    //funkcija za ispis automobila sa brzinom vecom od 200, funkcija kao argument uzima niz

    for(let i = 0; i<niz.length; i++){     //iteriranje (listanje) kroz svaki element niza
        if(niz[i].maxSpeed > 200){          //uvjet koji provjerava od trenutnog objekta brzinu i ako je veca od 200 printa trenutni objekt
            console.log(niz[i])
        }  
    }
}

print(cars)         //pozivanje funkcije kojom smo kao argument dali niz objekata

// console.log(window)

// class Zivotinja{

//     constructor(name,age){

//         this.name = name
//         this.age = age
//     }

//     getName(){
//         return this.name
//     }
// }

// class Macka extends Zivotinja{

//     constructor(name,age,color,size){

//         super(name,age)
//         this.color = color
//         this.size = size
//     }
// }

// class Pas extends Zivotinja{

//     constructor(name,age,breed,goodBoy){

//         super(name,age)
//         this.breed = breed
//         this.goodBoy =goodBoy
//     }
// }

// let cat1 = new Macka('Mate',5,'white',65)
// let dog1 = new Pas('Dzeki',4,'German Sheepard',true)

// // console.log(cat1)
// console.log(dog1)



