<template>
    <component :is="component" />
</template>

<script>
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import GuestLayout from '@/views/layouts/GuestLayout.vue'
import {mapActions} from "vuex"

export default {
    name: 'App',
    components: [
        AuthLayout,
        GuestLayout,
    ],
    computed: {
        component() {
            return this.$route.meta.middleware === 'guest' ? GuestLayout : AuthLayout
        }
    },
    methods: {
        ...mapActions({
            signIn: 'auth/login',
        }),
    },
    async created() {
        await this.$router.isReady()
        if (this.$route.meta.middleware === 'guest') return
        try {
            this.signIn()
        } catch (e) {
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style scoped>

</style>
