<template>
    <div class="desc">
      <div class="container">
        <div class='row'>
          <div class="content">
            <h4>When is Chinese New Year 2022?</h4>
            <h3>Tuesday, February 1</h3>
            <p>Chinese New Year 2022 falls on Tuesday, February 1st, 2022, and celebrations culminate with the <router-link to='/lantern-festival'>Lantern Festival</router-link> on February 15th, 2022.</p>
          </div>
          <div class="content">
            <h4>How Long is Chinese New Year?</h4>
            <h3>16 Days</h3>
            <p>Celebrations last up to 16 days, but only the first 7 days are considered a public holiday (January 31st–February 6th, 2022).</p>
          </div>
          <div class="content">
            <h4>What is the 2022 Chinese Zodiac?</h4>
            <h3>Tiger</h3>
            <p>Chinese New Year marks the transition between <router-link to='/Zodiac'>zodiac signs</router-link>: 2022 is the <router-link to='/Zodiac/Tiger'>year of the Tiger</router-link>; 2021 the <router-link to='/Zodiac/Ox'>year of the Ox</router-link>.</p>
          </div>
        </div>
      </div>        
    </div>
</template>

<style lang="scss" scoped>
@import "@/styles/typograph.scss";
.desc .container {
  margin: 2em 1em 3em 1em;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 0.5em;
    }
    .content:not(:first-child) {
      padding: 0 1em 0 1.4em;
      border-left: 1px solid rgb(194, 193, 193)
    }
  }
}

@media (max-width: 600px) {
  .desc .container .row {
    flex-direction: column;
    .content:not(:first-child) {
      margin: auto;
      padding: 1em 0 0 0;
      border-left: none;
      border-top: 1px solid rgb(194, 193, 193);
    }
  }
}
</style>