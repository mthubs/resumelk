<template>
    <div class="row d-flex align-items-center justify-content-center">
        <div class="col-sm-6">
            <b-card
                align="center"
                class="shadow"
            >
                <b-card-title>{{ $t('Hoşgeldiniz') }},</b-card-title>
                <div class="jumbotron">
                    <h1 class="display-4">{{ user.name }}!</h1>
                    <p class="lead">
                        {{ $t('Kariyerinin zirvesine doğru bir yolculuğa başlaman için, Resumelk olarak sana yardımcı olmaktan mutluluk duyarız.') }}
                    </p>
                    <hr class="my-4">
                    <p>{{ $t('Hemen bir özgeçmiş veya ön yazı oluşturarak başlayabilirsin.') }}</p>
                    <router-link :to="`/resume/1`">
                        <b-button variant="outline-dark" class="me-1" size="lg">{{ $t('ÖZGEÇMİŞ') }}</b-button>
                    </router-link>

                    <b-button variant="outline-dark" size="lg">{{ $t('ÖN YAZI') }}</b-button>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    name: "Dashboard",
    data() {
        return {
            docTitle: 'wtf',
            user: this.$store.state.auth.user
        }
    },
}
</script>
