import { createStore } from 'vuex'

export default createStore({
  state: {
    about : null,
    skills: null,
    experience: null,
    education: null,
    projects: null
  },

  mutations: {
    Set_About(state, payload) {
      state.about = payload
    },
    Set_Skills(state, payload) {
      state.skills = payload
    },
    Set_Experience(state, payload) {
      state.experience = payload
    },
    Set_Education(state, payload) {
      state.education = payload
    },
    Set_Projects(state, payload) {
      state.projects = payload
    }
  },
  actions: {
    async fetchData({commit}) {
      try {
        const response = await fetch('https://api.example.com/data')
        const data = await response.json()

        commit('SET_ABOUT', data.about)
        commit('Set_Skills', data.skills)
        commit('Set_Experience', data.experience)
        commit('Set_Education', data.education)
        commit('Set_Projects', data.projects)
        
      } catch (error) {
        console.error('Error fetching data:', error)
        
    }
  }
  }

})
