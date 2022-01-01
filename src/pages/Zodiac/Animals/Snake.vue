<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-snake.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Snake</h1>
            <p>
                The Snake is the sixth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Because of their similar looks, Snake and Dragon were good friends. They arrived at the same time. But unfortunately, due to the size difference, the Jade Emperor first saw Dragon, and then Snake.
            </p>
            
            <h2>Snake (蛇 / Shé)</h2>
            <p>
                The Snake is also associated with the Earthly Branch (地支 / dì zhī) sì (巳), and the hours 9–11 in the morning. In the terms of yin and yang (阴阳 / yīn yáng), the Snake is yin.
            </p>
            <p>
                Snakes usually have a negative diction and are symbols of witchcraft. However, Nǚ Wā (女娲), the creator of the world in Chinese mythology, had a human’s head and a snake’s body.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although sì is associated with fire, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Snake are idealists. On the outside, they may seem cold but, deep inside, they are warm and enthusiastic. Their desire of exclusive ownership is very fierce. It irks them if they can’t fully understand someone. Snakes are devoted and determined, but their worst enemy is laziness.
            </p>
            <p>
                Snakes are humorous and sophisticated. They don’t like small talk or thinking about small everyday problems.<br>
                In a chaotic environment, they are the eye of the storm. Snakes are able to hold their ground and calmly think of solutions.
            </p>
            <p>
                They are always making new plans and follow them without relying on others’ input. They’re usually correct, but this also comes from a distrust of others. You cannot judge a Snake by its cover. Their slow and lazy talking hides their fast-paced thinking. Behind their calmness, they are alert and observant.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Snake is Yin, and its earthly branch is Sì.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>09:00–11:00. After the fog has dissipated, snakes would come out to bask in the sun. When creating the character for sì (巳), it was written to look like a snake.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Snakes usually have a negative diction and are symbols of witchcraft. However, Nǚ Wā (女娲), the creator of the world in Chinese mythology, had a human’s head and a snake’s body.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Monkey"> Monkey</router-link> <br>
                    Best group: <router-link to="/Zodiac/Rooster"> Rooster</router-link>, <router-link to="/Zodiac/Ox"> Ox </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Pig">Pig</router-link></p>
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