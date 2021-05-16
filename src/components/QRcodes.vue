<template>
    <div class="qr-codes">
        <sequential-entrance>
            <div class="qr-code">
                <div class='title'> World week Sign up</div>
                <vue-qrcode value="http://club-chinois.herokuapp.com/#/world-week"></vue-qrcode>
            </div>
        </sequential-entrance>
    </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';
export default {
    name: 'qr-codes',
    components: {
        VueQrcode
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.qr-codes {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.title {
    font-size: 1.3vw;
    font-weight: bolder;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>