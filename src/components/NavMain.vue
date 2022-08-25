<template>
    <v-app-bar app elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-row no-gutters>
            <v-col cols="3">
                <v-app-bar-nav-icon/>
            </v-col>
            <v-col cols="6" class="d-flex align-center justify-center">
                <h3 class="title-text">Alessio Vanzan</h3>
            </v-col>
            <v-col cols="3">
                <v-row no-gutters justify="end">
                    <v-btn icon @click="toggleTheme">
                        <v-icon>{{ theme.global.name.value === 'darkTheme' ? 'mdi-white-balance-sunny' : 'mdi-weather-night ' }}</v-icon>
                    </v-btn>
                     <v-btn icon href="https://www.instagram.com/alessio_vanzan">
                         <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-app-bar>
    <v-img id="nav-logo" :src="logo"/>
</template>

<script setup lang='ts'>
import { useTheme } from 'vuetify';
import logo from '@/assets/logo.png';

const theme = useTheme();
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'lightTheme' : 'darkTheme';

</script>

<style>
.v-toolbar__content {
  padding-left: 0px;
}

.title-text {
  font-family: 'Aboreto', san-serif;
}

.v-app-bar {
    height: 64px;
}

#nav-logo {
    position: fixed;
    align-self: center;
    top: 7px;
    height: 90px;
    width: 200px;
    z-index: 1010;
}
</style>