//How to set multiple Attributes

const setAttributes = (ele, attr) => {
  for (const key in attr) {
    ele.setAttribute(key, attr[key]);
  }
};
