// Conversion functions
function convert(value, fromUnit, toUnit) {
    // Convert everything to inches first
    let inches;
    
    switch(fromUnit) {
        case 'inches':
            inches = value;
            break;
        case 'feet':
            inches = value * 12;
            break;
        case 'yards':
            inches = value * 36;
            break;
    }
    
    // Convert from inches to target unit
    let result;
    switch(toUnit) {
        case 'inches':
            result = inches;
            break;
        case 'feet':
            result = inches / 12;
            break;
        case 'yards':
            result = inches / 36;
            break;
    }
    
    return result;
}

// Format the unit name for display
function formatUnit(unit) {
    return unit.charAt(0).toUpperCase() + unit.slice(1);
}

// Main conversion function
function performConversion() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document. getElementById('toUnit').value;
    const resultDiv = document.getElementById('result');
    
    // Validation
    if (isNaN(value) || value === '') {
        resultDiv.textContent = '⚠️ Please enter a valid number';
        resultDiv.style.color = '#e74c3c';
        return;
    }
    
    if (fromUnit === toUnit) {
        resultDiv.textContent = `${value} ${formatUnit(fromUnit)} = ${value} ${formatUnit(toUnit)}`;
        resultDiv.style.color = '#667eea';
        resultDiv.classList.add('show');
        return;
    }
    
    // Perform conversion
    const result = convert(value, fromUnit, toUnit);
    const roundedResult = Math.round(result * 100) / 100; // Round to 2 decimal places
    
    // Display result
    resultDiv.textContent = `${value} ${formatUnit(fromUnit)} = ${roundedResult} ${formatUnit(toUnit)}`;
    resultDiv.style.color = '#667eea';
    resultDiv.classList.add('show');
}

// Event listeners
document.getElementById('convertBtn').addEventListener('click', performConversion);

// Allow Enter key to trigger conversion
document.getElementById('value').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performConversion();
    }
});

// Clear result when inputs change
document.getElementById('fromUnit').addEventListener('change', function() {
    document.getElementById('result').textContent = '';
});

document.getElementById('toUnit').addEventListener('change', function() {
    document.getElementById('result').textContent = '';
});

document.getElementById('value').addEventListener('input', function() {
    document.getElementById('result').textContent = '';
});