<template>
  <div>
    <wbc-nav></wbc-nav>
    <header>
      <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/21-things-you-didnt-know-about-chinese-new-year/chinese-new-year-calendar.jpg?fit=crop&q=50&w=960&h=224&auto=format"/>
    </header>
    <div class="paragraph">
      <h1 class='Headline'>Chinese Zodiac</h1>
      <p>The Chinese zodiac, or Sheng Xiao (生肖), is a repeating 12-year cycle of animal signs and their ascribed attributes, based on the lunar calendar. In order, the zodiac animals are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.
      <br/>
      The <a href="https://www.travelchinaguide.com/intro/social_customs/zodiac/ox.htm#:~:text=Ox%20is%20the%20second%20in,diligence%2C%20persistence%2C%20and%20honesty.">
      Lunar New Year</a>, or Spring Festival, marks the transition from one animal to the next—2021 is the year of the Ox, which began on February 12th, 2021, and ends on January 31st, 2022. February 1st, 2022 (Chinese New Year) will signal the start of the year of the Tiger.
      </p> 
      
      <iframe width="100%"
        src="https://www.youtube.com/watch?v=lQbvB5x5O9M">
      </iframe>

      <h2 class='Headline'>What’s Your Zodiac Sign?</h2>
      <p>Your birth year determines your Chinese zodiac sign, but it can get tricky, as the lunar calendar varies from the solar, or Gregorian, calendar.
      <br/>
      Because the dates of Chinese New Year change every year, individuals born in January or February will need to pay special attention to their birth date in addition to their birth year.
      </p> 
    </div>
      
  </div>
</template>


<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Home',
    data() { //选项 / 数据
      return {
		  
      }
    },
    created() {
      
    },
    methods: { //事件处理器
        
    },
    components: { //定义组件
        'wbc-nav':header,
    },
    created() { //生命周期函数

    }
}
</script>


<style lang="scss" scoped>
@import "src/styles/index.scss";

.paragraph {
  background:#efefef;
  min-height:100vh;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  max-width: 80%;
  margin: 2vh auto;
  padding:0 10px;
  // overflow-x: hidden;
  // -webkit-overflow-x: hidden;
}

.header-img {
  width: 100%;
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

p { color: #333333; font-family: Georgia, serif; font-size: 2.2vh; line-height: 28px; margin: 0 0 28px; }


p:first-of-type { font-size: 2.5vh; line-height: 36px; margin: 0 0 28px; }


a { color: #c73036; font-family: Georgia, serif; text-decoration: underline; }


a:hover { color: #333333; text-decoration: underline; }


.author { color: #8d8d8d; font-family: Georgia, serif; font-style: italic; font-size: 14px; margin-bottom: 28px; }


.author a { color: #c73036; font-family: "Helvetica Neue", sans-serif; font-weight: bold; text-decoration: none; text-transform: uppercase; }
</style>