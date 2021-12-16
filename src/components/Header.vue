<template>
    <v-app-bar app color="white" flat>
        <p text color="black" class="font-weight-bold text-h4 pt-3">Cerdasia</p>
        <v-spacer />

          <v-tabs
            v-model="tab"
            color="#FF5E3C"
            right
            class="hidden-xs-only"
          >
            <v-tabs-slider color="white"></v-tabs-slider>
              
              <v-tab link @click="redirectHome()">Home</v-tab>
              <v-tab link @click="redirectAboutUs()">About Us</v-tab>
              <v-tab link @click="redirectMembership()">Membership</v-tab>
              <v-tab link @click="redirectBlog()">Blog</v-tab>
              <v-tab link @click="redirectContactUs()">Contact Us</v-tab>
            
          </v-tabs>
            
            <v-btn
              color= #FF5E3C
              class="white--text hidden-xs-only"
              rounded
              >Get Started
            </v-btn>

        <div class="hidden-sm-and-up">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list class="responsiveMenu">
                    <v-list-item>
                        <v-list-item-title @click="redirectHome()">Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="redirectAboutUs()">About Us</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="redirectMembership()">Membership</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="redirectBlog()">Blog</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="redirectContactUs()">Contact Us</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-btn
                        color= #FF5E3C
                        class="white--text"
                        rounded
                        >Get Started
                      </v-btn>    
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
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
