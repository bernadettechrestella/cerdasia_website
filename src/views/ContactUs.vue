<template>
  <v-app>
    <!-- <Header /> -->
    <FormPartnership />
    <Footer />
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue'
import FormPartnership from '@/components/contactUs/FormPartnership.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ContactUs',
  components: {
    // Header,
    FormPartnership,
    Footer
  }
}
</script>
