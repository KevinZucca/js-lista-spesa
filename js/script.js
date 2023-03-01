const shoppingList = ["Pane", "Latte", "Farina", "Uova", "Altro"];
const listContainer = document.getElementById("list-container");

 

let index = 0;

while (index < shoppingList.length + 1 - 1) {
    let listItem = document.createElement("li");
    listContainer.append(listItem);
    listItem.innerHTML = shoppingList[index];
    listItem.classList.add ("list-item")
    index++;
}


