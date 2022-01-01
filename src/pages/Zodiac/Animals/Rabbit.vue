<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-rabbit.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Rabbit</h1>
            <p>
                The Rabbit is the fourth of all zodiac animals. Legend has it the Rabbit was proud—arrogant even—of its speed. He was neighbors with Ox and always made fun of how slow Ox was. One day, the Jade Emperor said the zodiac order would be decided by the order in which the animals arrived at his party. Rabbit set off at daybreak. But when he got there, no other animals were in sight. Thinking that he would obviously be first, he went off to the side and napped. However, when he woke up, three other animals had already arrived. One of them was the Ox he had always looked down upon.
            </p>
            
            <h2>Rabbit (兔 / Tù)</h2>
            <p>
                The Rabbit is also associated with the Earthly Branch (地支 / dì zhī) mǎo (卯) and the hours 5—7 in the morning. In the terms of yin and yang (阴阳 —yīn yáng), the Rabbit is yin.
            </p>
            <p>
                In Chinese culture, rabbits represent the moon. Some say it is because the shadows of the moon resemble a rabbit. Others say it is because of the rabbit’s pure characteristics.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although mǎo is associated with metal, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Rabbit are gentle, quiet and polite. They are patient, intelligent and chic. Their sense of responsibility and attention to detail lead to great career success. They take love seriously as well, and would never fall for someone easily. If they find the right person, they’ll love them to the end of the world and back.
            </p>
            <p>
                To outsiders, the Rabbit’s kindness may make them seem soft and weak. In truth, the Rabbit’s quiet personality hides their confidence and strength. They are steadily moving towards their goal, no matter what negativity the others give them.
            </p>
            <p>
                With their good reasoning skills and attention to detail, they make great scholars. They are socializers with an attractive aura. However, they find it hard to open up to others and often turn to escapism.
            </p>
            <p>
                A plain and routine life is not their style. Though conservative and careful in their actions, they need surprises every so often to spice things up.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Rabbit is Yin, and its earthly branch is Mǎo.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>05:00–07:00. At daybreak, rabbits would come out of their homes to feed on the dew.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>The rabbit represents the moon. Rather than the man in the moon, the ancient Chinese believed that there was a rabbit in the moon.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Dog"> Dog</router-link> <br>
                    Best group: <router-link to="/Zodiac/Pig"> Pig</router-link>, <router-link to="/Zodiac/Goat"> Goat </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Rooster">Rooster</router-link></p>
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