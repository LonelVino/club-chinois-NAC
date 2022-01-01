<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-rat.png?fit=crop&q=50&w=1108&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Rat</h1>
            <p>
                The Rat is the first of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. The Rat tricked the Ox into giving him a ride. Then, just as they arrived at the finish line, Rat jumped down and landed ahead of Ox, becoming first.
            </p>
            
            <h2>Rat (鼠 / Shǔ)</h2>
            <p>
                The Rat is also associated with the Earthly Branch (地支 / dì zhī) Zi (子) and the midnight hours. In the terms of yin and yang (阴阳 / yīn yáng), the Rat is yang and represents the beginning of a new day.
            </p>
            <p>
                In Chinese culture, rats were seen as a sign of wealth and surplus. Because of their reproduction rate, married couples also prayed to them for children.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although zi is associated with water, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Rat like saving and collecting. They never have hard times financially and live organized lives. If you receive a valuable gift from a Rat, know that he thinks highly of you, because he doesn’t usually like opening his wallet for others. Rats don’t look for praise and recognition. They are very sensitive and know when there is trouble. When they do take risks, they’re usually successful.
            </p>
            <p>
                Optimistic and energetic, people born in the Rat year are likable by all. They are sensitive to other’s emotions but are stubborn with your opinion. Their personality is kind, but due to weak communication skills, their words may seem impolite and rude.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Rat is Yang, and its earthly branch is Zi.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>23:00–01:00. Rats are at the height of their activity at this time and people began to associate rats with the Zi hour.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Rats steal food, which can be interpreted as the household being wealthy and having surpluses. Because of their fast reproduction rate, some also pray to rats for children.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Ox"> Ox</router-link> <br>
                    Best group: <router-link to="/Zodiac/Monkey"> Monkey</router-link>, <router-link to="/Zodiac/Dragon"> Dragon </router-link><br>
                    Incompatible: <router-link to="/Zodiac/Horse"> Horse</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Rat',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/typograph.scss";

</style>