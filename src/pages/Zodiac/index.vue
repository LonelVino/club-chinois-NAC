<template>
  <div>
    <div class="header">
      <div class="headBack">
        <wbc-nav></wbc-nav>
      </div>
    </div>
    <header class='header'>
      <img class='header-img' src="@/assets/img/animals.png"/>
    </header>
    <div class="paragraph">
      <h1>Chinese Zodiac</h1>
      <p>The Chinese zodiac, or Sheng Xiao (生肖), is a repeating 12-year cycle of animal signs and their ascribed attributes, based on the lunar calendar. In order, the zodiac animals are: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.
      </p>
      <p>
      The <a href="https://www.travelchinaguide.com/intro/social_customs/zodiac/ox.htm#:~:text=Ox%20is%20the%20second%20in,diligence%2C%20persistence%2C%20and%20honesty.">
      Lunar New Year</a>, or Spring Festival, marks the transition from one animal to the next—2021 is the year of the Ox, which began on February 12th, 2021, and ends on January 31st, 2022. February 1st, 2022 (Chinese New Year) will signal the start of the year of the Tiger.
      </p> 

      <h2>What’s Your Zodiac Sign?</h2>
      <p>
        Your birth year determines your Chinese zodiac sign, but it can get tricky, as the lunar calendar varies from the solar, or Gregorian, calendar.
      </p>
      <p>
        Because the dates of Chinese New Year change every year, individuals born in January or February will need to pay special attention to their birth date in addition to their birth year.
      </p>

      <h3>The 12 Zodiac Animals</h3> 

      <p>
        If you already know your Chinese zodiac sign, or are curious to explore them all, select one from below to discover the personality traits, romantic compatibility, and what fortune 2022 will bring.
      </p>
      <div class="animals-12">
          <router-link to='Zodiac/Rat'><img src="@/assets/img/rat.png"></router-link>
          <router-link to='Zodiac/Ox'><img src="@/assets/img/ox.png"></router-link>
          <router-link to='Zodiac/Tiger'><img src="@/assets/img/tiger.png"></router-link>
          <router-link to='Zodiac/Rabbit'><img src="@/assets/img/rabbit.png"></router-link>
          <router-link to='Zodiac/Dragon'><img src="@/assets/img/dragon.png"></router-link>
          <router-link to='Zodiac/Snake'><img src="@/assets/img/snake.png"></router-link>
          <router-link to='Zodiac/Horse'><img src="@/assets/img/horse.png"></router-link>
          <router-link to='Zodiac/Goat'><img src="@/assets/img/goat.png"></router-link>
          <router-link to='Zodiac/Monkey'><img src="@/assets/img/monkey.png"></router-link>
          <router-link to='Zodiac/Rooster'><img src="@/assets/img/rooster.png"></router-link>
          <router-link to='Zodiac/Dog'><img src="@/assets/img/dog.png"></router-link>
          <router-link to='Zodiac/Pig'><img src="@/assets/img/pig.png"></router-link>
      </div>
      <h3>Chinese Zodiac Years</h3>
      <p>
        Since the Chinese zodiac cycle repeats every 12 years, it’s easy to figure out if it’s your year—just check if your age is a multiple of 12! Listed below are the 12 zodiac animals in order with accompanying years:
      </p>

      <el-table
        header-cell-class-name="my-header"
        :header-cell-style="{ background: 'rgb(202, 6, 6)', color: '#fff'}"
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="Zodiac_Sign"
          label="Zodiac Sign"
          min-width="80">
          <template slot-scope="scope">
            <router-link :to="scope.row.route">{{scope.row.Zodiac_Sign}}</router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="Chinese_Name"
          label="Chinese Name"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="Zodiac_Years"
          label="Zodiac Years">
        </el-table-column>
      </el-table>

      <h3>Ben Ming Nian (Zodiac Birth Year)</h3>
      <p>
        Maybe you think your zodiac year (本命年 / ben ming nian) will be lucky. It’s your year after all. However, it’s the total opposite.
      </p>
      <p>
        It’s seen as a hurdle you have jump over. The way to protect yourself from evil spirits and bad fortune is to wear red underwear every day for the entire year. Even in modern times, it’s still treated as a real concern.
      </p>
      <p>
        In some places, married men even have to be accompanied by their wives when they go out at night during their year!
      </p>

      <h2>Origins of the Chinese Zodiac</h2>
      <p>
      It is generally believed the origins of the Chinese zodiac are rooted in zoolatry, or animal worship, with the system dating back to the Qin dynasty, more than 2,000 years ago.
      </p>
      <p>
      Legend has it that the Jade Emperor summoned all the animals to his palace in a “Great Race” (or possibly for a banquet), and the order in which they arrived determined the animal’s place in the zodiac.
      </p>
      <p>
      With such a rich past, it’s little wonder the Chinese zodiac remains so popular throughout China and much of Asia. An integral part of everyday life, it’s used to determine your fortune for the year, marriage compatibility, career path, best times to have a baby, and so much more.
      </p>

      <h2>The Science Behind the Chinese Zodiac</h2>
      <p>
      How do Chinese astrologers know each zodiac’s personality, fortune and compatibility with others?
      </p>
      <p>
      Below is some technical information you might be interested in.
      </p>
      <p>  
      Dì Zhī (地支), or Earthly Branches, were the original terms used for the years. These branches are also assigned to the hours of the day, based on solar time.
      </p>
      <p>
      The animals were later added as mnemonics and categorized as either yīn (阴) or yáng (阳).
      </p>
      <p>
      Ten Celestial Stems (天干 / tiān gān) pair with the Earthly Branches for a 60 year calendrical cycle. Then add in an element. These cycle through, but each zodiac also has a fixed element. This fixed element is what determines which sign you’re compatible with.
      </p>
      <p>
      Twelve Earthly Branches: zi (子), chǒu (丑), yín (寅), mǎo (卯), chén (辰), sì (巳), wǔ (午), wèi (未), shēn (申), yǒu (酉), xū (戌), hài (亥).
      </p>
      <p>
      Ten Celestial Stems: jiǎ (甲), yǐ (乙), bǐng (丙), ding (丁), wù (戊), jǐ (己), gēng (庚), xīn (辛), rén (壬), guǐ (癸).
      </p>
      <p>
      Five elements: water (水 / shuǐ), wood (木 / mù), fire (火 / huǒ), earth (土 / tǔ), metal (金 / jīn).
      </p>
      <p>
      A calendar of recent years with everything explained above would look like this:
      </p>

      <h3>Compatibility</h3>
      <p> 
      There are six groups (六合 / liù hé) of most compatible pairs. They fit into each other like jigsaw pieces. These are the ones who support you in the background.
      </p>
      <p>
      Four groups of trios (三合 / sān hé) are the next most compatible signs. Working in a team, they complement your skills.
      </p>
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
        // base_root: '@/assets/img/',
        animal_names: [
          'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
        'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'
        ],
        tableData: [{
          route: '/Zodiac/Rat',
          Zodiac_Sign: 'Rat',
          Chinese_Name: '鼠 (shǔ)',
          Zodiac_Years: '1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020'
        }, {
          route: '/Zodiac/Ox',
          Zodiac_Sign: 'Ox',
          Chinese_Name: '牛 (niú)',
          Zodiac_Years: '1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021'
        }, {
          route: '/Zodiac/Tiger',
          Zodiac_Sign: 'Tiger',
          Chinese_Name: '虎 (hǔ)',
          Zodiac_Years: '1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022'
        }, {
          route: '/Zodiac/Rabbit',
          Zodiac_Sign: 'Rabbit',
          Chinese_Name: '兔 (tù)',
          Zodiac_Years: '1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023'
        }, {
          route: '/Zodiac/Dragon',
          Zodiac_Sign: 'Dragon',
          Chinese_Name: '龙 (lóng)',
          Zodiac_Years: '1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024'
        }, {
          route: '/Zodiac/Snake',
          Zodiac_Sign: 'Snake',
          Chinese_Name: '蛇 (shé)',
          Zodiac_Years: '1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025'
        }, {
          route: '/Zodiac/Horse',
          Zodiac_Sign: 'Horse',
          Chinese_Name: '马 (mǎ)',
          Zodiac_Years: '1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026'
        }, {
          route: '/Zodiac/Goat',
          Zodiac_Sign: 'Goat',
          Chinese_Name: '羊 (yang)',
          Zodiac_Years: '1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027'
        }, {
          route: '/Zodiac/Monkey',
          Zodiac_Sign: 'Monkey',
          Chinese_Name: '猴 (hóu)',
          Zodiac_Years: '1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028'
        }, {
          route: '/Zodiac/Rooster',
          Zodiac_Sign: 'Rooster',
          Chinese_Name: '鸡 (jī)',
          Zodiac_Years: '1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029'
        }, {
          route: '/Zodiac/Dog',
          Zodiac_Sign: 'Dog',
          Chinese_Name: '狗 (gǒu)',
          Zodiac_Years: '1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030'
        }, {
          route: '/Zodiac/Pig',
          Zodiac_Sign: 'Pig',
          Chinese_Name: '猪 (zhū)',
          Zodiac_Years: '1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031'
        }]
        }
    },
    computed: {
      
    },

    methods: { //事件处理器
      // animal_imgs: function() {
      //   for (const name of this.animal_names) {
      //     const img_url = eval('`' + this.base_root + name + '.png' + '`')
      //     this.img_urls.push({"name": name, "img_url": img_url})
      //   }
      //   console.log(this.img_urls)
      // }
    },
    created() { //生命周期函数
      // this.animal_imgs();
    }
}
</script>

<style lang="scss">
.paragraph {
  .el-table {
    font-family: Georgia, serif;
    margin-bottom: 3vh;
  }
  .my-header {
    font-weight: bolder;
  }
  @media (max-width: 600px) {
    .el-table {
      overflow: hidden;
      background-color: #efefef;
    }
    .el-table .el-table_11_column_33 {
      display: none
    }
  }
}

</style>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/typograph.scss";

.animals-12 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    width: 15%;
    padding: 0.2em;
  }
  img {
    width: 100%;
  }
}

</style>