import './module/Nav';
import AboutRender from './module/About';
import SkillsRender from './module/Skills';
import ProjectsRender from './module/Projects';
import ContactRender from './module/Contact';

const aboutContent = document.querySelector('.about');
const skillsContent = document.querySelector('.skills');
const projectsContent = document.querySelector('.projects');
const contactContent = document.querySelector('.contact');

aboutContent.innerHTML = AboutRender();
skillsContent.innerHTML = SkillsRender();
projectsContent.innerHTML = ProjectsRender();
contactContent.innerHTML = ContactRender();
