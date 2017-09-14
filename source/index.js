(function () {
    var last_theme = localStorage.getItem('theme'),
        $$body = document.querySelector('body'),
        $$theme = document.getElementById('theme-selector'),
        $$theme_btn = document.querySelectorAll('#theme-selector button');

    if (last_theme) {
        setTheme(last_theme);
    }

    $$theme_btn.forEach(function (btn) {
        btn.id === 'back-to-top' ?
            btn.addEventListener('click', scrollToTop) :
            btn.addEventListener('click', changeTheme);
    });

    function scrollToTop() {
        document.getElementById('body-inner-container').scrollTop = 0;
    }

    function getThemeName() {
        return $$theme.getAttribute('data-theme');
    }

    function changeTheme(e) {
        setTheme(e.target.parentElement.getAttribute('data-theme'), 'click');
    }

    function setTheme(theme_name, type) {
        if (theme_name !== getThemeName()) {
            // click 的时候才执行切换动画
            if (type === 'click') {
                $$body.className = 'hide';
                setTimeout(function () {
                    action();
                    $$body.className = '';
                }, 500);
            }
            else {
                action();
            }
        }

        function action() {
            $$theme.setAttribute('data-theme', theme_name);
            $$body.setAttribute('data-theme', theme_name);
            localStorage.setItem('theme', theme_name);
        }
    }
}());