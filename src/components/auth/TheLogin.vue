<template>
<v-layout>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          login
        </v-card-title>
        <v-card-text>
            <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="login.email"
      :counter="30"
      label="Correo electronico"
      required
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      label="Contraseña"
      type="password"
      required
    ></v-text-field>


    <v-btn
      :disabled="!(this.login.password && this.login.email)"
      color="success"
      class="mr-4"
      block
      @click="loginUser"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    
  </v-form>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-layout>

</template>

<script>
import swal from 'sweetalert';

export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post('/api/user/login', this.login);
        console.log(response);
        let token = response.data.tokenReturn;
        let user = response.data.user;

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (token) {
          swal("Buen Trabajo!", "Ingresando...", "success");
          this.$router.push("/home");
        }
      } catch {
        swal("Error! :(", "Algo salio mal...", "error");
        //console.log(error.response);
      }
    },
  },
};
</script>

<style scoped>
</style>
