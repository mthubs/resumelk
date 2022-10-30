<template>
    <b-card-title class="my-4">{{ $t('Eğitim') }}</b-card-title>
    <b-card-text class="text-muted small">
        {{ 'Özgeçmişinizde çeşitli bir eğitim, öğrendiklerinizin ve geçmişinizin işe getireceği değeri özetler.' }}
    </b-card-text>

    <div  v-for="(education, index) in educations" class="my-3" :key="Math.random() * 10000">
        <b-row class="d-flex align-items-center">
            <b-col sm="11">
                <EducationFormElement :edu="education" :index="index" />
            </b-col>
            <b-col sm="1" @click.prevent="removeEducation(index)">
                <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
            </b-col>
        </b-row>
    </div>

    <div class="text-success" style="cursor: pointer" @click.prevent="addEducation">
        <span>+</span> Eğitim ekle
    </div>
</template>

<script>
import EducationFormElement from '@/components/maker/EducationFormElement.vue'
export default {
    name: "EducationSection",
    components: {
        EducationFormElement
    },
    data() {
        return {
            educations: [
                {
                    degree: 'Rus Dili ve Edebiyatı',
                    school: 'Anadolu Üniversitesi',
                    startDate: '2013-09-01',
                    endDate: '2016-06-01',
                    license: 'Üniversite',
                    description: 'Lorem ipsum dolor sit amet falan filan.',
                }
            ],
        }
    },
    watch: {
        educations: {
            immediate: true,
            handler(educations) {
                this.$emit('update-section', 'educations', educations)
            }
        }
    },
    methods: {
        addEducation() {
            const education = {
                degree: null,
                school: null,
                startDate: null,
                endDate: null,
                city: null,
                description: null,
            }
            this.educations = [ ...this.educations, education ]
        },
        removeEducation(index) {
            this.educations = this.educations.filter((education, educationIdx) => educationIdx !== index)
        },
    }
}
</script>

<style scoped>

</style>
