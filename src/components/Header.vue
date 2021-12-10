<template>
    <v-app-bar app color="white" flat>
        <v-row justify="center" align="center"  class="ml-3 mr-6 pl-3 pr-6">
            <!-- <v-col> -->
                <v-app-bar-title class="pt-3">
                    <p text color="black" class="font-weight-bold text-h4">Cerdasia</p>
                </v-app-bar-title>
            <!-- </v-col> -->
        <v-spacer />

            <v-app-bar-title class="hidden-xs-only">
                <a text class="font-weight-regular purple--text ma-2 pa-3">Home</a>
                <a text class="font-weight-regular grey--text ma-2 pa-3">About Us</a>
                <a text class="font-weight-regular grey--text ma-2 pa-3">Membership</a>
                <a text class="font-weight-regular grey--text ma-2 pa-3">Blog</a>
                <a text class="font-weight-regular grey--text ma-2 pa-3">Contact Us</a>
                <v-btn
                    color= #9747FF
                    class="white--text"
                    rounded
                    >Get Started
                </v-btn>
            </v-app-bar-title>
        </v-row>

        <div class="hidden-sm-and-up">
            <v-menu offset-y class="pa-1">
                <template v-slot:activator='{ on }'>
                    <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list class="responsiveMenu">
                    <v-list-item>
                        <a text class="font-weight-regular red--text ma-2 pa-3">Tentang</a>
                    </v-list-item>
                    <v-list-item>
                        <a text class="font-weight-regular red--text ma-2 pa-3">Fitur</a>
                    </v-list-item>
                    <v-list-item>
                        <a text class="font-weight-regular red--text ma-2 pa-3">Get Started</a>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Header',
}
</script>
