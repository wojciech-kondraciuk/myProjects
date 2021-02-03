import dataSkills from '../data/dataSkills';



let view = '';
const Render = () => {
    if (dataSkills.length === 0) {
        view += 'No description';
    } else {
        dataSkills.map(({ title, image, skills_1_head, skills_1, skills_2_head, skills_2 }) => {

            console.log(
                skills_1.map(item => item)
            );

            view += `
                <div class="skills_header h2">
                    ${title}
                </div>
                <div class="skills_image">
                    <img src="${image}" alr="${title}" />
                </div>
                <div class="skills_learn">
                    <h3 class="skills_title">${skills_1_head}</h3>
                    <ul>
                        ${skills_1.map(item => `<li>${item}</li>`)}
                    </ul>
                </div>
                <div class="skills_soon">
                    <h3 class="skills_title">${skills_2_head}</h3>
                    <ul>
                        ${skills_2.map(item => `<li>${item}</li>`)}
                    </ul>
                </div>
            `;
        });
    }
    return view;
};

export default Render;
