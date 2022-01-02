<template>
    <div>
        <div class="header">
          <div class="headBack">
            <wbc-nav></wbc-nav>
          </div>
        </div>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-monkey.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Monkey</h1>
            <p>
                The Monkey is the ninth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Monkey became ninth.
            </p>
            
            <h2>Monkey (猴 / Hóu)</h2>
            <p>
                The Monkey is also associated with the Earthly Branch (地支 / dì zhī) shēn (申), and the hours 3–5 in the afternoon. In the terms of yin and yang (阴阳 / yīn yáng), the Monkey is yang. In Chinese culture, peaches are symbols of longevity.
            </p>
            <p>
                Because monkeys like eating peaches, with time, they also became associated with long life.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although shēn is associated with fire, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                However, they view everyone as teachers. They’re willing to listen to critique and learn from their mistakes. They are calm and logical thinkers. Monkeys are always able to triumph and be the final winner.
            </p>
            <p>
                Monkeys’ most defining trait is their intelligence. As children, they win awards and the praises of teachers. As adults, they gain professional recognition and make great leaders.<br>
                Due to this, it’s understandable that they can be arrogant. They’re often disrespectful and self-centered when making decisions. Monkeys become jealous easily, especially when others are doing better than them. They are awfully competitive, which is both positive and negative.
            </p>
            <p>
                However, they view everyone as teachers. They’re willing to listen to critique and learn from their mistakes. They are calm and logical thinkers. Monkeys are always able to triumph and be the final winner.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Monkey is Yang, and its earthly branch is Shēn.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>15:00–17:00. The weather is much cooler with the sun setting and the monkeys would play around in the forest.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>There are multiple legends about the Monkey as humans’ ancestor. Monkeys also like eating peaches. Peaches are symbols of longevity and, with time, monkeys also became associated with long life.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Snake"> Snake</router-link> <br>
                    Best group: <router-link to="/Zodiac/Rat"> Rat</router-link>, <router-link to="/Zodiac/Dragon"> Dragon </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Tiger">Tiger</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Moneky',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>

@import "@/styles/index.scss";
@import "@/styles/typograph.scss";

</style>