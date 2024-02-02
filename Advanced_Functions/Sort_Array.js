function sortArray(data, command) {
  switch (command) {
    case "asc":
      return ascending(data);
      /* console.log(ascending(data)); break;*/
    case "desc":
      return descending(data);
      /* console.log(descending(data); break;*/
  }

  function ascending(arr) {
    return arr.sort((a, b) => a - b);
  }

  function descending(arr) {
    return arr.sort((a, b) => b - a);
  }
}

sortArray([3, 1, 2, 10], "asc");
sortArray([14, 7, 17, 6, 8], "desc");
