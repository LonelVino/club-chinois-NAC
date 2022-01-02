<template>
    <div>
        <div class="header">
            <div class="headBack">
                <wbc-nav></wbc-nav>
            </div>
        </div>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-tiger.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Ox</h1>
            <p>
                Tigers are the third of the Chinese zodiacs. According to legend, Tiger was confident that no one could compete with its speed and vigor for the celestial race that would decide the order of the zodiacs. However, when Tiger climbed out of the river, thinking it was first, it was informed that Rat placed first for its cunning and Ox placed second for its diligence. This left the king of the jungle having to settle for third place.
            </p>
            
            <h2>Tiger (虎 / Hǔ)</h2>
            <p>
                Like their eponymous zodiac animal, people born in years of the Tiger are vigorous and ambitious, daring and courageous, enthusiastic and generous, self-confident with a sense of justice and a commitment to help others for the greater good.
            </p>
            <p>
                Tigers are lively and cheerful, and they love freedom and independence. They are a zodiac sign that absolutely must have their personal space. Tigers usually have a keen sense of justice. When faced with injustices, whether against themselves or others, you can be sure Tigers will not stand aside. However, Tigers may also appear unrefined or thoughtless in the way they handle things. In a less developed person, these traits can easily turn into ignorance or foolhardiness.
            </p>
            <p>
                Tigers are courageous and authoritative, although they have a cute and charming side as well to those who know them more intimately. Their ambitions run sky-high, however, and Tigers will never treat them as pipe dreams. They are adventurers with the courage to be a pioneer in the line of work they choose. They work tirelessly to realize their dream of changing the world in some way, one step at a time.
            </p>

            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Tiger are independent and have high self-esteem. They enjoy being the leader and protector of average people. They love justice and never back down in an argument. Recklessness is their biggest weakness, causing them to fail. However, they never truly fail. Tigers will always find a way to stand back up and succeed in the end.
            </p>
            <p>
                Tigers possess great tenacity. They are loyal, quick and the center of attention in everything they do. However, a king needs a domain to be truly in possession of their power. For any Tiger, male or female, their ambition will come before they allow themselves a break to enjoy other parts of life.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Tiger is Yang, and its earthly branch is Yín.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>03:00–05:00. Tigers are the most dangerous at night. Farmers would always be able to hear their frightening roars during this hour.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Tigers are the kings of all beasts. People believe that they are the guardians of children. In the past, infants were washed with water boiled with tiger bones to prevent diseases. Children also wear hats and shoes with tiger designs.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Pig"> Pig</router-link> <br>
                    Best group: <router-link to="/Zodiac/Horse"> Horse</router-link>, <router-link to="/Zodiac/Dog"> Dog </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Monkey">Monkey</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Tiger',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/typograph.scss";

</style>