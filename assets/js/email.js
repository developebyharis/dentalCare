document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send the data to the server for processing
    fetch("process.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Appointment booked successfully!");
        } else {
            alert("Appointment booking failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});