<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-dog.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Dog</h1>
            <p>
                The Dog is the eleventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Dog became eleventh.
            </p>
            
            <h2>Dog (狗 / Gǒu)</h2>
            <p>
                The Dog is also associated with the Earthly Branch (地支 / dì zhī) xū (戌), and the hours 7–9 in the evening. In the terms of yin and yang (阴阳 / yīn yáng), the Dog is yang.
            </p>
            <p>
                In China, it is still popular to name dogs Wàng Cái (旺财). It means “prosperous wealth” and comes from dogs’ barking sounds (旺旺 / wàng wàng).
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although xū is associated with earth, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Dog are conservative and full of justice. Because of their loyalty, Dogs are valued in the workplace. They rarely break rules, except for people important to them. In life, they only wish to live quietly with their family.
            </p>
            <p>
                A Dog’s most defining characteristic is their loyalty. They will never abandon their friends, family or work.
            </p>
            <p>
                Honest and just, they are popular in social circles. Everyone needs a Dog friend for advice and help. They are also good at helping others find and fix their bad habits.
            </p>
            <p>
                Despite how they act, they are worried and anxious inside. However, they will not let this stop them. Once they decide on something, no one can persuade them against it.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Dog is Yang, and its earthly branch is Xū.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>19:00–21:00. Before sleeping, the people must patrol around for a check. Trailing behind them is the dog, humanity’s little helper.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>In the Qin and Han dynasty, the Stone Dog was worshipped by the people. In the Guangdong province, it is still popular to name dogs Wàng Cái (旺财). It means “prosperous wealth” and comes from dogs’ barking sounds (旺旺 —wàng wàng).</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Rabbit"> Rabbit</router-link> <br>
                    Best group: <router-link to="/Zodiac/Tiger"> Tiger</router-link>, <router-link to="/Zodiac/Horse"> Horse </router-link><br>
                    Incompatible: <router-link to="/Zodiac/Dragon">Dragon</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Dog',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/typograph.scss";

</style>