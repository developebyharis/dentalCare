import services from "./servicesData.js";


// Function to truncate the serviceDescription to 50 words and add three dots if it exceeds 50 words
function truncateServiceDescription(description) {
  const words = description.split(" ");
  if (words.length <= 10) {
    return description;
  }
  const truncatedDescription = words.slice(0, 10).join(" ");
  return `${truncatedDescription}...`;
}

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
          <h3><a href="dentist-details.html?id=${service.id}&name=${service.serviceName}"><span>${service.serviceName}</span></a></h3>
          <p>${truncateServiceDescription(service.serviceDescription)}</p>
          <a href="dentist-details.html?id=${service.id}&name=${service.serviceName}" class="btn-three">Read More<i class="flaticon-right-arrow"></i></a>
        </div>
      </div>
    </div>`
  ).join("");
}

const mainServices = document.getElementById("mainServices");
mainServices.innerHTML = mapDataToHTML(services); // Assuming you want to use the data from the 'services' module
