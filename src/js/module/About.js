import aboutData from '../data/aboutData.json';
const aboutContent = document.querySelector('.about_content');

let view;
const Render = () => {

    aboutData.map(({ userId }) => {
        view += `

                <h1 class="home_header">${userId}</h1>
    
        `;

    })

    return view;
};


aboutContent.innerHTML = Render();