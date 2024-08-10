/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#f42c37",
                secondary: "#f42c37",
                brandYellow: "#fdc62e",
                brandBlue: "#1376f4",
                brandWhite: "#eeeeee",
            },
            container: {
                center: true,
                padding: {
                    default: "1rem",
                    sm: "3rem",
                },
            },
        },
    },
    plugins: [],
}