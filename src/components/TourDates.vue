<template>
    <div id="tour-dates">
        <v-carousel show-arrows="hover" progress="primary" v-model="model" height="100%">
            <v-carousel-item v-for="(color, i) in colors" :key="color">
                <v-container class="d-flex flex-column align-center justify-center pa-16 fill-height bg-surface">
                    <v-spacer></v-spacer>
                    <h1 class="font-weight-black">Tour Name {{ i + 1 }}</h1>
                    <h2 class="font-weight-black font-italic">Tour Description {{ i + 1 }}</h2>
                    <v-spacer></v-spacer>
                    <h3 class="font-weight-black">Session Availability</h3>
                    <v-divider length="300"></v-divider>
                    <v-chip-group multiple>
                        <v-chip filter class="ma-2" color="white">Thursday</v-chip>
                        <v-chip filter class="ma-2" color="white">Friday</v-chip>
                        <v-chip filter class="ma-2" color="white">Saturday</v-chip>
                        <v-chip filter class="ma-2" color="white">Sunday</v-chip>
                    </v-chip-group>
                    <v-btn>Enquire now</v-btn>
                    <v-spacer></v-spacer>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script lang = 'ts'>
// Change this bizz
  export default {
    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'primary',
        'secondary',
        'primary',
      ],
    }),
  }
</script>

<style>
#tour-dates {
  height: 600px;
}
</style>