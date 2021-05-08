<template>
  <div id="main">
    <banner-component></banner-component>
    <navigation-component></navigation-component>
    <v-main>
      <!-- Explicación -->
      <v-container>
        <section id="topic" class="py-16">
        <div
          class="text-center font-weight-black display-1 pb-4 text--secondary d-flex justify-center"
        >
          ¿QUÉ SON LAS HABILIDADES BLANDAS?
        </div>
        <v-divider class="primary my-4"></v-divider>
        <v-row
          v-for="(informacion, i) in informaciones"
          :key="i"
          align="center"
        >
          <v-col cols="12" lg="6" md="12">
            <v-alert
              icon="mdi-check-bold"
              v-if="!informacion.texto"
              rounded="xl"
              elevation="5"
            >
              {{ informacion.resumen }}
            </v-alert>
            <v-img
              :src="informacion.imagen"
              max-width="450"
              v-if="!informacion.bandera"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="6" md="12">
            <v-img
              class="d-flex justify-center align-center"
              :src="informacion.imagen"
              max-width="450"
              v-if="informacion.bandera"
            ></v-img>
            <v-alert
              icon="mdi-check-bold"
              v-if="informacion.texto"
              rounded="xl"
              elevation="5"
            >
              {{ informacion.resumen }}
            </v-alert>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        </section>
        <!-- Juegos o Actividades -->
        <section id="juegos" class="py-16">
        <v-switch
          v-model="switch1"
          class="container"
          label="Mostrar juegos"
        ></v-switch>
            <v-layout class="hidden-md-and-down">
              <v-flex
                :key="j"
                v-for="(lider, j) in juegos.slice(0, 4)"
                class="d-flex justify-center"
              >
                <v-card
                  class="mx-2"
                  max-width="230"
                  height="250"
                  color="white"
                >
                  <v-img :src="lider.imagen" height="170"></v-img>
                  <br />
                  <v-list-item-avatar
                    horizontal
                    size="55"
                    style="position: absolute; top: 140px; left: 80px"
                    
                  >
                    <v-img src="@/assets/TuDado.png"> </v-img>
                  </v-list-item-avatar>
                  <v-card-title
                    class="d-flex justify-center black--text overline"
                    >{{ lider.nombre }}</v-card-title
                  >
                </v-card>
              </v-flex>
            </v-layout>
        <v-carousel
          cycle
          :show-arrows="false"
          height="300"
          hide-delimiter-background
          class="hidden-lg-and-up"
        >
          <v-carousel-item :key="i" v-for="(lider, i) in juegos">
            <v-card class="mx-auto" max-width="230" height="250" color="white">
              <v-img :src="lider.imagen" height="170"></v-img>
              <br />
              <v-list-item-avatar
                horizontal
                size="55"
                style="position: absolute; top: 140px; left: 50px"
                class="ml-10"
              >
                <v-img src="@/assets/TuDado.png"> </v-img>
              </v-list-item-avatar>
              <v-card-title
                class="d-flex justify-center black--text overline"
                >{{ lider.nombre }}</v-card-title
              >
            </v-card>
          </v-carousel-item>
        </v-carousel>
        </section>
        <!-- Testimonios -->
        <section id="testimonios" class="py-16">
        <v-carousel hide-delimiters cycle height="330" :show-arrows="false">
          <v-carousel-item
            v-for="(testimonio, i) in testimonios"
            :key="i"
            reverse-transition="scale-transition"
            transition="scale-transition"
          >
            <v-row>
              <v-col cols="12" lg="6" md="12">
                <testimonio-component
                  :testimonios="testimonio"
                ></testimonio-component>
              </v-col>
              <v-col cols="12" lg="6" md="12">
                <v-alert
                  class="hidden-md-and-down"
                  rounded="xl"
                  icon="mdi-facebook"
                  color="primary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, ad!
                </v-alert>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
        </section>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiArticulo from "@/logic/APIarticulo.js";
import BannerComponent from "../components/shared/BannerComponent.vue";
import NavigationComponent from "../components/shared/NavigationComponent.vue";
import HerramientasComponent from "../components/shared/HerramientasComponent.vue";
import TestimonioComponent from "../components/shared/TestimonioComponent.vue";

export default {
  name: "Home",
  components: {
    BannerComponent,
    NavigationComponent,
    HerramientasComponent,
    TestimonioComponent,
  },
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
        imagen: require("@/assets/servicio3.png"),
        resumen:
          "Las habilidades blandas son aquellas que impulsan la inteligencia emocional. También llamadas soft skills, habilidades transversales o socioemocionales, enfocadas en desarrollar ciertos valores y rasgos que fomentan la comunicación y la relación efectiva de una persona con aquellas que le rodean.",
        bandera: true,
        texto: false,
      },
      {
        imagen: require("@/assets/servicio2.png"),
        resumen:
          "Las actividades productivas han experimentado una transformación radical durante el último siglo: desde la incorporación de tecnologías de la información, hasta nuevas formas, ambientes y modalidades de trabajo. Las nuevas generaciones requieren desarrollar habilidades blandas a temprana edad para satisfacer esas demandas, algo que difícilmente se ha contemplado dentro de la enseñanza tradicional en las escuelas. La tendencia en el mundo laboral es encontrar personal especializado, particularmente en el sector tecnológico",
        bandera: false,
        texto: true,
      },
    ],
    testimonios: [
      {
        avatar:
          "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im00NTkuODEyIDEzNC4zNDR2LTQuMjI4YzAtNzEuODYxLTU4LjI1NC0xMzAuMTE2LTEzMC4xMTUtMTMwLjExNmgtMTQ1LjE4MWMtNzIuNzggMC0xMzIuMzI4IDU5LjU0OC0xMzIuMzI4IDEzMi4zMjh2Mi4zNzFjMjA2LjQyOCAxNDAuODMyIDI2NS40NjkgMTIyLjE1OSA0MDcuNjI0LS4zNTV6IiBmaWxsPSIjM2FhYWZmIi8+PHBhdGggZD0ibTMyOS42OTcgMGgtNzMuNDU5djIzMi40NDZjNjkuMTM1IDcuNDA4IDEyMy4wMDctMjguNjY3IDIwMy41NzQtOTguMTAydi00LjIyOGMwLTcxLjg2MS01OC4yNTQtMTMwLjExNi0xMzAuMTE1LTEzMC4xMTZ6IiBmaWxsPSIjNGI1YmU0Ii8+PGc+PHBhdGggZD0ibTEzMC40IDQxOC44ODh2NzUuODA1YzAgOS41NTggNy43NDggMTcuMzA3IDE3LjMwNyAxNy4zMDdoMjE2LjU4N2M5LjU1OCAwIDE3LjMwNy03Ljc0OCAxNy4zMDctMTcuMzA3di0yNjIuMzJ6IiBmaWxsPSIjZmZiZmJjIi8+PHBhdGggZD0ibTI1Ni4xOTYgNTEyaDEwOC4wOThjOS41NTggMCAxNy4zMDYtNy43NDggMTcuMzA2LTE3LjMwN3YtMjYyLjMybC0xMjUuNDA0IDkzLjExMnoiIGZpbGw9IiNmZjlhYTciLz48L2c+PHBhdGggZD0ibTI1Ni4yMzggNDI2LjA3MWMxMy4yNjEgMCAzMS43MDYtMi45OTEgMzguNjczIDcuMTgybDE0Ni40OS0xMTMuMDc2YzEuNDc0LTguODU1IDIuMjUzLTE3Ljk0NCAyLjI1My0yNy4yMTd2LTMwLjU4aC0zNzUuMzE3djIzLjA2MWMwIDExLjUzNSAxLjE5MiAyMi45MTIgMy40NDkgMzMuOTg4bDE1Mi41NzkgMTE4LjY1NGM2Ljk3NC0xMC4xNDMgMTguNjQ1LTEyLjAxMiAzMS44NzMtMTIuMDEyeiIgZmlsbD0iI2ZmZTFkMCIvPjxwYXRoIGQ9Im0yNTYuMjM4IDQzMC45MDJjMTMuMjYxIDAgMzEuNzA2LTIuOTkxIDM4LjY3MyA3LjE4MmwxNDYuNDktMTEzLjA3NmMxLjQ3NC04Ljg1NCAyLjI1My0xNy45NDQgMi4yNTMtMjcuMjE3di0zMC41OGgtMTg3LjQxNnoiIGZpbGw9IiNmZmJmYmMiLz48cGF0aCBkPSJtMjI0LjM2NSA0MTEuNDYyLTE1Mi41NzktOTIuMDMyYzE0LjUyIDcxLjI0IDczLjM0NCAxMjkuOTY5IDE0NS43NzkgMTM3LjM0di0yMy41MTdjMC04LjAzOCAyLjUxNC0xNS41NTYgNi44LTIxLjc5MXoiIGZpbGw9IiNmZjYzN2IiLz48cGF0aCBkPSJtNDQxLjQwMiAzMjAuMTc3LTE1My4yMzggOTEuMjUzYzQuMjU0IDYuMjEyIDYuNzQ3IDEzLjcyNSA2Ljc0NyAyMS44MjN2MjMuNTQ1Yzc0LjQyLTcuMTE1IDEzNC4zNjgtNjMuNzc3IDE0Ni40OTEtMTM2LjYyMXoiIGZpbGw9IiNmZjBjN2MiLz48cGF0aCBkPSJtMjg4LjE2NCA0MTEuNDNjLTYuOTY3LTEwLjE3My0xOC42NjUtMTYuODUtMzEuOTI2LTE2Ljg1LTEzLjIyOCAwLTI0LjkgNi43MzktMzEuODczIDE2Ljg4Mi00LjI4NiA2LjIzNS02LjggMTMuNzUzLTYuOCAyMS43OTF2MjMuNTE3YzUuMDYzLjUxNSAxMC4xODguNzkyIDE1LjM3NC43OTJoNDYuMTE1YzUuMzUgMCAxMC42MzktLjI2NSAxNS44NTgtLjc2NHYtMjMuNTQ1YzAtOC4wOTgtMi40OTMtMTUuNjExLTYuNzQ4LTIxLjgyM3oiIGZpbGw9IiMwMDQ2NWYiLz48Zz48cGF0aCBkPSJtMjg1LjMxNSAzNjMuOTgyYy0uNTA5IDAtMS4wMjEtLjAyNC0xLjUzOC0uMDczLTE5LjUtMS44NjEtMzYuMTUtMS45MjEtNTUuNjcyLS4yMDYtOC44MDguNzcxLTE2LjU2My01LjczNC0xNy4zMzYtMTQuNTM1czUuNzM0LTE2LjU2MyAxNC41MzUtMTcuMzM2YzIxLjI4NC0xLjg3IDQwLjI1NC0xLjggNjEuNTEyLjIyOCA4Ljc5NS44MzkgMTUuMjQ0IDguNjQ5IDE0LjQwNSAxNy40NDMtLjc5IDguMjc4LTcuNzU3IDE0LjQ3OS0xNS45MDYgMTQuNDc5eiIgZmlsbD0iI2ZmYmZiYyIvPjwvZz48cGF0aCBkPSJtMjU2LjIzOCAzOTQuNTh2NjIuOTgyaDIyLjgxNWM1LjM1MSAwIDEwLjYzOS0uMjY1IDE1Ljg1OC0uNzY0di0yMy41NDVjMC04LjA5OC0yLjQ5My0xNS42MTEtNi43NDctMjEuODIzLTYuOTY3LTEwLjE3My0xOC42NjUtMTYuODUtMzEuOTI2LTE2Ljg1eiIgZmlsbD0iIzAwMWUyYSIvPjxwYXRoIGQ9Im0yODYuODE1IDMzMi4wNTVjLTEwLjU2OS0xLjAwOC0yMC41NzMtMS41My0zMC41NzctMS41NzN2MzEuOTgxYzguOTQ0LjA0MiAxNy44OTMuNTIxIDI3LjUzOSAxLjQ0MS41MTcuMDUgMS4wMjkuMDczIDEuNTM4LjA3MyA4LjE0OSAwIDE1LjExNi02LjIwMSAxNS45MDYtMTQuNDc5LjgzOC04Ljc5NC01LjYxMS0xNi42MDQtMTQuNDA2LTE3LjQ0M3oiIGZpbGw9IiNmZjlhYTciLz48cGF0aCBkPSJtNTIuMTg4IDEzNC42OTl2MTM1LjQ3Ny0xNy4xNTFjMjE2LjQwNCA2Ny4xNTIgMjczLjQ0OSAyNi40NTkgNDA3LjYyNS0uMzZ2LTExOC4zMjFjLTEzNC42MTkgMjYuMDUyLTI3Mi45NjYgMjYuMTcyLTQwNy42MjUuMzU1eiIgZmlsbD0iI2UzZmZmZCIvPjxnPjxwYXRoIGQ9Im00NTkuODEyIDE3OC4wODFjLTEzNS4yNDQgMjYuNTkxLTI3Mi4zNDQgMjYuNzEyLTQwNy42MjUuMzZ2MzIuNTc2YzY2Ljc3MiAxMi42MDIgMTM0Ljk3IDE4Ljk4NyAyMDIuODk2IDE4Ljk4N2guNTgxYzY4LjM1MS0uMDM3IDEzNi45NzktNi41MzkgMjA0LjE0OC0xOS4zMzZ6IiBmaWxsPSIjZmYwYzdjIi8+PC9nPjxwYXRoIGQ9Im0yNTYuMjM4IDI4OS42MzRjNzMuMDEzLS44MjggMTI1LjEwNC0yMS4yNTcgMjAzLjU3NC0zNi45NDF2LTExOC4zMjFjLTY3LjIzNiAxMy4wMTItMTM1LjQwMiAxOS41NTQtMjAzLjU3NCAxOS42Mjd6IiBmaWxsPSIjYWVmZmZmIi8+PHBhdGggZD0ibTI1Ni4yMzggMjMwYzY4LjE2MS0uMDczIDEzNi41OTMtNi41NzEgMjAzLjU3NC0xOS4zMzN2LTMyLjU4N2MtNjcuNTQ4IDEzLjI4MS0xMzUuNTU4IDE5Ljk1Ny0yMDMuNTc0IDIwLjAzMnoiIGZpbGw9IiNkYjA3NzEiLz48Zz48cGF0aCBkPSJtNDU5LjgxMiAyNTIuNjY1Yy0xMzUuMjQ0IDI2LjU5MS0yNzIuMzQ0IDI2LjcxMi00MDcuNjI1LjM2djE4LjI2N2MwIDguMzE1IDUuOTY1IDE1LjQ1MSAxNC4xNTYgMTYuODg1IDYyLjI0IDEwLjg5NyAxMjUuNjA3IDE2LjQxMiAxODguNzQgMTYuNDEyaC41ODFjNjMuNTY2LS4wMzQgMTI3LjM3MS01LjY2MSAxOTAuMDE5LTE2Ljc0MSA4LjE3OC0xLjQ0NiAxNC4xMjgtOC41NzUgMTQuMTI4LTE2Ljg4eiIgZmlsbD0iIzNhYWFmZiIvPjwvZz48cGF0aCBkPSJtMjU2LjIzOCAzMDQuNTg4YzYzLjM3Ni0uMDY4IDEyNi45ODYtNS42OSAxODkuNDQ2LTE2LjczOCA4LjE3OC0xLjQ0NyAxNC4xMjgtOC41NzUgMTQuMTI4LTE2Ljg4di0xOC4zMDJjLTY3LjU0OCAxMy4yODEtMTM1LjU1OCAxOS45NTgtMjAzLjU3NCAyMC4wMzJ6IiBmaWxsPSIjNGI1YmU0Ii8+PC9nPjwvc3ZnPg==",
        pais:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZDMCwxMTQuNjE2LDExNC42MTYsMCwyNTYsMHMyNTYsMTE0LjYxNiwyNTYsMjU2bC0yNTYsMjIuMjYxTDAsMjU2eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0zNC4yNTYsMzg0Qzc4LjUyMSw0NjAuNTE2LDE2MS4yNDUsNTEyLDI1Niw1MTJzMTc3LjQ3OS01MS40ODQsMjIxLjc0NC0xMjhMMjU2LDM2Ny4zMDRMMzQuMjU2LDM4NHoNCgkiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNNDc3Ljc0NCwzODRDNDk5LjUyNiwzNDYuMzQ2LDUxMiwzMDIuNjMxLDUxMiwyNTZIMGMwLDQ2LjYzMSwxMi40NzQsOTAuMzQ2LDM0LjI1NiwxMjhINDc3Ljc0NHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K",
        nombre: "Julian Montero",
        texto:
          '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
      },
      {
        avatar:
          "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xMzYuMDI0IDQwNi4zMTN2ODUuMDczYzAgMTEuMzg1IDkuMjI5IDIwLjYxNCAyMC42MTQgMjAuNjE0aDE5OC43MjNjMTEuMzg1IDAgMjAuNjE0LTkuMjI5IDIwLjYxNC0yMC42MTR2LTg0Ljc3OHoiIGZpbGw9IiNmZmQ0ZmUiLz48cGF0aCBkPSJtMjU0LjI5NCA1MTJoMTAxLjA2N2MxMS4zODUgMCAyMC42MTQtOS4yMjkgMjAuNjE0LTIwLjYxNHYtODQuNzc4bC0xMjEuNjgyLS4xNXYxMDUuNTQyeiIgZmlsbD0iI2ZmOTdmOCIvPjxwYXRoIGQ9Im0zMjQuNjg2IDEzOC43NjEgNS40ODQgOC4wNTRjMjUuMDM5IDI1LjAzOSA1NC4wNDQgMCA4OS40NTQgMGwyMS4zNjMtMTYuNjY5di0yNi43NzdjLS4wMDEtNTcuMDg5LTQ2LjI4LTEwMy4zNjktMTAzLjM2OS0xMDMuMzY5aC0xNjEuMTVjLTU4LjAxNyAwLTEwNS40ODYgNDcuNDY5LTEwNS40ODYgMTA1LjQ4NnYyMS4wNThsMTU0LjE3OCA0MS4yNzFjMzcuMzI5IDAgNzMuMTMtMi42NTggOTkuNTI2LTI5LjA1NHoiIGZpbGw9IiM2ZTMwOTciLz48cGF0aCBkPSJtMzM3LjYxOCAwaC04My4zMjR2MTY2Ljg2M2MyNi40NjItMi4xMTcgNTAuOTczLTguNjgzIDcwLjM5MS0yOC4xMDJsNS40ODQgOC4wNTRjMjUuMDM5IDI1LjAzOSA1NC4wNDQgMCA4OS40NTQgMGwyMS4zNjMtMTYuNjY5di0yNi43NzdjMC01Ny4wODktNDYuMjc5LTEwMy4zNjktMTAzLjM2OC0xMDMuMzY5eiIgZmlsbD0iIzMwMDE1MyIvPjxwYXRoIGQ9Im0zOC41MTEgMjA0LjQ3NWMtMjEuMjY5IDAtMzguNTExIDE3LjI0Mi0zOC41MTEgMzguNTExIDAgMjEuMjY5IDE3LjI0MiAzOC41MTEgMzguNTExIDM4LjUxMWg0Ni4wNDZsNDQuMzE0LTc3LjAyMnoiIGZpbGw9IiNmZmQ0ZmUiLz48cGF0aCBkPSJtNDczLjQ4OSAyMDQuNDc1aC0xMTUuMTkzbDcwLjU5NyA3Ny4wMjJoNDQuNTk2YzIxLjI2OSAwIDM4LjUxMS0xNy4yNDIgMzguNTExLTM4LjUxMSAwLTIxLjI2OS0xNy4yNDItMzguNTExLTM4LjUxMS0zOC41MTF6IiBmaWxsPSIjZmY5N2Y4Ii8+PHBhdGggZD0ibTQyNC44MTYgMTMwLjE0NmMtMzUuNDExIDAtNjkuMzcxLTE0LjA2Ny05NC40MS0zOS4xMDYtMy4xMjgtMy4xMjgtOC4xNDctMy4yNTctMTEuNDQ1LS4zMDktMjUuNzMxIDIzLjAwMi01OS4xMDYgMzUuODEyLTkzLjgwMiAzNS44MTJoLTE1NC4xNzd2MTYzLjk4N2MwIDg5LjYyIDcyLjY1MSAxNjIuMjcxIDE2Mi4yNzEgMTYyLjI3MWg0NS40NjJjODkuNjIgMCAxNjIuMjcxLTcyLjY1MSAxNjIuMjcxLTE2Mi4yNzF2LTE2MC4zODR6IiBmaWxsPSIjZmZmM2ZmIi8+PHBhdGggZD0ibTMzMC40MDcgOTEuMDRjLTMuMTI4LTMuMTI4LTguMTQ3LTMuMjU3LTExLjQ0NS0uMzA4LTE4LjQxMyAxNi40Ni00MC43NDIgMjcuNjk5LTY0LjY2NyAzMi43NjF2MzI5LjMxaDI0LjQyMWM4OS42MiAwIDE2Mi4yNzEtNzIuNjUxIDE2Mi4yNzEtMTYyLjI3MXYtMTYwLjM4NmgtMTYuMTdjLTM1LjQxMSAwLTY5LjM3MS0xNC4wNjctOTQuNDEtMzkuMTA2eiIgZmlsbD0iI2ZmZDRmZSIvPjxnPjxwYXRoIGQ9Im0yNTMuNzU1IDM5Mi43MTljLTE4Ljc4NCAwLTMxLjkyLTUuMTgyLTM5LjYzMi05LjUyOC03LjY0Mi00LjMwOC0xMC4zNDUtMTMuOTk1LTYuMDM4LTIxLjYzN3MxMy45OTUtMTAuMzQ2IDIxLjYzNy02LjAzOGMzLjYwMSAyLjAzIDExLjUxMyA1LjQzNSAyNC4wMzQgNS40MzUgMTMuNjk0IDAgMjEuNTgzLTMuNzI4IDI0LjM0LTUuMzMgNy41ODMtNC40MSAxNy4zMDYtMS44MzYgMjEuNzE2IDUuNzQ5IDQuNDA5IDcuNTg0IDEuODM2IDE3LjMwNy01Ljc0OSAyMS43MTYtMTAuNjg3IDYuMjExLTI1LjAwMiA5LjYzMy00MC4zMDggOS42MzN6IiBmaWxsPSIjZmY5N2Y4Ii8+PC9nPjxwYXRoIGQ9Im03MC45ODIgMTgyLjg0NnYxMDcuNjg1YzAgMS4yMzMuMDE0IDIuNDY0LjA0MiAzLjY5LjIyNiA5Ljk3MiA4LjQ1NyAxNy45MDMgMTguNDMyIDE3LjkwM2gxMDQuMDg2YzEwLjc5MSAwIDIxLjM5MS0yLjY5MyAzMC43MjQtNy44MDVsLjc4MS0uNDI4YzE5LjEzNy0xMC40ODMgNDIuNzc5LTEwLjQwMSA2MS44MzUuMjE0IDkuNDI0IDUuMjUgMjAuMTY4IDguMDE5IDMxLjExMSA4LjAxOWgxMDQuNTIxYzkuOTc1IDAgMTguMjA2LTcuOTMxIDE4LjQzMi0xNy45MDMuMDI4LTEuMjI3LjA0Mi0yLjQ1Ny4wNDItMy42OXYtMTA3LjY4NXoiIGZpbGw9IiMwMDQ2NWYiLz48cGF0aCBkPSJtMjc4LjA5NSAzNTUuNjI4Yy0yLjcxOSAxLjU4MS0xMC40NDUgNS4yMjMtMjMuODAxIDUuMzIxdjMxLjc3YzE1LjEwMi0uMDggMjkuMjA3LTMuNDg3IDM5Ljc2OC05LjYyNiA3LjU4NC00LjQwOSAxMC4xNTgtMTQuMTMyIDUuNzQ5LTIxLjcxNi00LjQxLTcuNTg1LTE0LjEzMy0xMC4xNTgtMjEuNzE2LTUuNzQ5eiIgZmlsbD0iI2ZmNWFlYiIvPjxwYXRoIGQ9Im0yNTQuMjk0IDI5Ni4xMDhjMTEuMjQ5LS4yNTYgMjIuNTU0IDIuNDA5IDMyLjU4NyA3Ljk5OCA5LjQyNCA1LjI1IDIwLjE2OCA4LjAxOSAzMS4xMTEgOC4wMTloMTA1LjU3NWM5LjM4OCAwIDE3LjA3Ny03LjQ2NSAxNy4zNS0xNi44NDkuMDQ2LTEuNTc2LjA2OS0zLjE1OC4wNjktNC43NDV2LTEwNy42ODVoLTE4Ni42OTJ6IiBmaWxsPSIjMDAxZTJhIi8+PGc+PHBhdGggZD0ibTM4Ni4yMzkgMjU3LjQyaC0yNjMuODg5Yy04Ljc3MyAwLTE1Ljg4NC03LjExMi0xNS44ODQtMTUuODg0IDAtOC43NzMgNy4xMTItMTUuODg0IDE1Ljg4NC0xNS44ODRoMjYzLjg4OWM4Ljc3MyAwIDE1Ljg4NCA3LjExMiAxNS44ODQgMTUuODg0cy03LjExMiAxNS44ODQtMTUuODg0IDE1Ljg4NHoiIGZpbGw9IiM5ZWQwZmYiLz48L2c+PHBhdGggZD0ibTM4Ni4yMzkgMjI1LjY1MWgtMTMxLjk0NXYzMS43NjhoMTMxLjk0NWM4Ljc3MyAwIDE1Ljg4NC03LjExMiAxNS44ODQtMTUuODg0cy03LjExMi0xNS44ODQtMTUuODg0LTE1Ljg4NHoiIGZpbGw9IiMzYWFhZmYiLz48L2c+PC9zdmc+",
        pais:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkRBNDQ7IiBkPSJNMCwyNTZjMCwzMS4zMTQsNS42MzMsNjEuMzEsMTUuOTIzLDg5LjA0M0wyNTYsMzY3LjMwNGwyNDAuMDc3LTIyLjI2MQ0KCUM1MDYuMzY3LDMxNy4zMSw1MTIsMjg3LjMxNCw1MTIsMjU2cy01LjYzMy02MS4zMS0xNS45MjMtODkuMDQzTDI1NiwxNDQuNjk2TDE1LjkyMywxNjYuOTU3QzUuNjMzLDE5NC42OSwwLDIyNC42ODYsMCwyNTZ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRDgwMDI3OyIgZD0iTTQ5Ni4wNzcsMTY2Ljk1N0M0NTkuOTA2LDY5LjQ3MywzNjYuMDcxLDAsMjU2LDBTNTIuMDk0LDY5LjQ3MywxNS45MjMsMTY2Ljk1N0g0OTYuMDc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTUuOTIzLDM0NS4wNDNDNTIuMDk0LDQ0Mi41MjcsMTQ1LjkyOSw1MTIsMjU2LDUxMnMyMDMuOTA2LTY5LjQ3MywyNDAuMDc3LTE2Ni45NTdIMTUuOTIzeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=",
        nombre: "Carlos Pinzon",
        texto:
          '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
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
