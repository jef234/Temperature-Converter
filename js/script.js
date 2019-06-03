$(document).ready(function () {
    $("#txtFahrenheit").bind('input', function () {
        if (this.value !== "") {
            document.querySelector("#txtCelsius").value = (this.value - 32) * 5 / 9;
        }
    });

    $("#txtCelsius").bind('input', function () {
        if (this.value !== "") {
            document.querySelector("#txtFahrenheit").value = this.value * 9 / 5 + 32;
        }
    });
});