const shoppingList = ["pane", "latte", "farina", "uova", "altro"];
const listContainer = document.getElementById("list-container");

 

let index = 0;

while (index < shoppingList.length + 1 - 1) {
    let listItem = document.createElement("li");
    listContainer.append(listItem);
    listItem.innerHTML = shoppingList[index];
    index++;
}


