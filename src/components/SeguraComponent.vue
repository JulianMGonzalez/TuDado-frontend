<template>
<v-app id="inspire">
    <v-system-bar app color="orange">
      <v-spacer></v-spacer>
      <a class="nav-link navbar-dark" href="https://github.com/JulianMGonzalez/semana-5-69" target="_blank">GitHub</a>
      <v-spacer></v-spacer>

      <v-icon color="green">mdi-square</v-icon>

      <v-icon color="yellow">mdi-circle</v-icon>

      <v-icon color="red">mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app color="white" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="50"
          max-width="50"
          src="@/assets/TuDado.png"
      ></v-img>
      <v-toolbar-title>TuDado</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn 
      icon
      class="mr-5"
      @click="salir()">
          <v-icon> mdi-logout</v-icon>
          <span>Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary>
    
      <!--  -->
      <v-card
      class="mx-auto"
      width="300"
    >
      <v-list>
        <v-list-item
        :to="{name: 'Home'}">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
  
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in gestion"
              :key="i"
              :to= "{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon" color="red"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group                         
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Usuario</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in cruds"
              :key="i"
              :to= "{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon" color="red"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
      </v-list>
    </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-5">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'SeguraComponent',

  components: {
    
  },

  data: () => ({
    drawer: null,
    gestion: [
        ['Categoria', 'mdi-numeric-9-plus-box', 'Categoria'],
        ['Articulo', 'mdi-numeric-9-plus-box', 'Articulo'],
      ],
      cruds: [
        ['Usuario', 'mdi-plus-outline', 'Usuario']
        
      ],
  }),
  created(){
    this.$store.dispatch('autoLogin');
  },
  methods:{
    salir(){
    this.$store.dispatch('salir');

  }
  }
  
};
</script>
