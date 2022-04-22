const THEME_KEY = "jiko_theme";

(function() {
	burger();
	theme();
})();

function burger() {
	const elem = document.body;
	document.getElementById('burger').addEventListener("click", function() {
		if(elem.classList.contains("menu-opened")) {
			elem.classList.remove("menu-opened");
		} else {
			elem.classList.add("menu-opened");
		}
	});
}

function theme() {
	const html = document.documentElement;
    const toggle = document.getElementById('js-theme');
    const toggleText = toggle.getElementsByClassName('theme-text')[0];

    function system() {
    	html.classList.remove("theme-dark");
    	html.classList.remove("theme-light");
        localStorage.removeItem(THEME_KEY);
        toggleText.textContent = toggle.getAttribute('data-system');
    }

    function dark() {
        html.classList.add("theme-dark");
    	html.classList.remove("theme-light");
        localStorage.setItem(THEME_KEY, 'dark');
        toggleText.textContent = toggle.getAttribute('data-dark');
    }

    function light() {
        html.classList.remove("theme-dark");
    	html.classList.add("theme-light");
        localStorage.setItem(THEME_KEY, 'light');
        toggleText.textContent = toggle.getAttribute('data-light');
    }

    switch (localStorage.getItem(THEME_KEY) || DEFAULT_COLOR_SCHEME) {
        case 'dark':
            dark();
            break;
        case 'light':
            light();
            break;
        default:
            system();
            break;
    }

    toggle.addEventListener("click", function(e) {
        e.preventDefault();

        if (!html.classList.contains('theme-dark') && !html.classList.contains('theme-light')) {
            dark();
        } else if (html.classList.contains('theme-dark')) {
            light();
        } else {
            system();
        }
    });
}
