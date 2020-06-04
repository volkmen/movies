import camelCase from "lodash-es/camelCase";

function toCamelCase(o) {
  if (Array.isArray(o)) {
    return o.map((val) => toCamelCase(val));
  }
  if (typeof o !== "object") {
    return o;
  }

  const result = {};
  Object.keys(o).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      const value = o[key];
      if (Array.isArray(value)) {
        result[camelCase(key)] = value.map((val) => toCamelCase(val));
      } else if (
        value &&
        typeof value === "object" &&
        value.constructor === Object
      ) {
        result[camelCase(key)] = toCamelCase(value);
      } else {
        result[camelCase(key)] = value;
      }
    }
  });
  return result;
}

export default toCamelCase;
