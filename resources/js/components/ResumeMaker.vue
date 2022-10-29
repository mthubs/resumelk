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
                <b-card-title class="my-4">{{ $t('İş Geçmişi') }}</b-card-title>
                <b-card-text class="text-muted small">
                    {{ 'İlgili deneyiminizi gösterin (son 10 yıl). Mümkünse başarılarınızı not etmek için madde işaretlerini kullanın - sayıları/gerçekleri kullanın' }}
                </b-card-text>

                <div  v-for="(job, index) in form.jobs" class="my-3">
                    <b-row class="d-flex align-items-center">
                        <b-col sm="11">
                            <JobFormElement :job="job" :index="index" />
                        </b-col>
                        <b-col sm="1" @click.prevent="removeJob(index)">
                            <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
                        </b-col>
                    </b-row>
                </div>

                <div class="text-success" style="cursor: pointer" @click.prevent="addJob">
                    <span>+</span> İş ekle
                </div>
                <!-- #employment history# -->

                <!-- education history -->
                <b-card-title class="my-4">{{ $t('Eğitim') }}</b-card-title>
                <b-card-text class="text-muted small">
                    {{ 'Özgeçmişinizde çeşitli bir eğitim, öğrendiklerinizin ve geçmişinizin işe getireceği değeri özetler.' }}
                </b-card-text>

                <div  v-for="(education, index) in form.educations" class="my-3">
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
                <!-- #education history# -->

                <!-- skills -->
                <b-card-title class="my-4">{{ $t('Yetenekler') }}</b-card-title>
                <b-card-text class="text-muted small">
                    {{ 'Yeteneklerinizi göstermek için en önemli 5 beceriyi seçin! Çevrimiçi bir sistem üzerinden başvuruyorsanız, iş listesinin anahtar kelimeleriyle eşleştiğinden emin olun.' }}
                </b-card-text>

                <div>
                    <b-form-checkbox v-model="form.showSkillLevel" name="check-button" switch>
                       <span class="small">Yetenek seviyelerini göster</span>
                    </b-form-checkbox>
                </div>

                <div  v-for="(skill, index) in form.skills" class="my-3">
                    <b-row class="d-flex align-items-center">
                        <b-col sm="11">
                            <SkillFormElement :skill="skill" :index="index" :showLevel="form.showSkillLevel" />
                        </b-col>
                        <b-col sm="1" @click.prevent="removeSkill(index)">
                            <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
                        </b-col>
                    </b-row>
                </div>

                <div class="text-success" style="cursor: pointer" @click.prevent="addSkill">
                    <span>+</span> Yetenek ekle
                </div>
                <!-- #skillss# -->

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

export default {
    name: "ResumeMaker",
    components: {SkillFormElement, EducationFormElement, JobFormElement},
    data() {
        return {
            form: {
                jobTitle: null,
                jobs: [
                    {
                        title: 'Web Geliştirici',
                        employer: 'Ödüyo',
                        startDate: '2022-08-15',
                        endDate: null,
                        city: 'İstanbul',
                        description: 'Lorem ipsum dolor sit amet falan filan.',
                    }
                ],
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
                skills: [
                    { name: 'PHP', level: 5 },
                    { name: 'Javascript', level: 5 },
                    { name: 'MySQL', level: 4 },
                ],
                showSkillLevel: true,
            },
        }
    },
    methods: {
        async getUsers() {
            const { data } = await axios.get('/api/users')
            console.log(data)
        },
        addJob() {
            const job = {
                title: null,
                employer: null,
                startDate: null,
                endDate: null,
                city: null,
                description: null,
            }
            this.form.jobs = [ ...this.form.jobs, job ]
        },
        removeJob(index) {
            this.form.jobs = this.form.jobs.filter((job, jobIdx) => jobIdx !== index)
        },
        addEducation() {
            const education = {
                degree: null,
                school: null,
                startDate: null,
                endDate: null,
                city: null,
                description: null,
            }
            this.form.educations = [ ...this.form.educations, education ]
        },
        removeEducation(index) {
            this.form.educations = this.form.educations.filter((education, educationIdx) => educationIdx !== index)
        },
        addSkill() {
            const skill = {
                name: null,
                level: 1,
            }
            this.form.skills = [ ...this.form.skills, skill ]
        },
        removeSkill(index) {
            this.form.skills = this.form.skills.filter((skill, skillIdx) => skillIdx !== index)
        },
    },
    async mounted() {
        await this.getUsers()
    }
}
</script>
