import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import "primeicons/primeicons.css";

const PRIMARY_PRESET = definePreset(Aura, {
		semantic: {
				primary: {
						50: "#F1EFFF",
						100: "#E0E0FF",
						200: "#BDC2FF",
						300: "#9BA4FF",
						400: "#7C87F3",
						500: "#626DD7",
						600: "#4953BC",
						700: "#2F3AA3",
						800: "#131E8C",
						900: "#000767",
						950: "#000344",
				},
				colorScheme: {
						light: {
								surface: {
										0: "#ffffff",
										50: "#F1EFFF",
										100: "#E0E0FF",
										200: "#BDC2FF",
										300: "#9BA4FF",
										400: "#7C87F3",
										500: "#626DD7",
										600: "#4953BC",
										700: "#2F3AA3",
										800: "#131E8C",
										900: "#000767",
										950: "#000344",
								},
						},
						dark: {
								surface: {
										0: "#ffffff",
										50: "#f8fafc",
										100: "#f1f5f9",
										200: "#e2e8f0",
										300: "#cbd5e1",
										400: "#94a3b8",
										500: "#64748b",
										600: "#475569",
										700: "#31394d",
										800: "#131b2e",
										900: "#0b1326",
										950: "#060e20",
								},
						},
				},
		},
});

const app = createApp(App);
app.use(PrimeVue, {
		theme: {
				preset: PRIMARY_PRESET,
				options: {
						darkModeSelector: "system",
				},
		},
		pt: {
				button: {
						root: {class: "button-padding"},
				},
		},
});

app.mount("#app");