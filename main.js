const input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.value.length < 8) {
    console.log(event.value);

    console.log(
      "Min 8 characters with at insert one capital  letter , a number and a special character"
    );
  } else if (isNaN(event.value.length === 8)) {
    console.log("password is good");
  }
});
