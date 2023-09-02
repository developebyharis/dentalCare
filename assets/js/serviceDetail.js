import services from "./servicesData.js";

const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('id');

function findServiceById(id) {
    return services.find((service => service.id === parseInt(id)));

}

function displayServiceDetail(service) {
    const serviceDetailContainer = document.getElementById('serviceDetail');
    serviceDetailContainer.innerHTML = `<div class="row gx-5">
    <div class="col-xl-4 order-xl-1 order-lg-2 order-md-2 order-2">
        <div class="sidebar">

            <div class="sidebar-widget style-two">
                <div class="contact-widget">
                    <img src="assets/img/contact-bg.webp" alt="Image">
                    <div class="contact-info">
                        <h3>How Can We Help</h3>
                        <p>If you need any helps, please feel free to contact us.</p>
                        <a href="contact.html" class="btn-two">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-8 order-xl-2 order-lg-1 order-md-1 order-1">
        <div class="service-desc">
            <div class="single-img">
                <img src="${service.singleImage}" alt="Image">
            </div>
            <div class="single-para">
                <h2>${service.serviceName}</h2>
                <p>${service.serviceDescription}</p>
            </div>
            <div class="single-para">
                <h5>Purpose:</h5>
                <p>${service.purpose}</p>
            </div>
            <div class="single-para">
                <h5>Watch The Procedure Video</h5>
                <div class="single-img mt-30">
                    <img src="${service.videoThumbnail}" alt="Image">
                    <a class="play-now" href="#quickview-modal" data-bs-toggle="modal"><i class="ri-play-fill"></i>
                        <span class="ripple"></span>
                    </a>
                </div>
                <h5>Procedure:</h5>
                <ul class="feature-list list-style">
                    <li>
                        <span class="inter-heading">${service.serviceProcedure[0].name}:</span>
                        ${service.serviceProcedure[0].procedure}
                    </li>
                    <li>
                        <span class="inter-heading">${service.serviceProcedure[1].name}:</span>
                        ${service.serviceProcedure[1].procedure}
                    </li>
                    <li>
                        <span class="inter-heading">${service.serviceProcedure[2].name}:</span>
                        ${service.serviceProcedure[2].procedure}
                    </li>

                </ul>
            </div>
            <div class="single-para">
                <h5>Frequency:</h5>
                <p>${service.frequency}</p>
            </div>
            <div class="single-para">
                <h5>Benefits:</h5>
                <ul class="feature-list list-style">
                    <li>
                        <span class="inter-heading">${service.serviceImportance[0].name}:</span>
                        ${service.serviceImportance[0].importance}
                    </li>
                    <li>
                        <span class="inter-heading">${service.serviceImportance[1].name}:</span>
                        ${service.serviceImportance[1].importance}
                    </li>
                    <li>
                        <span class="inter-heading">${service.serviceImportance[2].name}:</span>
                        ${service.serviceImportance[2].importance}
                    </li>
                    <li>
                        <span class="inter-heading">${service.serviceImportance[3].name}:</span>
                        ${service.serviceImportance[3].importance}
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</div>
<div class="modal fade" id="quickview-modal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="quickview-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <button type="button" class="btn_close" data-bs-dismiss="modal" aria-label="Close">
                <i class="ri-close-line"></i>
            </button>
            <div class="modal-body">
                <div class="video-popup">
                    <iframe width="885" height="498" src="${service.serviceVideo}" title="${service.serviceName}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</div>`
}

const selectedService = findServiceById(serviceId);
if (selectedService) {
    displayServiceDetail(selectedService);

} else {
    window.location.href = '/error-404.html';
}