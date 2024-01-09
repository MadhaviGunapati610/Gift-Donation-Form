let standardAmount = $("#a").val();;
let inputAmount = parseFloat($("#amount").val().replace('$', '').replace(',', ''));
let frequency = $('#o').val();
$(document).ready(function () {
    $("#a").addClass('selected');
    $("#o").addClass('selected');
})
function selectedAmount(buttonId) {
    $("input[name='giftAmount']").removeClass("selected unSelected");
    inputAmount = 0;
    standardAmount = 0;
    switch (buttonId) {
        case 'a':
            $("#a").addClass("selected");
            standardAmount = $("#a").val();
            break;
        case 'b':
            $("#b").addClass("selected");
            standardAmount = $("#b").val();
            break;
        case 'c':
            $("#c").addClass("selected");
            standardAmount = $("#c").val();
            break;
        default:
            $("#a").addClass("selected");
            standardAmount = $("#a").val();
            break;
    }
    let selectedAmount = $("#" + buttonId).val().replace('$', '');
    if (inputAmount === 0) {
        console.log(inputAmount, "input")
        updateUrlParameter('amount', selectedAmount);
    }
    return standardAmount;
}

function validateCurrency() {
    const amountInput = $('#amount');
    inputAmount = parseFloat(amountInput.val().replace('$', '').replace(',', ''));
    $("input[name='giftAmount']").removeClass("selected unSelected");
    standardAmount = 0;
    if (isNaN(inputAmount) || inputAmount > 10000) {
        amountInput.addClass('is-invalid');
        amountInput.attr('title', "Enter the amount between $5-$10000!");
    } else {
        amountInput.removeClass('is-invalid');
        $("#a").addClass("unSelected");
    }
    updateUrlParameter('amount', inputAmount);
    return inputAmount;
}

function selectedFrequency(frequencyId) {
    $("input[name='frequency']").removeClass("selected unSelected");
    frequency = '';
    switch (frequencyId) {
        case 'o':
            $("#o").addClass("selected");
            frequency = $('#o').val();
            break;
        case 'm':
            $("#m").addClass("selected");
            frequency = $('#m').val();
            break;
        default:
            $("#o").addClass("selected");
            break;
    }
    updateUrlParameter('Frequency', $("#" + frequencyId).val());
    return frequency;
}

function updateUrlOnSubmit(event) {
    event.preventDefault()
    if (standardAmount !== 0) {
        console.log(standardAmount, frequency);
    } else {
        console.log(inputAmount, frequency);
    }
    return false;
}

function updateUrlParameter(key, value) {
    let url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, document.title, url.toString());
}