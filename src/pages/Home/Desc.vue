<template>
    <div class="desc">
      <div class="container">
        <div class='row'>
          <div class="content">
            <h4> {{$t('Home.intro.time.q')}} </h4>
            <h3> {{$t('Home.intro.time.title')}} </h3>
            <p> {{$t('Home.intro.time.more')}} </p>
          </div>
          <div class="content">
            <h4> {{$t('Home.intro.length.q')}} </h4>
            <h3> {{$t('Home.intro.length.title')}} </h3>
            <p> {{$t('Home.intro.length.more')}} </p>
          </div>
          <div class="content">
            <h4> {{$t('Home.intro.zodiac.q')}} </h4>
            <h3> {{$t('Home.intro.zodiac.title')}} </h3>
            <p> {{$t('Home.intro.zodiac.more')}} </p>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="calendar">
          <section class='title'>
            <router-link to='/Calendar'><h6>{{$t('Home.calendar.title')}}</h6></router-link>
            <h2>{{$t('Home.calendar.subtitle')}}</h2>
          </section>
          <img src="@/assets/img/calendar_bar.png" alt="">
          <section class='date'>
            <div class="content date-1">
              <h5>{{$t('Home.calendar.phase_1.time')}}</h5>
              <h3>{{$t('Home.calendar.phase_1.title')}}</h3>
              <p class="small-p">{{$t('Home.calendar.phase_1.more')}}</p>
            </div>
            <div class="content date-2">
              <h5>{{$t('Home.calendar.phase_2.time')}}</h5>
              <h3>{{$t('Home.calendar.phase_2.title')}}</h3>
              <p class="small-p">{{$t('Home.calendar.phase_2.more')}}</p>
            </div>
            <div class="content date-3">
              <h5>{{$t('Home.calendar.phase_3.time')}}</h5>
              <h3>{{$t('Home.calendar.phase_3.title')}}</h3>
              <p class="small-p">{{$t('Home.calendar.phase_3.more')}}</p>
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
        h5 {
          font-family: "Raisonne", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-weight: bolder;
          margin-bottom: 0vh;
          font-size: 1.8vh;
        }
        h3 {font-size: 2vh;}
        p {
          font-size: 1.4vw;
          line-height: 1.6vw;
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
            p {
              font-size: 1.8vw;
              line-height: 1.9vw;
            }
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
        h5 {font-size: 1.4vh;}
        h3 {font-size: 2.4vh;}
        .small-p {font-size: 2vh;}
      }
    }
  }
}
</style>