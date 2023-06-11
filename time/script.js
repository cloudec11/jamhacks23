function addNewItem(text) {
  var container = document.getElementById("checklist-container");

  // Create a new div element
  var newItem = document.createElement("div");
  newItem.classList.add("checklist-item");

  // Create a checkbox element
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create a span element for the item text
  var itemText = document.createElement("span");
  itemText.classList.add("checklist-text");
  itemText.classList.add("text-white");
  itemText.textContent = text;

  // Add event listener to the checkbox
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      itemText.classList.add("checked-text");
    } else {
      itemText.classList.remove("checked-text");
    }
  });

  // Create a delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Add event listener to the delete button
  deleteButton.addEventListener("click", function() {
    container.removeChild(newItem);
  });

  // Append the checkbox, item text, and delete button to the new div element
  newItem.appendChild(checkbox);
  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);

  // Append the new div element to the checklist container
  container.appendChild(newItem);
}

function handleAddButtonClick() {
  var itemInput = document.getElementById("item-input");
  var itemText = itemInput.value;

  if (itemText.trim() !== "") {
    addNewItem(itemText);
    itemInput.value = "";
  }
}

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", handleAddButtonClick);
