<template>
  <div class='cards-container'>
    <p class='Headline'> {{$t('Events.title')}} </p>
    <div class="cards">
      <div class="card" v-for="(item,index) in events" :key="index">
        <tem-card 
        :link="item.link"
        :image="item.image"
        :name="item.name"
        :desc="item.desc"
        :date="item.date"
        :time="item.time"
        :position="item.position"
        ></tem-card>
      </div>
    </div>
  </div>
</template>


<script>
import temCard from './temCard.vue'
export default {
    data() {
      return {
        events: {
          "Eve1": {
            link: 'relay',
            name:  this.$i18n.t('Events.Relay.title'),
            position: this.$i18n.t('Events.Relay.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/relay.jpg',
            date: this.$i18n.t('Events.Relay.date'),
            time: this.$i18n.t('Events.Relay.time'),
            desc: this.$i18n.t('Events.Relay.desc'),
          },
          "Eve2":{
            link: 'raviolis',
            name: this.$i18n.t('Events.Ravioli.title'),
            position: this.$i18n.t('Events.Ravioli.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2.1/ClubChinois/dumplings.jpg',
            date:  this.$i18n.t('Events.Ravioli.date'),
            time: this.$i18n.t('Events.Ravioli.time'),
            desc: this.$i18n.t('Events.Ravioli.desc')
          },
          "Eve3":{
            link: 'ceremony',
            name: this.$i18n.t('Events.Ceremony.title'),
            position: this.$i18n.t('Events.Ceremony.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/ceremony.jpg',
            date: this.$i18n.t('Events.Ceremony.date'),
            time: this.$i18n.t('Events.Ceremony.time'),
            desc: this.$i18n.t('Events.Ceremony.desc')
          },
          "Eve4":{
            link: 'marche',
            name: this.$i18n.t('Events.Marche.title'),
            position: this.$i18n.t('Events.Marche.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/marche.jpg',
            date: this.$i18n.t('Events.Marche.date'),
            time: this.$i18n.t('Events.Marche.time'),
            desc: this.$i18n.t('Events.Marche.desc')
          },
          "Eve5":{
            link: 'film',
            name: this.$i18n.t('Events.Film.title'),
            position: this.$i18n.t('Events.Film.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2/ClubChinois/film.jpg',
            date: this.$i18n.t('Events.Film.date'),
            time: this.$i18n.t('Events.Film.time'),
            desc: this.$i18n.t('Events.Film.desc')
          },

          "Eve6":{
            link: 'tangyuan',
            name:  this.$i18n.t('Events.Tangyuan.title'),
            position: this.$i18n.t('Events.Tangyuan.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2.2/ClubChinois/tangyuan.jpg',
            date: this.$i18n.t('Events.Tangyuan.date'),
            time: this.$i18n.t('Events.Tangyuan.time'),
            desc: this.$i18n.t('Events.Tangyuan.desc')
          },
          "Eve7":{
            link: 'raviolis_metz',
            name: this.$i18n.t('Events.Ravioli_Metz.title'),
            position: this.$i18n.t('Events.Ravioli_Metz.pos'),
            image: 'https://cdn.jsdelivr.net/gh/LonelVino/CDN@1.2.3/ClubChinois/dumplings_metz.jpg',
            date:  this.$i18n.t('Events.Ravioli_Metz.date'),
            time: this.$i18n.t('Events.Ravioli_Metz.time'),
            desc: this.$i18n.t('Events.Ravioli_Metz.desc')
          },
        }
      }
    },
    components: {
      'tem-card': temCard
    }
}
</script>

<style lang="scss" scoped>

.Headline {
  font-family: 'GidolinyaRegular';
  font-weight: bolder;
  font-style: normal;
  font-size: 2rem;
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  margin: 2em;
  flex:  1 0 35%
}


@media (max-width: 1400px) {
  .card {
    margin: 0em;
    flex: 1 0 80%
  }
}

@media (max-width: 600px) {
  .cards-container {
    margin-top: 5em;
  }
  .Headline {
    display: none;
  }
  .card {
    margin: 1em 1.5em 0 1.5em;
  }
}
</style>