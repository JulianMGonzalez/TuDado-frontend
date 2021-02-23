<template>
<v-container >
    <v-carousel show-arrows-on-hover hide-delimiters height="400" class="mt-16">
      <v-carousel-item
        v-for="(item, i) in imagenes"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      <v-img :src="item.src" aspect-ratio="1.77"></v-img>
        {{item.p}}
      </v-carousel-item>
    </v-carousel>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      imagenes: [
        
        {
          src: require('@/assets/oficina.jpg'),
          p: "",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678_960_720.jpg",
          p: "",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2016/11/21/17/50/battle-1846807_960_720.jpg",
          p: "Desarrolla tus habilidades blandas",
        },
      ],
    };
  },
};
</script>

<style>
</style>