function write(a)
{
    document.write(a);
    document.write('<br>');
    console.log(a);
}

write(1 + 24 / 6);

var name = 'Nina'
write('hello ' + name);

var i = 4;

// i = i + 1;
// i++;
// i+=1;

write(i * Math.PI);

i=10

// if   <   <=    >   >=    ==   ===

if (i < 10)
{
    write('условие 1')
    write('условие 1.1')
}
else if (i > 100)
    write('условие 2')
else
    write('условие 3')

//////////
i=10
while(i <= 15) 
{
    write(i)
    i+=2;
}

write('---')

for(i=10; i<=15; i+=2)
{     
    write(i) 
}

var user = {
    name: 'Nina',
    age: 13,
    address: 'Bandery 13 kv 78'

};


write(user.name)

var arrayOfNumbers = [1, 4, 1000, 100500];

write(arrayOfNumbers);
write(arrayOfNumbers[0]);
write(arrayOfNumbers[1]);
write(arrayOfNumbers[2]);
write(arrayOfNumbers[3]);

// arrayOfNumbers.forEach(num => {
//     write(num * 2);
// });

for(i=0; i<arrayOfNumbers.length; i++)
{
    var num = arrayOfNumbers[i];
    write(num * 2);
};
