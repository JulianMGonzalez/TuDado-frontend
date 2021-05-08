<template>
  <v-carousel show-arrows-on-hover hide-delimiters height="600" cycle class="mt-16">
    <v-carousel-item
      v-for="(item, i) in imagenes"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-parallax dark :src="item.src" height="600">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="6" xl="8">
                <h1 class="display-2 font-weight-bold mb-4">TuDado</h1>
                <h1 class="font-weight-light">
                  {{item.p}}
                </h1>
              </v-col>
              <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="svg-border-waves text-white">
          <v-img src="@/assets/borderWaves.svg" />
        </div>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      imagenes: [
        {
          src: require("@/assets/banner1.jpg"),
          p: "como?",
        },
        {
          src:
            require("@/assets/banner2.jpg"),
          p: "",
        },
        {
          src:
            require("@/assets/banner3.jpg"),
          p: "Desarrolla tus habilidades blandas",
        },
      ],
    };
  },
};
</script>


<style >
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>