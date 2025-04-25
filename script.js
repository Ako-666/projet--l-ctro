// Constante : Permittivité du vide  
const EPSILON_0 = 8.854e-12;  

// Fonction pour afficher une section  
function showSection(sectionId) {  
    const sections = document.querySelectorAll('.content');  
    sections.forEach(section => section.classList.add('hidden')); // Masque toutes les sections  
    const selectedSection = document.getElementById(sectionId);  
    selectedSection.classList.remove('hidden'); // Affiche la section sélectionnée  
}  

// Fonction pour révéler la barre de navigation  
function revealNav() {  
    document.getElementById('nav-bar').classList.remove('hidden');  
    document.getElementById('initial-choice').classList.add('hidden'); // Masque la section de choix initial  
}  

// Calcul pour une charge ponctuelle  
function calculateSingleCharge() {  
    const q = parseFloat(document.getElementById('charge').value);  
    const r = parseFloat(document.getElementById('distance').value);  

    // Vérification des entrées  
    if (isNaN(q) || isNaN(r) || r <= 0) {  
        alert("Veuillez entrer des valeurs valides pour la charge et la distance.");  
        return;  
    }  

    const potential = q / (4 * Math.PI * EPSILON_0 * r); // Calcul du potentiel  
    document.getElementById('result-single').innerHTML = `  
        <p>Le potentiel au point est : <strong>${potential.toExponential(4)} V</strong></p>  
    `;  
}  

// Ajout dynamique pour les charges multiples  
let chargeCount = 0;  
function addChargeInput() {  
    const container = document.getElementById('charges-container');  
    chargeCount++;  
    const div = document.createElement('div');  
    div.innerHTML = `  
        <label>Charge $ q_${chargeCount} $ (C) :</label>  
        <input type="number" id="charge-${chargeCount}" placeholder="Exemple : 1e-6">  
        <label>Distance $ r_${chargeCount} $ (m) :</label>  
        <input type="number" id="distance-${chargeCount}" placeholder="Exemple : 0.1">  
    `;  
    container.appendChild(div); // Ajoute les champs de saisie dynamiquement  
}  

function calculateMultipleCharges() {  
    let totalPotential = 0;  

    // Traite chaque charge  
    for (let i = 1; i <= chargeCount; i++) {  
        const q = parseFloat(document.getElementById(`charge-${i}`).value);  
        const r = parseFloat(document.getElementById(`distance-${i}`).value);  

        // Vérification des entrées  
        if (isNaN(q) || isNaN(r) || r <= 0) {  
            alert(`Valeurs invalides pour la charge ou distance n°${i}.`);  
            return;  
        }  

        totalPotential += q / (4 * Math.PI * EPSILON_0 * r); // Ajoute le potentiel de chaque charge  
    }  

    document.getElementById('result-multiple').innerHTML = `  
        <p>Le potentiel total est : <strong>${totalPotential.toExponential(4)} V</strong></p>  
    `;  
}  

// Calcul pour une distribution continue  
function calculateContinuousDistribution() {  
    const density = parseFloat(document.getElementById('density').value);  
    const r = parseFloat(document.getElementById('distance-continuous').value);  

    // Vérification des entrées  
    if (isNaN(density) || isNaN(r) || r <= 0) {  
        alert("Veuillez entrer des valeurs valides pour la densité et la distance.");  
        return;  
    }  

    const potential = density / (4 * Math.PI * EPSILON_0 * r); // Calcul du potentiel  
    document.getElementById('result-continuous').innerHTML = `  
        <p>Le potentiel est : <strong>${potential.toExponential(4)} V</strong></p>  
    `;  
}