const data=[
    {
        person_a:{
            Name:"sammi",
            Address:"Moh",
        },
    },
    {
       person_b:{
        Name:"Rifat",
        Address:"Tajmahal",
       } ,
    },
];

function second(){
    console.log(data[0].person_a.Name);
console.log(data[1].person_b.Address);
}
second();