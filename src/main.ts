import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const PRIMARY_PRESET = definePreset(Aura, {
		semantic: {
				primary: {
						50: '#F1EFFF',
						100: '#E0E0FF',
						200: '#BDC2FF',
						300: '#9BA4FF',
						400: '#7C87F3',
						500: '#626DD7',
						600: '#4953BC',
						700: '#2F3AA3',
						800: '#131E8C',
						900: '#000767',
						950: '#000344'
				},
				colorScheme: {
						light: {
								surface: {
										0: '#ffffff',
										50: '#F1EFFF',
										100: '#E0E0FF',
										200: '#BDC2FF',
										300: '#9BA4FF',
										400: '#7C87F3',
										500: '#626DD7',
										600: '#4953BC',
										700: '#2F3AA3',
										800: '#131E8C',
										900: '#000767'
								}
						},
						dark: {
								surface: {
										0: '#ffffff',
										50: '#F1EFFF',
										100: '#E0E0FF',
										200: '#BDC2FF',
										300: '#9BA4FF',
										400: '#7C87F3',
										500: '#626DD7',
										600: '#4953BC',
										700: '#2F3AA3',
										800: '#131E8C',
										900: '#000767'
								}
						}
				}
		}
})

const app = createApp(App)
app.use(PrimeVue, {
		theme: {
				preset: PRIMARY_PRESET,
				options: {
						darkModeSelector: 'system'
				}
		}
})

app.mount('#app')