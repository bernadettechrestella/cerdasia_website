<template>
    <v-container>
        <div class="pt-5 mt-5 pb-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
            <p class="font-weight-bold text-h3 pb-5">Testimoni</p>
            <v-row class="pl-5 pr-5" justify="start" align="start">
              <!-- <v-sheet
                class="mx-auto"
                elevation="1"
                :min-width="innerWidth - 200"
                :max-height="800"
              >
                <v-slide-group
                  class="pa-2"
                  center-active
                  v-model="model"
                  show-arrows
                >
                  <v-slide-item>
                      <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                      >
                        <v-card
                        elevation="1"
                        height="400"
                        width="600"
                        >
                            <v-img
                            contain
                            src="~@/assets/TestiAndy.svg"
                            height="300"
                            width="500"
                            >
                            <v-img
                            position=""
                                contain
                                src="~@/assets/AndyZaky.svg"
                                height="150"
                                width="300"
                                ></v-img>
                            </v-img>
                        </v-card>
                      </v-row>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet> -->
                <v-col cols="6">
                    <v-row>
                    <v-img
                        src="~@/assets/TestiAndy.svg">
                    </v-img>
                    </v-row>
                    <v-row>
                    <v-img
                    contain
                        height="100"
                        width="170"
                        src="~@/assets/AndyZaky.svg">
                    </v-img>
                    </v-row>
                </v-col>
                <v-col cols="6">
                    <v-row>
                    <v-img
                        src="~@/assets/TestiNindi.svg">
                    </v-img>
                    </v-row>
                    <v-row>
                    <v-img
                        contain
                        height="100"
                        width="170"
                        src="~@/assets/FotoNindi.svg">
                    </v-img>
                    </v-row>
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
    name: 'Testimoni',
    data () {
        return {
            innerHeight: window.innerHeight - 100,
            innerWidth: window.innerWidth - 100,
            model: null,
            ListTestimoni: [
                {
                    id: 0,
                    imgTesti: '~@/assets/TestiAndy.svg',
                    imgProfileTesti: '~@/assets/AndyZaky.svg'
                },
                {
                    id: 1,
                    imgTesti: '~@/assets/TestiNindi.svg',
                    imgProfileTesti: '~@/assets/FotoNindi.svg'
                }
            ]
        }
    }
}
</script>