import * as firebase from 'firebase';


var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MASSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

//Firebase file will not be responsible for firing actions against db
//Instead Redux actions should be updating redux store as well as db
//So exporting firebase and database objects, to use by redux actions
export { firebase, database as default };

//let expenses = [];

// database.ref('notes')
//     .once('value')
//     .then(
//         (snapshot) => {
//             snapshot.forEach(
//                 (expense) => {
//                     expenses.push({
//                         id: expense.key,
//                         ...expense.val()
//                     });
//                 }
//             );
//         console.log(expenses);  
//         }
//     )
//     .catch(
//         (error) => {
//             console.log('Error occurred while fetching the data', error)
//         }
//     );

// database.ref('expenses').on('value', 
//     (snapshot) => {
//         expenses = [];
//         snapshot.forEach((childSnaphot) => {
//             expenses.push({
//                 id: childSnaphot.key,
//                 ...childSnaphot.val()
//             });
//         });
//         console.log(expenses);
//     },
//     (error) => {
//         console.log('Error occurred while fetching the data', error);
//     }
// );

//child_removed is an event and we are subscribing to only that event
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.val());
});


// database.ref('expenses').push({
//         description: 'First expense',
//         note: 'First Note',
//         amount: 100,
//         createdAt: 100
// });

// database.ref('expenses').push({
//         description: 'Second expense',
//         note: 'Second Note',
//         amount: 200,
//         createdAt: 200
// });

// database.ref('expenses').push({
//         description: 'Third expense',
//         note: 'Third Note',
//         amount: 300,
//         createdAt: 300
// });


//Use on to fetch data whenever data changes in db - Subscription model
//Use database.ref().off() to unsubscribe all subscriptions
// database.ref().on('value', 
//     (snapshot) => { 
//         const data = snapshot.val();
//         console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//     }, 
//     (error) => { 
//         console.log(error); 
//     })

//once() function will fetch for one single time
// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log('Data fetched successfully');
//     console.log(val);
// })
// .catch((error) => {
//     console.log('Error while fetching data', error);
// });
// database.ref().set({
//     name: 'Anil Valavala',
//     age: 29,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Pune',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data saved successfully');
// }).catch((error) => {
//     console.log('Save operation failed', e);
// });

// database.ref('age').set(30);
// database.ref('location/city').set('New York');
// database.ref('attributes').set({
//     height: '191 cms',
//     weight: '75 kgs'
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/country': 'United States of America'
// });

// database.ref('isSingle').remove();