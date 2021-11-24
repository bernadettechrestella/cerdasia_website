<template>
    <v-app-bar app color="white" flat>
        <v-row justify="center" align="center"  class="ml-3 mr-6 pl-3 pr-6">
            <!-- <v-col> -->
                <v-app-bar-title class="pt-3">
                    <p text color="black" class="font-weight-bold text-h5">Cerdasia</p>
                </v-app-bar-title>
            <!-- </v-col> -->
        <v-spacer />
            <!-- <v-col> -->
                <v-toolbar-items class="hidden-xs-only">
                    <a text class="font-weight-regular red--text ma-2 pa-3">Tentang</a>
                    <a text class="font-weight-regular red--text ma-2 pa-3">Fitur</a>
                </v-toolbar-items>
            <!-- </v-col> -->
        <v-spacer />
            <!-- <v-col sm="1" md="1"> -->
                <v-app-bar-nav-icon class="hidden-xs-only mr-2 pr-2">
                    <v-btn
                        color= #EF6C00
                        class="white--text"
                        rounded
                    >Get Started</v-btn>
                </v-app-bar-nav-icon>
            <!-- </v-col> -->
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
