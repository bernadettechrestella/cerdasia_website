<template>
    <div>
        <v-card flat tile v-if="$vuetify.breakpoint.mdAndUp">
    <v-footer padless>
        <v-card flat tile width="100%">
            <v-img
                class="white--text"
                height="250"
                src="../assets/footer.svg"
                >
            <v-row class="pt-5 pl-12 pr-12">
                <v-col cols="4">
                    <v-card-text>
                        <v-img
                            height="80%"
                            width="80%"
                            src="../assets/logoFooter.svg"></v-img>
                    </v-card-text>
                    <p class="font-weight-light text-h7 pl-4 pr-12 mr-12 text-center">Aplikasi Belajar Membaca yang Interaktif dan Menyenangkan</p>
                </v-col>
                <v-col cols="2" class="pt-8">
                    <!-- <v-card-text> -->
                        <v-row class="pt-3 pb-4">
                        <a text class="text-h7 white--text" @click="redirectHome()">Beranda</a>
                        </v-row>
                        <v-row class="pb-4">
                        <a text class="text-h7 white--text" @click="redirectFitur()">Fitur</a>
                        </v-row>
                        <v-row class="pb-4">
                        <a text class="text-h7 white--text" @click="redirectAboutUs()">Tentang Kami</a>
                        </v-row>
                        <!-- <a text class="text-h7 white--text" @click="redirectKebijakanPrivasi()">Blog</a> -->
                        <v-row class="pb-2">
                        <a text class="text-h7 white--text" @click="redirectContactUs()">Partnership</a>
                        </v-row>
                    <!-- </v-card-text> -->
                </v-col>
                <v-col cols="3">
                    <p class="pt-5 pl-2 text-h7">Unduh Aplikasi di Google Play</p>
                        <v-row class="pr-12 mr-12 pl-1">
                        <v-img
                            height="20%"
                            width="30%"
                            contain
                            src="../assets/playstore.svg"></v-img>
                        </v-row>
                </v-col>
                <v-col cols="3" class="pt-8">
                    <a text class="text-h7 white--text" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</a>
                    
                    <p text class="text-h7 pt-5">Terhubung dengan Kami</p>
                    
                        <v-row class="pl-3 pt-2">
                            <v-btn icon @click="redirectFB()">
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-facebook
                                    </v-icon>
                                </v-btn>
                            &emsp;
                            <v-btn icon @click="redirectIG()">
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-instagram
                                    </v-icon>
                                </v-btn>
                            &emsp;
                            <v-btn icon>
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-linkedin
                                    </v-icon>
                                </v-btn>
                            &emsp;
                            <!-- <v-btn icon @click="redirectFB()">
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-facebook
                                    </v-icon>
                                </v-btn> -->
                        </v-row>
                        <!-- <v-row class="pl-3">
                            <v-icon
                                color="white">
                                mdi-email
                            </v-icon>
                            &emsp;
                            <p class="pt-3 font-weight-light">cerdasiateam@gmail.com</p>
                        </v-row> -->
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
                            <v-row justify="center" class="pt-5 pl-10 pr-9">
                                <v-img
                                    height="80"
                                    width="20"
                                    src="../assets/logoFooter.svg"></v-img>
                            </v-row>
                            <p class="font-weight-light text-h7 pt-5 text-center">Aplikasi Belajar Membaca yang Interaktif dan Menyenangkan</p>

                    <v-row class="pl-10 pr-4">
                        <v-col cols="5">
                            <v-row class="pt-3 pb-4">
                                <a text class="text-h7 white--text" @click="redirectHome()">Beranda</a>
                            </v-row>
                            <v-row class="pb-4">
                                <a text class="text-h7 white--text" @click="redirectFitur()">Fitur</a>
                            </v-row>
                            <v-row class="pb-4">
                                <a text class="text-h7 white--text" @click="redirectAboutUs()">Tentang Kami</a>
                            </v-row>
                                <!-- <a text class="text-h7 white--text" @click="redirectBlog()">Blog</a> -->
                            <v-row class="pb-2">
                                <a text class="text-h7 white--text" @click="redirectContactUs()">Partnership</a>
                            </v-row>
                        </v-col>
                        <v-col cols="7">
                            <p text class="text-h7" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</p>
                            <p text class="text-h7">Terhubung Dengan Kami</p>
                            <v-row class="pt-3 pl-3">
                                <v-btn icon @click="redirectFB()">
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-facebook
                                    </v-icon>
                                </v-btn>
                                &emsp;
                                <v-btn icon @click="redirectIG()">
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-instagram
                                    </v-icon>
                                </v-btn>
                            &emsp;
                                <v-btn icon>
                                    <v-icon 
                                        dark
                                        fab
                                        color="white">
                                        mdi-linkedin
                                    </v-icon>
                                </v-btn>
                                &emsp;
                            </v-row>
                        </v-col>
                    </v-row>
                    <p class="font-weight-light pt-8 pl-2 text-center">Unduh Aplikasi di Google Play</p>
                    <v-row justify="center" align="center" class="pb-5">    
                        <v-img
                            height="70px"
                            width="40px"
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
    redirectFitur(){
      this.$router.push('/fitur')
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
    redirectFB(){
      window.open("https://www.facebook.com/profile.php?id=100076144962435")
      window.scrollTo(0,0)
    },
    redirectIG(){
      window.open("https://instagram.com/cerdaskan.bangsa")
      window.scrollTo(0,0)
    },
  }
}
</script>