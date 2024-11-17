// Modal Functions
// Project and certificate details
const projectDetails = {
  "Sentiment Analysis": {
    description: "Language: Python, Flask, HTML, CSS, JavaScript, Machine Learning, NLP\n\nDescription: In this project, I created a complete sentiment analysis website. Using ML and a fine-tuned BERT model, users can analyze sentiments from various sources like text, Twitter, Instagram, etc., and visualize results in pie charts."
  },
  "Text Classification with tensorflow": {
    description: "Language: Python, ML Model like logistic Regression,Neural Network \n\nDescription: Text classification for language detection using TensorFlow involves building a model to automatically identify the language of a given text. The model learns to classify text into predefined language categories (e.g., English, Spanish, French) based on features such as word patterns, character n-grams, or embeddings."
  },
  "Project 3": {
    description: "Language: Python,ML model like CNN,tensorflow\n\nDescription: Classification of pet faces using TensorFlow involves training a machine learning model to identify and classify images of pets (e.g., cats and dogs) into predefined categories based on their facial features with the better effect."
  }
};

const certificateDetails = {
  "Artificial Intelligence Specialization": {
    image: "Certificate1.jpeg",
    description: "1Stop - internship completion in artificial intelligence"
  },
  "AI Project Completion": {
    image: "Certificate2.jpeg",
    description: "1Stop - AI project text classification"
  },
  "Completion of DSA in Java": {
    image: "Certificate6.jpeg",
    description: "Apna College - Course completed in DSA with Java"
  },
  "Participation Certificate": {
    image: "Certificate3.jpeg",
    description: "1Stop - AI program participation"
  },
  "HTML Training Completion": {
    image: "Certificate4.jpeg",
    description: "IIT Bombay - HTML training Spoken Tutorial"
  }
};

// Open modal with project or certificate content
function openModal(title, isCertificate = false) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalImage = document.getElementById("modal-image");

  // Set modal content based on whether it's a project or certificate
  if (isCertificate) {
    const certificate = certificateDetails[title];
    if (certificate) {
      modalTitle.innerText = title;
      modalDescription.innerText = certificate.description;
      modalImage.src = certificate.image;
      modalImage.style.display = "block"; // Show image for certificates
    } else {
      console.error(`Certificate titled "${title}" not found.`);
    }
  } else {
    const project = projectDetails[title];
    if (project) {
      modalTitle.innerText = title;
      modalDescription.innerText = project.description;
      modalImage.style.display = "none"; // Hide image for projects
    } else {
      console.error(`Project titled "${title}" not found.`);
    }
  }

  // Display the modal with fade-in effect
  modal.style.display = "flex";
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

// Close modal with fade-out effect
function closeModal() {
  const modal = document.getElementById("modal");

  // Apply fade-out effect
  modal.style.opacity = "0";

  // Set a delay to fully hide the modal after fade-out effect
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Toggle certificate details directly in the section
function toggleCertificateDetails(title) {
  const certificate = certificateDetails[title];
  const detailsElement = document.getElementById(`certificate-${title.replace(/\s+/g, "-")}`);

  if (certificate && detailsElement) {
    // Check current state and toggle visibility
    if (detailsElement.style.display === "none" || !detailsElement.style.display) {
      detailsElement.style.display = "block";
      detailsElement.innerHTML = `
        <p>${certificate.description}</p>
        <img src="${certificate.image}" alt="${title}" />
      `;
    } else {
      detailsElement.style.display = "none";
      detailsElement.innerHTML = ""; // Clear details when hidden
    }
  } else {
    console.error(`Certificate titled "${title}" not found or element missing.`);
  }
}
