<template>
    <b-card-header
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        :aria-controls="`link-${index}`"
        @click="visible = !visible"
        class="cursor-pointer py-3"
    >
        <div v-if="!link.label">{{ $t('(Belirtilmemiş)') }}</div>
        <div class="d-flex align-items-center justify-content-between" v-else>
            <h6 class="mb-0">
                {{ link.label }}
            </h6>
            <div class="text-muted small">
                {{ link.address }}
            </div>
        </div>
    </b-card-header>
    <b-collapse :id="`link-${index}`" v-model="visible">
        <b-card>
            <b-row>
                <!-- [name] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Ad')"
                        label-class="text-muted fs-14"
                        :label-for="`link-label-${index}`"
                    >
                        <b-form-input
                           :id="`link-label-${index}`"
                            v-model="link.label"
                            type="text"
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- [level] -->
                <b-col sm="6">
                    <b-form-group
                        :label="$t('Link')"
                        label-class="text-muted fs-14"
                        :label-for="`link-address-${index}`"
                    >
                        <b-form-input
                           :id="`link-address-${index}`"
                            v-model="link.address"
                            type="text"
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
    name: "SkillFormElement",
    props: { index: Number, link: Object },
    data() {
        return {
            visible: false,
        }
    },
}
</script>

<style scoped>
    .cursor-pointer {
        cursor: pointer !important;
    }
</style>
