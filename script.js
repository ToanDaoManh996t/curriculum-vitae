// const input = document.querySelector("input");
// const defaultText = document.getElementById("default");
// const debounceText = document.getElementById("debounce");
// const throttleText = document.getElementById("throttle");

// const updateDebounceText = debounce((text) => {
//   debounceText.textContent = text;
// });
// const updateThrottleText = throttle((text) => {
//   throttleText.textContent = text;
// });
// input.addEventListener("input", (e) => {
//   defaultText.textContent = e.target.value;
//   updateDebounceText(e.target.value);
//   updateThrottleText(e.target.value);
// });

// function debounce(cb, delay = 1000) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// }

// function throttle(cb, delay = 1000) {
//   let shouldWait = false;
//   let waitingArgs;
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false;
//     } else {
//       cb(...waitingArgs);
//       waitingArgs = null;
//       setTimeout(timeoutFunc, delay);
//     }
//   };
//   return (...args) => {
//     if (shouldWait) {
//       shouldWait = waitingArgs;
//       return;
//     }
//     cb(...args);
//     shouldWait = true;
//     setTimeout(timeoutFunc, delay);
//   };
// }

// let baseURL = "https://jsonplaceholder.typicode.com/users";

// const getPeopleAPI = async () => {
//   try {
//     const response = await fetch(baseURL);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const json = await response.json();
//     console.log(json);
//   } catch (err) {
//     console.log(`Couldn't get ${err}`);
//   }
// };

// const getData = getPeopleAPI();
// console.log(getData);
let arr = [1, 2, 3, 4, 5, 6];
let K = 10;

function resloved(K, arr) {
  // Write your code here
  let smallArr = [];
  let sumSmallArr;
  let count = 0;
  if (arr.length <= 3) {
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    smallArr = smallArr.push(arr[i]);
    console.log(smallArr);

    if (smallArr.length == 3) {
      sumSmallArr = smallArr.reduce((item, base = 0) => item + base);
      if (sumSmallArr == K) {
        arr = arr.filter(function (val) {
          return smallArr.indexOf(val) == -1;
        });
      }
      count++;
    }
    resloved(K, arr);
  }
}

resloved(K, arr);
