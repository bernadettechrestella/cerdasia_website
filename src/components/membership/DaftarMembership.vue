<template>
    <v-container>
        <p class="font-weight-bold text-h3 text-center pt-5 pb-5">Membership</p>
        <v-row justify="center">
            <v-col class="pt-10 mt-10">
            <v-card class="pa-3" :elevation="hover ? 16:2" :class="{'on-hover': hover}">
                <p style="color:#FF5E3C">Free Member</p>
                <v-row class="pl-2">
                    <p class="text-h3">Free</p>
                    <caption class="pt-6">/SELAMANYA</caption>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses ke buku yang bertanda gratis</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Dua buku per hari untuk buku premium dengan fitur eksklusif (animasi audio, sensori interaktif)</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Maksimal dua kenaikan level tiap hari pada game</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses unlimited ke buku premium yang telah dibeli</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Laporan perkembangan anak tiap minggu</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon>
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses otomatis ke Cerdasia</p>
                    </v-col>
                </v-row>
                &emsp;
                <v-btn
                    outlined
                    block
                    rounded
                    color="#FF5E3C"
                    >
                    Coba Gratis
                </v-btn>
            </v-card>
            </v-col>

            <v-col>
            <v-card class="pa-3" elevation="12">
                <v-row class="pl-3 pt-3 pr-3">
                    <p style="color:#FF5E3C">Premium Member</p>
                    <v-spacer />
                    <p class="font-weight-bold">BEST!</p>
                </v-row>
                <v-row class="pl-2">
                    <p class="text-h3">Sesuai Durasi</p>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses ke buku yang bertanda gratis</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses unlimited ke buku premium dengan fitur eksklusif (animasi audio, sensori interaktif)</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Kenaikan level unlimited pada game</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses otomatis ke forum komunitas Cerdasia</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Laporan perkembangan anak tiap minggu dan rekomendasi</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FF5E3C">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses gratis ke premium member Cerdasia</p>
                    </v-col>
                </v-row>
                &emsp;
                <v-btn
                    outlined
                    block
                    rounded
                    color="#FF5E3C"
                    v-on:click="viewMore"
                    >
                    Pilih Paket Premium
                </v-btn>
            </v-card>
            </v-col>

            <v-col class="pt-10 mt-10">
            <v-card class="pa-3">
                <p style="color:#FF5E3C">Free Member + Pembelian Buku</p>
                <v-row class="pl-2">
                    <p class="text-h3">Rp30.000</p>
                    <caption class="pt-6">/BUKU</caption>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FFB08A">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses ke buku yang bertanda gratis</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FFB08A">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Dua buku per hari untuk buku premium dengan fitur eksklusif (animasi audio, sensori interaktif)</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FFB08A">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Maksimal dua kenaikan level tiap hari pada game</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="1">
                        <v-icon
                            color="#FFB08A">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Akses unlimited ke buku premium yang telah dibeli</p>
                    </v-col>
                </v-row>
                <v-row class="pb-12 mb-1">
                    <v-col cols="1">
                        <v-icon
                            color="#FFB08A">
                            mdi-check-circle
                        </v-icon>
                    </v-col>
                    <v-col>
                        <p>Laporan perkembangan anak tiap minggu</p>
                    </v-col>
                </v-row>
                &emsp;
                <v-btn
                    outlined
                    block
                    rounded
                    color="#FF5E3C"
                    >
                    Beli Sekarang
                </v-btn>
            </v-card>
            </v-col>
        </v-row>

        <div v-if="viewMoreActivated">
        <p class="font-weight-bold text-h3 text-center pt-10 pb-5">Paket Premium</p>
        <v-row>
            <v-col>
                <v-card class="pa-5">
                    <p style="color:#FF5E3C">Per 6 Bulan</p>
                    <v-row class="pl-2 pb-2">
                    <p class="text-h3">Rp20.000</p>
                    <caption class="pt-6">/BULAN</caption>
                    </v-row>
                    <p class="text-center">Dibayarkan per bulan sebesar Rp20.000</p>
                    <v-btn
                        color= #FF5E3C
                        class="white--text"
                        rounded
                        block
                        >
                        Berlangganan
                    </v-btn>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="pa-5">
                    <p style="color:#FF5E3C">Per 6 Bulan</p>
                    <v-row class="pl-2 pb-2">
                    <p class="text-h3">Rp25.000</p>
                    <caption class="pt-6">/BULAN</caption>
                    </v-row>
                    <p class="text-center">Dibayarkan di awal sebesar Rp150.000 untuk 6 bulan</p>
                    <v-btn
                        color= #FF5E3C
                        class="white--text"
                        rounded
                        block
                        >
                        Berlangganan
                    </v-btn>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="pa-5">
                    <v-row class="pt-3 pl-3 pr-3">
                        <p style="color:#FF5E3C">Tahunan</p>
                        <v-spacer />
                        <p class="font-weight-bold">BEST!</p>
                    </v-row>
                    <v-row class="pl-2 pb-2">
                    <p class="text-h3">Rp20.000</p>
                    <caption class="pt-6">/BULAN</caption>
                    </v-row>
                    <p class="text-center">Dibayarkan di awal sebesar Rp250.000 untuk 1 tahun</p>
                    <v-btn
                        color= #FF5E3C
                        class="white--text"
                        rounded
                        block
                        >
                        Berlangganan
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'DaftarMembership',
    data() {
        return {
            viewMoreActivated: false,
        }
    },
    methods: {
    viewMore(){
      this.viewMoreActivated = true;
    }
    }
}
</script>
