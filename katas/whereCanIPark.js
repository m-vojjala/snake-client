const whereCanIPark = function (spots, vehicle) {
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (vehicle === "regular" && spots[i][j] === "R") {
        return [i, j]
      } else if (vehicle === "small") {
        if (spots[i][j] === "R" || spots[i][j] === "S") {
          return [i, j];
        }
      } else if (vehicle === "MotorCycle") {
        if (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
          return [i][j];
        }
      }
    }
  }
  return false;
}















console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));
console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));