/*---Урок 1---*/

/*№1*/

var developer, name;
name = "Sergey";
developer = name;
console.log(developer);

/*№2*/

var name = prompt("Как Вас зовут?", "");
console.log(name);


/*---Урок 2---*/

/*№1*/

var year = prompt("Какой сейчас год?", "");

function whatYear() {
    if( year == 2018 ) {
        alert("Вы правы!");
    }
    else {
        alert("С луны свалился? 2018!");
    }
}

whatYear();

/*№2*/

var number = prompt("Введите любое целое число?", "");

if( number > 0 ) {
    alert(1);
}
else if( number < 0 ) {
    alert(-1);
}
else if( number == 0 ) {
    alert(0);
}

/*№3*/

var logen = prompt("Введите логин", "");
var password;
var admin = "admin";
var enter = "passw0rd";
var cansel = "Canceled";

function reg() {
    if (logen == admin) {
        function logs() {
            password = prompt("Введите пароль", "");

            if (password == enter) {
                alert("Welcome home!");
            }
            else if (password > enter) {
                alert("Access denied");
            }
            else {
                alert(cansel);
            }
        }
        logs();
    }
    else if (logen > admin) {
        alert("Access denied");
    }
    else{
        alert(cansel);
    }
}

reg();








