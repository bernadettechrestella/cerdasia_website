<template>
    <v-footer dark padless>
        <v-card flat tile color="#FDD835" width="100%" v-if="$vuetify.breakpoint.mdAndUp">
            <v-img
                class="white--text align-end"
                height="250px"
                src="../assets/footer.svg"
                >
            <v-row class="mt-2">
                <v-col cols="6">
                    <v-card-text>
                        <p text class="text-h5">Cerdasia</p>
                        <p text class="text-h7">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem</p>
                        <p text class="text-h7">cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua</p>
                        <v-row align="center pl-3">
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
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text>
                        <p text class="text-h6">Produk</p>
                        <p text class="text-h7">Produk#1</p>
                        <p text class="text-h7">Produk#2</p>
                        <p text class="text-h7">Produk#3</p>
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text>
                        <p text class="text-h7">//alamat</p>
                        <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-email
                                </v-icon>
                            &emsp;
                                <p text class="text-h7 pt-4">ingfo@blabla.com</p>
                        </v-row>
                        <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-phone
                                </v-icon>
                            &emsp;
                                <p text class="text-h7 pt-4">+62 xxx xxxx xxxx</p>
                        </v-row>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-divider />
            <v-card-text flat tile width="100%" class="white--text text-right">
                <strong>Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</strong>
            </v-card-text>
            </v-img>
        </v-card>
        <v-card flat tile color="#FDD835" width="100%" v-else>
            <v-img
                class="white--text align-end"
                height="600px"
                src="../assets/footer.svg"
                >
            <v-row class="mt-2">
                <v-col sm="6">
                    <v-card-text>
                        <p text class="text-h5">Cerdasia</p>
                        <p text class="text-h7">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem</p>
                        <p text class="text-h7">cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua</p>
                        <v-row align="center pl-3">
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
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text>
                        <p text class="text-h6">Produk</p>
                        <p text class="text-h7">Produk#1</p>
                        <p text class="text-h7">Produk#2</p>
                        <p text class="text-h7">Produk#3</p>
                    </v-card-text>
                </v-col>
                <v-col>
                    <v-card-text>
                        <p text class="text-h7">//alamat</p>
                        <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-email
                                </v-icon>
                            &emsp;
                                <p text class="text-h7 pt-4">ingfo@blabla.com</p>
                        </v-row>
                        <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                small
                                color="white">
                                    mdi-phone
                                </v-icon>
                            &emsp;
                                <p text class="text-h7 pt-4">+62 xxx xxxx xxxx</p>
                        </v-row>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-divider />
            <v-card-text flat tile width="100%" class="white--text text-right">
                <strong>Copyright © 2021 Cerdasia. All rights reserved. Powered by YLabs</strong>
            </v-card-text>
            </v-img>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
    
  }
}
</script>