<template>
<!-- App.vue -->
<v-app>
  <v-banner elevation="7">
    <h1 class="ml-15 mt-15">Hola</h1>
  <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="400"
          max-width="1000"
          src="@/assets/TuDado.png"
      ></v-img>
  </v-banner>

  <v-navigation-drawer class="mt-15"
      v-model="drawer"
      :mini-variant.sync="mini"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>Julian Gonzalez</v-list-item-title>
        
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
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-app-bar app
      color="blue"
      dense
      dark
    >
      <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="50"
          max-width="50"
          src="@/assets/TuDado.png"
      ></v-img>
      <v-toolbar-title>TuDado</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
      depressed
      color="primary"
      class="mr-5"
    >
      Inicio
    </v-btn>
      <v-btn
      depressed
      color="primary"
      class="mr-5"
    >
      Servicio
    </v-btn>

      <v-btn
      depressed
      color="primary"
      @click="entrar()"
    >
        Iniciar sesion
    </v-btn>
    </v-app-bar>
  

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
  

  <v-footer
  dark
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</v-app>
  
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [
          { title: 'Inicio', icon: 'mdi-home-city' },
        ],
      mini: true,
    }),
    methods:{
      entrar(){
        this.$router.push({name: 'Login'});

  }
    }
  }
</script>
