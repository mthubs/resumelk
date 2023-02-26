import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

import auth from '@/store/auth'

const store = createStore({
    plugins:[
        createPersistedState({
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ],
    modules:{
        auth
    }
})

export default store
