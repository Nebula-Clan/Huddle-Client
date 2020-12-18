import { ChatProfile } from './models/chatprofile'
import { ProfileListController } from './helper-classes/controllers/profilelistcontroller'

const getDefaultState = () => {
    return {
        profileController: new ProfileListController(),
        status: 'empty'
    }
}

const state = getDefaultState()
  
const getters = {
    getProfileList: (state) => {
        return state.profileController.profileList
    },
    getWebSocket: (state) => {
        return state.websocket
    }
}
  
const mutations = {
    addProfileAndParse(state, profileJson) {
        let chatProfile = new ChatProfile()
        chatProfile.parseFromJson(profileJson)
        state.profileController.pushProfileInBack(chatProfile)
    },
    addMessageJsonToProfile(state, {findedProfile, messageJson}) {
        findedProfile.pushMessageJson(messageJson)
    },
    addMessageArrayJsonToProfile(state, {findedProfile, messageJson}) {
        findedProfile.pushMessageArrayJson(messageJson)
    },
    addMessageInctanceToProfile(state, {findedProfile, messageInstance}) {
        findedProfile.pushMessage(messageInstance)
    },
    addMessageArrayInctanceToProfile(state, {findedProfile, messageInstance}) {
        findedProfile.pushMessageArray(messageInstance)
    },
    sortProfileMessages(state, { findedProfile }) {
        findedProfile.sortMessages()
    },
    setSocket(state, webScoket) {
        state.websocket = webScoket
    }
}
  
const actions = {
    getProfileWithUsername: ({ state, commit}, username) => {
        return state.profileController.findProfile(username)
    },
    pushMessageJsonToProfile({ state, commit}, {username, messageJson, isArray}) {
        let findedProfile = state.profileController.findProfile(username)
        if (findedProfile == undefined || findedProfile == null) {
            return false
        }

        if (isArray == true) {
            commit('addMessageArrayJsonToProfile', {findedProfile, messageJson})
        } else {
            commit('addMessageJsonToProfile', {findedProfile, messageJson})
        }
        return true
    },
    pushMessageToProfile({ state, commit}, {username, messageInstance, isArray}) {
        let findedProfile = state.profileController.findProfile(username)
        if (findedProfile == undefined || findedProfile == null) {
            return false
        }

        if (isArray == true) {
            commit('addMessageArrayInctanceToProfile', {findedProfile, messageInstance})
        } else {
            commit('addMessageInctanceToProfile', {findedProfile, messageInstance})
        }
        return true
    },
    sortProfileMessages({ state, commit }, username) {
        let findedProfile = state.profileController.findProfile(username)
        if (findedProfile == undefined || findedProfile == null) {
            return false
        }

        commit('sortProfileMessages', {findedProfile})
        return true
    },
    addProfile({ state, commit}, profileJson) {
        commit('addProfileAndParse', profileJson)
        return true
    },
    setWebSocket({ state, commit}, webSocket) {
        commit('setSocket', webSocket)
        return true
    },
    getProfileByUsername: ({ state, commit }, username) => {
        return state.profileController.findProfile(username)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}