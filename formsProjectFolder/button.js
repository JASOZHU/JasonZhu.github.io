
function convertPounds() {
    const pounds = parseFloat(document.getElementById('pounds').value); 
    if (isNaN(pounds)) {
        alert("Please enter a valid weight in pounds.");
        return; 
    }
    const grams = pounds * 453.6;

    document.getElementById('convertPounds').innerText = `${grams} grams`;
}

function convertGrams() {
    const grams = parseFloat(document.getElementById('grams').value); 
    if (isNaN(grams)) {
        alert("Please enter a valid weight in grams.");
        return; 
    }
    const pounds = grams*0.002;

    document.getElementById('convertGrams').innerText = `${pounds.toFixed(2)} pounds`;
}