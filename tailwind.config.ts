import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                LoginPage: "url(\"data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%223000%22 height=%222200%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23111119%22 d=%22M-1500-1100h6000v4400h-6000z%22%2F%3E%3Cpath d=%22m2230.256-129.09-1811 277 1706 1925 674-400%22 fill=%22%23222d51%22%2F%3E%3Cpath d=%22m2058.744-1103.545-745 1053 585 1272 1640-417%22 fill=%22%23111119%22%2F%3E%3Cpath d=%22m2614.333 183.983-752 1668 1233 414 1055-131M1374.923 435.822l-1799 717 422 1779 1848-2021%22 fill=%22%23222d51%22%2F%3E%3Cpath d=%22m1514.051 1007.397-1939 1343 1676 948 579-1996M2485.256 1070.907l-812 1870 339 254 1967-1684%22 fill=%22%23111119%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-150%22 y=%22-150%22 width=%223300%22 height=%222500%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22150%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E\")"
            },
            fontFamily:{
                //Poppins:
            }
        },
    },
    plugins: [],
};
export default config;
