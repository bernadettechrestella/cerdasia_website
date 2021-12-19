<template>
    <div>
        <v-card flat tile v-if="$vuetify.breakpoint.mdAndUp">
    <v-footer padless>
        <v-card flat tile width="100%">
            <v-img
                class="white--text"
                height="260"
                src="../assets/footer.svg"
                >
            <v-row class="pa-5">
                <v-col cols="6">
                    <v-card-text>
                        <p text class="text-h5">Cerdasia</p>
                        <!-- <p text class="text-h7">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem</p>
                        <p text class="text-h7">cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua</p> -->
                        
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text>
                        <p text class="text-h6">Bantuan & Panduan</p>
                        <a text class="text-h7 white--text" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</a>
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text class="pt-8">
                        <!-- <p text class="text-h7">//alamat</p> -->
                        <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-email
                                </v-icon>
                            &emsp;
                            <a class="text-h7 white--text" href="mailto:%20cerdasiateam@gmail.com">cerdasiateam@gmail.com</a>
                        </v-row>
                        <v-row align="center" class="pt-5">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-phone
                                </v-icon>
                            &emsp;
                            <a text class="text-h7 white--text" href="https://wa.me/08998067422">+62 8998067422</a>
                        </v-row>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                            <p text class="text-h7 pt-4">Connect with us</p>
                            &emsp;
                            <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-facebook
                                </v-icon>
                            &emsp;
                            <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-linkedin
                                </v-icon>
                            &emsp;
                            <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-instagram
                                </v-icon>
                        </v-row>
            <!-- <v-divider /> -->
            <v-card-text flat tile width="100%" class="white--text text-center">
                <strong>Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</strong>
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
                    <v-row class="mt-2">
                        <v-col sm="6">
                            <v-card-text>
                                <p text class="text-h5">Cerdasia</p>
                            </v-card-text>
                        </v-col>
                        <v-col>
                            <v-card-text>
                                <p text class="text-h6">Bantuan & Panduan</p>
                                <p text class="text-h7" @click="redirectKebijakanPrivasi()">Kebijakan Privasi</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row class="pl-7">
                        <v-icon 
                            dark
                            fab
                            small
                            color="white">
                            mdi-email
                        </v-icon>
                        &emsp;
                        <a text class="text-h7 white--text" href="mailto:cerdasiateam@gmail.com">cerdasiateam@gmail.com</a>
                    </v-row>
                    <v-row class="pl-7 pt-3">
                        <v-icon 
                            dark
                            fab
                            small
                            color="white">
                            mdi-phone
                        </v-icon>
                        &emsp;
                        <a text class="text-h7 white--text" href="https://wa.me/08998067422">+62 8998067422</a>
                    </v-row>
                    <v-row align="center" justify="center" class="pt-3">
                        <p text class="text-h7 pt-4">Connect with us</p>
                        &emsp;
                        <v-icon 
                            dark
                            fab
                            small
                            color="white">
                            mdi-facebook
                        </v-icon>
                        &emsp;
                        <v-icon 
                            dark
                            fab
                            small
                            color="white">
                            mdi-linkedin
                        </v-icon>
                        &emsp;
                        <v-icon 
                            dark
                            fab
                            small
                            color="white">
                            mdi-instagram
                        </v-icon>
                    </v-row>
            <!-- <v-divider /> -->
            <v-card-text flat tile width="100%" class="white--text text-right">
                <strong>Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</strong>
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
  }
}
</script>