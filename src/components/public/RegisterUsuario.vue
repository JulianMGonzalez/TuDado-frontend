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

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 lg5 x14>
        <div>
          <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="20"
              label="Nombre"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="contraseña"
              :error-messages="contraseñaErrors"
              type="password"
              label="Contraseña"
              required
              @input="$v.contraseña.$touch()"
              @blur="$v.contraseña.$touch()"
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="¿Estas de acuerdo?"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>

            <v-btn class="mr-4" @click="registrar" color="orange">
              Enviar
            </v-btn>
            <v-btn @click="clear" color="error"> Limpiar </v-btn>
          </form>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import sawl from 'sweetalert';
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
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
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
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    registrar() {
      if(this.checkbox){
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
      }else{
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