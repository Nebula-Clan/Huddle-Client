import axious from 'axios'
import { Like } from './classes/Like'

const state = () => ({
    likes: []
})
  
const getters = {
    getLikes: (state) => {
        return state.likes
    },
}
  
const mutations = {

}
  
const actions = {

}


export default {
    state,
    getters,
    mutations,
    actions
}