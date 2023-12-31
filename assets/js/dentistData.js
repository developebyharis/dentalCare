const dentists = [
    {
        id: 1,
        name: "Dr. Daniel Michael Green",
        specialization: "Cosmetic Dentistry",
        location: "123 Smile Street, Smiletown",
        phoneNumber: "+1 (555) 123-4567",
        email: "daniel.green@example.com",
        image: '/assets/img/team/team-1.webp',
        shortDesc: "Dr. Daniel Michael Green is a cosmetic dentist dedicated to creating beautiful smiles.",
        facebook: "https://www.facebook.com/DrDanielMichaelGreen",
        twitter: "https://www.twitter.com/DrDanielMichaelGreen",
        instagram: "https://www.instagram.com/DrDanielMichaelGreen",
        linkedin: "https://www.linkedin.com/in/DrDanielMichaelGreen",
        about: "Dr. Daniel Michael Green was born in Berlin and educated at Trinity School. He graduated from the Odontoclastic Hyperplasia Disorder in 1985...",
        procedure: "Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals...",
        procedurePoints:[
        "European Society Of Cardiology",
        "Fellow Royal Society Of Medicine",
        "British Cardiovascular Society"
    ],
        procedureTwo: "Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals...",
        specialty: "Dentist is a Responsive One Page WordPress Theme special crafted for dentist, dentist office...",
        membership: "Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals...",
        membershipPoints: [
            "European Society Of Cardiology",
            "Fellow Royal Society Of Medicine",
            "British Cardiovascular Society"
        ],
        membershipTwo: "Although each procedure varies subtly there are some basic guidelines to treat cavities and they are followed by all dental professionals...",
    },
    {
        id: 2,
        name: "Dr. Sarah Johnson",
        specialization: "Orthodontics",
        location: "456 Brace Avenue, Bracetown",
        phoneNumber: "+1 (555) 987-6543",
        email: "sarah.johnson@example.com",
        image: '/assets/img/team/team-2.webp',
        shortDesc: "Dr. Sarah Johnson specializes in orthodontic treatments for all ages.",
        facebook: "https://www.facebook.com/DrSarahJohnsonOrtho",
        twitter: "https://www.twitter.com/DrSarahJohnsonOrtho",
        instagram: "https://www.instagram.com/DrSarahJohnsonOrtho",
        linkedin: "https://www.linkedin.com/in/DrSarahJohnsonOrtho",
        about: "Dr. Sarah Johnson completed her orthodontics residency at Harvard University...",
        procedure: "Orthodontic treatments aim to correct misaligned teeth and jaws...",
        procedurePoints: [
          "American Association of Orthodontists",
          "Harvard Orthodontic Society",
          "International Association for Orthodontics"
        ],
        procedureTwo: "Orthodontic treatments may involve braces, aligners, and other appliances...",
        specialty: "Orthodontist is a Responsive One Page WordPress Theme designed for orthodontic clinics...",
        membership: "Dr. Sarah Johnson is a member of several prestigious orthodontic organizations...",
        membershipPoints: [
          "American Association of Orthodontists",
          "Harvard Orthodontic Society",
          "International Association for Orthodontics"
        ],
        membershipTwo: "She is committed to providing the highest quality orthodontic care to her patients.",
      },
    
    {
        id: 3,
        name: "Dr. Emily Wilson",
        specialization: "Pediatric Dentistry",
        location: "789 Kids Lane, Smilesville",
        phoneNumber: "+1 (555) 234-5678",
        email: "emily.wilson@example.com",
        image: '/assets/img/team/team-3.webp',
        shortDesc: "Dr. Emily Wilson specializes in making dental visits enjoyable for children.",
        facebook: "https://www.facebook.com/DrEmilyWilsonPedoDentist",
        twitter: "https://www.twitter.com/DrEmilyWilsonPedoDentist",
        instagram: "https://www.instagram.com/DrEmilyWilsonPedoDentist",
        linkedin: "https://www.linkedin.com/in/DrEmilyWilsonPedoDentist",
        about: "Dr. Emily Wilson has a passion for ensuring children have a positive dental experience...",
        procedure: "Pediatric dentistry focuses on the oral health of infants, children, and adolescents...",
        procedurePoints: [
          "American Academy of Pediatric Dentistry",
          "Pediatric Dental Association",
          "Children's Dental Health Foundation"
        ],
        procedureTwo: "Regular check-ups, preventive care, and education are key aspects of pediatric dentistry...",
        specialty: "Pediatric Dentist is a Responsive One Page WordPress Theme designed for pediatric dental practices...",
        membership: "Dr. Emily Wilson is actively involved in organizations dedicated to children's oral health...",
        membershipPoints: [
          "American Academy of Pediatric Dentistry",
          "Pediatric Dental Association",
          "Children's Dental Health Foundation"
        ],
        membershipTwo: "She strives to create a comfortable and friendly environment for young patients.",
      },
    {
        id: 4,
        name: "Dr. Maria Rodriguez",
        specialization: "Cardiology",
        location: "789 Heartbeat Avenue, Cardiotown",
        phoneNumber: "+1 (555) 567-8901",
        email: "maria.rodriguez@example.com",
        image: '/assets/img/team/team-4.webp',
        shortDesc: "Dr. Maria Rodriguez is a dedicated cardiologist passionate about heart health.",
        facebook: "https://www.facebook.com/DrMariaRodriguezCardio",
        twitter: "https://www.twitter.com/DrMariaRodriguezCardio",
        instagram: "https://www.instagram.com/DrMariaRodriguezCardio",
        linkedin: "https://www.linkedin.com/in/DrMariaRodriguezCardio",
        about: "Dr. Maria Rodriguez received her medical degree from Johns Hopkins University...",
        procedure: "Cardiologists diagnose and treat heart conditions, including heart disease and arrhythmias...",
        procedurePoints: [
          "American College of Cardiology",
          "Cardiovascular Research Foundation",
          "National Heart Association"
        ],
        procedureTwo: "Treatment may involve medication, lifestyle changes, or surgical interventions...",
        specialty: "Cardiologist is a Responsive One Page WordPress Theme designed for cardiology clinics...",
        membership: "Dr. Maria Rodriguez is a member of prestigious cardiology organizations...",
        membershipPoints: [
          "American College of Cardiology",
          "Cardiovascular Research Foundation",
          "National Heart Association"
        ],
        membershipTwo: "She is committed to providing the best possible cardiac care to her patients.",
      },
    {
        id: 5,
        name: "Dr. Thomas Anderson",
        specialization: "Ophthalmology",
        location: "123 Eye Street, Visionville",
        phoneNumber: "+1 (555) 345-6789",
        email: "thomas.anderson@example.com",
        image: '/assets/img/team/team-5.webp',
        shortDesc: "Dr. Thomas Anderson is an expert in diagnosing and treating eye disorders.",
        facebook: "https://www.facebook.com/DrThomasAndersonEyeDoc",
        twitter: "https://www.twitter.com/DrThomasAndersonEyeDoc",
        instagram: "https://www.instagram.com/DrThomasAndersonEyeDoc",
        linkedin: "https://www.linkedin.com/in/DrThomasAndersonEyeDoc",
        about: "Dr. Thomas Anderson completed his residency in ophthalmology at the Wilmer Eye Institute...",
        procedure: "Ophthalmologists perform eye exams, diagnose eye diseases, and offer treatments...",
        procedurePoints: [
          "American Academy of Ophthalmology",
          "International Society of Refractive Surgery",
          "Vision Research Society"
        ],
        procedureTwo: "Treatments may include surgery, prescription eyewear, or medical interventions...",
        specialty: "Ophthalmologist is a Responsive One Page WordPress Theme designed for eye clinics...",
        membership: "Dr. Thomas Anderson is a member of leading ophthalmology associations...",
        membershipPoints: [
          "American Academy of Ophthalmology",
          "International Society of Refractive Surgery",
          "Vision Research Society"
        ],
        membershipTwo: "He is dedicated to preserving and improving his patients' vision.",
      },
    {
        id: 6,
        name: "Dr. Jessica Lee",
        specialization: "Dermatology",
        location: "456 Skin Avenue, Dermaville",
        phoneNumber: "+1 (555) 789-0123",
        email: "jessica.lee@example.com",
        image: '/assets/img/team/team-6.webp',
        shortDesc: "Dr. Jessica Lee specializes in skin health and cosmetic dermatology.",
        facebook: "https://www.facebook.com/DrJessicaLeeDerm",
        twitter: "https://www.twitter.com/DrJessicaLeeDerm",
        instagram: "https://www.instagram.com/DrJessicaLeeDerm",
        linkedin: "https://www.linkedin.com/in/DrJessicaLeeDerm",
        about: "Dr. Jessica Lee completed her dermatology residency at the renowned Skin Institute...",
        procedure: "Dermatologists diagnose and treat skin conditions, from acne to skin cancer...",
        procedurePoints: [
          "American Academy of Dermatology",
          "Dermatology Foundation",
          "Society for Investigative Dermatology"
        ],
        procedureTwo: "Treatments may include topical medications, laser therapy, or surgical procedures...",
        specialty: "Dermatologist is a Responsive One Page WordPress Theme designed for dermatology clinics...",
        membership: "Dr. Jessica Lee is a member of esteemed dermatology organizations...",
        membershipPoints: [
          "American Academy of Dermatology",
          "Dermatology Foundation",
          "Society for Investigative Dermatology"
        ],
        membershipTwo: "She is dedicated to helping her patients achieve healthy and beautiful skin.",
      },
    {
        id: 7,
        name: "Dr. Robert Chen",
        specialization: "Neurology",
        location: "789 Brain Road, Neuroville",
        phoneNumber: "+1 (555) 123-9876",
        email: "robert.chen@example.com",
        image: '/assets/img/team/team-7.webp',
        shortDesc: "Dr. Robert Chen specializes in diagnosing and treating neurological disorders.",
        facebook: "https://www.facebook.com/DrRobertChenNeuro",
        twitter: "https://www.twitter.com/DrRobertChenNeuro",
        instagram: "https://www.instagram.com/DrRobertChenNeuro",
        linkedin: "https://www.linkedin.com/in/DrRobertChenNeuro",
        about: "Dr. Robert Chen completed his neurology fellowship at the renowned Neuro Institute...",
        procedure: "Neurologists diagnose and treat disorders of the nervous system, including Parkinson's and epilepsy...",
        procedurePoints: [
          "American Academy of Neurology",
          "Neuroscience Society",
          "Epilepsy Foundation"
        ],
        procedureTwo: "Treatment options may include medication, physical therapy, or surgery...",
        specialty: "Neurologist is a Responsive One Page WordPress Theme designed for neurology clinics...",
        membership: "Dr. Robert Chen is a member of leading neurological organizations...",
        membershipPoints: [
          "American Academy of Neurology",
          "Neuroscience Society",
          "Epilepsy Foundation"
        ],
        membershipTwo: "He is committed to improving the lives of patients with neurological conditions.",
      },
      {
        id: 8,
        name: "Dr. Laura Taylor",
        specialization: "Gynecology",
        location: "123 Women's Health Avenue, Gynoville",
        phoneNumber: "+1 (555) 234-5678",
        email: "laura.taylor@example.com",
        image: '/assets/img/team/team-8.webp',
        shortDesc: "Dr. Laura Taylor is a compassionate gynecologist providing women's healthcare.",
        facebook: "https://www.facebook.com/DrLauraTaylorGyno",
        twitter: "https://www.twitter.com/DrLauraTaylorGyno",
        instagram: "https://www.instagram.com/DrLauraTaylorGyno",
        linkedin: "https://www.linkedin.com/in/DrLauraTaylorGyno",
        about: "Dr. Laura Taylor is dedicated to promoting women's health through preventive care...",
        procedure: "Gynecologists provide comprehensive care for women, including annual exams and prenatal care...",
        procedurePoints: [
          "American College of Obstetricians and Gynecologists",
          "Society for Women's Health Research",
          "National Cervical Cancer Coalition"
        ],
        procedureTwo: "Services include family planning, menopause management, and gynecological surgery...",
        specialty: "Gynecologist is a Responsive One Page WordPress Theme designed for women's health clinics...",
        membership: "Dr. Laura Taylor is a member of esteemed gynecology associations...",
        membershipPoints: [
          "American College of Obstetricians and Gynecologists",
          "Society for Women's Health Research",
          "National Cervical Cancer Coalition"
        ],
        membershipTwo: "She is committed to providing high-quality care to women at all stages of life.",
      },
      {
        id: 9,
        name: "Dr. Michael Jackson",
        specialization: "Orthopedic Surgery",
        location: "456 Bones Street, Orthoville",
        phoneNumber: "+1 (555) 987-6543",
        email: "michael.jackson@example.com",
        image: '/assets/img/team/team-8.webp',
        shortDesc: "Dr. Michael Jackson specializes in orthopedic surgery and musculoskeletal health.",
        facebook: "https://www.facebook.com/DrMichaelJacksonOrtho",
        twitter: "https://www.twitter.com/DrMichaelJacksonOrtho",
        instagram: "https://www.instagram.com/DrMichaelJacksonOrtho",
        linkedin: "https://www.linkedin.com/in/DrMichaelJacksonOrtho",
        about: "Dr. Michael Jackson has extensive experience in treating bone and joint conditions...",
        procedure: "Orthopedic surgeons diagnose and treat musculoskeletal conditions, from fractures to arthritis...",
        procedurePoints: [
          "American Academy of Orthopaedic Surgeons",
          "Orthopaedic Research Society",
          "Arthritis Foundation"
        ],
        procedureTwo: "Treatments may include surgery, joint replacements, and physical therapy...",
        specialty: "Orthopedic Surgeon is a Responsive One Page WordPress Theme designed for orthopedic clinics...",
        membership: "Dr. Michael Jackson is a member of prestigious orthopedic associations...",
        membershipPoints: [
          "American Academy of Orthopaedic Surgeons",
          "Orthopaedic Research Society",
          "Arthritis Foundation"
        ],
        membershipTwo: "He is dedicated to helping patients regain mobility and improve their quality of life.",
      },
     
   
];

export default dentists;



  


   