import services from "./servicesData.js";

const servicesPerPage = 6;

function mapServicesPage(data, pageNumber, servicesPerPage) {
    const startIndex = (pageNumber - 1) * servicesPerPage;
    const endIndex = startIndex + servicesPerPage;

    return data.slice(startIndex, endIndex).map(service =>
     ` <div class="col-xl-4 col-lg-6 col-md-6">
        <div class="service-card style-three">
            <span class="service-img">
                <img src="${service.image}" alt="Image">
            </span>
            <div class="service-info">
                <img src="assets/img/services/service-card-shape.webp" alt="Image" class="service-card-shape">
                <span class="service-icon">
                    <i class="${service.serviceIcon}"></i>
                </span>
                <h3><a href="service-details.html"><span>${service.serviceName}</span></a></h3>
                <p>${service.serviceDescription}</p>
                <a href="service-details.html" class="btn-three">Read More<i class="flaticon-right-arrow"></i></a>
            </div>
        </div>
    </div>`

    ).join(" ");
}

function generatePaginationLinks(totalPages) {
    const pagination = document.querySelector('.page-nav');

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `services.html?page=${i}`;
        a.textContent = i;
        li.appendChild(a);
        pagination.appendChild(li);
    }

    pagination.querySelector(`li:nth-child(${currentPage}) a`).classList.add('active');
}

const allServices = document.getElementById('allServices');
const queryParams = new URLSearchParams(window.location.search);
const currentPage = parseInt(queryParams.get('page')) || 1;

allServices.innerHTML = mapServicesPage(services, currentPage, servicesPerPage);

const totalPages = Math.ceil(services.length / servicesPerPage);
generatePaginationLinks(totalPages);

const pagination = document.querySelector('.page-nav');

pagination.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName === 'A') {
        currentPage = parseInt(target.textContent);
        allServices.innerHTML = mapServicesPage(services, currentPage, servicesPerPage);

        // Update the active class on the pagination links
        pagination.querySelectorAll('li a').forEach(a => a.classList.remove('active'));
        target.classList.add('active');
    }
});