// const nameInput = document.getElementById('halima');
// const btn = document.getElementById('btn');
// const myResult =document.querySelector(`.four`)


// btn.addEventListener("click",async(e)=>{
//     btn.textContent=  `Loading...`
//     e.preventDefault()
//     btn.setAttribute("disabled",true)
//     const theName = nameInput.value;
//     console.log(theName);
//     try {
//         const response = await fetch(`https://api.nationalize.io/?name=${theName}`);
//         const data = await response.json();
//         const {name, country} = data;
//         myResult.textContent = `${name} is from ${country}`
//         console.log(data)
        
//     } catch (error) {
//         console.log(error,"something went wrong")
        
//     }
// })

const nameInput = document.getElementById('halima');
const btn = document.getElementById('btn');
const myResult = document.querySelector('.four');

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    btn.textContent = "Loading...";
    btn.setAttribute("disabled", true);
    
    const theName = nameInput.value;
    console.log(theName);
    
    try {
        const response = await fetch(`https://api.nationalize.io/?name=${theName}`);
        const data = await response.json();
        const { name, country } = data;

        if (country.length === 0) {
            myResult.textContent = `No data available for the name ${name}`;
        } else {
            const countries = country
                .map(c => `${c.country_id} (${(c.probability * 100).toFixed(2)}%)`)
                .join(", ");
            myResult.textContent = `${name} is likely from: ${countries}`;
        }

    } catch (error) {
        console.log(error, "something went wrong");
        myResult.textContent = "An error occurred. Please try again.";
    } finally {
        btn.textContent = "Submit";
        btn.removeAttribute("disabled");
    }
});
