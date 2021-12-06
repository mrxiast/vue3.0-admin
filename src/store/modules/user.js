import { loginReq, logoutReq, getCurrInfoReq } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    //token: getToken(),
    userInfo: {},
    roles: [],
    // permissions: [],
  }
}

const state = getDefaultState()

const mutations = {
  M_username: (state, username) => {
    state.username = username
  },
  M_roles: (state, roles) => {
    state.roles = roles
  },
  M_type: (state, type) => {
    state.type = type
  },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // }
}

const actions = {
  // user login
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      loginReq(data)
        .then((res) => {
          if (res.code === 0) {
            //commit('SET_Token', res.data?.jwtToken)
            setToken(res.data)
            resolve()
          } else {
            reject(res)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // get user info
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('roles', JSON.stringify(data.roles))
      getCurrInfoReq()
        .then((response) => {
          const { data } = response
          if (!data) {
            return reject('Verification failed, please Login again.')
          }
          // mock role if not existed
          const rolesArr = localStorage.getItem('roles')
          if (rolesArr) {
            data.roles = JSON.parse(rolesArr)
          } else {
            data.roles = ['admin']
            localStorage.setItem('roles', JSON.stringify(data.roles))
          }
          commit('M_username', data.username)
          commit('M_roles', data.roles)
          commit('M_type', data.type)
          // commit('SET_AVATAR', avatar)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // user logout
  logout () {
    return new Promise((resolve, reject) => {
      logoutReq()
        .then(() => {
          removeToken() // must remove  token  first
          resetstate()
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // remove token
  resetToken () {
    return new Promise((resolve) => {
      removeToken() // must remove  token  first
      resolve()
    })
  },
  resetstate ({ commit, dispatch, state, rootState }, config = {}) {
    console.log(rootState)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
