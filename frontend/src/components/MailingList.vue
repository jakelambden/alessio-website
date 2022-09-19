<template>
    <v-footer class="pa-0 ma-0" app bottom fixed>
        <v-fade-transition>
            <v-btn v-if="!complete" icon class="toggle-button" color="background" @click="visible = !visible">
                <v-icon>{{visible ? 'mdi-chevron-down-circle' : 'mdi-chevron-up-circle'}}</v-icon>
            </v-btn>
        </v-fade-transition>
        <v-expand-transition>
            <v-container v-if="!complete && visible" class="pa-0 ma-0">
                <v-fade-transition group leave-absolute>
                    <v-container class="pa-3 fill-height" v-if="!successful"
                        :class="{ 'footer-container-hidden': !visible, 'footer-container-visible-mailing': visible  }">
                        <!-- <h4 class="font-weight-bold text-center" id="white-text">Keep updated, Join the mailing list!</h4> -->
                        <v-text-field v-if="visible" class="email-text-field" :loading="loading" density="compact"
                            variant="solo" color="primary" prepend-icon="mdi-email-outline"
                            append-inner-icon="mdi-send-circle-outline" v-model="email" single-line
                            @click:append-inner="onClick" :rules="[regexTest]" hide-details="auto" label="E-mail"
                            hint="For bookings and events, join the mailing list!" persistent-hint required clearable>
                        </v-text-field>
                    </v-container>
                    <v-container v-else class="footer-container-visible-success fill-height">
                        <v-row>
                            <v-col class="d-flex flex-column align-center justify-center">
                                <v-icon size="x-large">mdi-check-circle</v-icon>
                                <h4>Successfully signed up!</h4>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-fade-transition>
            </v-container>
        </v-expand-transition>
    </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { postEmail } from '@/utils/fetch';

const regexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const visible = ref(true);
const email = ref('');
const loading = ref(false);
const successful = ref(false);
const complete = ref(false);
const regexTest = (email: string) => {
    if (email) return regexPattern.test(email) || 'Invalid e-mail.';
    else return true;
}

async function onClick() {
    if (!regexPattern.test(email.value) || email.value.length === 0) return;
    loading.value = true;
    const response = await postEmail(email.value);
    loading.value = false
    if (response) onSuccessful();
}

function onSuccessful() {
    successful.value = true
    setTimeout(() => {
        complete.value = true;
    }, 2000)
}
</script>

<style>
/* #white-text {
    color: #dddddd;
    margin-bottom: 5px;
} */

.email-text-field {
    margin-bottom: -15px;
}

.footer-container-visible-success {
    background-color: darkgreen
}

.footer-container-visible-mailing {
    background-color: black
}

.footer-container-hidden {
    padding: 0;
    margin: 0;
}

.toggle-button {
    background-color: black;
    position: absolute;
    margin-left: 4px;
    margin-top: -45px;
    left: 0;
    top: 0;
}
</style>