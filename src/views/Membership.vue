<template>
  <v-app>
    <!-- <Header /> -->
    <DaftarMembership />
    <Footer />
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue'
import DaftarMembership from '@/components/membership/DaftarMembership.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Membership',
  components: {
    // Header,
    DaftarMembership,
    Footer
  }
}
</script>
