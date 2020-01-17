
function newGame()
{
    //document.getElementById("b1").innerText = '';
    for(i=1; i<=9; i++)
        document.getElementById("b" + i).innerText = '';
}

document.getElementById("b1").onclick = function()
{
    alert('Button pressed!' )
}

//////////////////////

function write(a)
{
    document.write(a);
    document.write('<br>');
    console.log(a);
}

function sum(a,b)
{
    return a + b;
}


write(sum(100,200))

var name = 'Nina'
write('hello ' + name);

var i = 4;

// i = i + 1;
// i++;
// i+=1;

// i=10

// // if   <   <=    >   >=    ==   ===

// if (i < 10)
// {
//     write('ш Б 10')
// }
// else if (i > 100)
//     write('условие 2')
// else
//     write('условие 3')

//////////
// i=10
// while(i <= 15) 
// {
//     write(i)
//     i+=2;
// }

for(i=10; i<=15; i+=2)
{     
    write(i) 
}

var user = 
{
    name: 'Nina',
    age: 13,
    address: 'Bandery 13 kv 78',

    sayHello: function(lang) 
    {
        if (lang=='ua')
            return "Мое ім'я " + user.name + " )))"
        else 
            return "My name " + user.name + " ! ;) "
    }
};


write(user.sayHello('ua'))
write(user.sayHello('ru'))
write(user.sayHello())

var arrayOfNumbers = [10, 20, 30, 40];

// write(arrayOfNumbers);
// write(arrayOfNumbers[0]);
// write(arrayOfNumbers[1]);
// write(arrayOfNumbers[2]);
// write(arrayOfNumbers[3]);

// arrayOfNumbers.forEach(num => {
//     write(num * 2);
// });

for(i=0; i<arrayOfNumbers.length; i++)
{
    var num = arrayOfNumbers[i];
    write(num * 2);
};
