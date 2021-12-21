<template>
    <v-container>
        <p class="text-h3 font-weight-bold text-center pt-5 pb-5">Blog</p>
        <v-row class="justify-center pt-5 pb-5" v-if="$vuetify.breakpoint.mdAndUp">
            <v-card elevation="5">
                <v-img
                    height="250"
                    width="500"
                    contain
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
            &emsp;
            <v-card elevation="5">
                <v-img
                    height="250"
                    width="500"
                    contain
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
        </v-row>
        <v-row class="justify-center pt-5 pb-10 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
            <v-card elevation="5">
                <v-img
                    height="250"
                    width="500"
                    contain
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
            &emsp;
            <v-card elevation="5">
                <v-img
                    contain
                    height="250"
                    width="500"
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
        </v-row>


        <v-row class="justify-center pa-5" v-if="$vuetify.breakpoint.smAndDown">
            <v-card elevation="5">
                <v-img
                contain
                    height="250"
                    width="500"
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
            &emsp;
            <v-card elevation="5">
                <v-img
                contain
                    height="250"
                    width="500"
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
        </v-row>

        <v-row class="justify-center pl-5 pr-5 pb-12" v-if="$vuetify.breakpoint.smAndDown">
            <v-card elevation="5">
                <v-img
                contain
                    height="250"
                    width="500"
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
            &emsp;
            <v-card elevation="5">
                <v-img
                contain
                    height="250"
                    width="500"
                    src="~@/assets/BlogItemImage.svg"></v-img>
                <v-card-title>Cara Mengajar Anak SD</v-card-title>
                <v-card-subtitle>Edukasi</v-card-subtitle>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BlogView'
}
</script>