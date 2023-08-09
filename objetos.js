//criar objetos em Javascript
//1.Forma - Literal

//const person = {name: "André Luis", age: 23, weight: "70kb"};

const userName = document.getElementById("name");
const userName2 = document.getElementById("name2");
const prod = document.getElementById("product");
const color = document.getElementById("color");
const button = document.getElementById("btn-salvar");
const leitura = document.getElementById("btn-leitura");


const person = {
    name: "André Luis",
    born: 2000,
    month: 2,
    weght: "70kb",
    gender: "Men",
    height: 1.83,
    family: {
        wife: "Amanda Melo",
        son: "Breno",
        son2: "Kira"
    },

    cars: ["Ferrari", "BMW", "Mercedes"],
    work: {
        company: "SENAI SP",
        address: "Rua Direita, 222",
        ocuppation: "Developer",
        salary: "100.000,00"
    },

    calcAge: function (){
        const currentData = new Date(Date.now())
        console.log(currentData)
        return currentData.getFullYear() - this.born
    },

    calcMonth: function (){
        const currentMonth = new Date(Date.now())
        return (currentMonth.getMonth() +1) - this.month
    }

 
    
}

let produto = {};
let produtos = [];

button.addEventListener('click', ()=>{

    produto = {
        //gera id randomico e arredonda
        id: Math.floor(Math.random()* 21),
        name: prod.value,
        color: color.value
    }

    // metodo para add dados em uma lista
    produtos.push(produto);
    console.log(produtos);

    userName2.textContent = person.calcMonth();
    userName.textContent = person.calcAge();

})

userName.textContent = person.name;