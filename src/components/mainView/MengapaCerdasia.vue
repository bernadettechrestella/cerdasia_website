<template>
    <v-container>
        <!-- <div data-aos="fade-up"
            data-aos-offset="600"
            data-aos-easing="ease-in-sine"> -->
            <v-card flat class="text-center pt-5 pb-5 mt-5 mb-5">
                <v-row class="justify-center pb-5 mb-5">
                    <p class="font-weight-bold text-h3">Mengapa Harus Cerdasia?</p>
                </v-row>

                <v-row>
                    <v-col>
                        <v-row justify="center pb-5 pt-5">
                            <v-img 
                                height="55"
                                width="55"
                                contain
                                src="~@/assets/iconAnak.svg"
                            ></v-img>
                        </v-row>
                        <p class="font-weight-bold text-h6">Berfokus Pada Anak</p>
                        <p>Kurikulum disesuaikan dengan tahap perkembangan Anak</p>
                    </v-col>
                    <v-col>
                        <v-row justify="center pb-5 pt-5">
                            <v-img 
                                height="55"
                                width="55"
                                contain
                                src="~@/assets/iconLampu.svg"
                            ></v-img>
                        </v-row>
                        <p class="font-weight-bold text-h6">Belajar Serasa Bermain</p>
                        <p>Terdapat visual dan worksheet yang asik dan menyenangkan untuk anak-anak</p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-row justify="center pb-5 pt-5">
                            <v-img 
                                height="55"
                                width="55"
                                contain
                                src="~@/assets/iconBuku.svg"
                            ></v-img>
                        </v-row>
                        <p class="font-weight-bold text-h6">Akselerasi Kemampuan Literasi</p>
                        <p>Buku yang interaktif dan meningkatkan minat baca Anak</p>
                    </v-col>
                    <v-col>
                        <v-row justify="center pb-5 pt-5">
                            <v-img 
                                height="55"
                                width="55"
                                contain
                                src="~@/assets/iconHati.svg"
                            ></v-img>
                        </v-row>
                        <p class="font-weight-bold text-h6">Mempererat Hubungan Orang Tua dan Anak</p>
                        <p>Terdapat fitur dashboard yang membantu orangtua dalam mendampingi perkembangan Anak</p>
                    </v-col>
                </v-row>
            </v-card>
        <!-- </div> -->
    </v-container>
</template>

<script>
export default {
    name : 'MengapaCerdasia'
}
</script>