const sendBtn = document.querySelector('.app__dice');
const sendBtnImg = document.querySelector('.app__dice img');
const adviceNumber = document.querySelector('.app__title-number');
const adviceText = document.querySelector('.app__text-advice');

let time = 1000;
const URL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
	try {
		const response = await axios.get(URL);
		let adviceData = response.data.slip;
		adviceNumber.textContent = adviceData.id;
		adviceText.textContent = `${adviceData.advice}`;
	} catch (error) {
		console.error('Error:', error);
	}
}


const handleAnimation = () => {
	sendBtn.classList.add('shake');
	sendBtnImg.classList.add('rotate');
	setTimeout(() => {
		sendBtn.classList.remove('shake');
		sendBtnImg.classList.remove('rotate');
	}, time);
};

sendBtn.addEventListener('click', () => {
	handleAnimation();
	setTimeout(() => {
		getAdvice();
	}, time);
});
