<template>
    <b-card-title class="my-4">{{ $t('Diller') }}</b-card-title>

    <div  v-for="(language, index) in languages" class="my-3">
        <b-row class="d-flex align-items-center">
            <b-col sm="11">
                <LanguageFormElement :language="language" :index="index" />
            </b-col>
            <b-col sm="1" @click.prevent="removeLanguage(index)">
                <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
            </b-col>
        </b-row>
    </div>

    <div class="text-success" style="cursor: pointer" @click.prevent="addLanguage">
        <span>+</span> Dil ekle
    </div>
</template>


<script>
import LanguageFormElement from '@/components/maker/LanguageFormElement.vue'
export default {
    name: "LanguageSection",
    components: {
        LanguageFormElement
    },
    data() {
        return {
            languages: [
                { name: 'English', level: 'C2' },
                { name: 'Turkish', level: 'C2' },
            ],
            showLanguageLevel: true,
        }
    },
    watch: {
        languages: {
            immediate: true,
            handler(languages) {
                this.$emit('change', 'languages', languages)
            }
        }
    },
    methods: {
        addLanguage() {
            const language = {
                name: null,
                level: 'A1',
            }
            this.languages = [ ...this.languages, language ]
        },
        removeLanguage(index) {
            this.languages = this.languages.filter((language, languageIdx) => languageIdx !== index)
        },
    }
}
</script>

<style scoped>

</style>
