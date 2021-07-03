import { writable, derived } from "svelte/store";
import wasm from "../../../cumin/Cargo.toml";

let compile = (_src) => {
  return null;
};

export const source = writable("");
export const compiled = derived(source, ($source) => {
  let result = compile($source);
  try {
    return [true, JSON.parse(result)];
  } catch (e) {
    return [false, result];
  }
});

const default_cumin_code = `// Cumin here

// Def of P.
struct P { x: Int, y: Int = 0 }

// P variables.
let p = P(1);  // (1, 0)
let q = P(2, 1);

// Function: Int -> P
let diagonal(x: Int) = P(x, x);

// List of P
[p, q, diagonal(10)]`;

function decodeBase64(code) {
  return decodeURIComponent(escape(atob(code)));
}

wasm().then((module) => {
  compile = module.compile;

  var code = location.hash.slice(1);
  if (code) {
    source.set(decodeBase64(code));
  } else {
    source.set(default_cumin_code);
  }
});
