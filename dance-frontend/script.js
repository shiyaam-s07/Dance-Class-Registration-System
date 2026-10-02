const form = document.getElementById('danceform');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('dancername').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const danceStyle = document.getElementById('danceStyle').value.trim();
    const skillLevel = document.getElementById('skillLevel').value.trim();
    const batchTiming = document.getElementById('batchTiming').value.trim();
    const city = document.getElementById('city').value.trim();

    // 1. Check for empty fields
    if (name === "" || email === "" || phone === "" || danceStyle === "" || skillLevel === "" || batchTiming === "" || city === "") {
        alert("⚠️ Please fill in all the details!");
        return;
    }

    // 2. Name validation (at least 3 characters)
    if (name.length < 3) {
        alert("⚠️ Please enter a valid name (minimum 3 characters).");
        document.getElementById('dancername').focus();
        return;
    }

    // 3. Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ Please enter a valid email address (e.g. name@example.com).");
        document.getElementById('email').focus();
        return;
    }

    // 4. 10-digit Indian mobile number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("⚠️ Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
        document.getElementById('phone').focus();
        return;
    }

    // JSON payload matching Dancer.java exactly
    const dancer = {
        name: name,
        email: email,
        phone: phone,
        danceStyle: danceStyle,
        skillLevel: skillLevel,
        batchTiming: batchTiming,
        city: city
    };

    // Send POST request to Spring Boot port 8080
    fetch('http://localhost:8080/dancers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dancer)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert(`🎉 Registration Successful!\n\nWelcome to BeatCraft Academy, ${data.name}!\nYour details have been saved to the database.`);
        form.reset(); // Clears form inputs
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("❌ Something went wrong.\nPlease make sure your Spring Boot backend (port 8080) is running!");
    });
});