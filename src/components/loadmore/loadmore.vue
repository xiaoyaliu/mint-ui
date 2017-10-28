<template>
  <mt-loadmore :top-method="loadTop"
               :bottom-method="loadBottom"
               :bottom-all-loaded="allLoaded"
               @top-status-change="topChange"
               :distance-index="2"
               topPullText="下拉刷新啊"
               topDropText="释放啊"
               topLoadingText="架子啊"
                ref="loadmore">
    <ul>
      <li class="li" v-for="item in list">{{ item }}</li>
    </ul>
  </mt-loadmore>
</template>
<!--
手指在屏幕上滑动的距离与组件实际移动的距离比值可以通过 distance-index 参数配置，默认值为 2。
autoFill          若为真，loadmore 会自动检测并撑满其容器     Boolean true
maxDistance       手指移动与组件移动距离的比值                Number   0
topDistance       触发 topMethod 的下拉距离阈值（像素）       Number  70
bottomPullText
bottomDropText
bottomLoadingText
bottomDistance     触发 bottomMethod 的上拉距离阈值（像素）   Number   70
bottomAllLoaded   若为真，则 bottomMethod 不会被再次触发
-->
<script type="text/ecmascript-6">
  import { Loadmore } from 'mint-ui';

  export default {
    data() {
      return {
        list:20,
        allLoaded:false
      }
    },
    components:{Loadmore},
    methods:{
      loadTop() {
          console.log(event)
          setTimeout(()=>{
            this.list=this.list+10;
            this.$refs.loadmore.onTopLoaded();
          },2000);
      },
      loadBottom() {
      // load more data
        setTimeout(()=>{
          this.list=this.list+10;
          this.allLoaded = true;// if all data are loaded
          this.$refs.loadmore.onBottomLoaded();
          this.allLoaded = false;
        },2000)


      },
      topChange(x) {
          console.log(x)
      }
    }
  }
</script>
<style>
.li{
  line-height: 50px;
  text-align: center;
}
</style>
