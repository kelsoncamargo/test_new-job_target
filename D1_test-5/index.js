let original = "word"; 
let reversed = ""; 


for (let i = original.length - 1; i >= 0; i--) {
  reversed += original[i];
}

console.log(reversed);