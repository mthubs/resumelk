<template>
    <b-card-header
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="`language-${index}`"
        @click="visible = !visible"
        class="cursor-pointer py-3"
    >
        <div v-if="!language.name">{{ $t('(Belirtilmemiş)') }}</div>
        <div class="d-flex align-items-center justify-content-between" v-else>
            <h6 class="mb-0">
                {{ language.name }}
            </h6>
            <div class="text-muted small">
                {{ language.level }}
            </div>
        </div>
    </b-card-header>
    <b-collapse :id="`language-${index}`" v-model="visible">
        <b-card>
            <b-row>
                <!-- [name] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Dil')"
                        label-class="text-muted fs-14"
                        :label-for="`lang-name-${index}`"
                    >
                        <b-form-input
                            :id="`lang-name-${index}`"
                            v-model="language.name"
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
                        :label-for="`lang-level-${index}`"
                    >
                        <b-form-select
                            :id="`lang-level-${index}`"
                            v-model="language.level"
                            :options="languageOptions"
                            required
                        />
                    </b-form-group>
                </b-col>
            </b-row>
        </b-card>
    </b-collapse>
</template>

<script>
export default {
    name: "LanguageFormElement",
    props: { index: Number, language: Object },
    data() {
        return {
            visible: false,
            languageOptions: [
                { text: 'C2', value: 'C2' },
                { text: 'C1', value: 'C1' },
                { text: 'B2', value: 'B2' },
                { text: 'B1', value: 'B1' },
                { text: 'A2', value: 'A2' },
                { text: 'A1', value: 'A1' },
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
