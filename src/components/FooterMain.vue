<template>
    <v-footer app bottom fixed elevate padless>
        <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center align-center">
                <h4>To stay updated, Join the mailing list below</h4>
            </v-col>
            <v-col cols="8" class="d-flex justify-center align-center">
                <v-text-field
                    density="compact"
                    v-model="email"
                    :rules="emailRules"
                    hide-details="auto"
                    label="E-mail"
                    required
                ></v-text-field>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
                <v-btn>Submit</v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup lang="ts">
const valid = false;
const email = '';
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'];
</script>