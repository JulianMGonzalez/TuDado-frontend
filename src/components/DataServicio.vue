<template>
    <!-- App.vue -->

<v-app>
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
        <v-list-item-title class="white--text">Julian Gonzalez</v-list-item-title>
        
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
      </v-list-item>
      

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
              v-for="([title, icon, ruta], i) in items"
              :key="i"
              :to= "{name: ruta}"
            >
            <v-list-item-icon>
                <v-icon v-text="icon" color="orange"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="title" class="white--text"></v-list-item-title>
  
              
            </v-list-item>
      </v-list>
      
    </v-navigation-drawer>

  <v-app-bar app
      color="white"
      dense
      dark
      
    >
      <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="50"
          max-width="50"
          src="@/assets/TuDado.png"
      ></v-img>
      <v-toolbar-title class="font-weight-black"><span class="black--text">TuDado</span></v-toolbar-title>

      <v-spacer></v-spacer>

      
      <v-btn
      depressed
      color="indigo darken-4"
      class="ml-2"
      @click="inicio()"
    >
      Inicio
    </v-btn>

      <v-btn
        v-if="!this.$store.state.usuario"
        depressed
        color="amber darken-1"
        class="ml-2"
        @click="entrar"
        >Inicia Sesion</v-btn
      >
      <v-btn v-else depressed color="amber darken-1" class="ml-2" @click="salir">Salir</v-btn>
    </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
        items: [
            [ 'Inicio', 'mdi-home-city', 'Home' ],
            [ 'Salir', 'mdi-logout','Login' ]
            ],
        mini: true,
    }),
    methods:{
        entrar(){
            this.$router.push({name: 'Login'});

        },
        salir() {
            this.$store.dispatch("salir");
        },
        inicio(){
            this.$router.push({name: 'Home'});

        },

    }
}
</script>