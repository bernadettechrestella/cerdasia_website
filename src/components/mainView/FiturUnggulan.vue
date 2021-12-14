<template>
    <v-container>
        <!-- <div data-aos="fade-left"
            data-aos-offset="600"
            data-aos-easing="ease-in-sine"> -->
            <v-card flat class="text-end pt-5 pb-5 mt-5 mb-5">
                <v-row class="pb-5 mb-5 justify-center">
                    <p class="font-weight-bold text-h3">Fitur Unggulan</p>
                </v-row>

                <v-row align="center">
                    <v-col cols="6">
                        <v-img
                        width="100%"
                        :min-height="initHeight"
                        contain
                        src= "~@/assets/lingkaran.png"
                        ></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-row class="justify-end">
                            <p class="font-weight-bold text-h3">Cerdas Membaca</p>
                        </v-row>
                        <v-row>
                            <p>Fitur belajar mengeja, dimulai dari pengenalan alfabet, suku kata, dan kalimat sederhana dengan didukung oeh visual yang menarik dari worksheet yang menyenangkan sebagai langkah awal bagi anak untuk dapat mengakses tingkat literasi lebih lanjut</p>
                        </v-row>
                        <v-row class="justify-end">
                            <v-btn
                                color= #FF5E3C
                                class="white--text"
                                >Call To Action
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        <!-- </div> -->

        <!-- <div data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"> -->
            <v-card flat class="pa-5 ma-5">
                <v-row align="center">
                    <v-col cols="6">
                        <v-row>
                            <p class="font-weight-bold text-h3">Cerdas Cendekia</p>
                        </v-row>
                        <v-row >
                            <p>Fitur yang memberi akses anak untuk mengakses berbagai buku yang bisa meningkatkan kecintaan anak terhadap budaya baca, meningkatkan pengetahuan anak, mengasah kemampuan berpikir kritis anak, serta pembelajaran karakter dengan cerita-cerita yang dibuat oleh kurator terpilih dilengkapi dengan adanya voice over cerita dan kuis interaktif yang disesuaikan dengan tingkat kemampuan belajar anak</p>
                        </v-row>
                        <v-row>
                            <v-btn
                                color= #FF5E3C
                                class="white--text"
                                >Call To Action
                            </v-btn>
                        </v-row>
                    </v-col>  

                <v-col cols="6">
                    <v-img
                        width="100%"
                        :min-height="initHeight"
                        contain
                        src= "~@/assets/lingkaran.png"
                    ></v-img>
                </v-col>
                </v-row>
            </v-card>
        <!-- </div> -->

        <!-- <div data-aos="fade-left"
            data-aos-offset="600"
            data-aos-easing="ease-in-sine"> -->
            <v-card flat class="pa-5 ma-5 text-end">
                <v-row align="center">
                    <v-col cols="6">
                        <v-img
                            width="100%"
                            :min-height="initHeight"
                            contain
                            src= "~@/assets/lingkaran.png"
                        ></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-row justify="end">
                            <p class="font-weight-bold text-h3">Orangtua Cerdasia</p>
                        </v-row>
                        <v-row>
                            <p>Fitur bagi orangtua untuk memantau perkembangan anak berupa data secara akurat dilengkapi dengan artikel edukasi bagi orangtua terkait pendampingan di tiap tahap tumbuh kembang anak sehingga dapat memaksimalkan perkembangan potensi anak melalui keterlibatan orangtua</p>
                        </v-row>
                        <v-row justify="end">
                            <v-btn
                                color= #FF5E3C
                                class="white--text"
                                >Call To Action
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        <!-- </div> -->
    </v-container>
</template>

<script>
export default {
    name : 'FiturUnggulan',
    data () {
        return {
            initHeight: (window.innerHeight)/4
        }
    }
}
</script>