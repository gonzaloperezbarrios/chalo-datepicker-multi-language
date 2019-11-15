const range = (min, max) => {
  let minTemp = "";
  let maxTemp = "";
  if (min !== undefined && max !== undefined) {
    minTemp = min;
    maxTemp = max;
  } else if (min !== undefined && max === undefined) {
    minTemp = "09-09-1800";
    maxTemp = min;
  } else if (min === undefined && max !== undefined) {
    minTemp = max;
    maxTemp = "09-09-3000";
  } else {
    return false;
  }
  return {
    from: new Date(minTemp),
    to: new Date(maxTemp)
  };
};

export default range;
