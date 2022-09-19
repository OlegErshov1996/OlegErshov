/* ========================= Contact Form ======================== */

const token = "5578015258:AAHI-3fsRYkRcH2v4eAHYebHS1GEcdod7k8";
const chat_ID = "-1001211147816";
const URL_API = `https://api.telegram.org/bot${ token }/sendMessage`;

document.getElementById('telegram').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта:</b>\n`;
    message += `<b>Имя: </b> ${ this.name.value }\n`;
    message += `<b>Фамилия: </b> ${ this.family.value }\n`;
    message += `<b>Почта: </b> ${ this.email.value }\n`;
    message += `<b>Телефон: </b> ${ this.tel.value }\n`;
    message += `<b>Сообщение: </b> ${ this.massage.value }\n`;

    axios.post(URL_API, {
        chat_id: chat_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.family.value = "";
        this.email.value = "";
        this.tel.value = "";
        this.massage.value = "";
        success.innerHTML = "Сообщение отправлено"
        success.style.display = "block";
    })
    .catch((err) => {

    })
    .finally(() => {

    })
})
