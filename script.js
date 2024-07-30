// Function iterateWithAsyncAwait
const values = ['val1','val2','val3'] ;

function wait (ms) {
    return new promise (resolve => setTimeout(resolve ,ms)); 
}
async function iterateWithAsyncAwait () {
    for (const value of values) {
      console.log(value)
      await wait(1000) 
    }
}
iterateWithAsyncAwait()



// Function Awaiting a Call
async function awaitCall() {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const data = { message: 'Data fetched with success' };
          resolve(data); }, 3000); 
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  awaitCall();

// TASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSK 3  
  function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 1 DOneee");
            resolve();
        }, 1000); 
    });
}
function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 2 Doneee");
            resolve();
        }, 1000);
    });
}
function asyncFunction3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Function 3 Doneee");
            resolve();
        }, 1000); 
    });
}

async function chainedAsyncFunctions() {
    await asyncFunction1(); 
    await asyncFunction2(); 
    await asyncFunction3(); 
}
chainedAsyncFunctions();