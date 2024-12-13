document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchBar').value.trim();
    
    if (query) {
        document.getElementById('results').innerHTML = `Searching for: ${query}`;
        
        // Predefined symptoms and solutions (for testing)
        const healthData = {
            "sore throat": "Gargle warm salt water, drink soothing teas, and avoid irritants like smoke.",
            "headache": "Try resting in a dark, quiet room, and stay hydrated.",
            "fever": "Rest, hydrate, and take fever-reducing medications if necessary. If the fever persists, consult a doctor.",
            "fatigue": "Ensure you're getting enough sleep, eat a balanced diet, and consider mild exercise."
        };

        // Check if the query matches any predefined symptom
        if (healthData[query.toLowerCase()]) {
            document.getElementById('results').innerHTML = healthData[query.toLowerCase()];
        } else {
            document.getElementById('results').innerHTML = "Sorry, no solutions found for that symptom.";
        }
    } else {
        alert('Please enter a query!');
    }
});