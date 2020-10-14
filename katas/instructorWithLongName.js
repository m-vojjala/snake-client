const instructorWithLongestName = function (instructors) {
  let longestName = [];
  for (let i = 0; i < instructors.length; i++) {

    // console.log('Iteration:' + i);    
    // console.log(longestName);
    // console.log(longestName.name);
    // console.log(instructors[i].name.length);

    if (instructors[i].name.length > longestName.length) {
      longestName = instructors[i].name;

      //  console.log('Annnnnnd the longest name goes to: '+ longestName)
    }
  }
  return longestName;

}

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));