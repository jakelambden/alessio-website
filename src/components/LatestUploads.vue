<template>
  <div id="latest-uploads">
    <v-container class="d-flex align-center fill-height bg-surface-variant">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <h2 class="font-weight-black">Latest Uploads</h2>
        </v-col>
        <v-col
          v-for="n in imageCount"
          :key="n"
          class="d-flex child-flex"
          :cols="12 / imageCount"
        >
          <v-img
            :src="image(n)"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            cover
            class="bg-grey-lighten-2"
          >
          <div class="image-name">
            Image name {{ n }}
          </div>
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <router-link to="/gallery">
                <v-btn>See full gallery <v-icon class="padded-arrow">mdi-arrow-right</v-icon></v-btn>
            </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang='ts'>
  import tattooImageOne from '../assets/1.jpg';
  import tattooImageTwo from '../assets/2.jpg';
  import tattooImageThree from '../assets/3.jpg';
  const imageCount = 3;

function image(num: number){
  switch (num % 3){
    case 0:
      return tattooImageOne;
    case 1:
      return tattooImageTwo;
    case 2:
      return tattooImageThree;
    default:
      return;
  }
}

</script>

<style>
a {
  color: #FFFFFF;
  text-decoration: none;
}

/* a:hover {
   color: #00F
} */

#latest-uploads {
  height: 600px;
}

.image-name {
  position: absolute; 
  bottom: 0;
  right: 0;
  background-color: gray;
  color: white;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
}

.padded-arrow {
  padding-left: 10px;
}
</style>