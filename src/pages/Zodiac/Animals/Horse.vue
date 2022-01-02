<template>
    <div>
        <div class="header">
            <div class="headBack">
                <wbc-nav></wbc-nav>
            </div>
        </div>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-horse.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Horse</h1>
            <p>
                The Horse is the seventh of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Horse had to pass a cemetery on his way, but he was too scared. He hesitated for the longest time because running past it with his eyes closed. After he overcame that obstacle, he went at full speed and managed to arrive seventh.
            </p>
            
            <h2>Horse (马 / Mǎ)</h2>
            <p>
                The Horse is also associated with the Earthly Branch (地支 / dì zhī) wǔ (午), and the hours 11–13 at midday. In the terms of yin and yang (阴阳 / yīn yáng), the Horse is yang. As the head of the six domestic animals, horses are crucial in transportation and war.
            </p>
            <p>
                In Chinese culture, they represent speed and freedom. Many Northern ethnicities, such as the Mongolians and Manchurians, revere and worship the horse.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although wǔ is associated with fire, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Horse are never one to surrender. They are always positive and energetic, pushing themselves forward. Their biggest desire is to have the freedom to do what they like and be able to express themselves. However, they also have various negative traits. Horses are bad at keeping secrets and lose interest quickly.
            </p>
            <p>
                Horses are full of energy, albeit a bit too much. Both studious and athletic, they are strong believers of chasing after dreams. Rather than wealth and fame, happiness is what motivates them. They expect others to operate at the same speed as them and don’t understand why others can’t.
            </p>
            <p>
                Contradicting characteristics come from the fact that they are ever-changing emotions. They have short tempers and become angry quickly. But once it’s over, they forget quickly. They’re biggest fault is that they’re blind to their own faults.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Horse is Yang, and its earthly branch is Wǔ.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>11:00–13:00. When the sun is at its brightest moment, the horses would gallop and prance joyfully in the fields.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>As the head of the six domestic animals, horses are crucial in transportation and war. They represent speed and freedom. Many Northern ethnicities, such as the Mongolians and Manchurians, revere and worship the horse.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Goat"> Goat</router-link> <br>
                    Best group: <router-link to="/Zodiac/Tiger"> Tiger</router-link>, <router-link to="/Zodiac/Dog"> Dog </router-link><br>
                    Incompatible:  <router-link to="/Zodiac/Rat">Rat</router-link></p>
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

@import "@/styles/index.scss";
@import "@/styles/typograph.scss";

</style>