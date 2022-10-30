<template>
    <b-card-title class="my-4">{{ $t('İş Geçmişi') }}</b-card-title>
    <b-card-text class="text-muted small">
        {{ 'İlgili deneyiminizi gösterin (son 10 yıl). Mümkünse başarılarınızı not etmek için madde işaretlerini kullanın - sayıları/gerçekleri kullanın' }}
    </b-card-text>

    <div  v-for="(job, index) in jobs" class="my-3">
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
</template>

<script>
import JobFormElement from '@/components/maker/JobFormElement.vue'
export default {
    name: "EmploymentSection",
    components: {
        JobFormElement
    },
    data() {
        return {
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
        }
    },
    watch: {
        jobs: {
            immediate: true,
            handler(jobs) {
                this.$emit('change', 'jobs', jobs)
            }
        }
    },
    methods: {
        addJob() {
            const job = {
                title: null,
                employer: null,
                startDate: null,
                endDate: null,
                city: null,
                description: null,
            }
            this.jobs = [ ...this.jobs, job ]
        },
        removeJob(index) {
            this.jobs = this.jobs.filter((job, jobIdx) => jobIdx !== index)
        },
    }
}
</script>

<style scoped>

</style>
