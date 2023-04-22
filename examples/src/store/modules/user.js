import md5 from 'md5'
import { loginUser, getProfile, registerUser } from '@/api/sys'
import { PoiMessage } from 'poicc-components'
import { LOGIN_TYPE_OAUTH_NO_REGISTER_CODE } from '@/constants'

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
     * 注册
     */
    async register(context, payload) {
      // 加密密码
      const { password } = payload
      return await registerUser({
        ...payload,
        password: password ? md5(password) : ''
      })
    },
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
      // 判断是否需要扫码注册
      if (data.code === LOGIN_TYPE_OAUTH_NO_REGISTER_CODE) {
        return data.code
      }
      context.commit('setToken', data.token)
      context.dispatch('profile')
    },
    /**
     * 获取用户信息
     */
    async profile(context) {
      const data = await getProfile()
      if (
        data.avatar ==
        'https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"'
      ) {
        data.avatar = 'https://p.ipic.vip/smf4vi.png'
        data.nickname = '新用户'
      }
      context.commit('setUserInfo', data)
      PoiMessage(
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
