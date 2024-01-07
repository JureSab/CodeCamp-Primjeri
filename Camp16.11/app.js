//Prvi zadatak
//kreiranje tri paragraf elementa,dodavanje teksta i pridruzivanje div elementu

// var sec = document.querySelector('section') //povlacenje section elementa iz html-a

// var par1 = document.createElement('p')      //kreiranje tri paragrafa
// var par2 = document.createElement('p')
// var par3 = document.createElement('p')

// par1.innerHTML = 'Paragraph 1'              //dodavanje teksta paragrafu
// par2.innerHTML = 'Paragraph 2'
// par3.innerHTML = 'Paragraph 3'

// sec.appendChild(par1)                       //pridruzivanje kreiranih paragraf elemenata sectionu
// sec.appendChild(par2)
// sec.appendChild(par3)

//Drugi zadatak
//Isto kod iznad ali iteriramo kroz niz objekata

// var objArrs = [
//     {
//         tag : 'p',
//         text : 'Paragraf 1'
//     },
//     {
//         tag : 'h3',
//         text : 'Podnaslov'
//     },
//     {
//         tag : 'p',
//         text : 'lorem ipsum'
//     },
//     {
//         tag : 'a',
//         text : 'link'
//     },
//     {
//         tag : 'h1',
//         text : 'Naslov'
//     },
//     {
//         tag : 'h2',
//         text : 'Podnaslov'
//     }
// ]

// for(let i=0; i < objArrs.length; i++){
//     let temp = document.createElement(objArrs[i].tag)
//     temp.innerHTML = objArrs[i].text
//     document.body.appendChild(temp)
// }

//Treci zadatak
//Neznam ni sam sta je ovo :)

// function initCreateElement(){

//     return function(tag){
//         return document.createElement(tag)
//     }
// }

// var create = initCreateElement()

//  var el = create('p')
//  el.innerHTML = 'Nesto'

// document.body.appendChild(el)

//Cetvrti zadatak

// var container = document.getElementById('container')    //uzimanje kontenjera iz html-a

// for(let i=0; i<10; i++){                        //petlja koja se vrti 10 puta
//     var temp = document.createElement('p')      //kreiranje paragrafa
//     temp.innerHTML = 'Paragraf ' + i            //dodavanje teksta u paragraf
//     if(i%2 == 0){                               //provjera jeli paran ako i djeleno sa 2 ne daje ostatak onda je
//         temp.style.background = 'blue'          //ako je paran pozadina je plava
//     }else{
//         temp.style.background = 'gray'          //ako nije paran promjeni boju u sivu
//     }
//     container.appendChild(temp)                 //dodavanje paragrafa kontenjeru
// }

//Peti zadatak

//U HTML dokumentu napravi div koji ima id parni, div drugi id neparni
//Napisi niz brojeva proizvoljno

// let div1 = document.getElementById('parni')
// let div2 = document.getElementById('neparni')

// let niz = [432,657,3,32142,536437] //niz koji sadrzi brojeve

// for(let i=0; i< niz.length; i++){        //iteriranje kroz niz
//     let temp = document.createElement('p')   //kreiranje paragraf elementa
//     temp.innerHTML = niz[i]          //dodavanje tekst koji je zapravo jedan element iz niza
//     if(niz[i] % 2 == 0){             //ako je paran tj ako djelenjem sa dva nema ostatak dodaj ga div elementi koji sadrzi parne brojeve
//         div1.appendChild(temp)
//     }else{                           //ako nije dodajaj ga neparnom div-u
//         div2.appendChild(temp)
//     }
// }

//Zadatak za kuci 
//1.Napraviti niz studenata jedan objekt koji je ujedno i objekt student ima svojstva 
//ime,prezime,ocjene 
//Napraviti funckiju koja racuna prosejek ocjena od studenta a na html documentu treba pisati
//Polozili su:
//Ante
//Mate
//Stipe
//Nisu polozili:
//Jelena
//Polozili su studenti kojima je prosjek ocjena tri ili vise
