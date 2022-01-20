<template>
  <div class='cards-container'>
    <p class='Headline'>Événements</p>
    <div class="cards">
      <div class="card" v-for="(item,index) in events" :key="index">
        <tem-card 
        :link="item.link"
        :image="item.image"
        :name="item.name"
        :desc="item.desc"
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
            link: 'Event_1',
            name: 'Événement 1',
            position: 'Agora',
            image: 'https://images6.alphacoders.com/679/thumb-1920-679338.jpg',
            time: '01/02/22 13H',
            desc: `Description`
          },
          "Eve2":{
            link: 'Event_2',
            name: 'Événement 2',
            position: 'Agora',
            image: 'https://preview.redd.it/1yh6x8jpt6a41.jpg?width=4096&format=pjpg&auto=webp&s=f8b657e35078e9738d3c0ed8561af60f99659bb8',
            time: '01/02/22 13H',
            desc: `Description`
          },
          "Eve3":{
            link: 'Event_3',
            name: 'Événement 3',
            position: 'Agora',
            image: 'https://preview.redd.it/1yh6x8jpt6a41.jpg?width=4096&format=pjpg&auto=webp&s=f8b657e35078e9738d3c0ed8561af60f99659bb8',
            time: '01/02/22 13H',
            desc: `Description`
          },
          "Eve4":{
            link: 'Event_4',
            name: 'Événement 4',
            position: 'Agora',
            image: 'https://preview.redd.it/1yh6x8jpt6a41.jpg?width=4096&format=pjpg&auto=webp&s=f8b657e35078e9738d3c0ed8561af60f99659bb8',
            time: '01/02/22 13H',
            desc: `Description`
          },
          "Eve5":{
            link: 'Event_5',
            name: 'Événement 5',
            position: 'Agora',
            image: 'https://preview.redd.it/1yh6x8jpt6a41.jpg?width=4096&format=pjpg&auto=webp&s=f8b657e35078e9738d3c0ed8561af60f99659bb8',
            time: '01/02/22 13H',
            desc: `Description`
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
  .Headline {
    font-size: 1.5rem;
  }
  .card {
    margin: 2em 2em 0 2em;
  }
}
</style>