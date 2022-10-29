<template>
    <b-card-header
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="`skill-${index}`"
        @click="visible = !visible"
        class="cursor-pointer py-3"
    >
        <div v-if="!skill.name">{{ $t('(Belirtilmemiş)') }}</div>
        <div class="d-flex align-items-center justify-content-between" v-else>
            <h6 class="mb-0">
                {{ skill.name }}
            </h6>
            <div class="text-muted small" v-if="showLevel">
                {{ $t(`formOptions.skills.${skill.level}`) }}
            </div>
        </div>
    </b-card-header>
    <b-collapse :id="`skill-${index}`" v-model="visible">
        <b-card>
            <b-row>
                <!-- [name] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Yetenek')"
                        label-class="text-muted fs-14"
                        label-for="name"
                    >
                        <b-form-input
                            id="name"
                            v-model="skill.name"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [level] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Seviye')"
                        label-class="text-muted fs-14"
                        label-for="school"
                    >
                        <b-form-select
                            id="level"
                            v-model="skill.level"
                            :options="skillOptions"
                            type="text"
                            required
                            :disabled="!showLevel"
                        />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
    </b-collapse>
</template>

<script>
export default {
    name: "SkillFormElement",
    props: { index: Number, skill: Object, showLevel: Boolean },
    data() {
        return {
            visible: false,
            skillOptions: [
                { text: this.$i18n.t('formOptions.skills.1'), value: 1 },
                { text: this.$i18n.t('formOptions.skills.2'), value: 2 },
                { text: this.$i18n.t('formOptions.skills.3'), value: 3 },
                { text: this.$i18n.t('formOptions.skills.4'), value: 4 },
                { text: this.$i18n.t('formOptions.skills.5'), value: 5 },
            ]
        }
    },
}
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer !important;
    }
</style>
