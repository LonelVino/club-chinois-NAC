<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-dragon.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Dragon</h1>
            <p>
                The Dragon is the fifth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Everyone expected the powerful Dragon to arrive early on. However, he came after Rat, Ox, Tiger and Rabbit. When asked why he was so late, Dragon said that on the way, he saw a village suffering from drought. He had to stop and create rain for them. The Jade Emperor was happy when he heard of this noble deed and gave him the fifth position.
            </p>
            
            <h2>Dragon (龙 / Lóng)</h2>
            <p>
                The Dragon is also associated with the Earthly Branch (地支 / dì zhī) chén (辰) and the hours 7–9 in the morning. In the terms of yin and yang (阴阳 / yīn yáng), the Dragon is yang.
            </p>
            <p>
                Dragons are the most revered animal in Chinese culture. They call themselves the descendants of the dragon. In the past, emperors were seen as the reincarnation of dragons.
            </p>
            <p>
                Paired with the Celestial Stems (天干 —Tiān gān), there is a 60-year calendrical cycle. Although chén is associated with earth, the years also cycle through the five elements of nature (五行 —wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Dragon have hearts full of adventure and romance. It’s hard for people to understand a Dragon’s mysterious personality. At the same time, they are indifferent to things the average person worries about. They may seem lazy, but once they decide to do something, they’ll be more ambitious and vigorous than anyone else.
            </p>
            <p>
                <b>Men</b> born in the Dragon year are steadfast in their beliefs. They will never slack off on responsibilities nor be unnecessarily suspicious. People rarely lose trust in these honest men.
            </p>
            <p>
                <b>Women</b> born in the Dragon year are mesmerizing and strong. If you underestimate them, they will stand up and defeat you. They are serious in what they do and have high self-esteems. The only thing they require of others is respect. Feminism and gender equality are important to them.
            </p>
            <p>
                Many forgo marriage to focus on their career. But if they do choose to marry, they also make great wives. Often, they only go to the extremes and should take the time to consider a balanced mix.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Dragon is Yang, and its earthly branch is Chén.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>07:00–09:00. This is the most common time for fog to appear. According to folklore, dragons ride the fog to come down to Earth.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Dragons are the most revered creature in Chinese culture and are used to represent royalty. Emperors were often seen as a dragon’s reincarnation. Paired with the phoenix, they also symbolize a happy marriage and harmony between yin and yang.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Rooster"> Rooster </router-link> <br>
                    Best group: <router-link to="/Zodiac/Monkey"> Monkey</router-link>, <router-link to="/Zodiac/Rat"> Rat </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Dog">Dog</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Rabbit',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/typograph.scss";

</style>