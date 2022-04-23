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

    function changeToggleText(t) {
        if (toggle) {
            const toggleText = toggle.getElementsByClassName('theme-text')[0];
            toggleText.textContent = toggle.getAttribute(t);
        }
    }

    function system() {
        html.classList.remove("theme-dark");
        html.classList.remove("theme-light");
        localStorage.removeItem(THEME_KEY);
        changeToggleText('data-system');
    }

    function dark() {
        html.classList.add("theme-dark");
        html.classList.remove("theme-light");
        localStorage.setItem(THEME_KEY, 'dark');
        changeToggleText('data-dark');
    }

    function light() {
        html.classList.remove("theme-dark");
        html.classList.add("theme-light");
        localStorage.setItem(THEME_KEY, 'light');
        changeToggleText('data-light');
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

    if (toggle) {
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
}
