<template>
  <v-app>
    <Header />
      <Opening />
      <MengapaCerdasia />
      <FiturUnggulan />
      <Eksklusif />
      <Testimoni />
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Opening from '@/components/mainView/Opening.vue'
import MengapaCerdasia from '@/components/mainView/MengapaCerdasia.vue'
import FiturUnggulan from '@/components/mainView/FiturUnggulan.vue'
import Eksklusif from '@/components/mainView/Eksklusif.vue'
import Testimoni from '@/components/mainView/Testimoni.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LandingPages',
  components: {
    Header,
    Opening,
    MengapaCerdasia,
    FiturUnggulan,
    Eksklusif,
    Testimoni,
    Footer
  }
}
</script>
