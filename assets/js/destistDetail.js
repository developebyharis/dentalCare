
import dentists from './data.js';


        // Get the dentist's ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const dentistId = urlParams.get('id');

        // Function to find a dentist by ID
        function findDentistById(id) {
            return dentists.find(dentist => dentist.id === parseInt(id));
        }

        // Function to display the details of a dentist
        function displayDentistDetails(dentist) {
        
    const dentistDetailContainer = document.getElementById('dentistDetail');
    dentistDetailContainer.innerHTML = `
    <div class="row gx-5">
    <div class="col-xl-4 order-xl-1 order-lg-2 order-md-2 order-2">
    <div class="sidebar">
        <div class="sidebar-widget style-two">
            <div class="single-team-widget">
                <img src="${dentist.image}" alt="Image">
                <div class="single-team-info">
                    <h3>${dentist.name}</h3>
                    <span>${dentist.specialization}</span>
                  
                </div>
            </div>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title">Personal Information</h3>
            <ul class="contact-info list-style">
                <li>
                    <i class="flaticon-phone-call"></i>
                    <a href="tel:968547856254">+968 547856 254</a>
                </li>
                <li>
                    <i class="flaticon-mail"></i>
                    <a href="mailto:${dentist.email}">${dentist.email}</a>
                </li>
                <li>
                    <i class="flaticon-pin"></i>
                    <p>${dentist.location}</p>
                </li>
            </ul>
            <ul class="social-profile list-style">
            <li><a href="${dentist.facebook}" target="_blank"><i class="ri-facebook-fill"></i></a></li>
            <li><a href="${dentist.twitter}" target="_blank"><i class="ri-twitter-fill"></i></a></li>
            <li><a href="${dentist.instagram}" target="_blank"><i class="ri-instagram-line"></i></a></li>
            <li><a href="${dentist.linkedin}" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
            </ul>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title">Skill</h3>
            <div class="progressbar-wrap">
                <div class="progress-item">
                    <div class="progress-title">
                        <p>Dental Prevention</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="max-width: 70%">
                        </div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-title">
                        <p>Shinny Smiles</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style="max-width: 80%">
                        </div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-title">
                        <p>All Ages Visitor</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="max-width: 50%">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xl-8 order-xl-2 order-lg-1 order-md-1 order-1">
    <div class="team-desc">
        <div class="single-para">
            <h2>About Our Doctor</h2>
            <p>${dentist.about}</p>
        </div>
        <div class="single-para">
            <h5>The Procedure Of Cosmetic Dentistry</h5>
            <p>${dentist.procedure}</p>
            <ul class="feature-list list-style">
                <li>${dentist.procedurePoints[0]}</li>
                <li>${dentist.procedurePoints[1]}</li>
                <li>${dentist.procedurePoints[2]}</li>
            </ul>
            <p>${dentist.procedureTwo}</p>
        </div>
        <div class="single-para">
            <h5>Specialty</h5>
            <p>${dentist.specialty}</p>
        </div>
        <div class="single-para">
            <h5>Memberships</h5>
            <p>${dentist.membership}</p>
            <ul class="feature-list list-style">
                <li>${dentist.membershipPoints[0]}</li>
                <li>${dentist.membershipPoints[1]}</li>
                <li>${dentist.membershipPoints[2]}</li>
            </ul>
            <p>${dentist.membershipTwo}</p>
        </div>
        </div>
    </div>
</div>
    `;
}

// Find the selected dentist by ID and display their details
const selectedDentist = findDentistById(dentistId);
if (selectedDentist) {
    displayDentistDetails(selectedDentist);
} else {
    // Handle the case where the dentist with the specified ID was not found
    alert('Dentist not found');
}
