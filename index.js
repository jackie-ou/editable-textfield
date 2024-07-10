const editField = document.querySelector(".edit");
const saveField = document.querySelector(".save");
const editMode = document.querySelector("#editMode");
const displayMode = document.querySelector(".display");

const toggleEditMode = () => {
  saveField.classList.toggle("hidden");
  editField.classList.toggle("hidden");
  displayMode.classList.toggle("hidden");
  editMode.classList.toggle("hidden");
  displayMode.innerText = editMode.value;
};

editMode.value = displayMode.innerText;
editField.addEventListener("click", toggleEditMode);
saveField.addEventListener("click", toggleEditMode);
