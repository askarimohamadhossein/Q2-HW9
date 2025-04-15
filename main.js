const input = document.getElementById("input");

input.addEventListener("change", function (event) {
  const valueInputLenght = event.target.value.length;
  const valueInput = event.target.value;
  console.log(typeof event.target.value);

  if (valueInputLenght < 8) {
    const pTage = document.createElement("p");
    pTage.textContent =
      "Min 8 characters with at insert one capital letter , a number and special character";
    document.body.appendChild(pTage);
    //     pTage.appendChild(para);
  } else if (valueInput) {
    // valueInput.split("");
    let text = valueInput;
    let hasCapital = false;

    text.split("").forEach((char) => {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasCapital = true;
      }
    });
    if (!hasCapital) {
      const pTag = document.createElement("p");
      pTag.textContent = "Insert one capital letter";
      document.body.appendChild(pTag);
    }
  }
});
