/*Adding a New Item into the To-do List-----
  Function for entering the new item
*/
const addItem = () => {
  let popup = prompt("Enter Your Task");
  return listItem(popup);
};

//Function for adding the new Item for the To-do List

const listItem = (val) => {
  let ul = document.getElementById("item");
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(val));
  setAttributes(li, { id: "child-attr", onclick: "dropEle()" });
  return ul.appendChild(li);
};

// Function for dropping the completed items from the list

const dropEle = () => {
  const completed = (document.getElementById(
    "child-attr"
  ).style.textDecorationLine = "line-through");
  const extStyle = (document.getElementById("child-attr").style.border =
    "unset");
  return {
    completed: completed,
    extStyle: extStyle,
  };
};
