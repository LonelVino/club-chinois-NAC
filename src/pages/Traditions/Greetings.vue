<template>
  <div>
    <wbc-nav></wbc-nav>
    <header class='header'>
      <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/greetings/chinese-new-year-greetings.jpg?fit=crop&q=50&w=960&h=224&auto=format"/>
    </header>
    <div class="paragraph">
      <h1>Happy New Year in Chinese and Other Greetings</h1>
      <p>here are multiple blessings and greetings for Chinese New Year. But there are variations even for the most basic “Happy New Year!” The simplest is, of course, <b>Happy New Year: 新年快乐 (xīn nián kuài lè)</b></p>
      <p>China also contains many dialects, such as Cantonese, Shanghainese and the Beijing dialect. And those dialects don’t include the languages of China’s 55 ethnic minorities.</p>
      <p>A European scholar once said that if every dialect regions became a separate country, this area would have more countries than Europe. Northerners and Southerners can rarely understand each other, even though the same written language is used.</p>
      <p>Other than Mandarin (standardized Chinese), the most well-known Chinese language is probably Cantonese. It’s more difficult for foreigners to learn. English isn’t a tonal language. Mandarin has 4 tones. And Cantonese has 9.</p>
      <p>But if you wish to learn, “Happy New Year” in Cantonese is pronounced: san1 nin4 faai3 lok6!</p>
      <p>You can also say 春节愉快 (chūn jiē yú kuài), which uses a more formal way to say “happy.” In Cantonese, it’s: ceon1 zit3 jyu4 faai3</p>
      <p>In Cantonese-speaking regions, it’s more popular to say 恭喜发财 (gung1 hei2 faat3 coi4). This is a blessing for wealth and prosperity. The phrase is also used in other regions (Mandarin: gong xǐ fā cái). But the Cantonese like to say this in place of the usual “Happy New Year.”</p>
      <el-divider></el-divider>

      <h2>Bàinián and Kowtow</h2>
      <p>It can be said that Chinese culture is based off of Confucianism. This philosophy emphasizes manners, politeness and respect. Age, status and rank are ingrained in actions. This is especially clear during Chinese New Year.</p>
      <p>The act of greeting and blessing during Chinese New Year is called 拜年 (bài nián), which literally means to pay a visit for the New Years. You must visit the eldest (seniors from the husband’s side) in the family first. Don’t forget to bring gifts!</p>
      <el-image src="https://chinesenewyear.imgix.net/assets/images/red-pockets/chinese-new-year-red-pockets.jpg?q=50&w=960&auto=format" fit='fill'></el-image>
      <p>In return, the grandparents and elders will give the younger generation red envelopes. The money in red envelopes is also known as 压岁钱 (yā suì qián). Literally, it is “money to anchor the year.”</p>
      <p>In the past, currency was in the form of coins similar in shape to donuts. Parents would use red string to tie the coins together and give to their children. It transitioned to be wrapped in red paper and now, put into red envelopes.</p>
      <el-image src="https://chinesenewyear.imgix.net/assets/images/red-pockets/chinese-new-year-red-pockets-ancient-coins.jpg?q=50&w=960&auto=format" fit='fill'></el-image>      
      <p>By giving the money to the children, the elders are also hoping to pass on a year of good fortune and blessings. In some regions of China, rather than between generations, married couples will give red envelopes to their unmarried friends to transfer some luck.</p>
      <p>Kowtow (磕头 / kē tóu) literally means to knock your head (against the floor.) Basically, you kneel and place your hands on the ground before you. Bend over and rest your head between your hands. This is the ultimate show of respect.</p>
      
      <el-divider></el-divider>

      <h2>Dinner Customs</h2>
      <p>The most important meal of the year is the New Year’s Eve reunion dinner. Because the Chinese love treating others to meals, there will also be multiple other dinners throughout the holiday.</p>
      <p>Whether it takes place at home or in a restaurant, the seating arrangement is always set.</p>
      <h3>Dinners at home</h3>
      <p>If the traditional table is used, there will be 4 benches. Each seats 8 people.<br>The eldest sits in the north, facing the south. Then in descending order, people are seated in the east, west and lastly south. This is due to beliefs in fēng shuǐ (风水).</p>
      <p>There are assigned seats in each bench as well. On the northern bench, the leftmost is the most important guest. The right side is reserved for the host.</p>
      <p>For the eastern and western benches, the ones closer to the north are usually older (or more important.) It is more casual for the southern bench.</p>

      <h3>Dinners at a restaurant</h3>
      <p>The round tables in Chinese restaurants usually seat 8-12 people. If in a private room, the innermost and centered table is reserved for the highest ranks. The host sits on the right, while the most important guest sits on the left.</p>      
      <h3>Dinner superstitions and manners</h3>
      <p>Disney’s Mulan was a great movie. But they made a grave mistake.
      Whenever they ate, they would stick the chopsticks straight into their bowl of rice. Never do that, especially if eating with elders! It looks like burning incense to commemorate passed ancestors.</p>
      <p>Unlike in the West, it’s polite to keep your elbows on the table while eating. You should also make sure you eat everything on your plate. But here’s a friendly tip: if someone sees your plate empty, they’ll naturally pile on more food. So if you don’t want all this food, try to find the right balance and timing!</p>
      <p>Also, be prepared for some awkwardness. The Chinese have a habit of asking questions that may make foreigners uncomfortable. Most genuinely want to know because they care or are concerned. Grandparents and aunties and uncles will ask:<br>Did you get a job? Where do you work? What’s your annual income? Did you get a promotion? Did you find a boy/girlfriend? Why not? Do you want to meet my friend’s kid? When are you getting married? When are you having kids?</p>
      <p>It’s a very annoying but heartwarming phenomenon. You should also ask around for local superstitions and customs. For example, in some regions, there is 1 dish that is always placed on the table. But it’s not meant to be eaten until the very last day of the holiday. Don’t be that guy.</p>
      <p>Despite the complicated rules and social customs, Chinese New Year is a time of celebration. Once you have everything down pat, you’ll be able to enjoy yourself (and feast on the great food)!</p>
    </div>
      
  </div>
</template>


<script>
import header from '@/components/Modal/headerWidgets/headerNav.vue'

export default {
    name:'Zodiac',
    components: { //定义组件
        'wbc-nav':header,
    },
    data() { //选项 / 数据
      return {
      }
    },
    computed: {
      
    },

    methods: { //事件处理器
    },
    created() { //生命周期函数
    }
}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/typograph.scss"
</style>