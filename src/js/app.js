import './module/Nav';
import AboutRender from './module/About';
import SkillsRender from './module/Skills';

const aboutContent = document.querySelector('.about_content');
aboutContent.innerHTML = AboutRender();


const skillsContent = document.querySelector('.skills');
skillsContent.innerHTML = SkillsRender();