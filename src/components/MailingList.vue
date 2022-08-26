<template>
    <v-footer app bottom fixed class="pa-0 ma-0" color="surface">
        <v-container class="pl-2 pr-2 pb-5">
            <v-row>
                <v-col class="d-flex flex-column align-center pa-0">
                    <h4 class="mb-1">To stay updated, Join the mailing list below</h4>
                    <v-row id="input-section">
                        <v-col class="d-flex">
                            <v-text-field
                                density="compact"
                                v-model="email"
                                :rules="emailRules"
                                hide-details="auto"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-btn>Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
const valid = false;
const email = '';
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'];
</script>

<style>
#input-section{
    width: 100%;
}
</style>