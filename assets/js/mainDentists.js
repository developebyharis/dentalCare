import dentists from "./data.js";

function getOneDentistFromEachSpecilization(data) {
    const dentistBySpecialization = {};

    data.forEach((dentist) => {
        const specialization = dentist.specialization;
        if (!dentistBySpecialization[specialization]) {
            dentistBySpecialization[specialization] = dentist;
        }
    });

    return Object.values(dentistBySpecialization);
}

// Get one dentist from each specialization
const oneDentistFromEachSpecialization =
    getOneDentistFromEachSpecilization(dentists);

// Function to map data to HTML using template literals
function mapDataToHTML(data) {
    return data.map((dentist) => `
<div class="swiper-slide">
    <div class="team-card style-one">
        <div class="team-img">
            <img src="${dentist.image}" alt="Image">
            
        </div>
        <div class="team-info">
            <h3><a href="dentist-details.html?id=${dentist.id}${dentist.name}">${dentist.name}</a></h3>
            <span>${dentist.specialization}</span>
            <ul class="social-profile list-style">
                <li><a href="${dentist.facebook}" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                <li><a href="${dentist.twitter}" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                <li><a href="${dentist.instagram}" target="_blank"><i class="ri-instagram-line"></i></a></li>
                <li><a href="${dentist.linkedin}" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
            </ul>
        </div>
    </div>
</div>`
).join("");
    }

const mainDentist = document.getElementById("mainDentist");
mainDentist.innerHTML = mapDataToHTML(oneDentistFromEachSpecialization);