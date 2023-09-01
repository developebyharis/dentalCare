import dentists from './dentistData.js';

const dentistsPerPage = 6;
const dentistListContainer = document.getElementById('dentistList');
let currentPage = 1;

// Function to map data to HTML using template literals
function mapDataToHTML(data, page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return data.slice(startIndex, endIndex).map(dentist => `
    <div class="col-xxl-3 col-xl-4 mt-5 col-lg-4 col-md-6">
        <div class="team-card style-one">
            <img src="${dentist.image}" alt="Image">
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
    </div>
    `).join("");
}

// Function to generate pagination links
function generatePaginationLinks(totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `dentists.html?page=${i}`;
        a.textContent = i;
        li.appendChild(a);
        pagination.appendChild(li);
    }

    pagination.querySelector(`li:nth-child(${currentPage}) a`).classList.add('active');
}

function updateDentists() {
    dentistListContainer.innerHTML = mapDataToHTML(dentists, currentPage, dentistsPerPage);
}

const queryParams = new URLSearchParams(window.location.search);
currentPage = parseInt(queryParams.get('page')) || 1; // Get current page from URL parameters

const totalPages = Math.ceil(dentists.length / dentistsPerPage);
const pagination = document.querySelector('.page-nav');

pagination.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName === 'A') {
        currentPage = parseInt(target.textContent);
        updateDentists();

        // Update the active class on the pagination links
        pagination.querySelectorAll('li a').forEach(a => a.classList.remove('active'));
        target.classList.add('active');
    }
});

// Initial setup
generatePaginationLinks(totalPages); // Call this function first to create pagination links
updateDentists(); // Call this function to initially display dentists
