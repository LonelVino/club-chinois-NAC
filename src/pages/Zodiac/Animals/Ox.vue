<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-ox.png?fit=crop&q=50&w=2216&h=448&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Ox</h1>
            <p>
                The Ox is the second of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Ox was about to be the first to arrive, but Rat tricked Ox into giving him a ride. Then, just as they arrived, Rat jumped down and landed ahead of Ox. Thus, Ox became the second animal.
            </p>
            
            <h2>Ox (牛 / Niu)</h2>
            <p>
                The Ox is also associated with the Earthly Branch (地支 / dì zhī) Chǒu (丑) and the hours 1–3 in the morning. In the terms of yin and yang (阴阳 / yīn yáng), the Ox is Yang.
            </p>
            <p>
                In Chinese culture, the Ox is a valued animal. Because of its role in agriculture, positive characteristics, such as being hardworking and honest, are attributed to it.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although chǒu is associated with earth, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Ox are hard workers and have a strong sense of responsibility. Even if they run into difficulty during work, they’ll persevere through. They aren’t very romantic, but are patient and would never force themselves onto someone who doesn’t like them. They are usually quiet and keep their emotions bottled up inside. It’s hard for others to understand them. When they do lose their temper, it’s like an explosion and can drive others away.
            </p>
            <p>
                They believe that everyone should do what’s asked for them and stay within their bounds. Though they are kind, it’s difficult for them to understand persuasion using pathos. Rarely losing your temper, they think logically and make great leaders.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Ox is Yin, and its earthly branch is Chǒu.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>01:00–03:00. This is when farmers would wake up to feed their oxen.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Whipping spring cattle (打春 —dǎ chūn) was a ritual performed to begin a new year of hard work and good harvests. The ox’s stomach would be filled with five types of grains and scattered after the whipping to represent the sowing and harvest.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Rat"> Rat</router-link> <br>
                    Best group: <router-link to="/Zodiac/Snake"> Snake</router-link>, <router-link to="/Zodiac/Rooster"> Rooster </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Goat">Goat</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Ox',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/typograph.scss";

</style>