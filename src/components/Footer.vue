<template>
    <div>
        <v-card flat tile v-if="$vuetify.breakpoint.mdAndUp">
    <v-footer padless>
        <v-card flat tile width="100%">
            <v-img
                class="white--text"
                height="320"
                src="../assets/footer.svg"
                >
            <v-row class="pa-5">
                <v-col cols="4">
                    <v-card-text>
                        <v-img
                            height="50%"
                            width="50%"
                            src="../assets/logoFooter.svg"></v-img>
                    </v-card-text>
                    <p class="font-weight-light pt-10 pl-2">Unduh Aplikasi di Google Play</p>
                        <v-img
                            height="20%"
                            width="30%"
                            src="../assets/playstore.svg"></v-img>
                </v-col>
                <v-col cols="4" class="pt-8">
                    <!-- <v-card-text> -->
                        <v-row class="pt-2 pb-2">
                        <a text class="text-h7 white--text font-weight-light" @click="redirectHome()">Beranda</a>
                        </v-row>
                        <v-row class="pb-2">
                        <a text class="text-h7 white--text font-weight-light" @click="redirectAboutUs()">Tentang Kami</a>
                        </v-row>
                        <!-- <a text class="text-h7 white--text" @click="redirectKebijakanPrivasi()">Blog</a> -->
                        <v-row class="pb-2">
                        <a text class="text-h7 white--text font-weight-light" @click="redirectContactUs()">Partnership</a>
                        </v-row>
                    <!-- </v-card-text> -->
                </v-col>
                <v-col cols="4" class="pt-8">
                    <a text class="text-h7 white--text font-weight-light" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</a>
                    
                    <p text class="text-h7 pt-8 font-weight-light">Terhubung dengan Kami</p>
                    
                        <v-row class="pl-3 pt-2">
                            <v-icon 
                                dark
                                fab
                                color="white">
                                    mdi-facebook
                                </v-icon>
                            &emsp;
                            <v-icon 
                                dark
                                fab
                                color="white">
                                    mdi-linkedin
                                </v-icon>
                            &emsp;
                            <v-icon 
                                dark
                                fab
                                color="white">
                                    mdi-instagram
                            </v-icon>
                        </v-row>
                    <!-- </v-row> -->
                </v-col>
            </v-row>
            
            <!-- <v-divider /> -->
            <v-card-text flat tile width="100%" class="white--text text-right">
                <p class="font-weight-light">Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</p>
            </v-card-text>
            </v-img>
        </v-card>
    </v-footer>
        </v-card>


        <v-card flat tile color="#FDD835" width="100%" v-else>
            <v-footer padless>
                <v-card flat tile>
                    <v-img
                        class="white--text align-end"
                        height="auto"
                        src="../assets/footer.svg"
                        >
                            <v-row justify="center" class="pl-12 pr-12 ml-12 mr-12">
                                <v-img
                                    height="130"
                                    width="70"
                                    contain
                                    src="../assets/logoFooter.svg"></v-img>
                            </v-row>
                    <v-row class="pl-10 pr-10">
                        <v-col cols="6">
                            <v-row class="pt-3 pb-2">
                                <a text class="text-h7 white--text font-weight-light" @click="redirectHome()">Beranda</a>
                            </v-row>
                            <v-row class="pb-2">
                                <a text class="text-h7 white--text font-weight-light" @click="redirectAboutUs()">Tentang Kami</a>
                            </v-row>
                                <!-- <a text class="text-h7 white--text" @click="redirectKebijakanPrivasi()">Blog</a> -->
                            <v-row class="pb-2">
                                <a text class="text-h7 white--text font-weight-light" @click="redirectContactUs()">Partnership</a>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <p text class="text-h7 font-weight-light" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</p>
                            <p text class="text-h7 font-weight-light">Terhubung Dengan Kami</p>
                            <v-row class="pt-3 pl-2">
                                <v-icon 
                                    dark
                                    fab
                                    color="white">
                                    mdi-facebook
                                </v-icon>
                                &emsp;
                                <v-icon 
                                    dark
                                    fab
                                    color="white">
                                    mdi-linkedin
                                </v-icon>
                                &emsp;
                                <v-icon 
                                    dark
                                    fab
                                    color="white">
                                    mdi-instagram
                                </v-icon>
                            </v-row>
                        </v-col>
                    </v-row>
                    <p class="font-weight-light pt-10 pl-2 text-center">Unduh Aplikasi di Google Play</p>
                    <v-row justify="center" align="center" class="pb-5">    
                        <v-img
                            height="50px"
                            width="20px"
                            contain
                            src="../assets/playstore.svg"></v-img>
                    </v-row>
                    
            <v-card-text flat tile width="100%" class="white--text text-center">
                <p class="font-weight-light">Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</p>
            </v-card-text>
            </v-img>
                </v-card>
        </v-footer>
        </v-card>
            </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    redirectKebijakanPrivasi(){
      this.$router.push('/kebijakanPrivasi')
      window.scrollTo(0,0)
    },
    redirectHome(){
      this.$router.push('/')
      window.scrollTo(0,0)
    },
    redirectAboutUs(){
      this.$router.push('/aboutUs')
      window.scrollTo(0,0)
    },
    redirectContactUs(){
      this.$router.push('/partnership')
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