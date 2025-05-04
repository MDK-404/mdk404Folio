import React, { useState } from "react";
import {
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  Github,
  Linkedin,
  Download,
  Code,
  Cpu,
  BarChart,
  Brain,
  Database,
  Camera,
  Globe,
  Smartphone,
  Wifi,
} from "lucide-react";

import { FaRocket } from "react-icons/fa";
import covid from "../public/images/covid.jpg";
import doc from "../public/images/doc.jpg";
import emechanic from "../public/images/emechanic2.jpg";
import insta from "../public/images/insta.jpg";
import weather from "../public/images/weather.jpg";
import AiTask from '../public/images/AiTask.jpg'
function App() {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = [
    // Languages

    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
      description: "Python for General-Purpose Programming and Automation.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      name: "Dart",
      description: "Dart for Flutter Mobile App Development.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
      description: "Java for Android Development and Backend Systems.",
    },

    // Mobile Development Frameworks
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      name: "Flutter",
      description: "Flutter for Cross-Platform Mobile App Development.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      name: "Android",
      description: "Android Development for Native Mobile Applications.",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      name: "Firebase",
      description:
        "Firebase for Backend, Authentication, and Realtime Database.",
    },




    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
      name: "Django",
      description: "Django for Backend Development and API Creation.",
    },


  ];

  const projects = [
    {
      title: "Prodigenious",
      description:
        "A platform where you can manage your tasks with AI.",
      image: AiTask,
      technologies: ["FLutter", "Firebase", "Google Colab", "TensorFlow"],
      link: "https://github.com/MDK-404/prodigenious",
    },
    {
      title: "E-Mechanic",
      description:
        "A platform connecting vehicle owners with mechanics for on-demand services.",
      image: emechanic,
      technologies: ["FLutter", "Firebase", "Google Maps API"],
      link: "https://github.com/MDK-404/E-Mechanic",
    },
    {
      title: "Doctor-Patient Appointment System",
      description:
        "An application facilitating seamless appointment scheduling between doctors and patients.",
      image: doc,
      technologies: ["Flutter", "Firebase", "Cloud Firestore"],
      link: "https://github.com/MDK-404/DoctorPatientAppointment",
    },
    {
      title: "Weather App",
      description:
        "Provides real-time weather updates and forecasts for any location.",
      image: weather,
      technologies: ["Flutter", "OpenWeatherMap API"],
      link: "https://github.com/MDK-404/WeatherApp",
    },
    {
      title: "COVID-19 Tracker",
      description:
        "Tracks COVID-19 statistics and provides safety guidelines to users.",
      image: covid,
      technologies: ["Flutter", "REST APIs", "Chart.js"],
      link: "https://github.com/MDK-404/COVID19Tracker",
    },
    {
      title: "Instagram Clone",
      description:
        "A full-featured Instagram clone built with Flutter, Firebase, and provider state management.",
      image: insta,
      technologies: ["Flutter", "Firebase", "Provider"],
      link: "https://github.com/MDK-404/instagram_clone_flutter_1",
    },
  ];
  const technicalSkills = [
    ["Languages", "C++", "Python", "Java", "SQL", "NoSQL"],
    ["Frameworks & Libraries", "Dart", "Bootstrap"],
    ["Cloud & Databases", "Google Cloud", "MySQL", "FireStore", "MongoDB"],
    ["Version Control & Tools", "Git", "GitHub"],
    ["Development Tools", "Visual Studio Code", "Gradle", , "Android Studio"],
    ["APIs", "REST APIs"],
    ["Testing", "Jest", "Manual Testing", "JUnit"],
    ["CI/CD", "GitLab CI", "GitHub Actions", "Docker CI/CD"],
    ["Mobile Development", "Objective-C", "Xcode", "Flutter", "Dart", "Java"],
    [
      "Problem-solving",
      "Critical Thinking",
      "Integrity",
      "Self-learning",
      "Leadership",
      "Communication",
    ],
  ];

  const softSkills = [
    "Flutter & Dart - The Complete Guide (Udemy/LinkedIn Learning)",
    "Dart Programming Language Essential Training",
    "Firebase for Flutter Developers",
    "Google Associate Android Developer (A Flutter Equivalent Certification)",
    "Programming Foundations: Version Control with Git (LinkedIn Learning)",
  ];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[600px] h-[600px]">
              {/* Rotating Skills Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-8 h-8"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-240px)`,
                    }}
                  >
                    <div className="w-8 h-8 bg-blue-400/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <div className="inline-block bg-[#151B2B]/60 backdrop-blur-lg rounded-full px-6 py-3 mb-8 shadow-lg"></div>

            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              I'm <span className="gradient-text">Muhammad Daniyal Khan</span>
            </h1>

            <h2 className="text-4xl text-gray-300 mb-8 font-medium">
              Flutter Developer & Tech Enthusiast
            </h2>

            <p className="max-w-2xl text-gray-400 mb-12 leading-relaxed">
              Welcome to my portfolio, where I share my journey as a developer
              and the projects I’m passionate about!
            </p>

            <div className="flex gap-6 mb-12 justify-center md:justify-start">
              <a
                href=""
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-md transform hover:scale-105"
              >
                Contact Me via Social links
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/MDK-404"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammaddaniyalkhan404/"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image (Fix Position) */}
          {/* Right Side: Circular Fancy Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end md:items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-blue-500 shadow-lg rounded-full overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-purple-400">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>

              {/* Profile Image */}
              <img
                src="/images/mdk.png"
                alt="daniyal"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-0 w-full bg-[#151B2B] z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold gradient-text">mdk404</h1>
            <div className="flex space-x-8">
              {["about", "skills", "projects"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    setTimeout(() => scrollToSection(section), 100); // Delay ensures section is updated
                  }}
                  className={`text-sm font-medium transition-colors ${activeSection === section
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-32">
        {/* About Section */}
        {activeSection === "about" && (
          <section id="about" className="space-y-16 animate-fade-in">
            <div className="text-center space-y-6">
              <h2 className="text-5xl font-bold gradient-text">About Me</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-400 leading-relaxed">
                  I am passionate about mobile developer, with expertise in
                  technologies like Flutter, Dart, and Firebase. I hold a
                  Bachelor of Science in Software Engineering from National
                  Univeristy of Modern Languages, Islamabad, where I am a member
                  of the Mlsa Team. My skills include developing dynamic and
                  responsive cross-platform mobile applications, enhancing user
                  experience, and optimizing performance through modern
                  frameworks and cloud-based technologies such as Firebase C++.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400">2021 - 2025</p>
                    <h4 className="text-xl font-medium">
                      Bachelor of Science in Software Engineering
                    </h4>
                    <p className="text-gray-400">
                      National University of Modern Languages,Islamabad
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>

                  {/* Relevant Coursework */}
                  {/* Relevant Coursework */}
                  <div className="mt-6">
                    <h4 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-blue-400" />
                      Coursework
                    </h4>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span>Software Engineering Principles</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Code className="w-4 h-4 text-blue-400" />
                        <span>Data Structures & Algorithms</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Cpu className="w-4 h-4 text-blue-400" />
                        <span>Programming Fundamentals</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <BarChart className="w-4 h-4 text-blue-400" />
                        <span>Probability & Statistics</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Brain className="w-4 h-4 text-blue-400" />
                        <span>Artificial Intelligence</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Database className="w-4 h-4 text-blue-400" />
                        <span>Database Management Systems (DBMS)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Camera className="w-4 h-4 text-blue-400" />
                        <span>Mobile Application Development</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Code className="w-4 h-4 text-blue-400" />
                        <span>Object-Oriented Programming (OOP)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span>Web Development (Frontend & Backend)</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Smartphone className="w-4 h-4 text-blue-400" />
                        <span>Analysis of Algorithms</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#151B2B] p-3 rounded-lg shadow-md">
                        <Wifi className="w-4 h-4 text-blue-400" />
                        <span>Computer Networks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>

                <div className="space-y-8">
                  {/* DXC Technology Internship */}
                  <div>
                    <p className="text-blue-400">April 2024 - Sep 2024</p>
                    <h4 className="text-xl font-medium">
                      Flutter Developer (Intern)
                    </h4>
                    <span className="text-gray-400">Code Knacks</span>{" "}
                    <span className="text-gray-200">Remote</span>
                    {/* Key Skills */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Flutter
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Dart
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Firebase
                      </span>
                    </div>
                    {/* Responsibilities */}
                    <ul className="mt-3 text-sm text-gray-400 space-y-2">
                      <li>
                        {" "}
                        Developed and implemented a user-friendly interface for
                        doctors to manage their profiles, approve/decline
                        appointments, and communicate with patients, resulting
                        in a 40% increase in doctor retention on the app
                        platform, utilized Flutter and Firebase to streamline
                        the appointment approval process.
                      </li>
                      <li>
                        {" "}
                        Integrated Firebase real-time chat functionality,
                        enabling secure and instant communication between
                        doctors andpatients, projected to enhance engagement by
                        30%andreduceresponsetimesby40%.
                      </li>
                    </ul>
                  </div>

                  {/* Undergraduate Instructor */}
                  <div>
                    <p className="text-blue-400">Jan 2024 - Feb 2024 </p>
                    <h4 className="text-xl font-medium">
                      Flutter Developer (Internship)
                    </h4>
                    <span className="text-gray-400">Prodigy Infotech</span>{" "}
                    <span className="text-gray-200">Remote</span>
                    {/* Key Skills */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Mentorship
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Leadership
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Communication
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Problem-Solving
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Dart
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Firebase
                      </span>
                    </div>
                    {/* Responsibilities */}
                    <ul className="mt-3 text-sm text-gray-400 space-y-2">
                      <li>
                        {" "}
                        Developed a feature-rich to-do list application, in
                        corporating advanced task management andreminders, which
                        will lead to a 40% increase in user productivity and
                        engagement.
                      </li>
                      <li>
                        {" "}
                        Created an Tic-Tac-Toe game with adaptive difficulty
                        settings, with a target of driving a 25% improvementin
                        user interaction and overall retention rates.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-400">Dec 2023 - Mar 2024 </p>
                    <h4 className="text-xl font-medium">
                      Flutter Developer (Internship)
                    </h4>
                    <span className="text-gray-400"> Bytewise Limited</span>{" "}
                    <span className="text-gray-200">Remote</span>
                    {/* Key Skills */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Mentorship
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Leadership
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Communication
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Problem-Solving
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Dart
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                        Firebase
                      </span>
                    </div>
                    {/* Responsibilities */}
                    <ul className="mt-3 text-sm text-gray-400 space-y-2">
                      <li>
                        {" "}
                        Developed and implemented innovative features on the
                        Instagramcloneapp,resultingina20%increaseinuser
                        engagementandretentionmetrics.
                      </li>
                      <li>
                        {" "}
                        Utilized Flutter framework to optimize app perormance,
                        reducing load times by 30% and increasing overall user
                        satisfaction, collaborated with the design team to
                        enhance user interface and experience..
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold">Contact</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400">Personal Email</p>
                  <a
                    href="mailto:suvesha2002@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    mdk968196@gmail.com
                  </a>
                </div>
                <div>
                  <div className="flex gap-6 justify-center md:justify-start">
                    <a
                      href="https://github.com/MDK-404"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Github className="w-8 h-8" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammaddaniyalkhan404/"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Linkedin className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section id="skills" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold gradient-text">
                Skills & Services
              </h2>
              <p className="text-gray-400 text-lg">
                These are my working Skills & Services I have done.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="gradient-border-top bg-[#151B2B] rounded-lg p-8 flex flex-col items-center text-center space-y-4"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16"
                  />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-400" />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {technicalSkills.map((skillGroup, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap items-center gap-2"
                    >
                      {/* Category Title */}
                      <span className="font-bold text-blue-400">
                        {skillGroup[0]}:
                      </span>

                      {/* Skills */}
                      {skillGroup.slice(1).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-500/10 text-white-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-border-top bg-[#151B2B] rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
                  <Award className="w-6 h-6 text-blue-400" />
                  Certifications
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {softSkills.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-blue-500/10 text-white-400 rounded-lg p-4 text-sm font-medium"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section id="projects" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-bold">
                <span className="gradient-text">My</span> Projects
              </h2>
              <p className="text-gray-400 text-lg">
                <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-400">
                  <FaRocket className="w-6 h-6 text-blue-400" />
                  Here are some of my Projects
                </h3>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  className="project-card block group"
                >
                  <div className="bg-[#151B2B] rounded-lg overflow-hidden">
                    <div className="relative h-48 ">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151B2B] to-transparent opacity-60" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
