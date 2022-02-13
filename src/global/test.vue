
<template>
<div class="container">
  <div class="row">
    <div class="col-6 box">aa</div>
    <div class="col-6 box">aa</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'test',
  props: {
    background: {
      type: String,
      default: 'red'
    },
    foreground:{
      type: String,
      default: 'white'
    }
  },
  data(){
    return {
      message: 'Hello Vue!',
    }
  }
}
</script>

<style>
.box{
  background-color: v-bind(background);
  color:v-bind(foreground);
  padding:10px;
}
</style>
