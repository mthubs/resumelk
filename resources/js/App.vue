<template>
    <component :is="component" />
</template>

<script>
import AuthLayout from '@/views/layouts/AuthLayout.vue'
import GuestLayout from '@/views/layouts/GuestLayout.vue'

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
}
</script>

<style scoped>

</style>
