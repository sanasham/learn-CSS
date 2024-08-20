// // const myid = document.getElementById("test");
// // console.log(myid);
// //console.log(myid.innerHTML);

// // const para = document.querySelector("#p1");
// // console.log(para.innerHTML);
// // para.outerHTML = "test";

// const mydiv = document.getElementById("mydiv");
// const newElement = document.createElement("button");
// newElement.setAttribute("type", "button");
// newElement.setAttribute("id", "btn");
// newElement.innerHTML = "Click Me!";
// mydiv.appendChild(newElement);
// newElement.addEventListener("click", function () {
//   console.log("Esub vali clicked me");
// });
// const myEvent = new CustomEvent("myCustomEvent", {
//   detail: "Custom event triggered",
// });
// newElement.addEventListener("myCustomEvent", () => {
//   console.log("my custom event fired");
// });

// console.log(myEvent);

// newElement.dispatchEvent(myEvent);

// // // code-1
// // const t1 = performance.now();

// // for (let i = 1; i <= 100; i++) {
// //   const custElement = document.createElement("p");

// //   custElement.innerHTML = "paragraph :" + i;
// //   mydiv.appendChild(custElement);
// // }

// // // end code-1

// // const t2 = performance.now();
// // console.log(t2 - t1);

// // code-1
// const t3 = performance.now();
// const customDiv = document.createElement("div");
// for (let i = 1; i <= 100; i++) {
//   const custElement = document.createElement("p");

//   custElement.innerHTML = "paragraph :" + i;
//   customDiv.appendChild(custElement);
// }
// mydiv.appendChild(customDiv);

// // end code-1
// const t4 = performance.now();

// console.log(t4 - t3);
