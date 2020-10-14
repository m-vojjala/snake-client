const checkAir = function (samples, threshold) {
  let dirtySamplesCount = 0;
  for (let sample of samples) {
    // console.log(sample);
    if (sample === "dirty") {
      dirtySamplesCount++;
    }
  }
  //  console.log(dirtySamplesCount);
  if (dirtySamplesCount / samples.length > threshold) {
    console.log("Polluted");
  } else {
    console.log("Clean");
  }
  return dirtySamplesCount;
}



console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));
