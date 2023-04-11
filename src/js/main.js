const sendBtn = document.querySelector('.app__dice');
const adviceNumber = document.querySelector('.app__title-number');
const adviceText = document.querySelector('.app__text-advice');

const getAdvice = () => {
	fetch(`https://api.adviceslip.com/advice`)
		.then(res => res.json())
		.then(data => {
			let adviceData = data.slip;
			adviceNumber.textContent = adviceData.id;
			adviceText.textContent = `${adviceData.advice}`;
		});
};


sendBtn.addEventListener('click', getAdvice);
