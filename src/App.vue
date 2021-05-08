<template>
<v-app id="app">
  <menu-component></menu-component>
  <herramientas-component></herramientas-component>
  <transition name="slide-fade" mode="out-in"> 
        <router-view/>
  </transition>
  <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from './components/shared/FooterComponent.vue';
import HerramientasComponent from './components/shared/HerramientasComponent.vue';
import MenuComponent from './components/shared/MenuComponent.vue';

export default {
  name: 'App',

  components: {
    MenuComponent,
    HerramientasComponent,
    FooterComponent
  },
  created(){
  
    this.$store.dispatch("autoLogin");
  },
};
</script>
<style>
  #app{
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url("~@/assets/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  .fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
   transition: all .3s ease;
}
.slide-fade-leave-active {
   transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
   transform: translateX(10px);
   opacity: 0;
}
</style>
