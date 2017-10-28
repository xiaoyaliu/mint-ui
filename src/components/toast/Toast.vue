<template>
  <div class="wrapper">

  </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui';
    export default {
        mounted:function () {
          Toast({
            message: 'Upload Complete',
            iconClass: 'icon-checkmark2',//class name of the icon font
            className:'',//classname of the toast
            position: 'middle',//top/bottom/middle
            duration: 5000
          });
        }
    }
</script>
<style>
  .wrapper{
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
