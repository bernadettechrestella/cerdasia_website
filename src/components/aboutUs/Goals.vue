<template>
    <div class="pb-10 mb-5">
        <p class="font-weight-bold text-h3 text-center">Goals</p>
        <v-img
            src="~@/assets/kuningputih.png"
            height="310">
            <v-container>
            <v-row class="pt-5">
                <v-col>
                    <v-card :class="`rounded${'-xl'}`" class="text-center pa-5" height="273">
                        <p class="text-h4 font-weight-bold">SDG 1</p>
                        <p>No Poverty</p>
                        <p>Kami menekankan pada pemerataan kualitas edukasi anak sehingga mereka memiliki kesempatan yang sama untuk memperjuangkan masa depan mereka</p>
                    </v-card>
                </v-col>
                &emsp;
                <v-col>
                    <v-card :class="`rounded${'-xl'}`" class="text-center pa-5" height="273">
                        <p class="text-h4 font-weight-bold">SDG 4</p>
                        <p>Quality Education</p>
                        <p>Berfokus pada kesetaraan kualitas pendidikan dimana semua anak di Indonesia memiliki hak untuk dapat mengembangkan potensi dirinya melalui peningkatan kualitas edukasi</p>
                    </v-card>
                </v-col>
                &emsp;
                <v-col>
                    <v-card :class="`rounded${'-xl'}`" class="text-center pa-5" height="273">
                        <p class="text-h4 font-weight-bold">SDG 8</p>
                        <p>Decent Work & Economic Growth</p>
                        <p>Berusaha menanamkan sedini mungkin kemampuan menganalisis informasi, daya berpikir kritis, dan kemerdekaan memiliki pendapat pada anak yang nantinya dapat berugna dalam dunia kerja</p>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-img>
    </div>
</template>

<script>
export default {
    name: 'Goals'
}
</script>
