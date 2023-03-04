<template>
    <b-navbar type="light" variant="light" id="navbar" class="">
        <router-link to="/" class="navbar-brand">
            <b-navbar-brand class="d-flex align-items-center">
                <img
                    src="/images/logo.png"
                    height="30"
                    alt=""
                    loading="lazy"
                />
                <span id="brand">Resumelk</span>
            </b-navbar-brand>
        </router-link>
        <b-navbar-nav >
            <b-nav-item-dropdown text="User" right>
                <template #button-content>
                    <b-avatar variant="primary" src="/images/robotface.png" size="2em" rounded="sm" />
                    <span id="user">{{ user.name }}</span>
                </template>
                <b-dropdown-item @click.prevent="logout">{{ $t('actions.logout') }}</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        user: Object,
        logout: Function
    },
    data() {
        return {
            dropdown6: false,
        }
    }
};
</script>

<style scoped>
    #navbar {
        background-color: var(--re-orange) !important;
    }

    #brand, #user {
        color: var(--re-black) !important;
    }

    #user {
        margin-left: 6px;
    }

</style>
