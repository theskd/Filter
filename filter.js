console.log('3. Task') 

var requests = new XMLHttpRequest

url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

requests.open("GET",url)
requests.send()
console.log("1. Asian Countries");

requests.onload= function() {
var data = JSON.parse(requests.response);
var asia = data.filter((obj) => { 
    
    if (obj.region === 'Asia' ){
    
    return obj.name;
    }
})
    
console.log(asia);

}

console.log("2. Countries less than 2 Lakhs population");

requests.onload= function() {
var data = JSON.parse(requests.response);
var pop = data.filter((obj) => { 
    
    if (obj.population < 200000 ){
    
    return obj.name;
    }
})
    
console.log(pop);

}

console.log("3. Using forEach function");

requests.onload= function() {
var data = JSON.parse(requests.response);
var FE = data.forEach((obj) => { 
    
    console.log(obj.name,obj.capital,obj.flag)
})
    
console.log(FE);

}

console.log("4. Total population");

requests.onload= function() {
var data = JSON.parse(requests.response);
const popu=data.reduce((obj1,obj2)=>{
    return obj1 + obj2.population;
},0)
console.log(popu);

   
}
    


console.log("5. US dollar");

requests.onload= function() {
var data = JSON.parse(requests.response);
var US = data.filter((obj) => { 
    
    for(i=0;i<data.length;i++){
        if (data[i].currencies[0].code === 'USD' ){
            console.log(data[i].name)
        
    
    }
    }
    
})
    


}
