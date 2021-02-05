import dataProjects from '../data/dataProjects';

let view = '';
const Render = () => {
    if (dataProjects.length === 0) {
        view = 'No description';
    } else {
        dataProjects.forEach(({ title, body, use, live, source, image }) => {
            const btnLive = `<a href="${live}" class="button" target="_blank">Live demo</a>`;
            const btnSource = `<a href="${source}" class="button button-dark" target="_blank">Source code</a>`;

            view += `
            <div class="project">
                <div class="project_photo">
                    <img src="${image}" data-src="" alt="${title}" class="project_img">
                </div>
                <div class="project_desc">
                    <h6 class="project_name">${title}</h6>
                    <div class="project_text">
                        ${body}
                    </div>
                    <div class="project_use">
                        <h6 class="project_use-header">Use:</h6>
                        ${use.map(item => `<span>${item}</span>`).join('')}
                    </div>
                    <div class="project_buttons">
                        ${!live || !source ? '<div class="soon">Coming soon</div>' : btnLive + btnSource}
                    </div>
                </div>
            </div>
            `;
        });
    }
    return view;
};

export default Render;
