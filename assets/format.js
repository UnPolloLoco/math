// Prepare KaTeX
function loadKatex() {
	let katexElementList = document.getElementsByTagName('kx');
	for (let i = 0; i < katexElementList.length; i++) {
		let element = katexElementList[i];
		katex.render(element.innerText, element, {
			throwOnError: false,
			macros: {
				'\\n': '\\\\[0.5em]',
				'\\nn': '\\\\[1em]',
				'\\N': '\\\\[2em]',
				'\\eq': '\\space &= \\space',
				'\\resetcolor': '\\color{#d2d2d2}',
				'\\C': '\\color{#1}#2\\resetcolor',
				'\\coldim': '\\C{707070}{#1}',
				'\\undef': '\\text{undefined}',
				'\\DNE': '\\text{DNE}',
				'\\ind': '\\text{indeterminate}',
			},
		});
	}
}

// Prepare accordions
let accordionList = document.getElementsByTagName('c-accordion');
for (let i = 0; i < accordionList.length; i++) {
	let accordionElement = accordionList[i];
	accordionElement.innerHTML = accordionElement.innerHTML + '<c-accordionindicator>+</c-accordionindicator>';

	let openID = accordionElement.getAttribute('data-opens');
	let accordionPanel = document.querySelector(`[data-openedby='${openID}']`);
	let accordionIndicator = document.querySelector(`[data-opens='${openID}'] > c-accordionindicator`);

	accordionElement.addEventListener('click', function() { 
		accordionClick(accordionElement, accordionPanel, accordionIndicator);
	});
}

// Accordion click function
function accordionClick(accordion, panel, indicator) {
	let isNested = accordion.parentElement.tagName == 'C-EXTRA';
	if (indicator.innerHTML == '+') {
		// SHOW
		indicator.innerHTML = '&ndash;';
		panel.style.display = 'block';
		accordion.style.marginBottom = '0';

	} else {
		// HIDE
		indicator.innerText = '+';
		panel.style.display = 'none';
		if (!isNested) accordion.style.marginBottom = '40px';
	}
}
