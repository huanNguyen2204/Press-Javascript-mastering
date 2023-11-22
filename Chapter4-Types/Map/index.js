const numbersOfAlbums = new Map()
  .set("Huan", 4)
  .set('Tool', 6)
  .set('Monster Magnet', 8)
  .set('Ben Harper', 9)
  .set('Queens of the Stone Age', 6);

console.log(numbersOfAlbums.size);

for (let artist of numbersOfAlbums.keys()) {
  console.log(artist);
}

for (let entry of numbersOfAlbums.entries()) {
  console.log(entry[0]);
  console.log(entry[1]);
}

for (let [bandName, _numbersOfAlbums] of numbersOfAlbums) {
  console.log(bandName);
  console.log(_numbersOfAlbums);
}



// const numbersOfAlbums = new Map();

// numbersOfAlbums.set("Huan", 4);
// numbersOfAlbums.set("Tool", 6);
// numbersOfAlbums.set("Monster", 8);
// numbersOfAlbums.set("Ben", 9);
// numbersOfAlbums.set("Queen", 6);

// console.log(numbersOfAlbums.get("Huan"));
// console.log(numbersOfAlbums.get(numbersOfAlbums.size));
// console.log(numbersOfAlbums.has("Tool"));
// numbersOfAlbums.delete("Ben");
// numbersOfAlbums.clear();

// console.log(numbersOfAlbums);

// // const numbersOfAlbums = new Map([
// //   // Create a map ...
// //   // ... based on an array
// //   ["Kyuss", 4],
// //   ["Tool", 6],
// //   ["Monster Magnet", 8],
// //   ["Ben Harper", 9],
// //   ["Queens of the Stone Age", 6],
// // ]);

// // console.log(numbersOfAlbums.size); // Output: 5
// // console.log(numbersOfAlbums);

// // // function extraLongFactorials(n) {
// // //   // Write your code here
// // //   let result = 1;

// // //   while (n !== 0) {
// // //     result *= n;
// // //     n--;
// // //   }

// // //   // console.log(Math.abs(Number(result)));
// // //   console.log((Math.abs(Number(result)) / 1.0e+9).toFixed(4))
// // // }

// // // extraLongFactorials(25);
