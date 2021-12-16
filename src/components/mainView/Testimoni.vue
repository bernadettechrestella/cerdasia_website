<template>
    <!-- <div data-aos="fade-up"
            data-aos-offset="600"
            data-aos-easing="ease-in-sine"> -->
    <v-container>
        <div class="pt-5 mt-5 pb-5 mb-5" v-if="$vuetify.breakpoint.mdAndUp">
            <p class="font-weight-bold text-h3 pb-5">Testimoni</p>
        <!-- <v-card flat> -->
            <v-row>
                <v-card flat>
                    <v-img
                        height="380"
                        src="~@/assets/card.svg">
                        <p class="white--text pt-5 text-h6 text-center">Incredible Experience</p>
                        <p class="white--text pl-3 pr-3 text-center">Dependable, Responsive, Professional Partner We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks and helps us formulate a vision and possibilities for future.</p>
                    </v-img>
                    <v-row>
                        <v-col class="text-end pt-5">
                            <v-avatar color="red">
                                <span class="white--text text-h5">A</span>
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <p>Jane Doe</p>
                            <p>CEO, Cerdasia</p>
                        </v-col>
                    </v-row>
                </v-card>
                &emsp;
                <v-card flat>
                    <v-img
                        height="380"
                        src="~@/assets/card.svg">
                        <p class="white--text pt-5 text-h6 text-center">Incredible Experience</p>
                        <p class="white--text pl-3 pr-3">Dependable, Responsive, Professional Partner We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks and helps us formulate a vision and possibilities for future.</p>
                    </v-img>
                    <v-row>
                        <v-col class="text-end pt-5">
                            <v-avatar color="red">
                                <span class="white--text text-h5 text-center">A</span>
                            </v-avatar>
                        </v-col>
                        <v-col>
                                <p>Jane Doe</p>
                                <p>CEO, Cerdasia</p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </div>
        <div class="pt-5 mt-5 pb-5 mb-5" v-else>
            <p class="font-weight-bold text-h4 pb-5">Testimoni</p>
        <!-- <v-card flat> -->
            <v-row>
                <v-card flat>
                    <v-img
                        height="0"
                        src="~@/assets/card.svg">
                        <p class="white--text pt-5 text-h6 text-center">Incredible Experience</p>
                        <p class="white--text pl-3 pr-3 text-center">Dependable, Responsive, Professional Partner We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks and helps us formulate a vision and possibilities for future.</p>
                    </v-img>
                    <v-row>
                        <v-col class="text-end pt-5">
                            <v-avatar color="red">
                                <span class="white--text text-h5">A</span>
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <p>Jane Doe</p>
                            <p>CEO, Cerdasia</p>
                        </v-col>
                    </v-row>
                </v-card>
                &emsp;
                <v-card flat>
                    <v-img
                        height="380"
                        src="~@/assets/card.svg">
                        <p class="white--text pt-5 text-h6 text-center">Incredible Experience</p>
                        <p class="white--text pl-3 pr-3">Dependable, Responsive, Professional Partner We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks and helps us formulate a vision and possibilities for future.</p>
                    </v-img>
                    <v-row>
                        <v-col class="text-end pt-5">
                            <v-avatar color="red">
                                <span class="white--text text-h5 text-center">A</span>
                            </v-avatar>
                        </v-col>
                        <v-col>
                                <p>Jane Doe</p>
                                <p>CEO, Cerdasia</p>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </div>
        <!-- </v-card> -->
    </v-container>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'Testimoni'
}
</script>