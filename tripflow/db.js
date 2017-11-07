const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDFqeomnCXYFfuIj3iSf5NpHBgRDUXGB4k',
  authDomain: "tripflow-1509338122882.firebaseapp.com",
  databaseURL: 'https://tripflow-1509338122882.firebaseio.com/',
}
firebase.initializeApp(FIREBASE_CONFIG);


const database = firebase.database();


/*
let x1 = database.ref('/Write').set({
  hello: 'world',
  abc: [1, 2, 3]
});
console.log('x1', x1)
x1.then( d => {
  console.log('finished x1', d)
})
*/


function readDB(path) {
  return database.ref(path).once('value')
}

function writeDB(path, value) {
  return database.ref(path).set(value)
}


/*
writeDB('/Test/promise-test', {'hello': 'world'}).then( () => {
  console.log('finished')
  readDB('/Test/promise-test').then( d => {
    console.log('reading', d.val())
  })
})
*/
