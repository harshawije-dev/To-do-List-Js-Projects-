//Set multiple Attributes

const setAttributes = (ele, attr) => {
  for (const key in attr) {
    return ele.setAttribute(key, attr[key]);
  }
};
