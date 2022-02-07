import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		reproduciendo_audios: false,
		contador_reproducciones: 0
	},
	mutations: {
		encenderApagarReproduccionAudios(state){
			state.reproduciendo_audios = !state.reproduciendo_audios
		},
		encenderReproduccionAudios(state){
			state.reproduciendo_audios = false;
		},
		apagarReproduccionAudios(state){
			state.reproduciendo_audios = true;
		},
		aumentarContadorReproducciones(state){
			state.contador_reproducciones += 1;
		},
	},

	getters: {
		estaReproduciendoAudio(state){
			return state.reproduciendo_audios
		}
	},
	actions: {
	},
	modules: {
	}
})
