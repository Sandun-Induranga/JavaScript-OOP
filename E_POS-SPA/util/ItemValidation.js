/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/

$("#itemCode").focus();

// item reguler expressions
const itemCodeRegEx = /^(I00-)[0-9]{1,3}$/;
const itemNameRegEx = /^[A-z ]{5,20}$/;
const itemQtyRegEx = /^[0-9]{1,7}$/;
const itemPriceRegEx = /^[0-9]{1,}[.]?[0-9]{1,4}$/;

let itemValidations = [];

itemValidations.push({
    reg: itemCodeRegEx, field: $("#itemCode"), error: "Item Code is a required field : Pattern I00-000"
});

itemValidations.push({
    reg: itemNameRegEx, field: $("#itemName"), error: 'Item Name is a required field : Mimimum 5, Max 20, Spaces Allowed'
});

itemValidations.push({
    reg: itemQtyRegEx, field: $("#itemQty"), error: 'Item Qty is a required field : only numbers'
});

itemValidations.push({
    reg: itemPriceRegEx, field: $("#itemPrice"), error: 'Item Price is a required field : Pattern 100.00 or 100'
});


//disable tab key of all four text fields using grouping selector in CSS
$('#itemCode,#itemName,#itemQty,#itemPrice').on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#btnItem').click(function () {
    saveItem(getItemInputData());
});


$('#itemCode,#itemName,#itemQty,#itemPrice').on('keyup', function (event) {
    checkItemValidity();
});

$('#itemCode,#itemName,#itemQty,#itemPrice').on('blur', function (event) {
    checkItemValidity();
});


$("#itemCode").on('keydown', function (event) {
    if (event.key == "Enter" && checkItem(itemCodeRegEx, $("#itemCode"))) {

        let typedId = $("#itemCode").val();
        let item = searchItem(typedId);
        if (item != null) {
            searchItemWithCode();
        } else {
            focusText($("#itemName"));
        }
    } else {
        focusText($("#itemCode"));
    }
});


$("#itemName").on('keydown', function (event) {
    if (event.key == "Enter" && checkItem(itemNameRegEx, $("#itemName"))) {
        focusText($("#itemQty"));
    }
});


$("#itemQty").on('keydown', function (event) {
    if (event.key == "Enter" && checkItem(itemQtyRegEx, $("#itemQty"))) {
        focusText($("#itemPrice"));
    }
});


$("#itemPrice").on('keydown', function (event) {
    if (event.key == "Enter" && checkItem(itemPriceRegEx, $("#itemPrice"))) {
        let res = confirm("Do you want to add this item.?");
        if (res) {
            saveItem(getItemInputData());
            clearAllItemTexts();
        }
    }
});


function checkItemValidity() {
    let errorCount = 0;
    for (let validation of itemValidations) {
        if (checkItem(validation.reg, validation.field)) {
            textItemSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setItemTextError(validation.field, validation.error);
        }
    }
    setItemButtonState(errorCount);
}

function checkItem(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setItemTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textItemSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultItemText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultItemText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}



function setItemButtonState(value) {
    if (value > 0) {
        $("#btnItem").attr('disabled', true);
    } else {
        $("#btnItem").attr('disabled', false);
    }
}

function clearAllItemTexts() {
    $("#itemCode").focus();
    $('#itemCode,#itemName,#itemQty,#itemPrice').val("");
    checkItemValidity();
}
