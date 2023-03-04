<template>
    <div class="px-lg-5">
        <h1 class="mb-5">{{ $t('Özgeçmişler') }}</h1>
        <div class="row d-flex align-items-center">
            <!-- ➕ new resume -->
            <div class="col-md-6 col-lg-4 mb-4">
                <NewResume />
            </div>
            <!-- 📃 resumes -->
            <div class="col-md-6 col-lg-4 mb-4" v-for="resume in resumes" :key="resume.id">
                <div class="row">
                    <!-- 🖼 resume preview -->
                    <div class="col-5">
                        <div style="height: 260px" class="bg-light rounded shadow"></div>
                    </div>
                    <!-- 📝 resume info -->
                    <div class="col-7">
                        <h4>
                            <router-link :to="`/resume/${resume.id}`">
                                {{ resume.title }}
                            </router-link>
                        </h4>
                        <p class="text-muted">
                            <small>
                                Son güncelleme: {{ new Date(resume.updated_at).toLocaleString() }}
                            </small>
                        </p>
                        <div class="mt-1">
                            <p>
                                <router-link :to="`/resume/${resume.id}`">
                                    ✎ {{ $t('Düzenle') }}
                                </router-link>
                            </p>
                            <p>
                                <a href="#">⬇ {{ $t('İndir') }}</a>
                            </p>
                            <p class="delete-resume" @click.prevent="deleteResume(resume)">
                                🗑️ {{ $t('Sil') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import NewResume from "@/components/resume/NewResume.vue"

export default {
    name: "Dashboard",
    components: {NewResume},
    data() {
        return {
            user: this.$store.state.auth.user,
            resumes: [],
        }
    },
    methods: {
        async getResumes() {
            try {
                const { data } = await axios.get(`/api/resumes`)
                this.resumes = data.resumes
            } catch (e) {
                console.log(e)
                await Swal.fire(e.code, e.response.data.message || e.message, 'error')
            }
        },
        async deleteResume(resume) {
            const confirmDelete = window.confirm(`'${resume.title}' adlı özgeçmişi silinecek`)
            if(!confirmDelete) return
            try {
                await axios.delete(`/api/resume/${resume.id}`)
                this.resumes = this.resumes.filter(r => r.id !== resume.id)
            } catch (e) {
                console.log(e)
                await Swal.fire(e.code, e.response.data.message || e.message, 'error')
            }
        }
    },
    created() {
        this.getResumes()
    }
}
</script>

<style scoped>

.delete-resume:hover {
    cursor: pointer;
    color: var(--re-deep-orange) !important;
    transition: 0.3s;
}

</style>
