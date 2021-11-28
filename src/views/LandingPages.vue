<template>
  <v-app>
    <Header />
    <v-main>
      <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
        <v-card flat class="text-center">
            <p class="font-weight-bold text-h3">Lorem Ipsum</p>
            <p class="font-weight-bold text-h3">Dolor sit amet</p>
        </v-card> 

        <v-card flat class="mx-auto text-center align-center">
          <v-img
            class="black--text align-start"
            height="600px"
            contain
            src="../assets/stengahlingkaran.png"
            >
            <v-card-subtitle>
            <p class="font-weight-reguler text-h7">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat</p>
            <p class="font-weight-reguler text-h7">commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua</p>
            </v-card-subtitle>
            </v-img>
        </v-card>
      </div>

    <div data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row align="center">
          <v-col cols="3">
            <v-img
              max-height="300"
              max-width="300"
              src="../assets/logo.png"
              ></v-img>
          </v-col>
          <v-col>
            <v-icon 
              dark
              fab
              x-large
              color="black">
              mdi-format-quote-open
              </v-icon>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in sapien condimentum, accumsan ante sit amet, posuere arcu. Proin pulvinar dictum dolor, id placerat risus bibendum eget. Mauris congue vitae sem viverra sagittis.</p>
            <p class="font-weight-bold">//nama</p>
            <p class="font-weight-bold">//jabatan</p>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row>
          <v-col cols="3">
            <p class="font-weight-bold text-h3">Mengapa</p>
            <p class="font-weight-bold text-h3">Memilih</p>
            <p class="font-weight-bold text-h3">Cerdasia?</p>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
              <v-icon 
                dark
                fab
                x-large
                color= #9747FF>
                mdi-arrow-top-right-bold-box
                </v-icon>
              <p class="font-weight-bold">#####</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
              <v-icon 
                dark
                fab
                x-large
                color= #9747FF>
                mdi-arrow-top-right-bold-box
                </v-icon>
              <p class="font-weight-bold">#####</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col>
              <v-icon 
                dark
                fab
                x-large
                color= #9747FF>
                mdi-arrow-top-right-bold-box
                </v-icon>
              <p class="font-weight-bold">#####</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
              <v-icon 
                dark
                fab
                x-large
                color= #9747FF>
                mdi-arrow-top-right-bold-box
                </v-icon>
              <p class="font-weight-bold">#####</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row align="center">
          <v-col>
            <v-img
              max-height="650"
              max-width="650"
              src="../assets/lingkaran.png"
              ></v-img>
          </v-col>
          <v-col>
            <v-row justify="end" class="pr-5 mr-5">
            <p class="font-weight-bold text-h3">Fitur</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-5">
            <p class="font-weight-bold purple--text text-h3">Unggulan</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-5">
            <p class="font-weight-bold text-h3">Fitur 1</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <p>elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <v-btn
              color= #9747FF
              class="white--text"
              >Call To Action</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row align="center">
          <v-col cols="6">
            <v-row justify="start">
            <p class="font-weight-bold text-h3">Fitur 2</p>
            </v-row>
            <v-row justify="start">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </v-row>
            <v-row justify="start">
            <p>elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
            </v-row>
            <v-row justify="start">
            <v-btn
              color= #9747FF
              class="white--text"
              >Call To Action</v-btn>
            </v-row>
          </v-col>  

          <v-col>
            <v-img
              max-height="650"
              max-width="650"
              src="../assets/lingkaran.png"
              ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row align="center">
          <v-col>
            <v-img
              max-height="650"
              max-width="650"
              src="../assets/lingkaran.png"
              ></v-img>
          </v-col>
          <v-col>
            <v-row justify="end" class="pr-5 mr-5">
            <p class="font-weight-bold text-h3">Fitur 3</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <p>elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
            </v-row>
            <v-row justify="end" class="pr-5 mr-1">
            <v-btn
              color= #9747FF
              class="white--text"
              >Call To Action</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
      <v-card flat class="pa-5 ma-5">
        <v-row align="center">
          <v-col cols="6">
            <v-row justify="start">
            <p class="font-weight-bold text-h3">Fitur 4</p>
            </v-row>
            <v-row justify="start">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </v-row>
            <v-row justify="start">
            <p>elit. Quisque quis viverra dui. Lorem ipsum dolor sit amet</p>
            </v-row>
            <v-row justify="start">
            <v-btn
              color= #9747FF
              class="white--text"
              >Call To Action</v-btn>
            </v-row>
          </v-col>

          <v-col>
            <v-img
              max-height="650"
              max-width="650"
              src="../assets/lingkaran.png"
              ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'LandingPages',
  components: {
    Header,
    Footer
  }
}
</script>
