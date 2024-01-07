// Kreirati dva input polja koja predstavljaju neka dva broja a i b i jedan button izracunaj
// Kad upises izbaci alert sum ta dva broja

var save = document.getElementById('save')      //gumb za izracunavanje

save.addEventListener('click', function(){      //event listener koji slusa na klik
    var a = document.getElementById('a').value  //primanje vrijednosti iz input elemenata a i b
    var b = document.getElementById('b').value

    alert(Number(a)+Number(b))  //alert koji pise rezultat (Number koristimo jer kada dobijemo vrijednost a i b oni su string pa ih ovako pretvaramo u broj da nebi tokom operaije 2+2 ispisalo 22 )
})

//Kreirati 2 input polja (Registracija)
//Username i password
//U slucaju da je password mannji od 8 karaktera korisniika obavjestiti pomocu metode alert 
//sa porukom Password je manji od 8 karaktera, zatim ocisti sva input polja
//U slucaju da je sve uredu samo ocisti input polja

var saveBtn = document.getElementById('save') //gumb
saveBtn.addEventListener('click', function(){ //event listener

    var username = document.getElementById('username') //dobivanje polja za unos sa html-a  
    var password = document.getElementById('password')
    var div = document.getElementById('message')

    if(password.value.length < 8){      //provjera ako je vrijednost password polja za unos string koji sadrzi manje od 8 znakova radi ovo
        div.innerHTML = 'Lozinka nije uredu'
        div.style.color = 'red'
    }else{      //ako sadrzi vise od 8 znakova pokazi div koji ispisuje sljedeci tekst koji je zelene boje
        div.innerHTML = 'Lozinka je uredu'
        div.style.color = 'blue'
    }
})

/*
Postaviti event listener na but ako se klikne 5 puta sa met alert ispisi kliknuli ste 5 puta
*/

var clickBtn = document.getElementById('clickBtn') //gubm za klikanje
var counter = 0     //brojac koji broji koliko smo puta kliknuli

clickBtn.addEventListener('click', function(){      //event listener koji slusa na klik

    counter ++      //povecaj brojac
    if(counter % 5 == 0){       //znaci treba svaki put kada kliknemo pet puta izbaciti alert to ce raditi kada je brojac 5 pa 10 pa 15 itd ugl broj koji podljljen sa 5 nema ostatak
        alert('Kliknuli ste 5 puta')
    }else{
        console.log('Klik')
    }   
})






