/* Shared Tailwind config for all BASKI Automation pages.
   Must be loaded right after the Tailwind CDN script. */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-tint": "#ffb59e",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container-high": "#2a2a2a",
        "on-primary-container": "#3a0b00",
        "inverse-primary": "#ae3200",
        "on-secondary-container": "#b7b5b4",
        "on-secondary": "#313030",
        "primary-fixed-dim": "#ffb59e",
        "on-surface-variant": "#e6beb2",
        "surface-container": "#201f1f",
        "on-primary-fixed-variant": "#852400",
        "secondary-fixed": "#e5e2e1",
        "on-primary-fixed": "#3a0b00",
        "tertiary-fixed": "#e2e2e2",
        "inverse-on-surface": "#313030",
        "surface-variant": "#353534",
        "background": "#131313",
        "on-tertiary-container": "#282a2a",
        "secondary-container": "#474746",
        "surface": "#131313",
        "on-tertiary-fixed-variant": "#454747",
        "on-surface": "#e5e2e1",
        "outline-variant": "#5c4037",
        "on-secondary-fixed": "#1c1b1b",
        "surface-dim": "#131313",
        "on-tertiary": "#2f3131",
        "primary-fixed": "#ffdbd0",
        "primary": "#ff571a",
        "on-tertiary-fixed": "#1a1c1c",
        "on-error": "#690005",
        "on-background": "#e5e2e1",
        "on-primary": "#ffffff",
        "tertiary-container": "#909191",
        "tertiary": "#c6c6c7",
        "surface-container-highest": "#353534",
        "primary-container": "#ff571a",
        "on-error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#474746",
        "secondary-fixed-dim": "#c8c6c5",
        "secondary": "#c8c6c5",
        "surface-bright": "#3a3939",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "tertiary-fixed-dim": "#c6c6c7",
        "outline": "#ad897e",
        "inverse-surface": "#e5e2e1"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "container-max": "1440px",
        "margin": "40px",
        "gutter": "24px",
        "base": "8px"
      },
      fontFamily: {
        "display-xl": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"],
        "headline-md": ["Space Grotesk"],
        "headline-lg-mobile": ["Space Grotesk"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-mono": ["Geist"]
      },
      fontSize: {
        "display-xl": ["96px", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.1", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "500" }]
      }
    }
  }
};
