<template>
  <div class="switch-button">
    <input class="switch-button-checkbox" v-model="selected" type="checkbox" @click="changeLanguage(languageToChange)">
    <label class="switch-button-label" for="">
      <span class="switch-button-label-span">FR</span>
    </label>
  </div>
</template>

<script>
import { Trans } from '@/utils/Translation'
export default {

    data() { //选项 / 数据
		return {
			selected: false
		}
	},
    created() {
        if (Trans.currentLanguage == 'en') {this.selected = true}
    },
    computed: {
        supportedLanguages () {
            return Trans.supportedLanguages
        },
        currentLanguage () {
            return Trans.currentLanguage
        },
        languageToChange() {
            if (Trans.currentLanguage == 'en') {
                return 'fr'
            } else {
                return 'en'
            } 
        }
    },
    methods: {
		changeLanguage (e) {
            const lang = e
            const to = this.$router.resolve({ params: { lang } })
            return Trans.changeLanguage(lang).then(() => {
                this.$router.push(to.location)
            })
        },
        isCurrentLanguage (lang) {
            return lang === this.currentLanguage
        }
    }
}
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.switch-button {
  transform: scale(0.4);
  background: rgba(255, 255, 255, 0.56);
  border-radius: 30px;
  overflow: hidden;
  width: 240px;
  text-align: center;
  font-size: 28px;
  letter-spacing: 1px;
  color: #5a1010;
  font-weight: bolder;
  position: relative;
  padding-right: 120px;
  position: relative;

  &:before {
    content: "EN";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(120px);
      transition: transform 300ms linear;
    }

    & + .switch-button-label {
      position: relative;
      padding: 15px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: rgb(231, 8, 8);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}
</style>