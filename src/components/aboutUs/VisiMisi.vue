<template>
    <v-container>
                <v-card class="pa-5" flat v-if="$vuetify.breakpoint.mdAndUp">
                    <v-img
                    src="~@/assets/gajahDuduk.svg"
                    >
                    <v-col cols="7" class="pt-12 pl-12">
                    <v-row class="pt-12 mt-12">
                        <v-col cols="3">
                            <p class="font-weight-bold text-h3">Visi</p>
                        </v-col>
                        <v-col>
                            <p>Cupidatat enim sit voluptate consequat elit officia cupidatat est dolore eiusmod in adipisicing pariatur. Commodo est reprehenderit nulla commodo reprehenderit ad tempor dolor anim laboris velit. Ex</p> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <p class="font-weight-bold text-h3">Misi</p>
                        </v-col>
                        <v-col>
                            <p>Cupidatat enim sit voluptate consequat elit officia cupidatat est dolore eiusmod in adipisicing pariatur. Commodo est reprehenderit nulla commodo reprehenderit ad tempor dolor anim laboris velit. </p>
                        </v-col>
                    </v-row>
                    </v-col>
                    </v-img>
                </v-card>
                <v-row v-if="$vuetify.breakpoint.smAndDown" justify="center" class="pb-5">
                <v-img
                max-height="50%"
                max-width="50%"
                contain
                    src="~@/assets/gajahAja.svg"
                    ></v-img>
                </v-row>
                <v-card class="pa-5" flat v-if="$vuetify.breakpoint.smAndDown" color="#ffeaa7">
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h5">Visi</p>
                        </v-col>
                        <v-col sm="8" cols="8">
                            <p>Cupidatat enim sit voluptate consequat elit officia cupidatat est dolore eiusmod in adipisicing pariatur. Commodo est reprehenderit nulla commodo reprehenderit ad tempor dolor anim laboris velit. Ex</p> 
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col sm="3" cols="3">
                            <p class="font-weight-bold text-h5">Misi</p>
                        </v-col>
                        <v-col sm="8" cols="8">
                            <p>Cupidatat enim sit voluptate consequat elit officia cupidatat est dolore eiusmod in adipisicing pariatur. Commodo est reprehenderit nulla commodo reprehenderit ad tempor dolor anim laboris velit. </p>
                        </v-col>
                    </v-row>
                </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'VisiMisi'
}
</script>