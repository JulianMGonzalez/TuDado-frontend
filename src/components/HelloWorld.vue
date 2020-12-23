<template>
<!-- App.vue -->
<v-app>
  
  <v-banner elevation="7" class="mt-12">
      <v-card
    dark
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
      >
      
        <v-card
          height="300"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="1200"
          src="@/assets/oficina.jpg"
      ></v-img>
     
            <v-card-text >
              <h4
              style="font-size: 2rem;"
              class="white--text"
            >
              ⠀⠀⠀⠀⠀⠀TuDado
            </h4>
            </v-card-text>
            
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        text
        @click="next"
      >
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
      class="mr-5"
    >
      <span ></span>  Inicio
     
    </v-btn>
      <v-btn
      depressed
      color="indigo darken-4"
      class="mr-5"
    >
      Servicios
    </v-btn>

      <v-btn
      depressed
      color="amber darken-1"
      @click="entrar()"
    >
        Iniciar sesion
    </v-btn>
    </v-app-bar>
  

  <!-- Sizes your content based upon application components -->
  <v-main >
    <v-card
    
    max-width="900"
    max-height="400"
    tile
  >
    <v-img
      height="400"
      width="900"
      src="@/assets/ajedrez.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="250"
            tile
          >
          
          
            <v-img src="@/assets/sonriendo.jpg" width="250" height="250"></v-img>
            <v-list-item-title class="title">
                Juan Carlos Garcia
              </v-list-item-title>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Juan Carlos Garcia
              </v-list-item-title>
              <v-list-item-subtitle>Neiva, Huila</v-list-item-subtitle>
              <v-list-item-subtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum magnam neque beatae. Recusandae necessitatibus ab tenetur ducimus dolor officia mollitia fugiat magni minus aliquam nobis natus quisquam, cupiditate quod dolore.</v-list-item-subtitle>
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
      /admin para poder entrar en zona administracion!
    </v-alert>
    <!-- Provides the application the proper gutter -->
    <v-container>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
  

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo darken-4 white--text text-center"
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
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong><br>
        <a href="https://github.com/JulianMGonzalez/semana-5-69" class="btn btn-success">GitHub</a>
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
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
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
      salir(){
        this.$store.dispatch('salir');
        this.$router.push({name: 'Login'})

      },
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
</script>
