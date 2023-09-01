
import dentists from './dentistData.js';

// Function to map data to HTML using template literals
function mapDataToHTML(data) {
    return data.map(dentist => `
    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
    <div class="team-card style-one">
        <img src="${dentist.image}" alt="Image">
        <div class="team-info">
            <h3><a href="dentist-details.html?id=${dentist.id}${dentist.name}">${dentist.name}</a></h3>
            <span>${dentist.specialization}</span>
            <ul class="social-profile list-style">
                <li><a href="https://www.fb.com/" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                <li><a href="https://www.twitter.com/" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i class="ri-instagram-line"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
            </ul>
        </div>
    </div>
</div>
    `).join("");
}

const dentistListContainer = document.getElementById('dentistList');
dentistListContainer.innerHTML = mapDataToHTML(dentists);
