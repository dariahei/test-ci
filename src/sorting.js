const sorting = function (data) {
  // data = [];  
  data.sort(function (a, b) {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
  return data;
};

export default sorting;