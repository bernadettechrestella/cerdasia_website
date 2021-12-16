<template>
    <v-container>
            <v-card flat class="text-center pb-5">
                <v-row class="align-center" justify="center" justify-sm="center">
                <v-col v-if="$vuetify.breakpoint.smAndDown" lg="5" sm="5">
                    <v-img
                        src= "~@/assets/gambarABC.svg"
                        width="100%"
                        :min-height="initHeight"
                        contain
                    ></v-img>
                </v-col>
                <v-col lg="5" sm="5">
                    <p v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-bold text-h3">Kami percaya bahwa literasi adalah kunci bagi anak-anak untuk mengakses dunia</p>
                    <p v-else class="font-weight-bold text-h5">Kami percaya bahwa literasi adalah kunci bagi anak-anak untuk mengakses dunia</p>
                    &emsp;
                    <v-btn
                        v-if="$vuetify.breakpoint.mdAndUp"
                        rounded
                        color="#FF5E3C"
                        class="white--text text-h6"
                        height="50">
                        Download Aplikasi
                    </v-btn>
                    <v-btn
                        v-else
                        rounded
                        color="#FF5E3C"
                        class="white--text text-h8"
                        height="40">
                        Download Aplikasi
                    </v-btn>
                </v-col>
                <v-col v-if="$vuetify.breakpoint.mdAndUp" lg="7" sm="7">
                    <v-img
                        src= "~@/assets/gambarABC.svg"
                        width="100%"
                        :min-height="initHeight"
                        contain
                    ></v-img>
                </v-col>
                </v-row>
            </v-card>
    </v-container>
</template>

<script>
export default {
    name : 'Opening',
    data () {
        return {
            initHeight: (window.innerHeight)/4,
        }
    },
    
}
</script>