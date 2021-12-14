<template>
    <v-container>
        <!-- <div data-aos="fade-up"
            data-aos-offset="600"
            data-aos-easing="ease-in-sine"> -->
            <v-card flat class="text-center pb-5">
                <v-row class="align-center">
                <v-col cols="5">
                    <p class="font-weight-bold text-h3">Kami percaya bahwa literasi adalah kunci bagi anak-anak untuk mengakses dunia</p>
                    &emsp;
                    <v-btn
                        rounded
                        color="#FF5E3C"
                        class="white--text text-h6"
                        height="50">
                        Download Aplikasi
                    </v-btn>
                </v-col>
                <v-col cols="7">
                    <v-img
                        src= "~@/assets/gambarABC.svg"
                        width="100%"
                        :min-height="initHeight"
                        contain
                    ></v-img>
                </v-col>
                </v-row>
            </v-card>
        <!-- </div> -->
    </v-container>
</template>

<script>
export default {
    name : 'Opening',
    data () {
        return {
            initHeight: (window.innerHeight)/4
        }
    }
}
</script>