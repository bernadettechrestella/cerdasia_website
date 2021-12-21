<template>
    <div>
        <v-container v-if="$vuetify.breakpoint.mdAndUp">
            <p class="font-weight-bold text-h3 text-center pt-5 pb-5">Fitur di Cerdasia</p>
            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="2">
                    <v-img src="~@/assets/Fitur1Gajah.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Cerdas Membaca</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Peningkatan Kemampuan Baca</li>
                <p class="text-justify">Cerdasia berusaha meningkatkan kemampuan baca anak secara mandiri dimulai dari belajar alfabet, suku kata, dan kalimat sederhana yang  berlandaskan kurikulum, dilengkapi dengan kuis untuk memastikan anak dapat menyerap materi yang diberikan.</p>
                <li class="font-weight-bold">Belajar Serasa Bermain</li>
                <p class="text-justify">Memfasilitasi anak dengan berbagai worksheet yang mengasyikan untuk belajar & selalu diperbarui seiring waktu sehingga anak dapat belajar tanpa merasa jenuh.</p>
                <li class="font-weight-bold">Ramah Anak</li>
                <p class="text-justify">Dilengkapi dengan visual yang  interaktif dan menarik untuk anak, selain itu Cerdasia juga sangat mendorong keterlibatan orang tua dalam proses belajar anak sehingga anak dapat belajar dengan aman dan gembira.</p>
                <li class="font-weight-bold">Apresiasi Tiap Proses</li>
                <p class="text-justify">Cerdasia sadar bahwa belajar adalah proses yang memerlukan waktu dan komitmen, sehingga kami sangat mengapresiasi usaha yang telah dilakukan oleh anak dengan memberikan Badges sebagai simbol komitmen kami untuk mengapresiasi capaian belajar anak.</p>
            </ol>
            
            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="2">
                    <v-img src="~@/assets/Fitur2Buku.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Cerdas Cendekia</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Rumah Buku</li>
                <p class="text-justify">Berbagai variasi buku dengan tema yang beragam dan selalu diperbaharui seiring berjalannya waktu, juga dilengkapi dengan rekomendasi personal berdasarkan minat baca anak.</p>
                <li class="font-weight-bold">Peningkatan rasa ingin tahu anak</li>
                <p class="text-justify">Memfasilitasi anak dengan berbagai pengetahuan sehingga dapat mengembangkan rasa ingin tahu anak yang dalam terkait dunia dan fenomena yang terjadi disekitar mereka.</p>
                <li class="font-weight-bold">Peningkatan karakter anak</li>
                <p class="text-justify">Pengalaman yang tidak hanya meningkatkan rasa cinta baca namun juga disisipkan nilai-nilai luhur kehidupan yang berguna untuk kehidupan bermasyarakat.</p>
                <li class="font-weight-bold">Disesuaikan dengan tahap perkembangan anak</li>
                <p class="text-justify">Terdapat audiobook untuk usia dini yang masih belajar membaca, serta terdapat kuis dan aktivitas pemicu critical thinking untuk usia lanjut untuk memaksimalkan peningkatan literasi pada anak.</p>
            </ol>

            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="2">
                    <v-img src= "~@/assets/Fitur3Keluarga.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Orang Tua Cerdas</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Statistik Anak</li>
                <p class="text-justify">Setiap aktivitas belajar yang dilakukan anak dalam Cerdasia akan kami evaluasi dan tampilkan dalam bentuk data beserta rekomendasi peningkatan potensi yang tepat sehingga orang tua dapat mempertimbangkan tindak lanjut yang sesuai dengan hasil belajar anak.</p>
                <li class="font-weight-bold">Edukasi Orang Tua</li>
                <p class="text-justify">Cerdasia sadar pentingnya peran orang tua untuk memaksimalkan peningkatan potensi anak selama proses belajar. Oleh sebab itu kami memfasilitasi pengetahuan parenting berupa artikel yang membantu orang tua dalam membimbing anak belajar di rumah.</p>
                <li class="font-weight-bold">Komunitas Cerdasia</li>
                <p class="text-justify">Memfasilitasi orang tua untuk dapat berkumpul dalam satu platform dimana orang tua dapat saling berbagi cerita dan solusi terkait masalah yang sama terkait perkembangan anak.</p>
            </ol>
        </v-container>

        <v-container v-if="$vuetify.breakpoint.smAndDown">
            <p class="font-weight-bold text-h3 text-center pt-5 pb-5">Fitur di Cerdasia</p>
            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="4">
                    <v-img src="~@/assets/Fitur1Gajah.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Cerdas Membaca</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Peningkatan Kemampuan Baca</li>
                <p class="text-justify">Cerdasia berusaha meningkatkan kemampuan baca anak secara mandiri dimulai dari belajar alfabet, suku kata, dan kalimat sederhana yang  berlandaskan kurikulum, dilengkapi dengan kuis untuk memastikan anak dapat menyerap materi yang diberikan.</p>
                <li class="font-weight-bold">Belajar Serasa Bermain</li>
                <p class="text-justify">Memfasilitasi anak dengan berbagai worksheet yang mengasyikan untuk belajar & selalu diperbarui seiring waktu sehingga anak dapat belajar tanpa merasa jenuh.</p>
                <li class="font-weight-bold">Ramah Anak</li>
                <p class="text-justify">Dilengkapi dengan visual yang  interaktif dan menarik untuk anak, selain itu Cerdasia juga sangat mendorong keterlibatan orang tua dalam proses belajar anak sehingga anak dapat belajar dengan aman dan gembira.</p>
                <li class="font-weight-bold">Apresiasi Tiap Proses</li>
                <p class="text-justify">Cerdasia sadar bahwa belajar adalah proses yang memerlukan waktu dan komitmen, sehingga kami sangat mengapresiasi usaha yang telah dilakukan oleh anak dengan memberikan Badges sebagai simbol komitmen kami untuk mengapresiasi capaian belajar anak.</p>
            </ol>
            
            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="4">
                    <v-img src="~@/assets/Fitur2Buku.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Cerdas Cendekia</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Rumah Buku</li>
                <p class="text-justify">Berbagai variasi buku dengan tema yang beragam dan selalu diperbaharui seiring berjalannya waktu, juga dilengkapi dengan rekomendasi personal berdasarkan minat baca anak.</p>
                <li class="font-weight-bold">Peningkatan rasa ingin tahu anak</li>
                <p class="text-justify">Memfasilitasi anak dengan berbagai pengetahuan sehingga dapat mengembangkan rasa ingin tahu anak yang dalam terkait dunia dan fenomena yang terjadi disekitar mereka.</p>
                <li class="font-weight-bold">Peningkatan karakter anak</li>
                <p class="text-justify">Pengalaman yang tidak hanya meningkatkan rasa cinta baca namun juga disisipkan nilai-nilai luhur kehidupan yang berguna untuk kehidupan bermasyarakat.</p>
                <li class="font-weight-bold">Disesuaikan dengan tahap perkembangan anak</li>
                <p class="text-justify">Terdapat audiobook untuk usia dini yang masih belajar membaca, serta terdapat kuis dan aktivitas pemicu critical thinking untuk usia lanjut untuk memaksimalkan peningkatan literasi pada anak.</p>
            </ol>

            <v-row align="center" class="pt-5 pb-5">
                <v-col cols="3">
                    <v-img src= "~@/assets/Fitur3Keluarga.svg"
                        ></v-img>
                </v-col>
                <v-col>
                    <p class="font-weight-bold text-h4">Orang Tua Cerdas</p>
                </v-col>
            </v-row>
            <ol type="1.">
                <li class="font-weight-bold">Statistik Anak</li>
                <p class="text-justify">Setiap aktivitas belajar yang dilakukan anak dalam Cerdasia akan kami evaluasi dan tampilkan dalam bentuk data beserta rekomendasi peningkatan potensi yang tepat sehingga orang tua dapat mempertimbangkan tindak lanjut yang sesuai dengan hasil belajar anak.</p>
                <li class="font-weight-bold">Edukasi Orang Tua</li>
                <p class="text-justify">Cerdasia sadar pentingnya peran orang tua untuk memaksimalkan peningkatan potensi anak selama proses belajar. Oleh sebab itu kami memfasilitasi pengetahuan parenting berupa artikel yang membantu orang tua dalam membimbing anak belajar di rumah.</p>
                <li class="font-weight-bold">Komunitas Cerdasia</li>
                <p class="text-justify">Memfasilitasi orang tua untuk dapat berkumpul dalam satu platform dimana orang tua dapat saling berbagi cerita dan solusi terkait masalah yang sama terkait perkembangan anak.</p>
            </ol>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'FiturCerdasia',
}
</script>