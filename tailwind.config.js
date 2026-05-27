/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          dark: '#0F1F33',
          light: '#2A5580',
        },
        'climb-red': {
          DEFAULT: '#C41E24',
          hover: '#E03038',
        },
        cream: '#F5F0E8',
        steel: '#5A6A7A',
        'sky-blue': '#4A9FD4',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Inter"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 8px 24px rgba(0,0,0,0.12)",
        image: "0 12px 40px rgba(0,0,0,0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "glitch": {
          "0%": { clipPath: "inset(0 0 0 0)", transform: "translate(-2px, 0)" },
          "10%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(-4px, 2px)" },
          "20%": { clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -2px)" },
          "30%": { clipPath: "inset(0 0 0 0)", transform: "translate(-2px, 0)" },
          "40%": { clipPath: "inset(40% 0 30% 0)", transform: "translate(4px, 2px)" },
          "50%": { clipPath: "inset(0 0 0 0)", transform: "translate(-4px, 0)" },
          "60%": { clipPath: "inset(80% 0 5% 0)", transform: "translate(2px, -2px)" },
          "70%": { clipPath: "inset(0 0 0 0)", transform: "translate(-2px, 0)" },
          "80%": { clipPath: "inset(30% 0 40% 0)", transform: "translate(4px, 0)" },
          "90%": { clipPath: "inset(50% 0 20% 0)", transform: "translate(-2px, 2px)" },
          "100%": { clipPath: "inset(0 0 0 0)", transform: "translate(-2px, 0)" },
        },
        "glitch-before": {
          "0%": { clipPath: "inset(0 0 0 0)", left: "-2px" },
          "10%": { clipPath: "inset(20% 0 60% 0)", left: "-4px", top: "2px" },
          "20%": { clipPath: "inset(60% 0 10% 0)", left: "2px", top: "-2px" },
          "30%": { clipPath: "inset(0 0 0 0)", left: "-2px" },
          "40%": { clipPath: "inset(40% 0 30% 0)", left: "4px", top: "2px" },
          "50%": { clipPath: "inset(0 0 0 0)", left: "-4px" },
          "60%": { clipPath: "inset(80% 0 5% 0)", left: "2px", top: "-2px" },
          "70%": { clipPath: "inset(0 0 0 0)", left: "-2px" },
          "80%": { clipPath: "inset(30% 0 40% 0)", left: "4px" },
          "90%": { clipPath: "inset(50% 0 20% 0)", left: "-2px", top: "2px" },
          "100%": { clipPath: "inset(0 0 0 0)", left: "-2px" },
        },
        "glitch-after": {
          "0%": { clipPath: "inset(0 0 0 0)", left: "2px" },
          "10%": { clipPath: "inset(20% 0 60% 0)", left: "4px", top: "-2px" },
          "20%": { clipPath: "inset(60% 0 10% 0)", left: "-2px", top: "2px" },
          "30%": { clipPath: "inset(0 0 0 0)", left: "2px" },
          "40%": { clipPath: "inset(40% 0 30% 0)", left: "-4px", top: "-2px" },
          "50%": { clipPath: "inset(0 0 0 0)", left: "4px" },
          "60%": { clipPath: "inset(80% 0 5% 0)", left: "-2px", top: "2px" },
          "70%": { clipPath: "inset(0 0 0 0)", left: "2px" },
          "80%": { clipPath: "inset(30% 0 40% 0)", left: "-4px" },
          "90%": { clipPath: "inset(50% 0 20% 0)", left: "2px", top: "-2px" },
          "100%": { clipPath: "inset(0 0 0 0)", left: "2px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 1.5s ease-in-out infinite",
        "glitch": "glitch-before 4s steps(1) infinite",
        "glitch-after": "glitch-after 4s steps(1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
