
// 1.How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };


// Ans:
// below method will verify if two JSON have same properties without order and returns "True" statement in console
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var result = Object.keys(obj1).every((key) => obj1[key] ===obj2[key]);
console.log(result);



// Question 2 & 3. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
// 		Use the same rest countries and print all countries name, region, sub region and population

// Answer: 
var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();

request.onload=(()=>{
    var data=JSON.parse(request.response);
    for(var i=0;i<=data.length;i++) {       
        console.log('Flag: '+data[i].flag+
                    ', Name: '+data[i].name+
                    ', Region: '+data[i].region+
                    ', SubRegion: '+data[i].subregion+
                    ', Population:'+data[i].population);
    };
})