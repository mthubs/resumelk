<template>
    <Navbar :user="user" :logout="logout" />
    <div class="container-fluid">
        <main class="mt-5">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from '@/views/layouts/Navbar.vue'

export default {
    name: 'AuthLayout',
    components: {Navbar},
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({ signOut: 'auth/logout' }),
        async logout(){
            await axios.post('/logout')
            this.signOut()
            this.$router.push({ name: 'login' })
        }
    }
}
</script>
