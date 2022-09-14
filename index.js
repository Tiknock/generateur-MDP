const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!./èé(&àç_?,;:§$£%ù*µ";
const rangeValue = document.getElementById("password-lenght");
const passwordOutput = document.getElementById("password-output");


const generatePassword = () => {
    let data = [];
    let password = "";
    if (lowercase.checked) data.push(...dataLowerCase);
    if (uppercase.checked) data.push(...dataUpperCase); 
    if (numbers.checked) data.push(...dataNumbers); 
    if (symbols.checked) data.push(...dataSymbols); 

    if (data.length === 0) {
        alert('Veuillez sélectionner des critères');
        return;
    }
    for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)]
    }
    
    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy');
    
    generateButton.textContent = "Copié !"
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    },2000)
}

generateButton.addEventListener('click', generatePassword)