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
        <el-divider></el-divider>
        <div class="calendar">
          <section class='title'>
            <router-link to='/Calendar'><h6>CALENDAR</h6></router-link>
            <h2>Chinese New Year 2022 Dates</h2>
          </section>
          <img src="@/assets/img/calendar_bar.png" alt="">
          <section class='date'>
            <div class="content date-1">
              <h6>JAN 24TH–31ST</h6>
              <h3>Little Year</h3>
              <p class="small-p">Preparations for the new year begin on January 24th, 2022, and last until New Years Eve.</p>
            </div>
            <div class="content date-2">
              <h6>FEB 1ST–FEB 11TH</h6>
              <h3>Spring Festival</h3>
              <p class="small-p">Chinese New Year officially begins on February 1st, 2022, and ends on February 11th.</p>
            </div>
            <div class="content date-3">
              <h6>FEB 12TH–15TH</h6>
              <h3>Lantern Festival</h3>
              <p class="small-p">Preparations begin the 12th, and the Lantern Festival is held on February 15th.</p>
            </div>
          </section>
        </div>
        <el-divider></el-divider>
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
  .calendar {
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      object-fit: cover;
    }
    h6 {
      font-family: "Raisonne", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: bold;
      letter-spacing: 1px;
      margin-bottom: -1vh;
    }
    a {text-decoration: none !important; color:black;}
    a:hover {color: #c73036}
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: -2vh;
    }
    .date {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 0.5em;
        h6 {
          font-family: "Raisonne", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: bolder;
          margin-bottom: 0vh;
          font-size: 1.2vh;
        }
        h3 {font-size: 2vh;}
        p {
          font-size: 2;
        }
      }
      .content:not(:first-child) {
        padding: 0 1em 0 1.4em;
        border-left: 0px solid rgb(194, 193, 193)
      }
      .date-1 {flex: 1 0 28%}
      .date-2 {flex: 1 0 38%}
      .date-3 {flex: 1 0 20%}
    }
  }
}

@media (max-width: 1000px) {
  .desc .container 
    {
      .row {
        flex-direction: column;
        .content {
          margin: 0;
        }
        .content:not(:first-child) {
          padding: 1em 0 0 0;
          border-left: none;
          border-top: 1px solid rgb(194, 193, 193);
        }
      }
      .calendar {
        img {display: none;}
        .date {
          flex-direction: column;
          margin-top: 1em;
          h3 {margin-bottom: 1.8vh;}
          .content {
            margin: 0;
          }
          .content:first-child {padding-top: 1em; border-top: 0.4em solid rgb(216, 70, 70);}
          .content:not(:first-child) {
            border-top: 0.4em solid rgb(185, 35, 35);
            padding: 1em 0 0 0;
            border-left: none;
          }
          .content:last-child {border-top: 0.4em solid rgb(126, 25, 25);}
        }
      }
    }
}

@media (max-width: 650px) {
  .desc .container {
    .calendar .date {
      .content {
        margin-bottom: 2vh;
        h6 {font-size: 1.4vh;}
        h3 {font-size: 2.4vh;}
        .small-p {font-size: 1.7vh;}
      }
    }
  }
}
</style>