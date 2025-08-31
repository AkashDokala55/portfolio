// ===== Typing Animation =====
const typedText = document.querySelector('.typed-text');
const roles = ["Developer", "Designer", "Problem Solver", "Innovator"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typedText.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 300);
        } else {
            setTimeout(typeEffect, 50);
        }
    } else {
        typedText.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
}
if (typedText) typeEffect();

// ===== Smooth Scroll =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        // Close menu on mobile
        document.querySelector('.nav-links').classList.remove('show');
    });
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// ===== Project Data =====
const projects = {
    "fixitedu": {
        title: "FixItEDU",
        image: "assets/images/fixit.png",
        description: "A campus query management system where students can submit issues related to academics, facilities, or services. Queries are routed to the appropriate department for faster resolution, with real-time status tracking.",
        demo: "https://youtu.be/yAwktJFQnC4",
        github: "https://github.com/AkashDokala55/401-Vedic",
        viewonline:"https://fixit-backend-cccw.onrender.com"
    },
    "mentor-connect": {
        title: "Mentor Connect",
        image: "assets/images/mentor.png",
        description: "A mentor–mentee networking platform for academic guidance. Features include live and recorded sessions, scheduling, doubt resolution, assignments, and performance tracking for personalized learning.",
        demo: "#",
        github: "https://github.com/AkashDokala55/connectivitas-mentor",
        viewonline:"error.html"
    },
    "car-game": {
        title: "Simple Car Game",
        image: "assets/images/cargame.png",
        description: "A 2D car racing game built in Pygame with obstacles, score tracking, and increasing difficulty. Includes collision detection, power-ups, and replay options for an engaging experience.",
        demo: "https://drive.google.com/file/d/1n9YajLrp6MB8JV1Zi59VqQpbB7dTuP3R/view?usp=sharing",
        github: "#",
        viewonline:"error.html"
    },
    "medicine-recommender": {
        title: "Medicine Recommender",
        image: "assets/images/medicine.png",
        description: "A healthcare web app that fetches and displays medicine information based on user symptoms using the OpenFDA API. Helps users find relevant medicines with details like usage, side effects, and manufacturer.",
        demo: "https://drive.google.com/file/d/1yaSdu7aMkIBlyRyxbgWIfdC3qcDetQeR/view?usp=sharing",
        github: "https://github.com/AkashDokala55/MedicineRecommender",
        viewonline:"error.html"
    },
    "movies-app": {
        title: "Movies App",
        image: "assets/images/movie.png",
        description: "A responsive movie search application powered by the OMDb API. Displays search results with IMDb ratings, cast, and plot. Includes a modal popup for detailed movie information and a trending section.",
        demo: "https://drive.google.com/file/d/1VlZnpQ2GK7pP_vTrDyX5-SmRKx2SKezc/view?usp=sharing",
        github: "https://github.com/AkashDokala55/movie-search",
        viewonline:"error.html"
    }
};

// ===== Certification Data =====
// Certificate data: [certificate name, pdf path]
const certifications = {
    "infosys": [
        ["Python Foundation", "assets/images/Python.pdf"],
        ["Programming using Python-1", "assets/images/Python-1.pdf"],
        ["Programming using Python-1", "assets/images/Python-2.pdf"],
        ["DBMS- I", "assets/images/DBMS-1.pdf"],
        ["DBMS- I", "assets/images/DBMS-1.pdf"],
        ["OOPS Using Python", "assets/images/Object Oriented Programming using Python.pdf"],
        ["Software Engineering", "assets/images/Software Engineering.pdf"],
        ["Introduction to NoSql Database", "assets/images/Introduction to NoSQL databases.pdf"],
    ],
    "letsupgrade": [
        ["React Bootcamp", "assets/images/LUReact.pdf"],
        ["Python Bootcamp", "assets/images/LUPython.pdf"],
        ["Bootstrap Bootcamp", "assets/images/LUBootstrap.pdf"]
    ],
    "nptel": [
        ["Programming In JAVA", "assets/images/nptel.pdf"]
    ],
    "edx": [
        ["Computer Science 101", "assets/images/edxcs.pdf"],
        ["Communication & Team Skills", "assets/images/edxtw.pdf"]
    ],
    "hackerrank": [
        ["Java Basics", "assets/images/java.pdf"],
        ["Software Engineer Intern", "assets/images/sdehackerrank.pdf"]
    ]
};

const certFolders = document.querySelectorAll(".cert-folder");
const certListModal = document.getElementById("certListModal");
const certProviderName = document.getElementById("certProviderName");
const certList = document.getElementById("certList");
const closeModal = document.querySelector("#certListModal .close");

// When folder clicked → show certificate list
certFolders.forEach(folder => {
    folder.addEventListener("click", () => {
        const provider = folder.dataset.provider;
        const certs = certifications[provider];

        certProviderName.textContent = folder.textContent;
        certList.innerHTML = ""; // Clear old list

        certs.forEach(cert => {
            const li = document.createElement("li");
            li.textContent = cert[0]; // Certificate name
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                window.open(cert[1], "_blank"); // Open PDF in new tab
            });
            certList.appendChild(li);
        });

        certListModal.style.display = "block";
    });
});

// Close modal
closeModal.addEventListener("click", () => {
    certListModal.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === certListModal) {
        certListModal.style.display = "none";
    }
});
document.querySelectorAll(".internship-header").forEach(header => {
    header.addEventListener("click", () => {
        const details = header.nextElementSibling;
        const arrow = header.querySelector(".arrow");

        // Toggle details visibility
        details.style.display = details.style.display === "block" ? "none" : "block";
        arrow.classList.toggle("rotate");
    });
});
// ===== Open Modal Function =====
function openModal(contentHTML) {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('modal-content2');
    modal.innerHTML = contentHTML;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
}

// ===== Project Modal Popup =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project; // Get the project key
        const p = projects[projectId];
        if (p) {
            openModal(`
                <img src="${p.image}" alt="${p.title}" style="border-radius:10px;">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <div class="modal-buttons">
                    <a href="${p.demo}" target="_blank" class="btn">Demo</a>
                    <a href="${p.github}" target="_blank" class="btn">GitHub</a>
                    <a href="${p.viewonline}" target="_blank" class="btn">View Online</a>
                </div>
            `);
        }
    });
});
