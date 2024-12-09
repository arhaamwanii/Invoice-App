// export default function thisisthename(){
//     return "this is the export functon in here" 
//     }

//  const DoSomething = ()  => {
//     return <div> 
//             <button onClick={ () => { console.log("a anonymous function")} } >
//                 this is a button
//             </button>
//          </div>
// }

// let age = 10 ; 
// let name = age > 10 &&  "pedro";

// if (age > 10){
//     name = "pedro"
// }else{
//     name = "arham"
// }

// short cut
// let the name be arham if age is greater then 18 


// OBJECT DESTRUCTURING IN JS 
    // the name has to match 
    // order does not matter
const parents = "extemly good parents"

const person = {
    name : "arham",
    age : 18 ,
    isMarried : false , 
    parents,
}

 
const {name , age , isMarried } = person

console.log(name)
console.log(age)
console.log(isMarried)
console.log(parents)

// adding two objects 

const person2 = {
    ...person,
    addedthign : "this was added to the second object"
}

console.log(person2)


// adding arrays 

const namesarray = ["pedro" , "jack" , "jessica"]
const namesarraysecond = [...namesarray , "arham"]

console.log(namesarraysecond)

// some of the main functions

// map funtion
    //  for each element of the array that is in there 
    // we are going to exexute this funtion 
    // that we are going to define

namesarray.map((incomming) => {console.log(incomming + " added")})
let mappedArray = namesarray.map((incomming) => {return "arham"})
console.log(mappedArray)

// filter funtion
    // inherently used to to adit the preexisting array
    //  things can be filterd out

mappedArray = mappedArray.filter((incomming) => {
    return incomming !== "arham"
})

console.log(mappedArray)