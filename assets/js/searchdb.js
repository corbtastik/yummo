console.log(window.posts);
if (localStorage.getItem('myItem')) {
    // Item exists, do nothing or execute code that depends on the item
    console.log('Item found in local storage, skipping script addition.');
  } else {
    // Item doesn't exist, add the JavaScript
    const script = document.createElement('script');
    script.src = 'your-script.js'; // Path to your JavaScript file
    document.head.appendChild(script); 
    // Alternatively, set script.textContent = 'your javascript code';
    console.log('Item not found, script added.');
  }
// // Store data
// localStorage.setItem('name', 'John Doe');
// localStorage.setItem('age', '30');

// // Retrieve data
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// console.log(`Name: ${name}, Age: ${age}`);

// // Remove data
// localStorage.removeItem('age');

// // Clear all data
// // localStorage.clear();

// // Store and retrieve objects
// const user = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };

// localStorage.setItem('user', JSON.stringify(user));

// const storedUser = JSON.parse(localStorage.getItem('user'));

// console.log(storedUser);

// // Check the number of items in local storage
// const storageLength = localStorage.length;
// console.log(`Number of items in local storage: ${storageLength}`);

// // Get the key at a specific index
// const keyAtIndexZero = localStorage.key(0);
// console.log(`Key at index 0: ${keyAtIndexZero}`);