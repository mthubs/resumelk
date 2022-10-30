<template>
    <b-card-header
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="`job-${index}`"
        @click="visible = !visible"
        class="cursor-pointer py-3"
    >
        <div v-if="!job.title">{{ $t('(Belirtilmemiş)') }}</div>
        <div class="d-flex align-items-center justify-content-between" v-else>
            <h6 class="mb-0">
                <span v-if="job.title">{{ job.title }}</span>
                <span v-if="job.title && job.employer">{{ ` - ${job.employer}` }}</span>
            </h6>
            <div class="text-muted small">
                <div v-if="job.startDate">
                    {{ `${new Date(job.startDate).getMonth()}, ${new Date(job.startDate).getFullYear()}` }}

                    <span v-if="job.endDate">
                        {{ ` - ${new Date(job.endDate).getMonth()}, ${new Date(job.endDate).getFullYear()}` }}
                    </span>
                    <span v-else><i>{{ ' - Devam ediyor' }}</i></span>
                </div>
            </div>
        </div>
    </b-card-header>
    <b-collapse :id="`job-${index}`" v-model="visible">
        <b-card>
            <b-row>
                <!-- [title] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Ünvan')"
                        label-class="text-muted fs-14"
                        :label-for="`job-section-title-${index}`"
                    >
                        <b-form-input
                            :id="`job-section-title-${index}`"
                            v-model="job.title"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [employer] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('İşveren')"
                        label-class="text-muted fs-14"
                        :label-for="`job-employer-${index}`"
                    >
                        <b-form-input
                            :id="`job-employer-${index}`"
                            v-model="job.employer"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [start & end date] -->
                <b-col sm="6">
                   <b-row>
                       <!-- [start] -->
                       <b-col sm="6">
                           <b-form-group
                               :label="$t('Başlangıç')"
                               label-class="text-muted fs-14"
                               :label-for="`job-start-${index}`"
                           >
                               <b-form-input
                                   :id="`job-start-${index}`"
                                   v-model="job.startDate"
                                   type="date"
                                   required
                               ></b-form-input>
                           </b-form-group>
                       </b-col>
                       <!-- [end] -->
                       <b-col sm="6">
                           <b-form-group
                               :label="$t('Bitiş')"
                               label-class="text-muted fs-14"
                               :label-for="`job-end-${index}`"
                           >
                               <b-form-input
                                   :id="`job-end-${index}`"
                                   v-model="job.endDate"
                                   type="date"
                                   required
                               ></b-form-input>
                           </b-form-group>
                       </b-col>
                   </b-row>
                </b-col>
                <!-- [city] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Şehir')"
                        label-class="text-muted fs-14"
                        :label-for="`job-city-${index}`"
                    >
                        <b-form-input
                            :id="`job-city-${index}`"
                            v-model="job.city"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [description] -->
                <b-col sm="12">
                    <b-form-group
                        :label="$t('İş tanımı')"
                        label-class="text-muted fs-14"
                        :label-for="`job-description-${index}`"
                    >
                        <b-form-textarea
                            :id="`job-description-${index}`"
                            v-model="job.description"
                            :placeholder="$t('örn. Lorem ipsum dolor sit amet')"
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
    </b-collapse>
</template>

<script>
export default {
    name: "JobFormElement",
    props: { index: Number, job: Object },
    data() {
        return {
            visible: false,
        }
    }
}
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer !important;
    }
</style>
