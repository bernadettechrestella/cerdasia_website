<template>
    <div>
                <v-card flat v-if="$vuetify.breakpoint.mdAndUp" class="pt-10 pl-10 pr-10">
                    <v-img
                    src="~@/assets/gajahDuduk.svg"
                    height="600"
                    width="1400"
                    contain
                    >
                    <v-col cols="7" class="pt-12 mt-5 pl-12 ml-5">
                    <v-row class="pt-12 mt-12">
                        <v-col cols="2">
                            <p class="font-weight-bold text-h3">Visi</p>
                        </v-col>
                        <v-col>
                            <p>Menjadi sumber peningkatan literasi anak bangsa melalui penyetaraan pelayanan pendidikan dengan memanfaatkan teknologi.</p> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="2">
                            <p class="font-weight-bold text-h3">Misi</p>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Menanamkan rasa cinta baca pada anak melalui fitur yang interaktif dan menyenangkan</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Pengembangan fitur yang berfokus pada tumbuh kembang anak berlandaskan literatur</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Membangun kolaborasi berkelanjutan dengan berbagai stakeholders guna menjamin kebermanfaatan aplikasi bagi seluruh anak bangsa</p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    </v-col>
                    </v-img>
                </v-card>
    <v-container>

                <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" class="pb-5">
                <v-img
                    max-height="50%"
                    max-width="50%"
                    contain
                    src="~@/assets/gajahAja.svg"
                    ></v-img>
                </v-row>
                <v-card class="pa-5" flat v-if="$vuetify.breakpoint.smAndDown" color="#FDF9D3" :class="`rounded${'-xl'}`">
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h4">Visi</p>
                        </v-col>
                        <v-col sm="9" cols="9">
                            <p>Menjadi sumber peningkatan literasi anak bangsa melalui penyetaraan pelayanan pendidikan dengan memanfaatkan teknologi.</p> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h4">Misi</p>
                        </v-col>
                        <v-col sm="9" cols="9">
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Menanamkan rasa cinta baca pada anak melalui fitur yang interaktif dan menyenangkan</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Pengembangan fitur yang berfokus pada tumbuh kembang anak berlandaskan literatur</p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="1">
                                    <v-icon>
                                        mdi-circle-medium
                                    </v-icon>
                                </v-col>
                                <v-col>
                                    <p>Membangun kolaborasi berkelanjutan dengan berbagai stakeholders guna menjamin kebermanfaatan aplikasi bagi seluruh anak bangsa</p>
                                </v-col>
                            </v-row>    
                        </v-col>
                    </v-row>
                </v-card>
    </v-container>
    </div>
</template>

<script>
export default {
    name: 'VisiMisi'
}
</script>