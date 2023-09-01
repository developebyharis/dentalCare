
import dentists from './dentistData.js';


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
                <li><a href="https://www.fb.com" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                <li><a href="https://www.instagram.com" target="_blank"><i class="ri-instagram-line"></i></a></li>
                <li><a href="https://www.linkedin.com" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://www.twitter.com" target="_blank"><i class="ri-twitter-fill"></i></a></li>
            </ul>
        </div>
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title">Skill</h3>
            <div class="progressbar-wrap">
                <div class="progress-item">
                    <div class="progress-title">
                        <p>Dental Prevention</p>
                        <span class="percent">70%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="max-width: 70%">
                        </div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-title">
                        <p>Shinny Smiles</p>
                        <span class="percent">80%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="max-width: 80%">
                        </div>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-title">
                        <p>All Ages Visitor</p>
                        <span class="percent">50%</span>
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
            <p>Dr. Daniel Michael Green was born in Berlin and educated at Trinity School. He graduated from the Odontoclastic Hyperplasia Disorder in 1985. Shortly after graduation he was one of 3 new graduates to be accepted into a plot intern and registrar program at the newly opened Dental Hospital.During his 3 years at Hospital, Dr. Daniel Michael Green was able to gain invaluable experience.</p>
            <p>Lorem ipsum dollar seat amet demo text all aspects of his field especially cosmetic dentistry and prosthetics karven Passionate in learning languages, he is fluent in both English and Arabic, and also speaks French and some Italianop His interests include sports and history.</p>
        </div>
        <div class="single-para">
            <h5>The Procedure Of Cosmetic Dentistry</h5>
            <p>Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals.</p>
            <ul class="feature-list list-style">
                <li>Routine and medical care and travel medicine.</li>
                <li>Work fewer hours — and make more money</li>
                <li>Hone sharp leadership skills to manage your team</li>
                <li>Cut expenses without sacrificing quality</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat loem odio placerat luctus neque a. Odio pretium faucibus tellus sed nunc sollicitudin dictumst quam.</p>
        </div>
        <div class="single-para">
            <h5>Specialty</h5>
            <p>Dentist is a Responsive One Page WordPress Theme special crafted for dentist, dentist office. We have included all sections that a dental website need. Gallery (before&after), testimonials, doctors, office description, request form, contacts, services. All this stuff is fully editable, you can change colors, fonts, order, images, texts, and no coding skills is necessary. Dentist is built on luplis Framework with drag & drop page builder.</p>
        </div>
        <div class="single-para">
            <h5>Memberships</h5>
            <p>Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals.</p>
            <ul class="feature-list list-style">
                <li>European Society Of Cardiology</li>
                <li>Fellow Royal Society Of Medicine</li>
                <li>British Cardiovascular Society</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat loem odio placerat luctus neque a. Odio pretium faucibus tellus sed nunc sollicitudin dictumst quam.</p>
            <h5>Contact Me</h5>
            <form class="form-wrap" id="contactForm">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Name*" id="name"
                                required data-error="Please enter your name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" name="email" id="email" required
                                placeholder="Email Address*" data-error="Please enter your email">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <textarea name="message" id="message" placeholder="Your Messages.." cols="30" rows="10" required data-error="Please enter your message"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check checkbox">
                            <input
                                name="gridCheck"
                                value="I agree to the terms and privacy policy."
                                class="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                required
                            >
                            <label class="form-check-label" for="gridCheck">
                                I agree to the <a  href="terms-conditions.html">Terms &amp; Conditions</a> and <a  href="privacy-policy.html">Privacy Policy</a>
                            </label>
                            <div class="help-block with-errors gridCheck-error"></div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button type="submit" class="btn-two">Send Message</button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </form>
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
