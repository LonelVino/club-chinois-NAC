import VueI18n from "vue-i18n";
import { Vue } from "vue-property-decorator";
import fr from '@/lang/fr.json'
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/utils/constants.js'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: FALLBACK_LANGUAGE,
    messages: {
        fr
    } // set locale messages
})