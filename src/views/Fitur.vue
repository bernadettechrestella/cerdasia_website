<template>
  <v-app>
    <!-- <Header /> -->
    <FiturCerdasia />
    <Footer />
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue'
import FiturCerdasia from '@/components/fitur/FiturCerdasia.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Fitur',
  components: {
    // Header,
    FiturCerdasia,
    Footer
  }
}
</script>