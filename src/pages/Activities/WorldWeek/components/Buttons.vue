<template>
    <div class="grid">
        <div class='txt-btn' v-for="(v, i) of config" :key="i" :class="getCls(i)">
            <button
            class='btn'
            v-if="!v.visible && !v.animating"
            @click="toggle(i)"
            style="position: absolute; top: 1em; right: 1em; background: rgb(50, 186, 250); color: rgb(255, 255, 255); border: 0px; border-radius: 4px; font-size: 1em; padding: 0.7em 1.2em; cursor: pointer; outline: none;"
        >
        Reset
        </button>
        <Test
            class='txt-btn-2'
            :animating.sync="config[i].animating"
            :visible.sync="config[i].visible"
            :ref="getRef(i)"
            :options="v"
        >
            <span>{{ v.label }}</span>
        </Test>
        </div>

    </div>
</template>


<script>
import ParticleEffectButton from "vue-particle-effect-buttons"

import demoArr_1 from '@/utils/btns.js'
const demoArr = [
    {
      label: "WORLD WEEK"
    }
]
export default {
    name: 'Buttons',
    data() {
        return {
            config: [],
             btnOps: {
                type: "triangle",
                easing: "easeOutQuart",
                size: 6,
                particlesAmountCoefficient: 4,
                oscillationCoefficient: 2,
                color: function () {
                    return Math.random() < 0.5 ? "#000000" : "#ffffff";
                },
                onComplete: () => {
                    console.log("complete");
                },
                onBegin: () => {
                    console.log("begin");
                },
                visible: true,
                animating: true
            },
        }
    },
    components: {
        Test: ParticleEffectButton
    },
    mounted() {
    demoArr.forEach((v, i) => {
        this.$set(this.config, i, {
          ...v,
          complete: () => {
            this.config[i].animating = false;
          },
          visible: i % 2 == 0,
          animating: false
        });
    });
    },
    methods: {
    toggle(index) {
        this.$set(this.config, index, {
          ...this.config[index],
          visible: !this.config[index].visible
        });
      },
      getCls(i) {
        const name = `theme-${i + 1}`;
        return {
          grid__item: true,
          [name]: true
        };
      },
      getRef(i) {
        const name = `p${i}`;
        return name;
      }
    }
}
</script>


<style lang="scss" scoped>

.grid {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin: 0 auto;
  .txt-btn-2 {
    width: 1350px;
    font-size: 50px;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>