<template>
  <v-app>
    <v-app-bar app color="orange" dense dark>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="50"
        max-width="50"
        src="@/assets/TuDado.png"
      ></v-img>
      <v-toolbar-title class="font-weight-black"
        ><span class="#051C9E--text">TuDado</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                color="indigo darken-4"
                dark
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"
              >
                <v-icon> mdi-microsoft-xbox-controller-menu </v-icon>
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
              elevation="4"
              @click="inicio()"
            >
              Inicio
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              depressed
              color="indigo darken-4"
              class="ml-2 text-white"
              elevation="4"
              @click="servicio()"
            >
              Servicios
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              depressed
              color="indigo darken-4"
              class="ml-2 text-white"
              elevation="4"
              @click="blog()"
            >
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
            <v-btn
              v-else
              depressed
              color="amber darken-1"
              class="ml-2"
              elevation="4"
              @click="salir()"
              >Salir</v-btn
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <main app>
 <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg5 x14>
        <v-card>
        <div class="mt-13">
          <div class="d-flex justify-content-center align-items-center">
          <img src="@/assets/TuDado.png" width="150" height="150" alt="" />
          <h1 class="font-weight-black text-danger" >TuDado</h1>
          
        </div>
        <h1 class="alert alert-secundary mt-5 ml-15">¡Unete a TuDado!</h1>
        
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="20"
              label="Nombre"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
              class="ml-6 mr-6"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              class="ml-6 mr-6"
            ></v-text-field>
            <v-text-field
              v-model="contraseña"
              :error-messages="contraseñaErrors"
              type="password"
              label="Contraseña"
              required
              @input="$v.contraseña.$touch()"
              @blur="$v.contraseña.$touch()"
              class="ml-6 mr-6"
            ></v-text-field>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="¿Estas de acuerdo?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
              class="ml-6"
            ></v-checkbox>
            <v-row class="mr-1 mb-2" justify="center">
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on" small>
                    Terminos y condiciones
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">
                    Use Google's location service?
                  </v-card-title>
                  <v-card-text
                    >Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Desacuerdo
                    </v-btn>
                    <v-btn color="green darken-1" text @click="dialog = false">
                      Acuerdo
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-row justify="center" class="mt-3 mb-6">
            <v-btn class="mr-4 mb-4" @click="registrar" color="orange">
              Enviar
            </v-btn>
            <v-btn class="mr-4 mb-4" @click="clear" color="error"> Limpiar </v-btn>
            </v-row>
          </form>
        </div>
        </v-card>
      </v-flex>
    </v-layout>
    </main>
<v-footer dark padless class="d-flex justify-center mt-10">
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
          <div class="container p-4">
            <!--Grid row-->
            <div class="row">
              <!--Grid column-->
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="50"
                  max-width="50"
                  src="@/assets/TuDado.png"
                ></v-img>
                <h5 class="text-uppercase">TuDado</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>
              <!--Grid column-->

              <!--Grid column-->
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="50"
                  max-width="50"
                  src="@/assets/TuDado.png"
                ></v-img>
                <h5 class="text-uppercase">Contacto</h5>

                <p>Nmeros lugares correos</p>
              </div>
              <!--Grid column-->
            </div>
            <!--Grid row-->
          </div>
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
import sawl from "sweetalert";
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    contraseña: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    contraseña: "",
    checkbox: false,
    dialog: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Acepta los terminos y condiciones!");
      return errors;
    },
    contraseñaErrors() {
      const errors = [];
      if (!this.$v.contraseña.$dirty) return errors;
      !this.$v.contraseña.required && errors.push("Contraseña requerida");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("El nombre no puede contener mas de 20 letras");
      !this.$v.name.required && errors.push("Nombre es requerido");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Email no valido!");
      !this.$v.email.required && errors.push("E-mail es requerido");
      return errors;
    },
  },

  methods: {
    registrar() {
      if (this.checkbox) {
        axios
          .post(
            "http://localhost:3000/api/usuario/add",
            {
              nombre: this.name,
              email: this.email,
              password: this.contraseña,
            },
            {
              headers: {
                token: this.$store.state.token,
              },
            }
          )
          .then((response) => {
            swal("Buen Trabajo!", "Usuario Creado", "success");
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            return error;
          });
      } else {
        swal("Error!", "Terminos no aceptados", "error");
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.contraseña = "";
      this.checkbox = false;
    },
    inicio() {
      this.$router.push({ name: "Home" });
    },
    entrar() {
      this.$router.push({ name: "Login" });
    },
    servicio() {
      this.$router.push({ name: "Servicio" });
    },
    blog() {
      this.$router.push({ name: "Blog" });
    },
    salir() {
      this.$store.dispatch("salir");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>