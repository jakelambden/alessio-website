<template>
    <v-footer app bottom fixed padless>
        <v-row no-gutters>
            <v-col cols="8">
                <v-row no-gutters>
                    <v-col cols="4" class="d-flex justify-center align-center">
                        <h4>Want to keep up with the latest news? Join the mailing list:</h4>
                    </v-col>
                    <v-col cols="4" class="d-flex justify-center align-center">
                        <v-text-field
                            density="compact"
                            v-model="email"
                            :rules="emailRules"
                            hide-details="auto"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="1" class="d-flex justify-center align-center">
                        <v-btn>Submit</v-btn>
                    </v-col>
                 </v-row>
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
                <v-row no-gutters justify="end">
                    <v-btn icon class="mx-4 text-white" variant="plain" size="small">
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-4 text-white" variant="plain" size="small">
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-4 text-white" variant="plain" size="small">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-4 text-white" variant="plain" size="small">
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup lang="ts">
const valid = false;
const email = '';
const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+/.test(v) || 'E-mail must be valid'];
</script>