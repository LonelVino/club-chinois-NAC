<template>
  <div>
    <wbc-nav></wbc-nav>
    <header class='header'>
      <img class='header-img' src="https://chinesenewyear.imgix.net/assets/images/21-things-you-didnt-know-about-chinese-new-year/chinese-new-year-calendar.jpg?fit=crop&q=50&w=960&h=224&auto=format"/>
    </header>
    <div class="paragraph">
      <h1>New Year Calendar</h1>
      <p>The <a href="https://en.wikipedia.org/wiki/Chinese_New_Year">Chinese New Year</a>, or Spring Festival, has more than 4,000 years of history and is the longest holiday of the year. In the 21st century, the national holiday begins on the first of the Lunar Calendar and lasts until the 15th of the first month. In 2022, Chinese New Year begins on February 1st and ends February 15th with the <router-link to='lantern-festival'>Lantern Festival</router-link>.</p>
      <p>
          In China, all stores are closed during the first five days of the Spring Festival, with some not opening until the very end. People must stock up on New Year supplies (年货 / nian huo) beforehand and many begin on the Laba Festival. Kitchens will also show the first signs of <router-link to='/Food'>Spring Festival dishes</router-link> with the preparation of cured meat, salted fish and other preserved food.
      </p>
      <el-divider></el-divider>

      <h2>The Laba festival</h2>
      <p>However, in the traditional sense, the Laba Festival (腊八 / Làbā jié) of the lunar December (January 10th, 2022) marks the beginning of the Spring Festival. Memorial ceremonies are held on this day to pray to ancestors and gods (such as door gods) for fortune and a successful harvest. Though paganist in nature, the festival has become integrated into religions such as Daoism and Buddhism.</p>
      <p>The main food for this festival is the Laba porridge (腊八粥 / Làbā zhōu). It includes seven types of grains, such as red bean, red dates and husked rice. There are many different myths regarding this porridge, but all teach the lesson of being grateful and not taking what you have for granted.</p>
      <p>In addition, the Laba menu includes Laba tofu (腊八豆腐 / àbā dòufu), noodles (腊八面 / Làbā miàn) and wheat kernel rice (麦仁饭 / Mài rén fàn). It is also said that eating ice on this day will prevent any stomachaches for the year.</p>
      <el-divider></el-divider>

      <h2>The Spring Festival</h2>
      <p>Kicking off the main festivities is the Little Year on January 24th, with the Spring Festival officially beginning February 1st (January 31st is New Year's Eve) and ending with the Lantern Festival on February 15th. Here is a list of the most important dates for the Chinese New Year:</p>

      <el-table
        header-cell-class-name="my-header"
        :header-cell-style="{ background: 'rgb(202, 6, 6)', color: '#fff'}"
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="Solar_Date"
          label="Solar Date"
          min-width="80px">
        </el-table-column>
        <el-table-column
          prop="Lunar_Date"
          label="Lunar Date"
          min-width="80px">
        </el-table-column>
        <el-table-column
          prop="Title"
          label="Title">
        </el-table-column>
      </el-table>

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
        tableData: [{
          Solar_Date: 'January 24th', Lunar_Date: 'December 23rd',
          Title: 'Little Year (小年 / xiǎo nián)'  
        }, 
        {
          Solar_Date: 'January 31st', Lunar_Date: 'December 30th',
          Title: "New Year's Eve (除夕 / chúxì)"  
        },
        {
          Solar_Date: 'February 1st', Lunar_Date: 'January 1st',
          Title: "Spring Festival (春节 / chūn jié)"  
        }, 
        {
          Solar_Date: 'February 2nd', Lunar_Date: 'January 2nd',
          Title: "To the in-law’s (迎婿日 / yíng xù rì)"  
        }, 
        {
          Solar_Date: 'February 3st', Lunar_Date: 'January 3st',
          Title: "Day of the Rat (鼠日 / shǔ rì)"  
        }, 
        {
          Solar_Date: 'February 4th', Lunar_Date: 'January 4th',
          Title: "Day of the Sheep (羊日 / yáng rì)"  
        }, 
        {
          Solar_Date: 'February 5th', Lunar_Date: 'January 5th',
          Title: "Break Five (破五 / pò wǔ)"  
        }, 
        {
          Solar_Date: 'February 6th', Lunar_Date: 'January 6th',
          Title: "Day of the Horse (马日 / mǎ rì)"  
        },
        {
          Solar_Date: 'February 7th', Lunar_Date: 'January 7th',
          Title: "Day of the Human (人日 / rén rì)"  
        },
        {
          Solar_Date: 'February 8th', Lunar_Date: 'January 8th',
          Title: "Day of the Millet (谷日节 / gǔ rì jié)"  
        },
        {
          Solar_Date: 'February 9th', Lunar_Date: 'January 9th',
          Title: "Providence Health (天公生 / tiān gōng shēng)"  
        },      		
        {
          Solar_Date: 'February 10th', Lunar_Date: 'January 10th',
          Title: "Stone Festival (石头节 / shí tou jié)"  
        },      		
        {
          Solar_Date: 'February 11th', Lunar_Date: 'January 11th',
          Title: "Son-in-law Day (子婿日 / zǐ xù rì)"  
        },      		
        {
          Solar_Date: 'February 12th--14th', Lunar_Date: 'January 12th--14th',
          Title: "Lantern Festival Preperations"  
        },      		
        {
          Solar_Date: 'February 15th', Lunar_Date: 'January 15th',
          Title: "Lantern Festival (元宵节 / yuán xiāo jié)"  
        },      		
        ]
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