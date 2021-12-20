<template>
    <v-container class="pb-12 mb-6">
        <p class="text-center font-weight-bold text-h3 pt-5 pb-5">Form Partnership</p>
        <p class="text-center pb-5">Tertarik menjalin kerjasama dengan kami untuk mencapai peningkatan literasi anak di Indonesia? Anda dapat mengisi form di bawah ini, Tim kami akan menghubungi Anda untuk proses selanjutnya.</p>
        <v-text-field
            rounded
            outlined
            v-model="name"
            label="Nama lengkap"
            color="#FF5E3C"
            append-icon="mdi-account"
        ></v-text-field>
        <v-text-field
            rounded
            outlined
            v-model="email"
            label="E-mail"
            color="#FF5E3C"
            append-icon="mdi-email"
        ></v-text-field>
        <v-textarea
          rounded
          outlined
          v-model="message"
          label="Pesan"
          color="#FF5E3C"
          append-icon="mdi-square-edit-outline"
        ></v-textarea>
        <v-btn
            rounded
            color="#FF5E3C"
            class="white--text"
            @click="sendToWA()"
            width="300">
            Kirim Pesan
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'FormPartnership',
    data () {
        return{
            name: '',
            email: '',
            message: ''
        }
    },

    methods: {
        sendToWA () {
            window.open(`https://api.whatsapp.com/send?phone=+628998067422&text=PARTNERSHIP%0ANama Lengkap : ${this.name}%0AEmail : ${this.email}%0AMessage : ${this.message}`,
            "_blank")
            this.reload()
        },

        reload () {
            this.email = ''
            this.name = ''
            this.message = ''
        }
    }
}
</script>