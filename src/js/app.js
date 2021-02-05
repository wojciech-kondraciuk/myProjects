import './module/Nav';
import AboutRender from './module/About';
import SkillsRender from './module/Skills';
import ProjectsRender from './module/Projects';
import ContactRender from './module/Contact';

const aboutContent = document.querySelector('.about_content');
aboutContent.innerHTML = AboutRender();


const skillsContent = document.querySelector('.skills');
skillsContent.innerHTML = SkillsRender();

const projectsContent = document.querySelector('.projects');
projectsContent.innerHTML = ProjectsRender();

const contactContent = document.querySelector('.contact');
contactContent.innerHTML = ContactRender();
