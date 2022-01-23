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
            image: 'https://cdn-pop.viarezo.fr/static/linkcs/images/2fc0f792961d7916432c49ad73e2a19abcaf606e14e08ce4228057483c760900.jpeg',
            date: this.$i18n.t('Events.Relay.date'),
            time: this.$i18n.t('Events.Relay.time'),
            desc: this.$i18n.t('Events.Relay.desc'),
          },
          "Eve2":{
            link: 'raviolis',
            name: this.$i18n.t('Events.Ravioli.title'),
            position: this.$i18n.t('Events.Ravioli.pos'),
            image: 'https://cdn-pop.viarezo.fr/static/linkcs/images/d116392f5530a035201dff4e7fc5a65ce387c4d71fb90517ecbf1228ef5ef4b7.jpeg',
            date:  this.$i18n.t('Events.Ravioli.date'),
            time: this.$i18n.t('Events.Ravioli.time'),
            desc: this.$i18n.t('Events.Ravioli.desc')
          },
          "Eve3":{
            link: 'ceremony',
            name: this.$i18n.t('Events.Ceremony.title'),
            position: this.$i18n.t('Events.Ceremony.pos'),
            image: 'https://cdn-pop.viarezo.fr/static/linkcs/images/0e38d12e1a77eb67c3322862cf0737e17b101d6d50ae3e0442b190dea8d2bbfb.jpeg',
            date: this.$i18n.t('Events.Ceremony.date'),
            time: this.$i18n.t('Events.Ceremony.time'),
            desc: this.$i18n.t('Events.Ceremony.desc')
          },
          "Eve4":{
            link: 'marche',
            name: this.$i18n.t('Events.Marche.title'),
            position: this.$i18n.t('Events.Marche.pos'),
            image: 'https://cdn-pop.viarezo.fr/static/linkcs/images/ed932863cda2a01aad8ccc06dc2d5239e6b28ae7d1841b19542effc8f8c2ef28.jpeg',
            date: this.$i18n.t('Events.Marche.date'),
            time: this.$i18n.t('Events.Marche.time'),
            desc: this.$i18n.t('Events.Marche.desc')
          },
          "Eve5":{
            link: 'film',
            name: this.$i18n.t('Events.Film.title'),
            position: this.$i18n.t('Events.Film.pos'),
            image: 'https://cdn-pop.viarezo.fr/static/linkcs/images/5b93724af634a4852ad1836a64c960097612d5c6f09966665733707e0c015988.jpeg',
            date: this.$i18n.t('Events.Film.date'),
            time: this.$i18n.t('Events.Film.time'),
            desc: this.$i18n.t('Events.Film.desc')
          },

          // "Eve6":{
          //   link: 'Event_6',
          //   name:  this.$i18n.t('Events.Event6.title'),
          //   position: 'Agora',
          //   image: 'https://preview.redd.it/1yh6x8jpt6a41.jpg?width=4096&format=pjpg&auto=webp&s=f8b657e35078e9738d3c0ed8561af60f99659bb8',
          //   date: this.$i18n.t('Events.Ravioli.date'),
          //   time: '01/02/22 13H',
          //   desc: this.$i18n.t('Events.Event6.desc')
          // },
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
  .Headline {
    font-size: 1.5rem;
  }
  .card {
    margin: 2em 2em 0 2em;
  }
}
</style>