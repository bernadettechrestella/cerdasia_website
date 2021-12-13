<template>
    <v-container>
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
    </v-container>
</template>

<script>
export default {
    name: 'PaketPremium'
}
</script>