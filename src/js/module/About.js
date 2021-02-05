import dataAbout from '../data/dataAbout';

let view = '';

const Render = () => {
    if (dataAbout.length === 0) {
        view = 'No description';
    } else {
        dataAbout.forEach(({ title, image, body }) => {
            view += `
            <div class="wrapper about">
                <div class="about_image">
                    <img src="${image}" alt="${title}" />
                </div>
                <div class="about_txt">
                    <h2 class="about_header h2">${title}</h2>
                    <div class="about_body">${body}</div>
                </div>
            </div>
        `;
        });
    }
    return view;
};

export default Render;
