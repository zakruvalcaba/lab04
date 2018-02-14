/*eslint-env browser*/

//GLOBAL VARIABLES
var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newInvoiceTotal;

//DISPLAY MESSAGE
window.document.write("<h3>Welcome to the Invoice Application</h3>");

//ASK USER FOR CUSTOMER TYPE AND INVOICE TOTAL
customerType = window.prompt("Enter customer type (r/w)");
invoiceTotal = parseFloat(window.prompt("Enter invoice total"));

//CHECK IF RETAIL OR WHOLESALE CUSTOMER
if (customerType === "r") {
    //CHECK INVOICE TOTAL AND SET DISCOUNT PERCENT
    if (invoiceTotal > 0 && invoiceTotal < 100) {
        discountPercent = 0;
    } else if (invoiceTotal >= 100 && invoiceTotal < 250) {
        discountPercent = 0.1;
    } else if (invoiceTotal >= 250 && invoiceTotal < 500) {
        discountPercent = 0.2;
    } else {
        discountPercent = 0.25;
    }
} else if (customerType === "w") {
    //CHECK INVOICE TOTAL AND SET DISCOUNT PERCENT
    if (invoiceTotal > 0 && invoiceTotal < 500) {
        discountPercent = 0.4;
    } else {
        discountPercent = 0.5;
    }
} else {
    discountPercent = 0;
}

//PERFORM CALCULATIONS
discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

//DISPLAY RESULTS
window.document.write("Invoice total: $" + invoiceTotal + "<br>");
window.document.write("Discount percent: " + discountPercent * 100 + "%<br>");
window.document.write("Discount amount: $" + discountAmount + "<br>");
window.document.write("New invoice total: $" + newInvoiceTotal);