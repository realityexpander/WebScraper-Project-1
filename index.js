const Sheet = require('./sheet');

// function xxx() {
// }

(async function() {
  const sheet = new Sheet()
  try {
    await sheet.load()
    await sheet.addRows([
        { name: "Chris Athanas 8", email:'jimmy@ho.com'},
        { name: "Crap crapasaurus 8", email:'uyyy@hos.com'}
    ])
  } catch(e) {
    console.log(e)
  }
})()

// async function test() {
//   const sheet = new Sheet()

//   await sheet.load()
//   await sheet.addRows([
//       { name: "Chris Athanas", email:'jimmy@ho.com'},
//       { name: "Crap crapasaurus", email:'uyyy@hos.com'}
//   ])
// }
// test()




