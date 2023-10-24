const input = document.getElementById('input'),
	form = document.getElementById('form'),
	question = document.getElementById('question')
let user = '',
	[nocurrentAttemp, userNum] = [0, 0]

const currentNumber = randomInteger(0, 99)

form.addEventListener('submit', getInputInfo)


function getInputInfo(e) {
	e.preventDefault()
	if (user == '') {
		user = input.value
		input.value = ''
		question.textContent = `${user}, тебе необходимо отгадать число от 0 до 100, я буду тебе подсказывать путём больше или меньше. Итак, введи число:`

	} else {
		userNum = input.value
		if (userNum > currentNumber) {
			// тут можно вынести в отдельную функцию
			nocurrentAttemp++
			question.textContent = `${user}, бери меньше`
			input.value = ''
			return
		} else if (userNum < currentNumber) {
			// тут можно вынести в отдельную функцию
			nocurrentAttemp++
			question.textContent = `${user}, бери больше`
			input.value = ''
			return
		} else if (userNum = currentNumber) {
			// тут можно вынести в отдельную функцию
			question.textContent = `${user}, ты победил! правильный ответ: ${currentNumber} всего неправильных попыток: ${nocurrentAttemp}`
			input.value = ''
		}

	}
}
function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}