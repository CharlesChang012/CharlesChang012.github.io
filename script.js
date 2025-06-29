// Projects data
const projects = [
  {
    id: "1",
    title: "Autonomous Mobile Robot Exploration and Warehouse Operations",
    description:
      "A comprehensive mobile robotics system implementing SLAM, computer vision, and autonomous navigation for warehouse operations with precise trajectory control and real-time object detection.",
    image: "./img/WareHouseSim.jpg",
    technologies: ["SLAM", "LiDAR", "C++", "Computer Vision", "YOLOv11", "A*", "PID", "RPi5", "ORB-SLAM3"],
    keyPoints:
      "Controls: Engineered precise trajectory system with PID loop, pure pursuit controller and IMU-based sensor fusion. \
      SLAM: Delivered 2cm RMSE in pose estimation by implementing RPiLiDAR-SLAM using particle filter and occupancy grid mapping; performed visual-SLAM using ORB-SLAM3 with monocular images. \
      Computer Vision: Deployed YOLOv11 to accurately identify destination and crate positions for warehouse simulation. \
      Executed autonomous navigation using A* with obstacle distance grid and frontier exploration in unknown terrain.",
    demoUrl: "https://drive.google.com/file/d/1P2S-lES56rnGiQwiKI53u3jqmmEHZRnP/view?usp=share_link",
    githubUrl: "https://github.com/CharlesChang012/ROB-550_Botlab",
    featured: true,
  },
  {
    id: "2",
    title: "Automatic Block Stacking with Robotic Arm and RealSense Camera",
    description:
      "Developed an automated robotic arm system for precise block stacking using computer vision, camera calibration, and inverse kinematics with real-time object detection capabilities.",
    image: "./img/block_stacking.PNG",
    technologies: ["ROS2", "Computer Vision", "RealSense", "Kinematics", "OpenCV", "AprilTags", "RX200"],
    keyPoints:
      "Performed camera calibration with intrinsic and extrinsic matrices using AprilTags and homography transform. \
      Kinematics: Automated a 5DoF RX200 arm by solving forward and inverse kinematics with DH table and geometry. \
      Computer Vision: Developed an object detection pipeline in OpenCV, achieving 85% ROI in real-time capability.",
    demoUrl: "https://drive.google.com/file/d/1QTnxh1EtAa5_bcI0pKfocJl8Q2-F7tI0/view?usp=sharing",
    githubUrl: "https://github.com/CharlesChang012/ROB-550_Armlab.git",
    featured: true,
  },
  {
    id: "3",
    title: "ANA* and A* Research Using Pybullet Simulation",
    description:
      "Created a sumulation in python for comparison between 2 motion planning algorithms.",
    image: "./img/ANAstar_env.png",
    technologies: ["Path Planning", "Pybullet", "ANA*", "Python"],
    keyPoints:
      "Constructed ANA* and A* algorithms in Python and pybullet with custom heuristic function and reduced 50% runtime.",
    demoUrl: "",
    githubUrl: "https://github.com/CharlesChang012/ANAstar_Simulation_with_Pybullet.git",
    featured: true,
  },
  {
    id: "4",
    title: "Robust Motion Planning Simulation for Autonomous Mobility",
    description:
      "Created a comprehensive motion planning simulation environment with multiple path planning algorithms and custom robot design for autonomous navigation research.",
    image: "./img/AStar_search.png",
    technologies: ["ROS", "Path Planning", "Gazebo", "Fusion360", "A*", "PRM", "RRT"],
    keyPoints:
      "Simulation: Crafted CAD for a 2-wheel robot using Fusion 360, and spawned it with a custom world in Gazebo. \
      Path Planning: Implemented obstacle avoidance using A*, PRM, RRT-connect, and gradient-based algorithms.",
    demoUrl: "",
    githubUrl: "https://github.com/CharlesChang012/2D-ROS-Wheelbot-Navigation.git",
    featured: true,
  },
  {
    id: "5",
    title: "Satellite Communication Phased-Array Antenna Tracking System",
    description:
      "Development of a modular ROS framework for satellite communication on-the-move antenna tracking with real-time visualization and sensor fusion capabilities.",
    image: "./img/SOTM.jpg",
    technologies: ["ROS", "IMU", "Sensor Fusion", "GTK", "RVIZ", "C++", "TMYTEK 5G mmWave kit"],
    keyPoints:
      "Led a team of 5 to establish modular ROS framework for user-selected sensors in satellite communication on-the-move antenna tracking, validated performance with TMYTEK mmWave kit, and presented at ICCAS 2023. \
      Sensor Fusion: Obtained vehicle attitude estimation from Xsens IMU utilizing the Madgwick algorithm. \
      Visualization: Conceived real-time software with GTK and RVIZ showing pointing angles of targeted satellites.",
    demoUrl: "",
    githubUrl: "https://github.com/CharlesChang012/SOTM.git",
    featured: true,
  },
  {
    id: "6",
    title: "Trajectory and Motion Control Simulation of Aerial Robotics",
    description:
      "This is a self-study project that focuses on trajectory planning and motion control of quadrotor drones.",
    image: "./img/Aerial_Robotics_PID.png",
    technologies: ["Control", "Matlab"],
    keyPoints:
      "Trajectory Planning: Solved optimal trajectory using Euler-Lagrange equation, and made simulation in MATLAB. \
      Controls: Applied PD and PID control on a simulated quadrotor drone for motion control.",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "7",
    title: "Geospacial Intelligence for Navigation Safety",
    description:
      "Investigated the Automatic Identification System (AIS) signals to enhance navigation safety using Software-Defined Radio and Digital Signal Processing.",
    image: "./img/Sync.png",
    technologies: ["DSP", "SDR", "GPS", "VHDL", "FPGA"],
    keyPoints:
      "Constructed Cross Ambiguity Function on signals of Automatic Identification System using Software-Defined Radio to enhance navigation safety. \
      SDR: Modified VHDL code of FPGA on LimeSDR, making GPS signal trigger data recording and reduced receiver time difference of 0.95ms.\
      DSP: Implemented threshold method regarding digital signal processing (DSP) to detect prominent signals in raw IQ data.",
    demoUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "8",
    title: "Real-Time Vehicle Classification Using YOLO",
    description:
      "Implemented real-time vehicle classification system using state-of-the-art YOLO models with optimized data preprocessing for accurate object detection in video streams.",
    image: "./img/YOLO.png",
    technologies: ["YOLO", "Computer Vision", "Python", "Object Detection"],
    keyPoints:
      "Applied object classification on video stream by training YOLO v4/v7 models with meticulously pre-processed data. Achieved real-time performance with high accuracy vehicle detection and classification across multiple vehicle types.",
    demoUrl: "https://www.youtube.com/watch?v=OrMOHlqkCL0",
    githubUrl: "",
    featured: false,
  },
  {
    id: "9",
    title: "Predictive Modeling for Dynamic Crowd Management",
    description:
      "Collaborated with local government to develop a predictive model for tourist flow forecasting for smart city applications.",
    image: "./img/SmartCity.jpg",
    technologies: ["Machine Learning", "Python", "Data Analysis", "Pandas"],
    keyPoints:
      "Conducted exploratory data analysis across multi-source datasets (mobile data, weather, ticket, parking, etc.) to identify critical correlations for modeling.\
      Led a team of 4 with local government and built a GRU model to forecast tourist flow achieving MAPE under 30%.",
    demoUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "10",
    title: "Moving Object Segmentation on LiDAR Data",
    description:
      "This project focused on moving object segmentation from KITTI LiDAR data, and remove dynamic objects.",
    image: "./img/All_method_fig.jpg",
    technologies: ["Machine Learning", "Python", "LiDAR", "Object Segmentation"],
    keyPoints:
      "Object Segmentation: Deployed LiDAR-MOS and Removert methods to segment moving objects from KITTI LiDAR data.",
    demoUrl: "",
    githubUrl: "",
    featured: false,
  },
]

// DOM elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const projectsGrid = document.getElementById("projectsGrid")
const projectModal = document.getElementById("projectModal")
const modalTitle = document.getElementById("modalTitle")
const modalBody = document.getElementById("modalBody")
const modalClose = document.getElementById("modalClose")

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initializeLucide()
  setupMobileMenu()
  setupSmoothScrolling()
  loadProjects()
  setupModal()
  setupScrollAnimations()
})

// Initialize Lucide icons
function initializeLucide() {
  const lucide = window.lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  }
}

// Mobile menu functionality
function setupMobileMenu() {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("active")
    }
  })
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Load and display projects
function loadProjects() {
  projectsGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = createProjectCard(project)
    projectsGrid.appendChild(projectCard)
  })
}

// Create project card element
function createProjectCard(project) {
  const card = document.createElement("div")
  card.className = "project-card"
  card.onclick = () => openProjectModal(project)

  const techTags = project.technologies
    .slice(0, 4)
    .map((tech) => `<span class="project-tag">${tech}</span>`)
    .join("")

  const moreTech =
    project.technologies.length > 4 ? `<span class="project-tag">+${project.technologies.length - 4}</span>` : ""

  card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
        </div>
        <div class="project-content">
            <div class="project-tags">
                ${techTags}
                ${moreTech}
            </div>
            <p style="font-size: 0.875rem; color: #6b7280; line-height: 1.4;">${project.description.substring(0, 120)}...</p>
        </div>
        <div class="project-footer">
            ${project.demoUrl ? `<a href="${project.demoUrl}" class="btn btn-outline btn-sm" target="_blank" onclick="event.stopPropagation()">Live Demo</a>` : ""}
            ${project.githubUrl ? `<a href="${project.githubUrl}" class="btn btn-outline btn-sm" target="_blank" onclick="event.stopPropagation()">GitHub</a>` : ""}
        </div>
    `

  return card
}

// Modal functionality
function setupModal() {
  modalClose.addEventListener("click", closeProjectModal)

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeProjectModal()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      closeProjectModal()
    }
  })
}

// Open project modal
function openProjectModal(project) {
  modalTitle.textContent = project.title

  const techTags = project.technologies.map((tech) => `<span class="skill-tag">${tech}</span>`).join("")

  modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 0.5rem;">
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Project Overview</h3>
            <p style="color: #6b7280; line-height: 1.6;">${project.description}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Technologies Used</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${techTags}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Key Technical Achievements</h3>
            <p style="color: #6b7280; line-height: 1.6;">${project.keyPoints}</p>
        </div>
        
        ${
          project.demoUrl || project.githubUrl
            ? `
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${project.demoUrl ? `<a href="${project.demoUrl}" class="btn btn-primary" target="_blank">Live Demo</a>` : ""}
            ${project.githubUrl ? `<a href="${project.githubUrl}" class="btn btn-outline" target="_blank">View Source</a>` : ""}
        </div>
        `
            : ""
        }
    `

  projectModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close project modal
function closeProjectModal() {
  projectModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Intersection Observer for animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".card, .project-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}
