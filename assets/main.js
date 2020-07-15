/*
Adding a New Item into the To-do List-----
You're always welcome to do changes as wish
But, don't forget to give credits
  Function for entering the new item
*/
const addItem = () => {
  let popup = prompt("Enter Your Task");
  //Check the input field is "null" or "cancel"
  if (popup) {
    return listItem(popup);
  } else if (popup === "") {
    alert("User input is empty");
  } else {
    return 1;
  }
};

//Function for adding the new Item for the To-do List

const listItem = (val) => {
  let ul = document.getElementById("item");
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(val));
  setAttributes(li, {
    id: "child-attr",
    onclick: "dropEle(this)",
  });
  return ul.appendChild(li);
};

// Function for dropping the completed items from the list
const dropEle = (e) => {
  return e.setAttribute("class", "child-drop");
};
