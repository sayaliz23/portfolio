"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Skills
const SKILLS = [
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "Angular", logo: "/logos/angular.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "ASP.Net", logo: "/logos/aspnet.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Tailwind", logo: "/logos/tailwind.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "SQL", logo: "/logos/sql.svg" },
];

// Projects
const PROJECTS = [
  {
    title: "Cake Shop Website",
    description: "A responsive cake shop website with elegant UI/UX and animations.",
    bullets: [
      "Built using HTML, CSS, and JavaScript",
      "Add/Remove items & dynamic billing",
      "Mobile-friendly design"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    code: "#"
  },
  {
    title: "Clinic Management System",
    description: "SQL-based system for managing patients, doctors, and appointments.",
    bullets: [
      "Optimized queries & database design",
      "Used constraints and relationships",
      "Automated tasks via stored procedures"
    ],
    tech: ["SQL", "PL/SQL"],
    code: "#"
  },
  {
    title: "Student Management System",
    description: "React-based app for managing student records and attendance.",
    bullets: [
      "Add, view, edit, delete student records",
      "LocalStorage for persistent data",
      "Export to CSV"
    ],
    tech: ["React", "JavaScript", "CSS"],
    code: "#"
  },
  {
    title: "Chai Hub – React Native App",
    description: "Mobile app for ordering tea/snacks with login, cart, and order tracking.",
    bullets: [
      "User authentication & stall selection",
      "Cart & order placement (COD/online)",
      "Order history, live status, and feedback"
    ],
    tech: ["React Native", "TypeScript"],
    code: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
              SZ
            </div>
            <div>
              <div className="font-semibold leading-tight">Sayali Zambre</div>
              <div className="text-xs text-slate-500">Frontend Developer</div>
            </div>
          </div>
          
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-12 md:pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          
          {/* Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="text-xs tracking-widest uppercase text-slate-500 mb-3">Hello, I am</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Sayali Zambre —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500">
                Frontend Developer
              </span>
            </h1>
            <div className="mt-5 flex gap-3">
              <Button asChild>
                <a href="#contact">Hire Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume/Sayali-Zambre-RESUME.pdf" download>Download CV</a>
              </Button>
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src="/path/to/your-photo.jpg"
              alt="Sayali Zambre"
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-slate-600 max-w-3xl">
          I am a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React, 
          and SQL. As a fresher, I’m eager to apply my skills in building modern, responsive web applications 
          and contribute to innovative projects. I believe in continuous learning and love creating 
          user-friendly experiences.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map(skill => (
            <div key={skill.name} className="flex items-center gap-2 border rounded-full px-3 py-1 bg-white shadow-sm">
              <img src={skill.logo} alt={skill.name} className="w-5 h-5" />
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="rounded-2xl overflow-hidden">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                <ul className="mt-3 space-y-1 text-sm list-disc pl-5 text-slate-700">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full px-3 py-1 text-xs border shadow-sm bg-background">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button asChild variant="outline">
                    <a href={p.code} target="_blank" rel="noreferrer">
                      View Code <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h2>

        {/* Social buttons */}
        <div className="flex gap-4 mb-6">
          <Button asChild variant="outline">
            <a href="https://github.com/sayaliz23" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a 
              href="https://www.linkedin.com/in/sayali-zambre-480a60330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank" 
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </a>
          </Button>
        </div>

        {/* Contact form */}
        <form
          action="https://formsubmit.co/sayalizambre93@gmail.com"
          method="POST"
          className="grid gap-4 w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border rounded-lg p-3 w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border rounded-lg p-3 w-full"
          ></textarea>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Sayali Zambre. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
