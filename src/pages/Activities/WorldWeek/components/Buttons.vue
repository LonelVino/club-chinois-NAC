<template>
    <div class="grid">
        <div class='txt-btn' v-for="(v, i) of config" :key="i" :class="getCls(i)">
          <el-button
          class='btn'
          v-if="!v.visible && !v.animating"
          @click="toggle(i)"
          >
          Reset
          </el-button>
        <Test
            class='txt-btn-2'
            :animating.sync="config[i].animating"
            :visible.sync="config[i].visible"
            :ref="getRef(i)"
            :options="v"
            @v-model="openDialog()"
        >
            <span @click="openDialog()">{{ v.label }}</span>
        </Test>
        </div>
        
    </div>
</template>


<script>
import ParticleEffectButton from "vue-particle-effect-buttons"

import demoArr_1 from '@/utils/btns.js'
const demoArr = [
    {
      label: "Join IN"
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
        console.log
        this.$set(this.config, index, {
          ...this.config[index],
          visible: !this.config[index].visible
        });
      },
      openDialog() {
        console.log('Event has been emitted!')
        this.$emit('buttonOpen', true);    
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
  .btn {
    width: 13vw;
    font-size: 25px;
    font-weight: bolder;
  }
  .txt-btn-2 {
    width: 1350px;
    font-size: 25px;
    font-weight: bolder;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
}
</style>