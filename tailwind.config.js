/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    700: "#146eb4",
                    600: "#326cae",
                    500: "#202444",
                    400: "#244e7d",
                    300: "#2C3953",

                }

            }
        },
    },
    plugins: [],
}