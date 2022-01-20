import VueI18n from "vue-i18n";
import { Vue } from "vue-property-decorator";
import en from '@/lang/en.json'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/utils/constants.js'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: FALLBACK_LANGUAGE,
    messages: {
        en
    } // set locale messages
})