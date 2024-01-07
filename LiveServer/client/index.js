var tableBodyNotactive = document.getElementById('tableBodyNotactive')
var tableHeadNotactive = document.getElementById('tableHeadNotactive')

var tableHeadActive = document.getElementById('tableHeadActive')
var tableBodyActive = document.getElementById('tableBodyActive')

var loading = document.getElementById('loading')

function getData(){

    fetch('http://localhost:3001').then((rawData) => {
        
        return data = rawData.json()
    }).then((data) => {
        printData(data)
    }).catch((e) => {
        console.log(e)
    }) 
}

function printTableHeaders(data){
    let tRowActive = document.createElement('tr')
    for(key in data[0]){
        let th = document.createElement('th')
        th.innerHTML = key
        tRowActive.appendChild(th)
    }
    tableHeadActive.appendChild(tRowActive)
    let tRowNotActive = document.createElement('tr')
    for(key in data[0]){
        let th = document.createElement('th')
        th.innerHTML = key
        tRowNotActive.appendChild(th)
    }
    tableHeadNotactive.appendChild(tRowNotActive)
}

function printData(data){

    loading.innerHTML = ''
    printTableHeaders(data)
    console.log(data)
    for(i in data){
        if(data[i].active == true){
            printActiveTable(data[i])
        }else{
            printNotActiveTable(data[i])
        }
    }
}

function printActiveTable(data){
    let tRow = document.createElement('tr')
    for(key in data){
        let tD = document.createElement('td')
            tD.innerHTML = data[key]
            tRow.appendChild(tD)
    }
    tableBodyActive.appendChild(tRow)
}

function printNotActiveTable(data){
    let tRow = document.createElement('tr')
    for(key in data){
        let tD = document.createElement('td')
            tD.innerHTML = data[key]
            tRow.appendChild(tD)
    }
    tableBodyNotactive.appendChild(tRow)
}



getData()

//dodati jos jedan property desc font color
//danijel buhac posalji kod na mail
