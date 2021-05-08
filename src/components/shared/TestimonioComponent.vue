<template>
  <v-card
    elevation="5"
    class="mx-auto"
    color="secondary"
    dark
    max-width="500"
    rounded="xl"
  >
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="primary" size="90" horizontal>
          <v-img class="elevation-10" alt="" :src="testimonios.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-avatar
          horizontal
          left
          style="position: absolute; top: 60px; left: 20px"
          class="ml-10 mt-2"
        >
          <v-img :src="testimonios.pais"> </v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ testimonios.nombre }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1"> mdi-heart </v-icon> 
        </v-row>
      </v-list-item>
    </v-card-actions>

    <v-card-text class="headline font-weight-bold white--text">
      {{ testimonios.texto }}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    
  }),
  props:[ 'testimonios']
};
</script>

<style>
</style>