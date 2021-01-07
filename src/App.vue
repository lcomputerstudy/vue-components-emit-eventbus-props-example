<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <Layout/>
    </v-app-bar>

    <v-main >
      <v-layout align-center fill-height fluid>
        <v-row>
          <router-view/>
        </v-row>
          
      </v-layout>
    
    </v-main>
  </v-app>
</template>

<script>
//import Layout from './components/layout'; 파일마다 컴포넌트가 다를때 따로 선언


export default {
 
};
</script>
