const nameInput = document.getElementById("halima");
const btn = document.getElementById("btn");
const myResult = document.querySelector(`.four`);

btn.addEventListener("click", async (e) => {
  btn.textContent = `Loading...`;
  e.preventDefault();
  //   btn.setAttribute("disabled", true);
  const theName = nameInput.value;
  console.log(theName);

  try {
    const response = await fetch(`https://api.nationalize.io/?name=${theName}`);
    const data = await response.json();
    const { name, country } = data;

    const theCountries = country.map(
      (item) => `${item.country_id} (${(item.probability * 100).toFixed(1)}%)`,
    );

    btn.textContent = `Search`;
    myResult.textContent = `${name} is from ${theCountries}`;
    console.log(data);
  } catch (error) {
    console.log(error, "something went wrong");
  }
});
