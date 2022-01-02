<template>
    <div>
        <div class="header">
            <div class="headBack">
                <wbc-nav></wbc-nav>
            </div>
        </div>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-goat.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Goat</h1>
            <p>
                The Goat is the eighth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Goat and Deer set off together, but they needed to cross a river. There were no boats available, so they had to swim across. The Deer couldn’t take it and gave up. Goat struggled on by himself and finally made it to the party as eighth place.
            </p>
            
            <h2>Goat (羊 / Yang)</h2>
            <p>
                The Goat is also associated with the Earthly Branch (地支 / dì zhī) wèi (未) and the hours 1–3 in the afternoon. In the terms of yin and yang (阴阳 / yīn yáng), the Goat is yin.
            </p>
            <p>
                In Chinese culture, the Goat is the symbol of filial piety, as well as purity and kindness. Xiè Zhì (獬豸) is a mythological one-horned goat. It was the assistant of Gāo Yáo (皋陶), god of Justice.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although wǔ is associated with fire, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Goat have a pure and kind heart. They’d rather suffer silently than argue and ruin someone else’s mood. However, even in silence, they still hold onto their own opinion. In regards to their passions, they will do anything possible to fulfill their wishes. Though kind, Goats have tricks up their sleeves as well. They are skilled at using soft power, able to patiently and politely persuade others into their favor.
            </p>
            <p>
                Goats are able to persevere through any difficulty. This is their most notable trait. They are strong and resilient, though their gentleness might be misleading.<br>
                They have high tolerance and motivation. Quiet observers, Goats consider all aspects of anything before deciding. They never act brashly and are able to complete tasks successfully.
            </p>
            <p>
                Contradicting characteristics come from the Goats also love children, animals and nature. They’re very tidy and are often seen organizing the home. They’re also generous with their time and money. No matter what, they put others’ needs above their own. However, their inner stubbornness sometimes makes communication difficult.
            </p>
            <p>
                Because of their mild personality, they are able to make many friends. They are empathetic and always try to forgive others by understanding their point of view. In an argument, they rarely ever speak up because they just want the fight to be over. But when in danger, they’ll become defensive.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Goat is Yin, and its earthly branch is Wèi.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>13:00–15:00. At this time, the dew on the grass would be dried by the sun. This is the best hour to let the goats and sheep out.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Xiè Zhì (獬豸) is a mythological one-horned goat. It was the assistant of Gāo Yáo (皋陶), god of Justice. The Goat is also the symbol of filial piety.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Horse"> Horse</router-link> <br>
                    Best group: <router-link to="/Zodiac/Pig"> Pig</router-link>, <router-link to="/Zodiac/Rabbit"> Rabbit </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Ox">Ox</router-link></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac-Goat',
    components: { //定义组件
        'wbc-nav':header,
    },    
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/typograph.scss";

</style>