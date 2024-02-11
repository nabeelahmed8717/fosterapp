// theme
import palette from "@root/theme/palette";

// ----------------------------------------------------------------------

export const colorPresets = [
  // DEFAULT
  {
    name: "default",
    ...palette.light.primary,
  },
  // PURPLE
  {
    name: "purple",
    lighter: "#9a61e759",
    light: "#8e4ee4",
    main: "#813AE1",
    dark: "#7434cb",
    darker: "#672eb4",
    contrastText: "#fff",
  },

  // Jazz Blue
  {
    name: "blue",
    lighter: "#35baf140",
    light: "#1cb2f4",
    main: "#03A9F3",
    dark: "#0398db",
    darker: "#03A9F3",
    contrastText: "#fff",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#f0653340",
    light: "#f27447",
    main: "#F06533",
    dark: "#f06533",
    darker: "#d85b2e",
    contrastText: "#fff",
  },
  // Turquoise
  {
    name: "turquoise",
    lighter: "#2bd6d740",
    light: "#2bd6d7",
    main: "#13D1D3",
    dark: "#11bcbe",
    darker: "#0fa7a9",
    contrastText: "#fff",
  },
  // Charcoal
  {
    name: "charcoal",
    lighter: "#2e324140",
    light: "#343949",
    main: "#3A3F51",
    dark: "#4e5262",
    darker: "#616574",
    contrastText: "#fff",
  },
  // green
  {
    name: "green",
    lighter: "#a4d2bc40",
    light: "#11a25a",
    main: "#13B464",
    dark: "#11a25a",
    darker: "#2CB764",
    contrastText: "#fff",
  },
];

export const defaultPreset = colorPresets[0];
export const purplePreset = colorPresets[1];
export const bluePreset = colorPresets[2];
export const orangePreset = colorPresets[3];
export const turquoisePreset = colorPresets[4];
export const charcoalPreset = colorPresets[5];
export const greenPreset = colorPresets[6];

export default function getColorPresets(presetsKey: string) {
  return {
    purple: purplePreset,
    blue: bluePreset,
    green: greenPreset,
    orange: orangePreset,
    turquoise: turquoisePreset,
    charcoal: charcoalPreset,
    default: defaultPreset,
  }[presetsKey];
}
