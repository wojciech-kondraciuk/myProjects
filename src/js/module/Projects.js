import dataProjects from '../data/dataProjects';

let view = '';
const Render = () => {
    if (dataProjects.length === 0) {
        view += 'No description';
    } else {
        dataProjects.map(({ title, body, use, live, source, image }) => {
            view = `
            <div class="project">
                <div class="project_photo">
                    <img src="../../assets/img/p1.png" data-src="" alt="" class="project_img">
                </div>
                <div class="project_desc">
                    <h6 class="project_name">Offers Website</h6>
                    <div class="project_text">
                        My older project where I studied PHP. I know it is weak because it served me to learn about the mechanisms of language and objectivity.
                        <div class="project_use">
                            <h6 class="project_use-header">Use:</h6>
                            <span>html</span> 
                            <span>css</span> 
                            <span>php</span> 
                            <span>mysql</span>
                        </div>
                    </div>
                    <div class="project_buttons">
                        <a href="" class="button" target="_blank">Live demo</a>
                        <a href="" class="button button-dark" target="_blank">Source code</a>
                    </div>
                </div>
            </div>
            <div class="project">
                <div class="project_photo">
                    <img src="../../assets/img/p2.png" data-src="" alt="" class="project_img">
                </div>
                <div class="project_desc">
                    <h6 class="project_name">Offers Website</h6>
                    <div class="project_text">
                        My older project where I studied PHP. I know it is weak because it served me to learn about the mechanisms of language and objectivity.
                        <div class="project_use">
                            <h6 class="project_use-header">Use:</h6>
                            <span>html</span> 
                            <span>css</span> 
                            <span>php</span> 
                            <span>mysql</span>
                        </div>
                    </div>
                    <div class="project_buttons">
                        <a href="" class="button" target="_blank">Live demo</a>
                        <a href="" class="button button-dark" target="_blank">Source code</a>
                    </div>
                </div>
            </div>
            `;
        });
    }
    return view;
};

export default Render;
