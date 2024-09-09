import type { Config } from "tailwindcss";

export default {
      content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
      theme: {
            extend: {
                  colors: {
                        gray: {
                              100: "#f9fafb",
                              200: "#eef2f7",
                              300: "#e3e9f0",
                              400: "#cfd6df",
                              500: "#a9b3bc",
                              600: "#81888f",
                              700: "#5b5d62",
                              800: "#3f3e45",
                              900: "#27252b",
                        },
                        black: "#000000",
                        green: "#afcc54",
                        red: "#f43f5e",
                  },
                  sans: [
                        "ui-sans-serif",
                        "system-ui",
                        "-apple-system",
                        "BlinkMacSystemFont",
                        '"Segoe UI"',
                        "Roboto",
                        '"Helvetica Neue"',
                        "Arial",
                        '"Noto Sans"',
                        "sans-serif",
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                        '"Noto Color Emoji"',
                  ],
            },
      },
      plugins: [],
} satisfies Config;
