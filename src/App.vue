<template>
  <div>
    <app-header></app-header>
    <div>
      <app-featured></app-featured>
      <app-menu></app-menu>
      <app-call-us></app-call-us>
        <app-news-letter></app-news-letter>
    </div>
    <app-footer></app-footer>
  </div>

</template>
<script>
  import appHeader from './components/Heade-Footer/Header.vue';
  import appFooter from './components/Heade-Footer/Footer.vue';
  import appFeatured from './components/Featured/Index.vue';
  import appMenu from './components/Menu/Index.vue';
  import appCallUs from './components/Call-Us/Index.vue'
  import appNewsLetter from './components/NewsLetter/Index.vue'


  export default {
      components:{
        appHeader,
        appFooter,
        appFeatured,
        appMenu,
        appCallUs,
          appNewsLetter
      }
  }
  
</script>

<style>
  @import "./assets/style.css";
  @import url('https://fonts.googleapis.com/css?family=Arizonia|Monoton|Roboto:400,500,700&display=swap');
</style>