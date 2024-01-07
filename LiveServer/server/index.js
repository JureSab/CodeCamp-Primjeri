var http = require('http')

var cars = [
    {
        id : 1,
        brand : 'VW',
        model : 'Golf',
        active : true,
        desc : 'active'
    },
    {
        id : 2,
        brand : 'Mercedes',
        model : 'E-Class',
        active : false
    },
    {
        id : 3,
        brand : 'BMW',
        model : 'F-90',
        active : true
    },
    {
        id : 4,
        brand : 'Rimac',
        model : 'Nevera',
        active : true
    },
    {
        id : 5,
        brand : 'VW',
        model : 'Passat',
        active : false
    }   
]
//const carJS = JSON.stringify(cars)

http.createServer(function (req,res){

    res.setHeader('Content-Type','application/json')
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000);
    res.end(JSON.stringify(cars))

}).listen(3001,() => {
    console.log('Server running')
})