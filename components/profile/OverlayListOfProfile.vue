<template>
    <v-container fluid>
        <v-card elevation="2" max-width="400">
            <v-container class="py-0">
                <v-row justify="end" align="end">
                    <v-icon class="ml-auto" @click="cancel">mdi-close</v-icon>
                </v-row>
            </v-container>
            <v-row justify="center" align="center">
                <v-card-title class="text-center">
                        Liked By:
                </v-card-title>
                <v-card-text>
                    <v-divider/>
                    <v-virtual-scroll
                        v-if="profiles.length !== 0"
                        :bench="10"
                        :items="profiles"
                        width="400"
                        max-height="450"
                        item-height="90"
                        class="px-15">
                            <template v-slot:default="{ item }">
                                <ProfileCard :profile="item" />
                            </template>
                    </v-virtual-scroll>
                    <div v-else style="width:400px">
                        <p class="text-center">
                            No one
                        </p>
                    </div>
                </v-card-text>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import ProfileCard from './ProfileCard'

  export default {
    props: {
        profiles: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        isLoading: false,
        model: null,
        search: null,
        tab: null,
        index: 0,
        isActive: false,
        hasError: false,
        isImageLoaded: false,
        errorTime: null
    }),
    methods: {
        cancel() {
            this.$emit('cancel')
        }
    },
    mounted() {
        this.isLoading = true

        this.isLoading = false
    },
  }
</script>

<style scoped>
::-webkit-scrollbar { width: 8px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #666; }
::-webkit-scrollbar-track {  background-color: #646464;}
::-webkit-scrollbar-track-piece { background-color: #000;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: #646464;}
::-webkit-resizer { background-color: #666;}

.followers {
    /* #6daddb */
    /* 537895 */
    /* 485563 */
    /* 2b5876  */
/* background-image: linear-gradient(315deg, rgba(0, 0, 0, 0) 72%,#537895 );
border-top-left-radius: 25px; */
}
</style>
