<!-- 关于我 -->
<template>
    <div>
        <wbc-nav></wbc-nav>
        <div class="container">
            <el-row  :gutter="30">
                <el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
                    <Presentation/>
                    <wbc-message></wbc-message>
                </el-col>
                <el-col :sm="24"  :md="8" >
                    <wbc-rightlist></wbc-rightlist>
                </el-col>
            </el-row>
        </div>
        <wbc-footer></wbc-footer>
    </div>
</template>

<script>
import header from '../components/Modal/header.vue'
import footer from '../components/Modal/footer.vue'
import temRightlist from '../components/Modal/temRightlist.vue'
import temAbout from '../components/temAbout.vue'
import temMessage from '../components/temMessage.vue'
import Presentation from '@/components/presentation.vue'

    export default {
        name: 'Aboutme',
        data() { //选项 / 数据
            return {

            }
        },
        methods: { //事件处理器

        },
        components: { //定义组件
            'wbc-nav':header,
            'wbc-message':temMessage,
            'wbc-about':temAbout,
            'wbc-rightlist':temRightlist,
            'wbc-footer':footer,
            Presentation,
        },
        created() { //生命周期函数


        }
    }
</script>

<style>

</style>
