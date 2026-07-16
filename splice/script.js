let arr = [1, 7, 3, 1, 0, 20, 77];
let string = JSON.stringify(arr);


let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

spliceBtn.onclick = function() {
    let startIndexVal = startIndexInput.value;
    let deleteCoutVal = deleteCountInput.value;
    let itemToAddval = itemToAddInput.value;
    if (startIndexVal === "") {
        return alert("input satrt index");
    } else {

        if (itemToAddval === "") {
            arr.splice(parseInt(startIndexVal), parseInt(deleteCoutVal));
        } else {
            arr.splice(parseInt(startIndexVal), parseInt(deleteCoutVal), itemToAddval);
        }


        updatedArray.textContent = JSON.stringify(arr);
        let updatedarrayel = updatedArray.textContent;
    }
};