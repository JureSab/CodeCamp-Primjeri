
// var nameArr = ['Ivan','Mate','Ivana','Vatroslav','Johnathan','Jospia']

// function checkArr(strArr,checkLen){

//     for(i in strArr){
//         if(checkLen(strArr[i])){
//             console.log(strArr[i])
//     }
// }
// }

// function checkStringLenght(str){
    
//     if(str.length > 6){
//         return true
//     }else{
//         return false
//     }
// }

// checkArr(nameArr,checkStringLenght)

var numbersArr = [2,2,3,5]

function sumArrayNumbers(numArr){

    return  new Promise(function(resolve,reject){
        var sum = 0
        for(i in numArr){
            sum += numArr[i]
        }
        console.log(sum)
        if(sum > 11){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

sumArrayNumbers(numbersArr).then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})






