<template>
    <v-app-bar app elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-row no-gutters>
            <v-col class="d-flex justify-start">
                <v-app-bar-nav-icon/>
            </v-col>
            <v-col class="d-flex flex-column align-center justify-center">
                <h1 class="font-weight-black">Alessio Vanzan</h1>
                <!-- <v-divider length="100"></v-divider> -->
            </v-col>
            <v-col>
                <v-row no-gutters justify="end">
                    <v-btn icon @click="toggleTheme">
                        <v-icon>{{ theme.global.name.value === 'darkTheme' ? 'mdi-white-balance-sunny' : 'mdi-weather-night ' }}</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-grid</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script setup lang='ts'>
import { useTheme } from 'vuetify';

const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';

</script>

<style>
.v-toolbar__content {
  padding-left: 0px;
}
</style>