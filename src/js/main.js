const toggleBtn = document.querySelector('.toggle-button');
const pirmaryNav = document.querySelector('#primary-nav');

const handleToggleBtn = e => {
	const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
	toggleBtn.setAttribute('aria-expanded', !isExpanded);
	pirmaryNav.toggleAttribute('data-expanded', !isExpanded);
	document.body.classList.toggle('shadow-overlay', !isExpanded);
};

toggleBtn.addEventListener('click', handleToggleBtn);
