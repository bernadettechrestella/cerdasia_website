<template>
  <v-app>
    <!-- <Header /> -->
    <BlogView />
    <Footer />
  </v-app>
</template>

<script>
// import Header from '@/components/Header.vue'
import BlogView from '@/components/blog/BlogView.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Blog',
  components: {
    // Header,
    BlogView,
    Footer
  }
}
</script>
