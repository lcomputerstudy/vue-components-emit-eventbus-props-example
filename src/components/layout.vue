<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
    <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
    ></v-avatar>
     <v-btn text router :to="{name:'Home'}">
          HOME
      </v-btn>
    <v-btn text router :to="{name:'Props'}">
        Props
    </v-btn>
    <v-btn text router :to="{name:'Emit'}">
        $emit
    </v-btn>
     <v-btn text router :to="{name:'EventBus'}">
        EventBus
    </v-btn>
    </v-app-bar>

  
  </v-app>
</template>

<script>
  export default {
   
  }
</script>