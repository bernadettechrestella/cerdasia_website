<template>
  <v-app>
    <!-- <Header /> -->
    <VisiMisi />
    <Goals />
    <Footer />
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue'
import VisiMisi from '@/components/aboutUs/VisiMisi.vue'
import Goals from '@/components/aboutUs/Goals.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutUs',
  components: {
    VisiMisi,
    Goals,
    Footer
  }
}
</script>
