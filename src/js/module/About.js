import dataAbout from '../data/dataAbout';

let view = '';

const Render = () => {
    if (dataAbout.length === 0) {
        view = 'No description';
    } else {
        view += '<h2>About me</h2>';
        dataAbout.forEach(({ title, image, body }) => {
            view += `
            <div class="wrapper about">
                <div class="about_txt">
                    <div class="about_image">
                        <img src="${image}" alt="${title}" />
                    </div>
                        <div class="about_body">${body}</div>
                    </div>
                </div>
            </div>
        `;
        });
    }
    return view;
};

export default Render;
