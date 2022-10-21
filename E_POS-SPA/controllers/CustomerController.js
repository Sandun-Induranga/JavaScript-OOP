/**
 * @author : Sanu Vithanage
 * @since : 0.1.0
 **/


$("#btnCusDelete").click(function () {
    let deleteID = $("#txtCustomerID").val();
    let option = confirm("Do you really want to delete Customer ID :" + deleteID);
    if (option) {
        if (deleteCustomer(deleteID)) {
            alert("Customer Successfully Deleted..");
            setTextFieldValues("", "", "", "");
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});


$("#btnGetAll").click(function () {
    loadAllCustomers();
});

$("#btnUpdate").click(function () {
    let customerID = $("#txtCustomerID").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
        setTextFieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


//load all customers
function loadAllCustomers() {
    //remove all the table body content before adding data
    $("#tblCustomer").empty();

    // get all customer records from the array
    for (var customer of customers) {
        // console.log(customer);// customer object

        // add those data to the table row
        // var row= "<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";

        // Using String Literals to do the same thing as above
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblCustomer").append(row);

        bindRowClickEvents();
        loadAllCustomersForOption();
    }
}

function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();
        // console.log(id, name, address, salary);

        //setting table details values to text fields
        $('#txtCustomerID').val(id);
        $('#txtCustomerName').val(name);
        $('#txtCustomerAddress').val(address);
        $('#txtCustomerSalary').val(salary);

    });
}


function getCustomerInputData() {
    let c = Object.assign({}, customer);
    c.id = $("#txtCustomerID").val();
    c.name = $("#txtCustomerName").val();
    c.address = $("#txtCustomerAddress").val();
    c.salary = $("#txtCustomerSalary").val();
    return c;
}


function searchCustomerWithID() {
    let typedId = $("#txtCustomerID").val();
    let customer = searchCustomer(typedId);
    if (customer != null) {
        setTextFieldValues(customer.id, customer.name, customer.address, customer.salary);
    } else {
        alert("There is no Customer available for ID: " + typedId);
        setTextFieldValues("", "", "", "");
    }
}


function setTextFieldValues(id, name, address, salary) {
    $("#txtCustomerID").val(id);
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#txtCustomerSalary").val(salary);
}


function saveCustomer(customerOb) {
    // let newCustomer = Object.assign({}, customer);
    customer.id = customerOb.id;
    customer.name = customerOb.name;
    customer.address = customerOb.address;
    customer.salary = customerOb.salary;
    customers.push(customer);
    loadAllCustomers();
}

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;
}

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#txtCustomerID").val();
        customer.name = $("#txtCustomerName").val();
        customer.address = $("#txtCustomerAddress").val();
        customer.salary = $("#txtCustomerSalary").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}
