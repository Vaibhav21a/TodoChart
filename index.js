
let category = document.getElementById("category");
let categoryContainer = document.getElementById("categoryContainer");
let categoryInput = document.getElementById("categoryInput");
let cancelbtn = document.getElementById("cancel");
let inputContainer = document.getElementById("inputContainer");
inputContainer.removeChild(cancelbtn);
let mainItemContainer = document.getElementById("itemsContainer");
let titleInput = document.getElementById("titleInput");
let timeInput = document.getElementById("timeInput");
let imagesrc = "";
let count = 1;

function exercise() {
    categoryInput.value = "Exercise";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1726909485/exercise_brrbxf.jpg";
};
function running() {
    categoryInput.value = "Running";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1726909485/running_acrqhu.jpg";
};
function cycling() {
    categoryInput.value = "Cycling";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1726909485/cycling_xqevwt.jpg";
};
function meditation() {
    categoryInput.value = "Meditation";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1726909485/meditation_xxc2cz.jpg";
};
function study() {
    categoryInput.value = "Study";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1726909485/study_hdw4ir.jpg";
};
function eating() {
    categoryInput.value = "Eating";
    categoryContainer.removeChild(category);
    inputContainer.appendChild(cancelbtn);
    imagesrc = "https://res.cloudinary.com/dxo05iyyb/image/upload/v1727976351/eat_nvx8hb.jpg";
};

function cancel() {
    categoryInput.value = "";
    categoryContainer.appendChild(category);
    inputContainer.removeChild(cancelbtn);
}

function statusChange(contId,inputId) {
    let containerChange = document.getElementById(contId);
    let inputChange = document.getElementById(inputId);
    containerChange.classList.toggle("bg-change");
}

function deleteCont(mainContId,deleteId) {
    let theContainer = document.getElementById(mainContId);
    let deleteBtn = document.getElementById(deleteId);
    mainItemContainer.removeChild(theContainer);
}

function add() {
    let title = titleInput.value;
    let time = timeInput.value;
    let category = categoryInput.value;

    if ((title === "") || (time === "") || (category === "")) {
        alert("Enter Valid Input!");
        return;
    }
    if (title.length > 25) {
        alert("Sorry, Words Limit is 35!");
        return;
    }

    let mainContId = "mainContainer" + count;
    let contId = "container" + count;
    let inputId = "input" + count;
    let deleteId = "delete" + count; 

    let mainContainer = document.createElement("div");
    mainContainer.classList.add("col-12","col-md-4","mb-3");
    mainContainer.id = mainContId;
    mainItemContainer.appendChild(mainContainer);

    let dflexCont = document.createElement("div");
    dflexCont.classList.add("d-flex","flex-row");
    mainContainer.appendChild(dflexCont);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.classList.add("mr-1");
    inputElement.id = inputId;
    dflexCont.appendChild(inputElement);

    let item = document.createElement("div");
    item.classList.add("item");
    item.id = contId;
    dflexCont.appendChild(item);

    inputElement.onclick = function() {
        statusChange(contId,inputId);
    };

    let paragraphElement = document.createElement("p");
    paragraphElement.classList.add("para");
    paragraphElement.textContent = title;
    item.appendChild(paragraphElement);

    let timeElement = document.createElement("p");
    timeElement.classList.add("head-span");
    timeElement.textContent = "Time: " + time;
    item.appendChild(timeElement);

    let imageContainer = document.createElement("div");
    dflexCont.appendChild(imageContainer);

    let imageElement = document.createElement("img");
    imageElement.src = imagesrc;
    imageElement.classList.add("image");
    imageContainer.appendChild(imageElement);

    let deleteContainer = document.createElement("div");
    dflexCont.appendChild(deleteContainer);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn","btn-outline-warning","ml-1","mt-4");
    deleteButton.textContent = "X"
    deleteButton.id = deleteId;
    deleteContainer.appendChild(deleteButton);

    deleteButton.onclick = function() {
        deleteCont(mainContId,deleteId)
    };

    count = count + 1;

}