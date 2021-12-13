<template>
    <v-app-bar app color="white" flat>
        <p text color="black" class="font-weight-bold text-h4">Cerdasia</p>
        <v-spacer></v-spacer>
                <v-tabs
                    color="#FF5E3C"
                    right
                    >
                    <v-tab link to="LandingPage">Home</v-tab>
                    <v-tab link to="AboutUs">About Us</v-tab>
                    <v-tab link to="Membership">Membership</v-tab>
                    <v-tab link to="Blog">Blog</v-tab>
                    <v-tab link to="ContactUs">Contact Us</v-tab>
                    <!-- <v-tab @click="redirectHome()">Home</v-tab>
                    <v-tab @click="redirectAboutUs()">About Us</v-tab>
                    <v-tab @click="redirectMembership()">Membership</v-tab>
                    <v-tab @click="redirectBlog()">Blog</v-tab>
                    <v-tab @click="redirectContactUs()">Contact Us</v-tab> -->
                </v-tabs>

                <v-btn
                    color= #FF5E3C
                    class="white--text"
                    rounded
                    >Get Started
                </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    redirectHome(){
      this.$router.push('/')
      window.scrollTo(0,0)
    },
    redirectAboutUs(){
      this.$router.push('/aboutUs')
      window.scrollTo(0,0)
    },
    redirectContactUs(){
      this.$router.push('/contactUs')
      window.scrollTo(0,0)
    },
    redirectLandingPages(){
      this.$router.push('/landingPages')
      window.scrollTo(0,0)
    },
    redirectMembership(){
      this.$router.push('/membership')
      window.scrollTo(0,0)
    },
    redirectBlog(){
      this.$router.push('/blog')
      window.scrollTo(0,0)
    },
}
}
</script>
