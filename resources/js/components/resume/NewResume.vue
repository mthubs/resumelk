<template>
    <div class="row" id="new-resume" @click.prevent="createResume">
        <div class="col-5">
            <div style="height: 260px" class="bg-light d-flex align-items-center justify-content-center shadow rounded">
                <div class="text-muted" style="font-size: 36px">+</div>
            </div>
        </div>
        <div class="col-7">
            <h4 class="text-muted">{{ $t('Yeni Özgeçmiş') }}</h4>
            <p class="text-muted">
                <small>
                    {{ $t('Her iş başvurusu için özel bir özgeçmiş oluşturun. İşe alınma şansınızı ikiye katlayın!') }}
                </small>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewResume",
    methods: {
        async createResume() {
            try {
                const { data: { id } } = await axios.post('/api/resume')
                this.$router.push({ name: 'resume-maker', params: { id } })
            } catch (e) {
                console.log(e)
                await Swal.fire(e.code, e.response.data.message || e.message, 'error')
            }
        }
    }
}
</script>

<style scoped>

#new-resume {
    transition: 0.3s;
    cursor: pointer;
}
#new-resume:hover .text-muted {
    color: var(--re-deep-orange) !important;
    transition: 0.3s;
}

</style>
