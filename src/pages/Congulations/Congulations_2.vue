<template>
    <div class="congulation">
        <div class="content">
          <div class="content__container">
            <!-- <p class="content__container__text">考神</p> -->
            <ul class="content__container__text">
              <li class="content__container__text__item"><img src="static/img/avatar/Einstein_1.jpeg" width="40" height="35"><p>Einstein</p></li>
              <li class="content__container__text__item"><img src="static/img/avatar/Bohr.jpeg" width="40" height="35"><p>Bohr</p></li>
              <li class="content__container__text__item"><img src="static/img/avatar/Young_Plank.jpeg" width="30" height="35"><p class='txt-zh_cn'>年轻普朗克</p></li>
              <li class="content__container__text__item"><img src="static/img/avatar/Old_Plank.jpeg" width="28" height="35"><p class='txt-zh_cn'> 老年普朗克</p></li>
            </ul>
            <ul class="content__container__list">
              <li class="content__container__list__item">爱你哟！</li>
              <li class="content__container__list__item">附体 !</li>
              <li class="content__container__list__item">竟在我身边 !</li>
              <li class="content__container__list__item">竟是我自己 !</li>
            </ul>
          </div>
        
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
body .congulations{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #34495e;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 160px;
  overflow:hidden;
  
  font-family: 'Lato', sans-serif;
  font-size: 35px;
  line-height: 40px;
  color: #03191f;
  .content__container__text__item {
    display: flex;
    flex-direction: row;
    p {
      font-size: 30px;
    }
    .txt-zh_cn {
      font-size: 25px;
    }
  }
  .content__container__list__item {
    transition-duration: 3s;
  }
  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 80px;

    &:before {
      content: '[';
      left: 0;
    }

    &:after {
      content: ']';
      position: absolute;
      right: 0;
    }

    &:after, &:before {
      position: absolute;
      top: 0;
      
      color: #16a085;
      font-size: 42px;
      line-height: 40px;
      
      -webkit-animation-name: opacity;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    &__text {
      display: inline;
      float: left;
      margin: 0;
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }

    &__list {
      margin-top: 0;
      padding-left: 130px;
      margin-left: 40px;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:0;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

// 6 is the number of animation.
// Here, there are 4 lines :

// 1 to 2
// 2 to 3
// 3 to 4
// 4 to 3
// 3 to 2
// 2 to 1

// 6x + 6y = 100 (100% duration)

// HERE : 
// y = 4 -> Animation between two lines
// x = 12.66 -> Time spent on a line

// You can define a value and calculate the other if you want change speed or the number of lines
@media screen and (max-width: 800px) {
  .content { 
    font-size: 20px;
  }
  .content__container {
    display: flex;
    .content__container__text__item {
      display: flex;
      flex-direction: row;
      p {
        font-size: 25px;
      }
      .txt-zh_cn {
        font-size: 15px;
      }
    }
  }
  
  .content__container__list__item {
    width: 100px;
    font-size: 18px;
    &__container {
      font-weight: 600;
      overflow: hidden;
      height: 40px;
      padding: 0 50px;
    }
    &__list {
      padding-left: 60px;
      margin-left: 00px;
    }
  }
  @keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,-0%,0);}
    16.66%, 29.32% {transform:translate3d(0,-80%,0);}
    33.32%,45.98% {transform:translate3d(0,-175%,0);}
    49.98%,62.64% {transform:translate3d(0,-280%,0);}
    66.64%,79.3% {transform:translate3d(0,-175%,0);}
    83.3%,95.96% {transform:translate3d(0,-80%,0);}
  }

}
@media screen and (max-width: 400px) {
  .content { 
    font-size: 20px;
  }
  .content__container__list__item {
    width: 150px;
  }

}
</style>