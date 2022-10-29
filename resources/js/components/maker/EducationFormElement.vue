<template>
    <b-card-header
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="`edu-${index}`"
        @click="visible = !visible"
        class="cursor-pointer py-3"
    >
        <div v-if="!edu.degree">{{ $t('(Belirtilmemiş)') }}</div>
        <div class="d-flex align-items-center justify-content-between" v-else>
            <h6 class="mb-0">
                <span v-if="edu.degree">{{ edu.degree }}</span>
                <span v-if="edu.degree && edu.school">{{ ` - ${edu.school}` }}</span>
            </h6>
            <div class="text-muted small">
                <div v-if="edu.startDate">
                    {{ `${new Date(edu.startDate).getMonth()}, ${new Date(edu.startDate).getFullYear()}` }}

                    <span v-if="edu.endDate">
                        {{ ` - ${new Date(edu.endDate).getMonth()}, ${new Date(edu.endDate).getFullYear()}` }}
                    </span>
                    <span v-else><i>{{ ' - Devam ediyor' }}</i></span>
                </div>
            </div>
        </div>
    </b-card-header>
    <b-collapse :id="`edu-${index}`" v-model="visible">
        <b-card>
            <b-row>
                <!-- [degree] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Bölüm')"
                        label-class="text-muted fs-14"
                        label-for="degree"
                    >
                        <b-form-input
                            id="degree"
                            v-model="edu.degree"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [school] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Okul')"
                        label-class="text-muted fs-14"
                        label-for="school"
                    >
                        <b-form-input
                            id="school"
                            v-model="edu.school"
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
                               label-for="employer"
                           >
                               <b-form-input
                                   id="employer"
                                   v-model="edu.startDate"
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
                               label-for="employer"
                           >
                               <b-form-input
                                   id="employer"
                                   v-model="edu.endDate"
                                   type="date"
                                   required
                               ></b-form-input>
                           </b-form-group>
                       </b-col>
                   </b-row>
                </b-col>
                <!-- [license] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Lisans Derecesi')"
                        label-class="text-muted fs-14"
                        label-for="edu-license"
                    >
                        <b-form-input
                            id="edu-license"
                            v-model="edu.license"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [description] -->
                <b-col sm="12">
                    <b-form-group
                        :label="$t('Açıklama')"
                        label-class="text-muted fs-14"
                        label-for="edu-description"
                    >
                        <b-form-textarea
                            id="edu-description"
                            v-model="edu.description"
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
    name: "EducationFormElement",
    props: { index: Number, edu: Object },
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
