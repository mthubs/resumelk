<template>
    <b-card-title class="my-4">{{ $t('Web Siteleri & Sosyal Medya') }}</b-card-title>
    <b-card-text class="text-muted small">
        {{ 'İşe alım yöneticilerinin görmesini istediğiniz web sitelerine bağlantılar ekleyebilirsiniz! Belki portföyünüze, LinkedIn profilinize veya kişisel web sitenize bir bağlantı olacaktır.' }}
    </b-card-text>

    <div  v-for="(link, index) in links" class="my-3" :key="Math.random() * 10000">
        <b-row class="d-flex align-items-center">
            <b-col sm="11">
                <LinkFormElement :link="link" :index="index" />
            </b-col>
            <b-col sm="1" @click.prevent="removeLink(index)">
                <i class="fas fa-trash text-warning" style="cursor: pointer"></i>
            </b-col>
        </b-row>
    </div>

    <div class="text-success" style="cursor: pointer" @click.prevent="addLink">
        <span>+</span> Link ekle
    </div>
</template>


<script>
import LinkFormElement from '@/components/maker/LinkFormElement.vue'
export default {
    name: "LinkSection",
    components: {
        LinkFormElement
    },
    data() {
        return {
            links: [
                { label: 'Linkedin', address: 'https://www.linkedin.com/in/muhammed-tepe' },
            ],
        }
    },
    watch: {
        links: {
            immediate: true,
            handler(links) {
                this.$emit('update-section', 'links', links)
            }
        }
    },
    methods: {
        addLink() {
            const link = {
                label: null,
                address: null,
            }
            this.links = [ ...this.links, link ]
        },
        removeLink(index) {
            this.links = this.links.filter((link, linkIdx) => linkIdx !== index)
        },
    }
}
</script>

<style scoped>

</style>
