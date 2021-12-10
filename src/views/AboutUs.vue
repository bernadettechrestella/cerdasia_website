<template>
  <v-app>
    <Header />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AboutUs',
  components: {
    Header,
    Footer
  }
}
</script>
