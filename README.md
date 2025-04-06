# codebrian.com – Portfolio Website

[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fwww.codebrian.com)](https://www.codebrian.com)

This is the source code for my personal portfolio website [codebrian.com](https://www.codebrian.com). It is a modular, scalable, and lightweight static site designed to showcase my work as a Full Stack Software Engineer, UI/UX Designer, and Digital Creative. The site is built with maintainability and performance in mind, using structured HTML, component-based CSS, dynamic JavaScript, and JSON-based content management.

## Features

- Floating navigation bar component shared across all pages  
- Clean and modern landing page with scroll interaction  
- Dedicated pages for work experience, software projects, and digital design  
- Modular components for easy updates and scalability  
- JSON-driven content for experience timelines and galleries  
- Fully responsive design for desktop, tablet, and mobile  
- Images hosted externally on AWS for performance optimization  

## Tech Stack

- HTML5  
- CSS3 (BEM-style class structure, responsive design with Flex/Grid)  
- JavaScript (ES6+)  
- JSON for dynamic content  
- Custom fonts stored locally in the `/fonts` directory  
- Images hosted via Amazon Web Services (AWS)  

## File Structure

```plaintext
root/
├── index.html
├── work.html
├── digitaldesign.html
├── projects.html
├── about-me.html

├── components/
│   ├── navbar.html
│   └── footer.html

├── fonts/
│   └── (custom fonts used throughout)

├── json/
│   ├── about-me-timeline.json
│   ├── digital-design.json
│   ├── projects.json
│   └── work-experience.json

├── styles/
│   ├── global.css
│   ├── colors.css
│   ├── fonts.css
│   ├── navbar.css
│   ├── footer.css
│   ├── home-layout.css
│   ├── work-layout.css
│   ├── digital-design-layout.css
│   ├── projects-layout.css
│   └── about-me-layout.css

├── scripts/
│   ├── navbar.js
│   ├── footer.js
│   ├── work.js
│   ├── digitaldesign.js
│   ├── projects.js
│   └── about.js


## Design Philosophy

- Modular and component-based for scalability
- JSON-powered data handling for fast, flexible updates
- Lightweight with minimal dependencies
- Image hosting handled via AWS for reduced repo size
- Clear separation of concerns between layout, style, logic, and content

## About the Developer

I'm Brian Hernandez, a Full Stack Software Engineer and UI/UX Designer based in Gardena, California. This portfolio is a representation of my technical and creative abilities, as well as my passion for building purposeful, performant digital experiences.

- Website: https://www.codebrian.com  
- GitHub: https://github.com/bhern154  
- LinkedIn: https://www.linkedin.com/in/code-brian

## Roadmap

- Add dark mode toggle with persistent theme
- Add accessibility enhancements and performance audits

---

This portfolio was built from the ground up to be fast, clean, and easy to maintain. Feel free to explore the code, structure, or reach out if you’d like to collaborate.
