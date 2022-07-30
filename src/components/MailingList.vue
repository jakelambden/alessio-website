<template>
    <div id="mailing-list">
        <v-container class="d-flex flex-column align-center justify-center pa-4 bg-surface">
            <v-row>
                <v-col cols="12" class="d-flex flex-column align-center">
                    <h4>Join the mailing list to keep up to date with news</h4>
                </v-col>
                <v-col cols="10">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="2" class="d-flex flex-column align-center">
                    <v-btn>Submit</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
// Change this bizz
export default {
data: () => ({
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>

<style>
#mailing-list {
    height: 200px;
}
</style>