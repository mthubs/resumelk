import { createI18n } from 'vue-i18n'
import tr from './locales/tr.json'

const i18n = createI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages: { tr }
})

export default i18n
