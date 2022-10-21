/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/

$("#txtCustomerID").focus();

// customer reguler expressions
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];

customerValidations.push({
    reg: cusIDRegEx, field: $('#txtCustomerID'), error: 'Customer ID Pattern is Wrong : C00-001'
});

customerValidations.push({
    reg: cusNameRegEx, field: $('#txtCustomerName'), error: 'Customer Name Pattern is Wrong : A-z 5-20'
});

customerValidations.push({
    reg: cusAddressRegEx, field: $('#txtCustomerAddress'), error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});

customerValidations.push({
    reg: cusSalaryRegEx, field: $('#txtCustomerSalary'), error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});


//disable tab key of all four text fields using grouping selector in CSS
$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#btnCustomer").click(function () {
    saveCustomer(getCustomerInputData());
});


$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keyup', function (event) {
    checkValidity();
});

$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('blur', function (event) {
    checkValidity();
});


$("#txtCustomerID").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtCustomerID"))) {

        let typedId = $("#txtCustomerID").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            searchCustomerWithID();
        } else {
            focusText($("#txtCustomerName"));
        }
    } else {
        focusText($("#txtCustomerID"));
    }
});


$("#txtCustomerName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#txtCustomerName"))) {
        focusText($("#txtCustomerAddress"));
    }
});


$("#txtCustomerAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $("#txtCustomerAddress"))) {
        focusText($("#txtCustomerSalary"));
    }
});


$("#txtCustomerSalary").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusSalaryRegEx, $("#txtCustomerSalary"))) {
        let res = confirm("Do you want to add this customer.?");
        if (res) {
            saveCustomer(getCustomerInputData());
            clearAllTexts();
        }
    }
});


function checkValidity() {
    let errorCount = 0;
    for (let validation of customerValidations) {
        if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField, error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

function setButtonState(value) {
    if (value > 0) {
        $("#btnCustomer").attr('disabled', true);
    } else {
        $("#btnCustomer").attr('disabled', false);
    }
}

function clearAllTexts() {
    $("#txtCustomerID").focus();
    $("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").val("");
    checkValidity();
}
