import './style.css';

// str= "abcd"
// bcda
// cdab
// dabc
// ip = "dcba"
function cyclic(inputString: string): string[] {
  const size = inputString.length;
  const concnate = inputString.concat(inputString);

  let rotations: string[] = [];

  for (let i = 0; i < size; i++) {
    rotations.push(concnate.substring(i, i + size));
  }
  return rotations;
}

const rotations: string[] = cyclic('abcd');

console.log(cyclic('abcd'));

function checkCyclic(input: string) {
  return rotations.includes(input);
}

console.log(checkCyclic('dcba'));
