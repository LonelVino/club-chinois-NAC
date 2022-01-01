<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-pig.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Pig</h1>
            <p>
                The Pig is the twelfth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Pig was late because he overslept. Another story says that a wolf destroyed his house. He had to rebuild his home before he could set off. When he arrived, he was the last one and could only take twelfth place.
            </p>
            
            <h2>Pig (猪 / Zhū)</h2>
            <p>
                The Pig is also associated with the Earthly Branch (地支 / dì zhī) hài (亥), and the hours 9–11 in the night. In terms of yin and yang (阴阳 / yīn yáng), the Pig is yin. In Chinese culture, pigs are the symbol of wealth.
            </p>
            <p>
                Their chubby faces and big ears are signs of fortune as well.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although hài is associated with earth, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Pig think logically and are able to fix whatever problem they’re in. They aren’t good communicators, but they’re kind and able to provide for the family. Most of them are wealthy. Their only obvious fault is that they lose their temper easily.
            </p>
            <p>
                Pigs might not stand out in a crowd. But they are very realistic. Others may be all talk and no action. Pigs are the opposite.
            </p>
            <p>
                Though not wasteful spenders, they will let themselves enjoy life. They love entertainment and will occasionally treat themselves. They are a bit materialistic, but this is motivation for them to work hard. Being able to hold solid objects in their hands gives them security.
            </p>
            <p>
                They are energetic and are always enthusiastic, even for boring jobs. If given the chance, they will take positions of power and status. They believe that only those people have the right to speak, and that’s what they want.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Pig is Yin, and its earthly branch is Hài.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>21:00–23:00. At night, the pig can be heard rustling around. In order to fatten it up, the farmer must feed before calling it a day.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>Pigs are the symbol of wealth. Their chubby faces and big ears are signs of fortune as well.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Tiger"> Tiger</router-link> <br>
                    Best group: <router-link to="/Zodiac/Rabbit"> Rabbit</router-link>, <router-link to="/Zodiac/Goat"> Goat </router-link><br>
                    Incompatible: <router-link to="/Zodiac/Snake">Snake</router-link></p>
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