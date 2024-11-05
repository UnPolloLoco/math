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
