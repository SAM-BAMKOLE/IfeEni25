/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{vue,ts}"],
    theme: {
        fontFamily: {
            base: ["Montserrat", "sans-serif"],
            accent: ["Great Vibes", "serif"],
            serif: ["Lora", "serif"],
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                lightTheme: {
                    primary: "#FFF7FDFF",
                    secondary: "#8E095C",
                    accent: "#000000FF",
                },
            },
        ],
        defaultTheme: "lightTheme",
    },
    plugins: [require("daisyui")],
};
