<template>
  <!-- App.vue -->
  <v-app>
    <v-banner elevation="7" class="mt-12">
      <v-card dark flat tile>
        <v-window v-model="onboarding">
          <v-window-item v-for="n in length" :key="`card-${n}`">
            <v-card height="300">
              <v-row class="fill-height" align="center" justify="center">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="300"
                  max-width="1200"
                  src="@/assets/oficina.jpg"
                ></v-img>

                <v-card-text>
                  <h4 style="font-size: 2rem" class="white--text">
                    ⠀⠀⠀⠀⠀⠀TuDado
                  </h4>
                </v-card-text>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item
              v-for="n in length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-banner>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      color="indigo darken-4"
      v-if="this.$store.state.usuario"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="white--text"
          >Julian Gonzalez</v-list-item-title
        >

        <v-btn icon @click.stop="mini = !mini" color="orange">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense >
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="orange">mdi-home-city</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="orange" @click="salir()">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text" @click="salir()"
            >Salir</v-list-item-title
          >
        </v-list-item>
        <v-list-item v-if="this.$store.state.usuario.rol ==='Administrador' || this.$store.state.usuario.rol ==='Vendedor'">
          <v-list-item-icon>
            <v-icon color="orange" @click="admin()">mdi-alert-minus</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text" @click="admin()"
            >Gestion</v-list-item-title
          >
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="white" dense dark>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="50"
        max-width="50"
        src="@/assets/TuDado.png"
      ></v-img>
      <v-toolbar-title class="font-weight-black"
        ><span class="black--text">TuDado</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      
      <v-btn depressed color="indigo darken-4" class="ml-2" @click="servicio()">
        Servicios
      </v-btn>

      <v-btn
        v-if="!this.$store.state.usuario"
        depressed
        color="amber darken-1"
        class="ml-2"
        @click="entrar()"
        >Inicia Sesion</v-btn
      >
      <v-btn v-else depressed color="amber darken-1" class="ml-2" @click="salir()">Salir</v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="bg-dark">
      <v-alert border="bottom" colored-border type="warning" elevation="2">
        Nos Centramos en el sector cultural. Si bien estas competencias son
        innatas, todos tenemos la capacidad de poder desarrollarlas. Por ello,
        estos cursos son muy solicitados, ya que los profesionales necesitan
        diferenciarse y destacarse dentro del competitivo mercado actual, tanto
        durante la búsqueda de una oportunidad laboral como en su permanencia y
        crecimiento dentro de una compañía
      </v-alert>
      <v-card max-width="900" max-height="400" tile>
        <v-img height="400" width="900" src="@/assets/ajedrez.jpg">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="250" tile>
                <v-img
                  src="@/assets/sonriendo.jpg"
                  width="250"
                  height="250"
                ></v-img>
                <v-list-item-title class="title">
                  Juan Carlos Garcia
                </v-list-item-title>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Juan Carlos Garcia
                  </v-list-item-title>
                  <v-list-item-subtitle>Neiva, Huila</v-list-item-subtitle>
                  <v-list-item-subtitle
                    >"El desarrollo de habilidades blandas como: trabajar en
                    equipo, poseer un buen nivel de comunicación, tener
                    adaptabilidad ante los distintos escenarios, una actitud
                    positiva en la oficina me han hecho un mejor trabajador,
                    recomiendo totalmente la pagina para desarrollar estas
                    increibles habilidades! "</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <v-alert
        v-model="alert"
        border="left"
        close-text="Close Alert"
        color="indigo darken-4"
        dark
        dismissible
      >
        Para entrar en zona de administracion dale en Geston!
      </v-alert>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="indigo darken-4 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            color="orange"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Las personas transcurren la gran parte del día en sus en sus trabajos,
          donde se enfrentan frecuentemente a diversos tipos de problemáticas,
          en este escenario los inconvenientes abundan. Por eso, las habilidades
          blandas han adquirido gran importancia y valor en el mundo de los
          negocios, ya que sirven para resolver inconvenientes y enfrentar de
          manera correcta la jornada laboral. Julian David Montero <br />
          Monterogjulian@gmail.com <br />
          Tel: 323 2477487 <br />
          _____________________ <br />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>TuDado</strong><br />
          <a
            href="https://github.com/JulianMGonzalez/semana-5-69"
            class="btn btn-success"
            >GitHub</a
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: true,
    length: 3,
    onboarding: 0,
    alert: true,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    mini: true,
  }),
  methods: {
    entrar() {
      this.$router.push({ name: "Login" });
    },
    admin() {
      try {
        if (this.$store.state.usuario.rol === 'Administrador' || this.$store.state.usuario.rol === 'Vendedor'){
            this.$router.push({ name: "Admin" });
        }
      
      else{
        swal("Error!", 'Error', "error");
        
      }
      } catch (error) {
          console.log(error)
      }
      
    },
    servicio() {
      this.$router.push({ name: "Servicio" });
    },
    salir() {
      this.$store.dispatch("salir");
      this.$router.push({ name: "Login" });
    },
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>
