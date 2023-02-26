<template>
    <section class="d-flex flex-column align-items-center justify-content-center">
        <div>
            <img src="/images/logo.png" style="width: 10rem">
        </div>
        <b-overlay :show="processing">
        <b-card
            class="mt-2 mb-5 shadow"
        >
                <b-card-title class="text-center">{{ $t('titles.login') }}</b-card-title>
                <b-form @submit.preevnt="login">
                    <b-form-group
                        id="input-group-1"
                        :label="$t('titles.email')"
                        label-for="input-1"
                        :description="$t('titles.wontShareEmail')"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="auth.email"
                            type="email"
                            :placeholder="$t('titles.emailPlaceholder')"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" :label="$t('titles.password')" label-for="input-2">
                        <b-form-input
                            id="input-2"
                            type="password"
                            v-model="auth.password"
                            :placeholder="$t('titles.passwordPlaceholder')"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary" class="col-12" id="login-button">
                        {{ $t('actions.login') }}
                    </b-button>
                </b-form>
        </b-card>
        </b-overlay>
        <div>{{ $t('titles.footer', { year: new Date().getFullYear() }) }}</div>

    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "Login",
    data(){
        return {
            auth:{
                email: 'mtepeau@gmail.com',
                password: 'Test1234*',
            },
            validationErrors:{},
            processing: false
        }
    },
    methods:{
        ...mapActions({
            signIn: 'auth/login'
        }),
        async login(){
            this.processing = true
            try {
                const { data } = await axios.post('/login',this.auth)
                await this.signIn(data.user)
                this.$router.push({name: 'dashboard'})
            } catch (e) {
                console.log(e)
                if(e.response.status===422) return this.validationErrors = e.response.data.errors
                this.validationErrors = {}
                alert(e.response.data.message)
            } finally {
                this.processing = false
            }
        },
    }
}
</script>

<style scoped>
    #login-button {
        background-color: #393548 !important;
        border-color: #393548 !important;
    }

    h4, label {
        color: #393548 !important;
    }

    .card {
        background-color: #ffa785 !important;
        border-color: #ffa785 !important;
    }

    section {
        height: 95vh;
    }
</style>
