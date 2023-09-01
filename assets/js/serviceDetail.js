import services from "./servicesData.js"; 

const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('id');

function findServiceById(id) {
    return services.find((service => service.id === parseInt(id)));

}

function displayServiceDetail(service) {
    const serviceDetailContainer = document.getElementById('serviceDetail');
    serviceDetailContainer.innerHTML = `<div class="row gx-5" >
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
                <p>We are use medication to help patients relax during dental procedures. It’s sometimes referred to as “sleep dentistry,” although that’s not entirely accurate. Patients are usually awake with the exception of those who are under general anesthesia.</p>
                <p>The levels of sedation used include:</p>
                <ul class="feature-list list-style ms-3">
                    <li>Minimal sedation – you are awake but relaxed.</li>
                    <li>Moderate sedation (formerly called “conscious sedation”) – you may slur your words when speaking and not remember much of the procedure.</li>
                    <li>Deep sedation – you are on the edge of consciousness but can still be awakened.</li>
                    <li>General anesthesia – you are completely unconscious.</li>
                </ul>
                <p>Side effects from local anesthetics are very rare, and the anesthetic usually lasts for only a couple of hours. For more information please send us a message or call <a href="tel:08811234567899" class="link-one">(088) +1-123-456-7899.</a></p>
            </div>
            <div class="single-para">
                <h5>Watch Te Procedure Video</h5>
                <div class="single-img mt-30">
                    <img src="assets/img/services/single-service-2.webp" alt="Image">
                    <a class="play-now"  href="#quickview-modal"  data-bs-toggle="modal"><i class="ri-play-fill"></i>
                        <span class="ripple"></span>
                    </a>
                </div>
                <h5>The Procedure Of Cosmetic Dentistry</h5>
                <p>Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals.</p>
                <ul class="feature-list list-style">
                    <li>The patient is anesthetized using local anesthesia such as Carbocaine for short procedures, Lidocaine for medium length sessions, and Marcaine for multiple fillings. Patients with feelings of anxiety may be offered Nitrous Oxide (laughing gas) for the duration of the treatment.</li>
                    <li>The area to be treated is secured by latex sheet that protects the tooth and keeps it dry during the procedure. It also prevents the debris from entering the oral region keeping the patient comfortable. For multiple fillings, when the treatment may require extended period of time</li>
                    <li>The decay is removed using a high-speed handpiece, slow-speed handpiece, laser or the combination of all three devices. The prepared surface may be etched.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat loem odio placerat luctus neque a. Odio pretium faucibus tellus sed nunc sollicitudin dictumst quam.</li>
                </ul>
            </div>
            <div class="single-para">
                <h5>Why Cosmetic Dentistry is Important</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat loem odio placerat luctus neque a. Odio pretium faucibus tellus sed nunc sollicitudin dictumst quam. Eget vestibulum nulla ac ut suspendisse id nunc. Non sollicitudin porta viverra leo tellus a at. Lorem ipsum dolor sit.</p>
            </div>
        </div>
    </div>
</div>`
}

const selectedService = findServiceById(serviceId);
if (selectedService) {
    displayServiceDetail(selectedService);

} else {
    alert(' Service not found');
}