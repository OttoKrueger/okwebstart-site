    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }

    /** @type {import('tailwindcss').Config} */
        module.exports = {
      content: [
        "./src/**/*.{html,js}", // ou onde estiver seu HTML/JS
      ],
      theme: {
        extend: {
          fontFamily: {
            mont: ['Montserrat', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }