module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        corporate: [
            {
                mytheme: {
                    /* your theme name */
                    primary: "#a991f7" /* Primary color */,
                    "primary-focus": "#8462f4" /* Primary color - focused */,
                    "primary-content":
                        "#ffffff" /* Foreground content color to use on primary color */,

                    secondary: "#f6d860" /* Secondary color */,
                    "secondary-focus":
                        "#f3cc30" /* Secondary color - focused */,
                    "secondary-content":
                        "#ffffff" /* Foreground content color to use on secondary color */,

                    accent: "#37cdbe" /* Accent color */,
                    "accent-focus": "#2aa79b" /* Accent color - focused */,
                    "accent-content":
                        "#ffffff" /* Foreground content color to use on accent color */,

                    neutral: "#3d4451" /* Neutral color */,
                    "neutral-focus": "#2a2e37" /* Neutral color - focused */,
                    "neutral-content":
                        "#ffffff" /* Foreground content color to use on neutral color */,

                    "base-100":
                        "#ffffff" /* Base color of page, used for blank backgrounds */,
                    "base-200": "#f9fafb" /* Base color, a little darker */,
                    "base-300": "#d1d5db" /* Base color, even more darker */,
                    "base-content":
                        "#1f2937" /* Foreground content color to use on base color */,

                    info: "#2094f3" /* Info */,
                    success: "#009485" /* Success */,
                    warning: "#ff9900" /* Warning */,
                    error: "#ff5724" /* Error */,
                },
            },
        ],
    },
};
