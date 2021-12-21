<template>
    <v-container>
        <div class="pt-5 mt-5 pb-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
            <p class="font-weight-bold text-h3 pb-5">Testimoni</p>
            <v-row class="pl-5 pr-5">
                <v-col cols="6">
                    <v-img
                        src="~@/assets/TestiAndy.svg">
                    </v-img>
                    <v-img
                        height="100"
                        width="170"
                        src="~@/assets/AndyZaky.svg">
                    </v-img>
                </v-col>
                <v-col cols="6">
                    <v-img
                        src="~@/assets/TestiNindi.svg">
                    </v-img>
                    <v-img
                        src="~@/assets/FotoNindi.svg">
                    </v-img>
                </v-col>
            </v-row>
        </div>

        <div class="pt-5 mt-5 pb-5 mb-5" v-if="$vuetify.breakpoint.smAndDown">
            <p class="font-weight-bold text-h3 pb-5">Testimoni</p>
            <v-img
                src="~@/assets/TestiAndy.svg">
            </v-img>
            <v-row class="pl-12 pr-12 ml-12 mr-12">
                    <v-img
                        src="~@/assets/AndyZaky.svg">
                    </v-img>
            </v-row>
        </div>

    </v-container>
</template>

<script>
export default {
    name: 'Testimoni'
}
</script>