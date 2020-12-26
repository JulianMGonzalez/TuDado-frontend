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
        <v-list-item-title class="white--text">
          <br>
          Hola, {{ user.nombre }}!<br>
           <p>{{ user.rol }}</p>
        </v-list-item-title>
        

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

      <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              color="orange"
              dark
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              <v-icon>
                mdi-microsoft-xbox-controller-menu
              </v-icon>
            </v-btn>
          </template>
          <span>Menu</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item>
          
          <v-btn
      depressed
      color="indigo darken-4"
      class="ml-2 text-white"
      @click="inicio()"
    >
      Inicio
    </v-btn>
        </v-list-item>
        <v-list-item>
          
          <v-btn depressed color="indigo darken-4" class="ml-2 text-white" elevation="4" @click="blog()">
        Blog
      </v-btn>
        </v-list-item>
      <v-list-item>
      <v-btn
        v-if="!this.$store.state.usuario"
        depressed
        color="amber darken-1"
        class="ml-2"
        elevation="4"
        @click="entrar()"
        >Inicia Sesion</v-btn
      >
      <v-btn v-else depressed color="amber darken-1" class="ml-2" elevation="4" @click="salir()">Salir</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      
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
      getUserDetails() {
      let user = localStorage.getItem("user");
      if(user){
        this.user = JSON.parse(user);
      }
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
        entrar(){
            this.$router.push({name: 'Login'});

        },
        salir() {
            this.$store.dispatch("salir");
            this.$router.push({name: 'Login'});
        },
        inicio(){
            this.$router.push({name: 'Home'});

        },
        blog() {
            this.$router.push({ name: "Blog" });
    },

    },
    created() {
    this.getUserDetails();
  },
}
</script>