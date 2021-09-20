const showNumber = (number) => {
  if (typeof number === "number") {
    return number;
  } else {
    const result = "This is not a number";
    return result;
  }
};

export { showNumber };
