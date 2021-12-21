<template>
    <v-container>
            <v-card flat class="text-end pt-5 pb-5 mt-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
                <v-row class="pb-5 mb-5 justify-center">
                    <p class="font-weight-bold text-h3">Fitur Unggulan</p>
                </v-row>

                <v-row align="center">
                    <v-col cols="6">
                        <v-img
                        width="100%"
                        :min-height="initHeight"
                        contain
                        src= "~@/assets/Fitur1Gajah.svg"
                        ></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-row class="justify-end">
                            <p class="font-weight-bold text-h3">Cerdas Membaca</p>
                        </v-row>
                        <v-row>
                            <p>Fitur belajar mengeja, dimulai dari pengenalan alfabet, suku kata, dan kalimat sederhana, didukung oeh visual yang menarik dari worksheet yang menyenangkan sebagai langkah awal bagi anak untuk dapat mengakses tingkat literasi lebih lanjut</p>
                        </v-row>
                        <v-row class="justify-end">
                            <v-btn
                                @click="redirectMembaca()"
                                color= "#FF5E3C"
                                class="white--text"
                                >Pelajari Lebih Lanjut
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>

            <v-card flat class="pa-5 ma-5" v-if="$vuetify.breakpoint.mdAndUp">
                <v-row align="center">
                    <v-col cols="6">
                        <v-row>
                            <p class="font-weight-bold text-h3">Cerdas Cendekia</p>
                        </v-row>
                        <v-row >
                            <p>Fitur akses anak terhadap berbagai buku digital yang dilengkapi dengan meningkatkan kecintaan budaya baca, memperluas pengetahuan, mengasah kemampuan berpikir kritis, serta memberikan pembelajaran karakter. Seluruh bacaan buku diformulasikan dengan cerita-cerita yang dibuat oleh kurator terpilih, dilengkapi dengan voice over cerita dan kuis interaktif yang disesuaikan dengan tingkat kemampuan belajar anak.</p>
                        </v-row>
                        <v-row>
                            <v-btn
                                @click="redirectCendekia()"
                                color= "#FF5E3C"
                                class="white--text"
                                >Pelajari Lebih Lanjut
                            </v-btn>
                        </v-row>
                    </v-col>  

                <v-col cols="6" class="pl-5">
                    <v-img
                        width="100%"
                        :min-height="initHeight"
                        contain
                        src= "~@/assets/Fitur2Buku.svg"
                    ></v-img>
                </v-col>
                </v-row>
            </v-card>

            <v-card flat class="pa-5 ma-5 text-end" v-if="$vuetify.breakpoint.mdAndUp">
                <v-row align="center">
                    <v-col cols="6">
                        <v-img
                            width="80%"
                            :min-height="initHeight"
                            contain
                            src= "~@/assets/Fitur3Keluarga.svg"
                        ></v-img>
                    </v-col>
                    <v-col cols="6">
                        <v-row justify="end">
                            <p class="font-weight-bold text-h3">Orang Tua Cerdasia</p>
                        </v-row>
                        <v-row>
                            <p>Fitur bagi orang tua untuk memantau dan mengevaluasi perkembangan anak berupa data akurat. Terdapat artikel edukasi bagi orang tua mengenai pendampingan tumbuh kembang anak di tiap tahapannya, sehingga memaksimalkan potensi perkembangan anak melalui keterlibatan orang tua.</p>    
                        </v-row>
                        <v-row>
                            <v-btn
                                @click="redirectCerdasia()"
                                color= "#FF5E3C"
                                class="white--text"
                                >Pelajari Lebih Lanjut
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>

            <v-card flat class="text-end pa-5" v-if="$vuetify.breakpoint.smAndDown">
                <v-row class="justify-center">
                    <p class="font-weight-bold text-h3">Fitur Unggulan</p>
                </v-row>

                <v-row align="center">
                    <v-img
                        width="400"
                        height="400"
                        contain
                        src= "~@/assets/Fitur1Gajah.svg"
                    ></v-img>
                </v-row>
                <v-row class="justify-center">
                            <p class="font-weight-bold text-h3 text-center">Cerdas Membaca</p>
                        </v-row>
                        <v-row class="justify-center">
                            <p class="text-center">Fitur belajar mengeja, dimulai dari pengenalan alfabet, suku kata, dan kalimat sederhana dengan didukung oeh visual yang menarik dari worksheet yang menyenangkan sebagai langkah awal bagi anak untuk dapat mengakses tingkat literasi lebih lanjut</p>
                        </v-row>
                        <!-- <v-row class="justify-center">
                            <v-btn
                                color= #FF5E3C
                                class="white--text"
                                >Call To Action
                            </v-btn>
                        </v-row> -->
            </v-card>

            <v-card flat class="pa-5" v-if="$vuetify.breakpoint.smAndDown">
                <v-row align="center">
                    <v-img
                        width="400"
                        height="400"
                        contain
                        src= "~@/assets/Fitur2Buku.svg"
                    ></v-img>
                </v-row>
                    
                        <v-row class="justify-center">
                            <p class="font-weight-bold text-h3 text-center">Cerdas Cendekia</p>
                        </v-row>
                        <v-row>
                            <p class="text-center">Fitur yang memberi akses anak untuk mengakses berbagai buku yang bisa meningkatkan kecintaan anak terhadap budaya baca, meningkatkan pengetahuan anak, mengasah kemampuan berpikir kritis anak, serta pembelajaran karakter dengan cerita-cerita yang dibuat oleh kurator terpilih dilengkapi dengan adanya voice over cerita dan kuis interaktif yang disesuaikan dengan tingkat kemampuan belajar anak</p>
                        </v-row>
                        <!-- <v-row class="justify-center">
                            <v-btn
                                color= #FF5E3C
                                class="white--text"
                                >Call To Action
                            </v-btn>
                        </v-row> -->
            </v-card>

            <v-card flat class="pa-5 mb-8" v-if="$vuetify.breakpoint.smAndDown">
                <v-row align="center">
                    <v-img
                        width="400"
                        height="400"
                        contain
                        src= "~@/assets/Fitur3Keluarga.svg"
                    ></v-img>
                </v-row>
                <v-row justify="center">
                    <p class="font-weight-bold text-h3 text-center">Orang Tua Cerdasia</p>
                </v-row>
                <v-row>
                    <p class="text-center">Fitur bagi orangtua untuk memantau perkembangan anak berupa data secara akurat dilengkapi dengan artikel edukasi bagi orangtua terkait pendampingan di tiap tahap tumbuh kembang anak sehingga dapat memaksimalkan perkembangan potensi anak melalui keterlibatan orangtua</p>
                </v-row>
                <!-- <v-row justify="center">
                    <v-btn
                        color= #FF5E3C
                        class="white--text"
                        >Call To Action
                    </v-btn>
                </v-row> -->
            </v-card>
    </v-container>
</template>

<script>
export default {
    name : 'FiturUnggulan',
    data () {
        return {
            initHeight: (window.innerHeight)/4
        }
    },
    methods: {
        redirectMembaca () {
            this.$router.push('/fitur')
            window.scrollTo(0, 0)
        },

        redirectCendekia () {
            this.$router.push('/fitur')
            window.scrollTo(0, 500)
        },

        redirectCerdasia () {
            this.$router.push('/fitur')
            window.scrollTo(0, 900)
        }
    }
}
</script>