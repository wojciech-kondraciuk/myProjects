import dataContact from '../data/dataContact';

let view = '';
let socialLinks = '';

const Render = () => {
    if (dataContact.length === 0) {
        view += 'No description';
    } else {
        dataContact.forEach(({ name, phone, email, social }) => {
            for (const i in social) {
                if (Object.hasOwnProperty.call(social, i)) {
                    socialLinks += `<a href="${social[i][2]}"><img src="${social[i][1]}" />${social[i][0]}</a>`;
                }
            }

            view = `
                <h2 class="contact_header h2">Contact</h2>
                <h3 class="contact_name">${name}</h3>
                <a class="contact_tel" href="tel:${phone.replace(/-/g, '')}">${phone}</a>
                <a class="contact_mail" href="mailto:${email}">${email}</a>
                <div class="contact_social">
                    <h6 class="contact_social-more">See more:</h6>
                    ${socialLinks}
                </div>
            `;
        });
    }
    return view;
};

export default Render;
