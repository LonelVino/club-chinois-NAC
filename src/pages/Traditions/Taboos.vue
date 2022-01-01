<template>
  <div>
    <wbc-nav></wbc-nav>
    <header class='header'>
      <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/21-things-you-didnt-know-about-chinese-new-year/chinese-new-year-dancing-dragon.jpg?fit=crop&q=50&w=960&h=224&auto=format"/>
    </header>
    <div class="paragraph">
      <h1>Chinese New Year Taboos</h1>
      <p>The Spring Festival is a time of celebration. It’s to welcome the new year with a smile and let the fortune and happiness continue on. At the same time, the Spring Festival involves somber ceremonies to wish for a good harvest. Strict rules and restrictions go without saying.</p>
      <p>To help you with that, here are the top 10 taboos during the Chinese New Year. Follow these and fortune will smile on you.</p>

      <el-divider></el-divider>

      <h2>1. Do not say negative words</h2>
      <p>All words with negative connotations are forbidden! These include: death, sick, empty, pain, ghost, poor, break, kill and more.</p>
      <p>The reason behind this should be obvious. You wouldn’t want to jinx yourself or bring those misfortunes onto you and your loved ones.</p>

      <h2>2. Do not break ceramics or glass</h2>
      <p>Breaking things will break your connection to prosperity and fortune. If a plate or bowl is dropped, immediately wrap it with red paper while murmuring auspicious phrases. Some would say 岁岁平安 (suì suì píng ān). This asks for peace and security every year. 岁 (suì) is also a homophone of 碎 , which means “broken” or “shattered.” After the New Year, throw the wrapped up shards into a lake or river.</p>

      <h2>3. Do not clean or sweep</h2>
      <p>Before the Spring Festival, there is a day of cleaning. That is to sweep away the bad luck. But during the actual celebration, it becomes a taboo. Cleaning or throwing out garbage may sweep away good luck instead.</p>
      <p>If you must, make sure to start at the outer edge of a room and sweep inwards. Bag up any garbage and throw it away after the 5th day. Similarly, you shouldn’t take a shower on Chinese New Year’s Day.</p>

      <h2>4. Do not use scissors, knives or other sharp objects</h2>
      <p>There are 2 reasons behind this rule. Scissors and needles shouldn’t be used. In olden times, this was to give women a well-deserved break.</p>
      <p>Sharp objects in general will cut your stream of wealth and success. This is why 99% of hair salons are closed during the holidays. Hair cutting is taboo and forbidden until Lunar February 2, when all festivities are over.</p>

      <h2>5. Do not visit the wife’s family</h2>
      <p>Traditionally, multiple generations live together. The bride moves into the groom’s home after marriage. And, of course, she will celebrate Chinese New Year with her in-laws.</p>
      <p>Returning to her parents on New Year’s Day means that there are marriage problems and may also bring bad luck to the entire family. The couple should visit the wife’s family on the 2nd day. They’d bring their children, as well as a modest gift (because it’s the thought that counts).</p>

      <h2>6. Do not demand debt repayment</h2>
      <p>This custom is a show of understanding. It allows everyone a chance to celebrate without worry. If you knock on someone’s door, demanding repayment, you’ll bring bad luck to both parties. However, it’s fair game after the 5th day. Borrowing money is also taboo. You could end up having to borrow the entire year.</p>

      <h2>7. Avoid fighting and crying</h2>
      <p>Unless there is a special circumstance, try not to cry. But if a child cries, do not reprimand them. All issues should be solved peacefully. In the past, neighbors would come over to play peacemaker for any arguments that occurred. This is all to ensure a smooth path in the new year.</p>

      <h2>8. Avoid taking medicine</h2>
      <p>Try not to take medicine during the Spring Festival to avoid being sick the entire year. Of course, if you are chronically ill or contract a sudden serious disease, immediate health should still come first.</p>

      <h2>9. Do not give New Year blessings to someone still in bed</h2>
      <p>You are supposed to give New Year blessings (拜年 / bài nián). But let the recipient get up from bed first. Otherwise, they’ll be bed-ridden for the entire year. You also shouldn’t tell someone to wake up. You don’t want them to be rushed around and bossed around for the year. Take advantage of this and sleep in!</p>


      <h2>10. Chinese gift-giving taboos</h2>
      <p>It was mentioned above that you should bring gifts when paying visits. It’s the thought that counts, but some gifts are forbidden.</p>
      <p>Clocks are the worst gifts. Gifting clocks (送钟 / sòng zhōng) is a homophone of paying one’s last respects (送终). Splitting pears (分梨 / fèn lí) is also a homophone of separation (分离).</p>
      <p>Some regions have their own local taboos too. For example, in Mandarin, “apple” (苹果) is pronounced píng guǒ. But in Shanghainese, it is bing1 gu, which sounds like “passed away from sickness.”</p>
      <p>For the Spring Festival, these rules may seem excessive. Especially when you add in the cultural norms, customs and manners. But like a parent would say, they are all for your own good. Formed over thousands of years, these taboos embody the beliefs, wishes and worries of the Chinese people.</p>
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