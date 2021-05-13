<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in img_src" :key="item">
        <img class='car-img' :src="item"/>        
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    name: 'caroulse',
    data() {
        return {
            img_src: [
                'static/img/caroulse/Home_2018.jpg',
                'static/img/caroulse/Home_2018_2.jpg',
                'static/img/caroulse/Home_2019.jpg',
                'static/img/caroulse/Home_2021.jpg'
            ]    
        }
    },
}
</script>

<style>
.el-carousel {
    overflow: hidden;
}
.el-carousel__item {
    width: 500px;
    height: 400px;
}
.el-carousel__item img{
    width: 100%;
    height: 150%;
}
.el-carousel__item h3 {
color: #475669;
font-size: 14px;
opacity: 0.75;
line-height: 200px;
margin: 0;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
  }
</style>

<style scoped>
.img_src {
    width: 100%;
    height:100%;
}
</style>