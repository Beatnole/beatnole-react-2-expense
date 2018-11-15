import * as firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  
  export { firebase, googleAuthProvider, database as default }
  
// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

  //convert Firebase data structure to JS Array data structure
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((child) => {
//           expenses.push({
//             id: child.key,
//             ...child.val()
//           })
//         });
//         console.log(expenses)
//     })
//     .catch((e) => {
//         console.log('1. ERROR FETCHING INITAL DATA: ', e)
//     })

//convert ans subscribe Firebase data structure to JS Array data structure
// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((child) => {
//           expenses.push({
//             id: child.key,
//             ...child.val()
//           })
//         });
//         console.log(expenses)
//       }, (e) => {
//     console.log('2. ERROR Fetching Updated Data: ', e)
// })

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// })
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 40000
// })
// database.ref('expenses').push({
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 80000
// })




  // database.ref('notes/-LQKwf_VTYJadRObDI6h').update({
//     body: 'Ready story again'
// })


//   database.ref('notes').push({
//       title: 'Topics',
//       body: 'Read story'
//   })


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(summaryMessage(snapshot.val()))
// }, (e) => {
//     console.log('ERROR data fetching: ', e)
// })

// const summaryMessage = (data) => {
//     return `${data.name} is a ${data.job.title} at ${data.job.company}`
// }
// database.ref().off(onValueChange)

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//   }).catch((e)=> {
//       console.log(e)
//   })

//   database.ref().set({
//       name: 'Patrick O',
//       stressLevel: 6,
//       age: 50,
//       job: {
//           title: 'Software Dev',
//           company: 'Pizza'
//       },
//       isSingle: false,
//       location: {
//           city: 'Jax',
//           country: 'US'
//       }
//   }).then(() => {
//         console.log('successful save')
//   }).catch((e) => {
//     console.log('this error occured', e)
//   })  

//database.ref('isSingle').set(null)

// database.ref('isSingle').remove().then(() => {
//     console.log('SUCCESS: removed isSingle')
// }).catch((e) => {
//     console.log('FAILED: Removed isSingle', e.message)
// })

//  database.ref().update({
//     stressLevel: '9',
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//  }).then().catch()

