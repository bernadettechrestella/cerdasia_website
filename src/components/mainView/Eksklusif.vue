<template>
    <div>
        <v-card flat color="FF5E3C">
            <v-img
                height="700"
                src="~@/assets/gradasi.svg">
                <v-container>
                    <v-row class="pt-5 mt-5">
                        <v-col cols="6">
                            <p class="font-weight-bold text-h3 pb-5">Eksklusif di Cerdasia</p>
                            <v-row align="center">
                                <v-col cols="2">
                                    <v-avatar color="red">
                                        <span class="white--text text-h5">1</span>
                                    </v-avatar>
                                </v-col>
                                <v-col>
                                    <p class="text-h6 pt-4">100% di desain untuk anak-anak</p>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="2">
                                    <v-avatar color="red">
                                        <span class="white--text text-h5">2</span>
                                    </v-avatar>
                                </v-col>
                                <v-col>
                                    <p class="text-h6 pt-4">Memfasilitasi edukasi terjangkau dengan mutu terbaik</p>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="2">
                                    <v-avatar color="red">
                                        <span class="white--text text-h5">3</span>
                                    </v-avatar>
                                </v-col>
                                <v-col>
                                    <p class="text-h6 pt-4">Menanamkan nilai-nilai karakter yang diselaraskan melalui kearifan budaya</p>
                                </v-col>
                            </v-row>
                            <v-row align="center">
                                <v-col cols="2">
                                    <v-avatar color="red">
                                        <span class="white--text text-h5">4</span>
                                    </v-avatar>
                                </v-col>
                                <v-col>
                                    <p class="text-h6 pt-4">Seluruh teks literasi bebas dari bias ideologis dan hierarkis</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <v-img
                                src="~@/assets/phone.svg"
                                width="100%"
                                height="70%"
                                contain>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Eksklusif',
    data () {
        return {
            initHeight: (window.innerHeight)/10
        }
    }
}
</script>