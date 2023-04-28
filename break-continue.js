const LOREM_LIST = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Amet",
  "Consectetur",
  "Adipisicing",
  "Elit",
];

let counter = 0;

//---Break---

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     break;
//   }
//   console.log(counter);
// }

//---Continue----

// for (; counter < 10; counter++) {
//   if (counter === 5) {
//     continue;
//   }
//   console.log(counter);
// }

const UL_DOM = document.querySelector("#userList");

let index = 0;

//BREAK

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "Dolor") {
//     break;
//   }
//   let LI_DOM = document.createElement("li");
//   LI_DOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(LI_DOM);
// }

//CONTİNUE

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == "Dolor") {
//     continue;
//   }
//   let LI_DOM = document.createElement("li");
//   LI_DOM.innerHTML = LOREM_LIST[index];
//   UL_DOM.append(LI_DOM);
// }
