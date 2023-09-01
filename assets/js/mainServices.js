import services from "./servicesData.js";

// Function to map data to HTML using template literals
function mapDataToHTML(data) {
  return data.map((service) => `
    <div class="swiper-slide">
      <div class="service-card style-three">
        <span class="service-img">
          <img src="${service.image}" alt="Image">
        </span>
        <div class="service-info">
          <img src="assets/img/services/service-card-shape.webp" alt="Image" class="service-card-shape">
          <span class="service-count">${service.serviceCount}</span>
          <h3><a href="dentist-details.html?id=${service.id}&name=${service.serviceName}">${service.serviceName}</a></h3>
          <p>${service.serviceDescription}</p>
          <a href="dentist-details.html?id=${service.id}&name=${service.serviceName}" class="btn-three">Read More<i class="flaticon-right-arrow"></i></a>
        </div>
      </div>
    </div>`
  ).join("");
}

const mainServices = document.getElementById("mainServices");
mainServices.innerHTML = mapDataToHTML(services); // Assuming you want to use the data from the 'services' module
