<template>
    <b-row class="mb-3">
        <b-col sm="6" style="height: 80vh; overflow-y: scroll">
            <b-card class="pb-5">
                <!-- personal info -->
                <b-card-title class="mb-4">{{ $t('Kişisel Bilgiler') }}</b-card-title>
                <b-row>
                    <!-- [job title] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Meslek')"
                            label-class="text-muted fs-14"
                            label-for="job-title"
                        >
                            <b-form-input
                                id="job-title"
                                v-model="form.jobTitle"
                                type="text"
                                :placeholder="$t('örn. Öğretmen')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6"></b-col>
                    <!-- [first name] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Ad')"
                            label-class="text-muted fs-14"
                            label-for="firstname"
                        >
                            <b-form-input
                                id="firstname"
                                v-model="form.firstname"
                                type="text"
                                :placeholder="$t('Ad')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <!-- [last name] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Soyad')"
                            label-class="text-muted fs-14"
                            label-for="lastname"
                        >
                            <b-form-input
                                id="lastname"
                                v-model="form.lastname"
                                type="text"
                                :placeholder="$t('Soyad')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <!-- [email] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Email')"
                            label-class="text-muted fs-14"
                            label-for="email"
                        >
                            <b-form-input
                                id="email"
                                v-model="form.email"
                                type="email"
                                :placeholder="$t('Email adresi')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <!-- [phone] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Telefon')"
                            label-class="text-muted fs-14"
                            label-for="phone"
                        >
                            <b-form-input
                                id="phone"
                                v-model="form.phone"
                                type="tel"
                                :placeholder="$t('Telefon')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <!-- [country] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Ülke')"
                            label-class="text-muted fs-14"
                            label-for="country"
                        >
                            <b-form-input
                                id="country"
                                v-model="form.country"
                                type="tel"
                                :placeholder="$t('Ülke')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <!-- [city] -->
                    <b-col sm="6">
                        <b-form-group
                            :label="$t('Şehir')"
                            label-class="text-muted fs-14"
                            label-for="city"
                        >
                            <b-form-input
                                id="city"
                                v-model="form.city"
                                type="tel"
                                :placeholder="$t('Şehir')"
                                required
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <!-- #personal info# -->

                <!-- professional summary -->
                <b-card-title class="my-4">{{ $t('Kariyer Özeti') }}</b-card-title>
                <b-card-text class="text-muted small">
                    {{ 'Okuyucunun ilgisini çekecek 2-4 kısa ve enerjik cümle yazın! Rolünüzden, deneyiminizden ve en önemlisi - en büyük başarılarınızdan, en iyi niteliklerinizden ve becerilerinizden bahsedin.' }}
                </b-card-text>
                <b-form-textarea
                    v-model="form.proSummary"
                    :placeholder="$t('örn. Geliştirici olarak 8 yıllık kariyerimde...')"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <!-- #professional summary# -->

                <!-- employment history -->
                <EmploymentSection @change="updateSection" />
                <!-- #employment history# -->

                <!-- education history -->
                <EducationSection @change="updateSection" />
                <!-- #education history# -->

                <!-- skills -->
                <SkillSection @change="updateSection" />
                <!-- #skills# -->

                <!-- languages -->
                <LanguageSection @change="updateSection" />
                <!-- #languages# -->

            </b-card>
        </b-col>
        <b-col sm="6" style="height: 80vh; overflow-y: scroll">
            <b-img
                src="https://resume-example.com/wp-content/uploads/2021/06/perth-1.jpeg"
                alt="Responsive image"
                rounded
                class="mx-auto d-block h-100"
            />
        </b-col>
    </b-row>
</template>

<script>

import JobFormElement from '@/components/maker/JobFormElement.vue'
import EducationFormElement from '@/components/maker/EducationFormElement.vue'
import SkillFormElement from '@/components/maker/SkillFormElement.vue'
import EducationSection from "@/components/maker/EducationSection.vue";
import EmploymentSection from "@/components/maker/EmploymentSection.vue";
import SkillSection from "@/components/maker/SkillSection.vue";
import LanguageSection from "@/components/maker/LanguageSection.vue";

export default {
    name: "ResumeMaker",
    components: {
        EmploymentSection,
        EducationSection,
        SkillFormElement,
        EducationFormElement,
        JobFormElement,
        SkillSection,
        LanguageSection,
    },
    data() {
        return {
            form: {
                jobTitle: null,
                jobs: [],
                educations: [],
                skills: [],
                languages: [],
            },
        }
    },
    methods: {
        async getUsers() {
            const { data } = await axios.get('/api/users')
            console.log(data)
        },
        updateSection(section, data) {
            this.form[section] = data
        }
    },
    async mounted() {
        await this.getUsers()
    }
}
</script>
