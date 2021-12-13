<template>
  <v-app>
    <Header />
    <DaftarMembership />
    <PaketPremium />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import DaftarMembership from '@/components/membership/DaftarMembership.vue'
import PaketPremium from '@/components/membership/PaketPremium.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Membership',
  components: {
    Header,
    DaftarMembership,
    PaketPremium,
    Footer
  }
}
</script>
