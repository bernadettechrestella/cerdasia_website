<template>
    <div>
        <v-container v-if="$vuetify.breakpoint.mdAndUp">
            <v-row class="pt-12">
                <v-col cols="8" class="pt-10">
                    <v-card flat color="#FDF9D3" :class="`rounded${'-xl'}`" class="pa-2">
                        <!-- <v-img
                        src="~@/assets/gajahDuduk.svg"
                        height="600"
                        width="1400"
                        contain
                        > -->
                        <v-col>
                            <v-row>
                                <v-col cols="2" sm="2">
                                    <p class="font-weight-bold text-h3">Visi</p>
                                </v-col>
                                <v-col>
                                    <p>Menjadi sumber peningkatan literasi anak bangsa melalui penyetaraan pelayanan pendidikan dengan memanfaatkan teknologi.</p> 
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="2" sm="2">
                                    <p class="font-weight-bold text-h3">Misi</p>
                                </v-col>
                                <v-col>
                                    <ul>
                                    <li><p>Menanamkan rasa cinta baca pada anak melalui fitur yang interaktif dan menyenangkan</p></li>
                                        
                                    <li><p>Pengembangan fitur yang berfokus pada tumbuh kembang anak berlandaskan literatur</p></li>
                                    
                                    <li><p>Membangun kolaborasi berkelanjutan dengan berbagai stakeholders guna menjamin kebermanfaatan aplikasi bagi seluruh anak bangsa</p></li>
                                    </ul>
                                </v-col>
                            </v-row>
                        </v-col>
                        <!-- </v-img> -->
                    </v-card>
                </v-col>
                <v-col cols="4">
                    <v-img
                        src="~@/assets/gajahWisuda.svg"
                        height="100%"
                        width="100%"
                        contain
                        ></v-img>
                </v-col>
            </v-row>
        </v-container>
    

        <v-container v-if="$vuetify.breakpoint.smAndDown">
            <v-row  justify="center" class="pb-5">
                <v-img
                    max-height="70%"
                    max-width="70%"
                    contain
                    src="~@/assets/gajahWisuda.svg"
                    ></v-img>
                </v-row>
                <v-card class="pa-5" flat v-if="$vuetify.breakpoint.smAndDown" color="#FDF9D3" :class="`rounded${'-xl'}`">
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h5">Visi</p>
                        </v-col>
                        <v-col sm="9" cols="9">
                            <p class="text-justify">Menjadi sumber peningkatan literasi anak bangsa melalui penyetaraan pelayanan pendidikan dengan memanfaatkan teknologi.</p> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h5">Misi</p>
                        </v-col>
                        <v-col>
                            <ul>
                                <li><p class="text-justify">Menanamkan rasa cinta baca pada anak melalui fitur yang interaktif dan menyenangkan</p></li>
                                        
                                <li><p class="text-justify">Pengembangan fitur yang berfokus pada tumbuh kembang anak berlandaskan literatur</p></li>
                                    
                                <li><p class="text-justify">Membangun kolaborasi berkelanjutan dengan berbagai stakeholders guna menjamin kebermanfaatan aplikasi bagi seluruh anak bangsa</p></li>
                            </ul>
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