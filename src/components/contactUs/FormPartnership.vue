<template>
    <v-container class="pb-12 mb-6">
        <p class="text-center font-weight-bold text-h3 pt-5 pb-5">Form Partnership</p>
        <p class="text-center pb-5">Tertarik menjalin kerjasama dengan kami untuk mencapai peningkatan literasi anak di Indonesia? Anda dapat mengisi form di bawah ini, Tim kami akan menghubungi Anda untuk proses selanjutnya.</p>
        <v-text-field
            rounded
            outlined
            label="Nama lengkap"
            color="#FF5E3C"
            append-icon="mdi-account"
        ></v-text-field>
        <v-text-field
            rounded
            outlined
            label="E-mail"
            color="#FF5E3C"
            append-icon="mdi-email"
        ></v-text-field>
        <v-textarea
          rounded
          outlined
          label="Pesan"
          color="#FF5E3C"
          append-icon="mdi-square-edit-outline"
        ></v-textarea>
        <v-btn
            rounded
            color="#FF5E3C"
            class="white--text"
            width="300">
            Kirim Pesan
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'FormPartnership'
}
</script>