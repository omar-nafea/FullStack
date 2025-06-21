/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
// let start = new Date();
const t0 = performance.now();

// Operation
for (let i = 0; i < 100000; i++) {
    // document.write(`<div>${i}</div>`);
    console.log(`${i}`);
}
const t1 = performance.now();

// Time End
// let end = new Date();

// Operation Duration
// let duration = end - start;
console.log(`Loop Took ${(t1 - t0).toFixed(0)} Milliseconds.`);
// Loop Took 2989 Milliseconds.
// console.log(duration);