<template>
  <div>
    <div class="button-wrapper">
      <mt-button type="default" size="large" @click="goIndicator('snake')">snake</mt-button>
    </div>
    <div class="button-wrapper">
      <mt-button type="default" size="large" @click="goIndicator('fading-circle')">fading-circle</mt-button>
    </div>
    <div class="button-wrapper">
      <mt-button type="default" size="large" @click="goIndicator('double-bounce')">double-bounce</mt-button>
    </div>
    <div class="button-wrapper">
      <mt-button type="default" size="large" @click="goIndicator('triple-bounce')">triple-bounce</mt-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Indicator } from 'mint-ui';

  export default {
    mounted:function () {
      //Indicator.open('Loading...');//基础简单写法

    },
    methods:{
      goIndicator:function (type) {
        Indicator.open({
          text: 'Loading...',
          spinnerType: type
        });

        setTimeout(()=>{
          Indicator.close();
        },2000)
      }
    }

  }
</script>

<style>
  .button-wrapper{
    margin-bottom: 20px;
  }
</style>
