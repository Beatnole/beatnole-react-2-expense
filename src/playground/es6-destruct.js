//Object

// const person = {
//     name: 'Patrick',
//     age: 50,
//     location: {
//         city: 'Jax',
//         temp: 70
//     }
// }

// const { name = 'Anonymous' , age } = person
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}`)

// console.log(`it is ${temperature} in ${city}`)

// const book = {
//     title: 'Egp is the..',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self Published' } = book.publisher

// console.log(publisherName)

// Array

// const address = ['2574 Wilson Springs', 'Jax', 'FL', '32038']
// const [, city, state = 'MI'] = address


// console.log(`You are in ${city} ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee,,mPrice] = item
console.log(`A medium ${coffee} costs ${mPrice}.`)