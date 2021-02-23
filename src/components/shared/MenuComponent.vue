<template>
  <div>
    <v-app-bar app color="primary" height="65" >
      <v-container class="d-flex justify-start">
        <v-btn icon to="/">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="50"
            max-width="50"
            src="@/assets/TuDado.png"
          ></v-img>
        </v-btn>
        <v-btn text to="/">
          <h1 class="white--text font-weight-black display-1 mx-auto">
            TuDado
          </h1>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          :onclick="icon.onclick"
          target="_blank"
          class="mx-4 white--text hidden-sm-and-down"
          icon
          color="white"
        >
          <v-icon size="24px" color="white">
            {{ icon.p }}
          </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer temporary v-model="sideNav" app right>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          color="#1b5e20"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>

        <v-list-item
          to="/login"
          v-if="!this.$store.state.usuario"
          color="#1b5e20"
        >
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>Cuenta</v-list-item-content>
        </v-list-item>

        <v-list-item @click="salir()" v-else color="#1b5e20">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>Salir</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app color="white" dark hide-on-scroll class="mb-3">
      <v-container class="d-flex justify-center">
      <h1 class="overline black--text">Desarolla tus Habilidades</h1>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-lg-and-up"
        ><v-icon color="secondary" large
          >mdi-microsoft-xbox-controller-menu</v-icon
        ></v-app-bar-nav-icon
      >
      
      
        <v-btn
          small
          rounded
          color="secondary"
          text
          class="hidden-md-and-down"
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.link"
        >
          {{ item.title }}
        </v-btn>
        <v-btn
          v-if="!this.$store.state.usuario"
          depressed
          small
          rounded
          color="secondary"
          class="hidden-md-and-down"
          text
          to="/login"
          >Cuenta
        </v-btn>
        <v-btn
          v-else
          small
          rounded
          color="secondary"
          text
          class="hidden-md-and-down"
          @click="salir()"
        >
          Salir</v-btn
        >
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      {
        icon: "mdi-forum",
        title: "Blog",
        link: "/blog",
      },
      {
        icon: "mdi-clipboard-text-outline",
        title: "Servicios",
        link: "/servicio",
      },
      {
        icon: "mdi-forum",
        title: "Juegos",
        link: "/juegos",
      },
    ],
    icons: [
      {
        p: "mdi-facebook",
        onclick: "window.open('https://www.facebook.com/', '_blank')",
      },
      {
        p: "mdi-instagram",
        onclick: "window.open('https://www.instagram.com/', '_blank')",
      },
      {
        p: "mdi-twitter",
        onclick: "window.open('https://www.twitter.com/', '_blank')",
      },
      {
        p: "mdi-github",
        onclick:
          "window.open('https://github.com/julca02/backendagroayuda', '_blank')",
      },
    ],
  }),
  methods: {
    salir() {
      this.$store.dispatch("salir");
      this.$router.push({ name: "Login" });
    },
    inicio() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
<style scoped>
*{
  font-family: 'Open Sans', sans-serif;;
}
</style>
