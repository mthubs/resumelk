<template>
    <b-card-title class="my-4">{{ $t('Yetenekler') }}</b-card-title>
    <b-card-text class="text-muted small">
        {{ 'Yeteneklerinizi göstermek için en önemli 5 beceriyi seçin! Çevrimiçi bir sistem üzerinden başvuruyorsanız, iş listesinin anahtar kelimeleriyle eşleştiğinden emin olun.' }}
    </b-card-text>

    <div>
        <b-form-checkbox v-model="showSkillLevel" name="check-button" switch>
            <span class="small">Yetenek seviyelerini göster</span>
        </b-form-checkbox>
    </div>

    <div  v-for="(skill, index) in skills" class="my-3">
        <b-row class="d-flex align-items-center">
            <b-col sm="11">
                <SkillFormElement :skill="skill" :index="index" :showLevel="showSkillLevel" />
            </b-col>
            <b-col sm="1" @click.prevent="removeSkill(index)">
                <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
            </b-col>
        </b-row>
    </div>

    <div class="text-success" style="cursor: pointer" @click.prevent="addSkill">
        <span>+</span> Yetenek ekle
    </div>
</template>


<script>
import SkillFormElement from '@/components/maker/SkillFormElement.vue'
export default {
    name: "SkillSection",
    components: {
        SkillFormElement
    },
    data() {
        return {
            skills: [
                { name: 'PHP', level: 5 },
                { name: 'Javascript', level: 5 },
                { name: 'MySQL', level: 4 },
            ],
            showSkillLevel: true,
        }
    },
    watch: {
        skills: {
            immediate: true,
            handler(skills) {
                this.$emit('change', 'skills', skills)
            }
        }
    },
    methods: {
        addSkill() {
            const skill = {
                name: null,
                level: 1,
            }
            this.skills = [ ...this.skills, skill ]
        },
        removeSkill(index) {
            this.skills = this.skills.filter((skill, skillIdx) => skillIdx !== index)
        },
    }
}
</script>

<style scoped>

</style>
