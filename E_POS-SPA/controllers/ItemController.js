/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/

$("#btnItemDelete").click(function () {
    let deleteCode = $("#itemCode").val();
    let option = confirm("Do you really want to delete Item Code :" + deleteCode);
    if (option) {
        if (deleteItem(deleteCode)) {
            alert("Item Successfully Deleted..");
            setItemTextFieldValues("", "", "", "");
        } else {
            alert("No such Item to delete. please check the Code");
        }
    }
});


$("#btnItemGetAll").click(function () {
    loadAllItems();
});

$("#btnItemUpdate").click(function () {
    let itemCode = $("#itemCode").val();
    let response = updateItem(itemCode);
    if (response) {
        alert("Item Updated Successfully");
        setItemTextFieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


//load all customers
function loadAllItems() {
    //remove all the table body content before adding data
    $("#tblItem").empty();

    // get all customer records from the array
    for (var item of items) {
        // Using String Literals to do the same thing as above
        var row = `<tr><td>${item.code}</td><td>${item.description}</td><td>${item.qtyOnHand}</td><td>${item.unitPrice}</td></tr>`;
        $("#tblItem").append(row);

        bindItemRowClickEvents();
        // loadAllCustomersForOption();
    }
}

function bindItemRowClickEvents() {
    $("#tblItem>tr").click(function () {
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let qtyOnHand = $(this).children(":eq(2)").text();
        let unitPrice = $(this).children(":eq(3)").text();

        //setting table details values to text fields
        setItemTextFieldValues(code, name, qtyOnHand, unitPrice);

    });
}


function getItemInputData() {
    let i = Object.assign({}, item);
    i.code = $("#itemCode").val();
    i.description = $("#itemName").val();
    i.qtyOnHand = $("#itemQty").val();
    i.unitPrice = $("#itemPrice").val();
    return i;
}


function searchItemWithCode() {
    let typedCode = $("#itemCode").val();
    let item = searchItem(typedCode);
    if (item != null) {
        setItemTextFieldValues(item.code, item.description, item.qtyOnHand, item.unitPrice);
    } else {
        alert("There is no Item available for Code: " + typedCode);
        setItemTextFieldValues("", "", "", "");
    }
}


function setItemTextFieldValues(code, name, qty, unitPrice) {
    $("#itemCode").val(code);
    $("#itemName").val(name);
    $("#itemQty").val(qty);
    $("#itemPrice").val(unitPrice);
}


function saveItem(itemOb) {
    let newItem = Object.assign({}, item);
    newItem.code = itemOb.code;
    newItem.description = itemOb.description;
    newItem.qtyOnHand = itemOb.qtyOnHand;
    newItem.unitPrice = itemOb.unitPrice;
    items.push(newItem);
    loadAllItems();
}

function searchItem(itemCode) {
    for (let item of items) {
        if (item.code == itemCode) {
            return item;
        }
    }
    return null;
}

function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function updateItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        item.code = $("#itemCode").val();
        item.description = $("#itemName").val();
        item.qtyOnHand = $("#itemQty").val();
        item.unitPrice = $("#itemPrice").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }

}
