<template>
    <div>
        <wbc-nav></wbc-nav>
        <header class='header'>
            <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/zodiac/chinese-zodiac-rooster.png?fit=crop&q=50&w=1024&h=224&auto=format"/>
        </header>
        <div class="paragraph">
            <h1>Year of the Rooster</h1>
            <p>
                The Rooster is the tenth of all zodiac animals. According to one myth, the Jade Emperor said the order would be decided by the order in which they arrived to his party. Monkey, Rooster and Dog were in another country, helping a god defeat evil spirits. After, they set off to the party together. Because they arrived at the same time, the Jade Emperor went by the order they met the god in the other country. Thus, Rooster became tenth.
            </p>
            
            <h2>Rooster (鸡 / Jī)</h2>
            <p>
                The Rooster is also associated with the Earthly Branch (地支 / dì zhī) yǒu (酉), and the hours 5–7 in the afternoon. In the terms of yin and yang (阴阳 / yīn yáng), the Rooster is yin.
            </p>
            <p>
                According to legends, roosters are able to protect against evil spirits. In ancient times, sworn brothers must swear to the heavens, then drip rooster blood into wine and drink it all.
            </p>
            <p>
                Paired with the Celestial Stems (天干 / Tiān gān), there is a 60-year calendrical cycle. Although yǒu is associated with metal, the years also cycle through the five elements of nature (五行 / wǔ xíng).
            </p>
            
            <h2>
                Personality and Characteristics
            </h2>
            <p>
                People born in the year of the Rooster are able to sense what the other person is thinking or feeling. They have quick reactions and high EQ. They make great friends, although some are cunning. Roosters are creative and talented in the arts, although few find a career in that field. They have foresight and plan everything carefully.
            </p>
            <p>
                Roosters are serious in their work. They are straightforward and decisive in their actions. They’ll directly criticize what they see unfit and are perfectionists. They are logical and good at managing teams.
            </p>
            <p>
                Family is a refuge and paradise for them. They wish for a large family—it means that there are more people to encourage and support them.
            </p>
            <p>
                No matter how difficult something is, they won’t give up. But if someone is blocking their path, they will reveal their fierce side. They are terrifying if angered and get into arguments easily. Even if they lose, they’ll use various methods to convince others into their side.
            </p>
            <ul>
                <li>
                    <strong> Science </strong>
                    <p>Rooster is Yin, and its earthly branch is Yǒu.</p>
                </li>
                <li>
                    <strong> Hours </strong>
                    <p>17:00–19:00. The character for yǒu (酉) looks similar to wine (酒 —jiǔ), and evening is the time for dinner and wine. It is also time to collect the roosters and hens and put them back in their nests, else it’ll be too dark to find them.</p>
                </li>
                <li>
                    <strong> Folklore </strong>
                    <p>According to legends, roosters are able to protect against evil spirits. In ancient times, sworn brothers must swear to the heavens, then drip rooster blood into wine and drink it all.</p>
                </li>
                <li>
                    <strong> Science </strong>
                    <p>Best match: <router-link to="/Zodiac/Dragon"> Dragon</router-link> <br>
                    Best group: <router-link to="/Zodiac/Snake"> Snake</router-link>, <router-link to="/Zodiac/Ox"> Ox </router-link><br>
                    Incompatible: <router-link to="/Zodiac/Rabbit">Rabbit</router-link></p>
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

.paragraph {
  background:#efefef;
  min-height:100vh;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  max-width: 60%;
  margin: 2vh auto;
  padding:0 10px;
  // overflow-x: hidden;
  // -webkit-overflow-x: hidden;
}

.header {
  width: 100%;
  background-color: #df292f;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
.header-img {
  width: 80%;
  height: 80%;
  object-fit: fill;
}

h1 { 
  color: #333333; 
  font-family: 'Bitter', serif; 
  font-size: 5.5vh; 
  font-weight: normal; 
  line-height:6vh; 
  margin: 2.5vh 0 6vh; }

h2 { 
  color: #333333; 
  font-family: 'Bitter', serif; 
  font-size: 4vh; 
  font-weight: normal; 
  line-height: 3.5vh; 
  margin: 2vh 0 3.5vh; }

h3 { 
  color: #333333; 
  font-family: 'KhmerSBBICSerifRegular'; 
  font-size: 3vh; 
  font-weight: bolder; 
  line-height: 2.5vh; 
  margin: 1.5vh 0 2.5vh; }

ul {
    padding-inline-start: 40px;
    margin: 1.3125em 0;
    padding-left: 2em;
    li {
        font-size: 1.3125rem;
        list-style: square;
    }
    li::marker {
        color: black;
        font-size: 1.2em;
    }
    strong {
        font-weight: bolder;
    }
}


p { color: #333333; font-family: Georgia, serif; font-size: 2.2vh; line-height: 28px; margin: 0 0 28px; }


p:first-of-type { font-size: 2.5vh; line-height: 36px; margin: 0 0 28px; }


a { color: #c73036; font-family: Georgia, serif; text-decoration: underline; }


a:hover { color: #333333; text-decoration: underline; }


.author { color: #8d8d8d; font-family: Georgia, serif; font-style: italic; font-size: 14px; margin-bottom: 28px; }


.author a { color: #c73036; font-family: "Helvetica Neue", sans-serif; font-weight: bold; text-decoration: none; text-transform: uppercase; }

</style>