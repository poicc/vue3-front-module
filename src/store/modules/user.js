import md5 from 'md5'
import { loginUser, getProfile } from '@/api/sys'
import { message } from '@/libs'

/**
 * user 模块
 */
export default {
  namespaced: true,
  state: () => ({
    token: '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
    },
    setUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  },
  actions: {
    /**
     * 登录
     */
    async login(context, payload) {
      // 加密密码
      const { password } = payload
      const data = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })
      context.commit('setToken', data.token)
      context.dispatch('profile')
    },
    /**
     * 获取用户信息
     */
    async profile(context) {
      const data = await getProfile()
      context.commit('setUserInfo', data)
      message(
        'success',
        `欢迎您 ${
          data.vipLevel
            ? '尊贵的 VIP-' + data.vipLevel + '用户' + data.nickname
            : data.nickname
        }`,
        6000
      )
    },
    /**
     * 退出登录
     */
    logout(contenxt) {
      // 清空token
      contenxt.commit('setToken', '')
      // 清空用户信息
      contenxt.commit('setUserInfo', {})
      // 刷新页面
      location.reload()
    }
  }
}
