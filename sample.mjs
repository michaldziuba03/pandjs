import { assert, assertStrictEqual, assertThrows } from 'std:assert';

function willThrow() {
  throw new Error("Some error");
}

assertThrows(willThrow);
assert(2 + 2 == 4);
assertStrictEqual(2, 2);
console.log(`Platform is ${Runtime.platform} and pid is: ${Runtime.pid}`);
console.log(`Cwd is: ${Runtime.cwd()} and runtime version is: ${Runtime.version}`);
console.log("Hi");
console.log(import.meta.resolve('./'));
console.log(`Dirname: ${import.meta.dirname}`)
console.log(`Filename: ${import.meta.filename}`);
console.log(`Url: ${import.meta.url}`);
