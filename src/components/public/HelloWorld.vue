<template>
  <!-- App.vue -->
  <v-app>
    <v-main>
      <v-container class="d-flex justify-center">
        <v-col cols="8">
          <h1 class="text-center">Hola</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quaerat tempore quod reprehenderit natus officiis inventore aliquam praesentium veniam harum?</p>
        </v-col>
      </v-container>
      <!-- Juegos o Actividades -->
      <v-sheet class="mx-auto" max-width="1400">
        <v-switch
          v-model="switch1"
          class="container"
          label="Mostrar juegos"
        ></v-switch>
        <v-slide-group
          v-model="model"
          class="pa-8"
          show-arrows
          v-if="switch1 == true"
        >
          <v-slide-item v-for="juego in filtrarJuegos" :key="juego.nombre">
            <v-card
              color="secondary"
              class="ma-4 ml-10 mr-10"
              height="300"
              width="230"
            >
              <v-img :src="juego.imagen" height="200px"></v-img>
              <v-card-text class="text-center">
                {{ juego.nombre }}
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text> Ir </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
        <v-slide-group v-model="model" class="pa-8" show-arrows v-else>
          <v-slide-item v-for="(juego, i) in juegos" :key="i">
            <v-card
              color="primary"
              class="ma-4 ml-10 mr-10"
              height="300"
              width="230"
            >
              <v-img :src="juego.imagen" height="200px"></v-img>
              <v-card-text class="text-center">
                {{ juego.nombre }}
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text> Ir </v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import ApiArticulo from "../../logic/APIarticulo";

export default {
  data: () => ({
    model: null,
    switch1: false,
    drawer: true,
    length: 3,
    onboarding: 0,
    mini: true,
    juegos: [],
    informaciones: [
      {
        imagen: require("@/assets/servicio1.png"),
        resumen:
          "Las habilidades blandas son aquellas que impulsan la inteligencia emocional. También llamadas soft skills, habilidades transversales o socioemocionales, enfocadas en desarrollar ciertos valores y rasgos que fomentan la comunicación y la relación efectiva de una persona con aquellas que le rodean.",
        bandera: true,
        texto: false,
      },
      {
        imagen: require("@/assets/servicio1.png"),
        resumen:
          "Las actividades productivas han experimentado una transformación radical durante el último siglo: desde la incorporación de tecnologías de la información, hasta nuevas formas, ambientes y modalidades de trabajo. Las nuevas generaciones requieren desarrollar habilidades blandas a temprana edad para satisfacer esas demandas, algo que difícilmente se ha contemplado dentro de la enseñanza tradicional en las escuelas. La tendencia en el mundo laboral es encontrar personal especializado, particularmente en el sector tecnológico; aunque todas las industrias requieren de talento adecuado dotado con habilidades socioemocionales, tales como: ",
        bandera: false,
        texto: true,
      },
    ],
  }),
  created() {
    this.juegosMostrar();
  },
  computed: {
    filtrarJuegos() {
      return this.juegos.filter((item) => item.categoriaId == 2);
    },
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    async juegosMostrar() {
      let response = await ApiArticulo.get();
      this.juegos = response.data;
    },
  },
};
</script>