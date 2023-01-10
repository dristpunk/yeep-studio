/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./pages/*.{html,js,jsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ["Segoe UI", "ui-sans-serif", "sans-serif"],
                mono: ["Courier New", "ui-monospace", "monospace"],
            },
            padding: {
                "1/2": "50%",
                full: "100%",
            },
            margin: {
                "1/2": "50%",
                full: "100%",
            },
        },
    },
    plugins: [],
};
