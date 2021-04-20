import Vuex from "vuex";
import Vue from "vue";
import http from "@/http";

Vue.use(Vuex);

const estado = {
	token: localStorage.getItem("vuetoken") || null,
	usuario: {},
};

const mutations = {
	DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
		state.usuario = usuario;
		state.token = token;
		localStorage.setItem("vuetoken", token);
	},
	DESLOGAR_USUARIO(state) {
		state.usuario = {};
		state.token = null;
		localStorage.removeItem("vuetoken");
	},
};

const getters = {
	usuarioEstaLogado: (state) => Boolean(state.token),
};

const actions = {
	efetuarLogin({ commit }, usuario) {
		return new Promise((resolve, reject) => {
			http.post("auth/login", usuario)
				.then((res) => {
					commit("DEFINIR_USUARIO_LOGADO", {
						token: res.data.access_token,
						usuario: res.data.user,
					});
					resolve(res.data);
				})
				.catch((err) => {
					console.log(err);
					reject(err);
				});
		});
	},
};

export default new Vuex.Store({
	state: estado,
	mutations,
	actions,
	getters
});
