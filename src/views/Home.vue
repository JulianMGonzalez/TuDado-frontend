<template>
  <div class="home">
    <banner-component></banner-component>
    <navigation-component></navigation-component>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/public/HelloWorld.vue'
import FooterComponent from '../components/shared/FooterComponent.vue'
import BannerComponent from '../components/shared/BannerComponent.vue'
import NavigationComponent from '../components/shared/NavigationComponent.vue'
import HerramientasComponent from '../components/shared/HerramientasComponent.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FooterComponent,
    BannerComponent,
    NavigationComponent,
    HerramientasComponent
  }
}
</script>
