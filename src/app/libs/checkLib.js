"use srict";

let trim = (x) => {
  let value = String(x);
  return value.replace(/^\s+|\s+$/gm, "");
};
let isEmpty = (value) => {
  let taut;
  if (
    value === null ||
    value === undefined ||
    trim(value) === "" ||
    value.length === 0
  ) {
    taut = true;
  } else {
    taut = false;
  }
  return taut;
};

/**
 * exporting functions.
 */
module.exports = {
  isEmpty: isEmpty
};
