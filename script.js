let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

let comecar = document.getElementById('comecar');

let controlar = document.getElementById('controlar');

let display = document.getElementById('display');

for (let i = 0; i <= 60; i++) {
	minutos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

for (let i = 1; i <= 60; i++) {
	segundos.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

comecar.addEventListener('click', function () {
	let minutoAtual = minutos.value;
	let segundoAtual = segundos.value;
	let interval;

	display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual;

	interval = setInterval(function () {
		segundoAtual--;
		if (segundoAtual <= 0) {
			if (minutoAtual > 0) {
				minutoAtual--;
				segundoAtual = 59;
			} else {
				// alert('Acabou!');
				document.getElementById('sound').play();
				clearInterval(interval);
			}
		}
		display.childNodes[1].innerHTML = minutoAtual + ':' + segundoAtual;
	}, 1000);

	let tempo = minutoAtual * 60 + segundoAtual + 100;
	setTimeout(() => {
		controlar.style.display = 'block';
	}, tempo);
});

controlar.addEventListener('click', () => {
	controlar.style.display = 'none';
	document.getElementById('sound').pause();
	display.childNodes[1].innerHTML = '';
});
