<template>
    <v-container>
        <v-row justify="space-around">
            <v-card width="400">
                <v-hover v-slot="{ hover }">
                    <v-img
                    height="200px"
                    :src="getProfileBannerImgUrl"
                    @error="imgError"
                    >
                        <v-btn 
                        v-if="hover" 
                        icon 
                        dark 
                        small 
                        absolute 
                        top 
                        right 
                        depressed 
                        :ripple="false" 
                        @click="cancelOverlay"
                        class="no-background-hover">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    <v-card-title class="white--text ml-5" style="margin-top:120px">
                        <Avatar class="avatar-border" :substituteChar="getProfileFirstChar" :avatarUrl="getProfileImgUrl"
                            :timeOut="3500" :avatarSize="56" :textSize="5" :showByName="!profile.isValidProfileImg" />
                        <p class="ml-3 mb-0" style="cursor: pointer;" @click="redirectToProfilePage">
                            {{ getProfileFirstNameAndLastName }}
                        </p>
                    </v-card-title>
                    </v-img>
                </v-hover>

                <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                    {{ getProfileFirstNameAndLastName }} info's
                </div>

                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                    v-for="(info, idx) in getProfileInfo"
                    :key="idx"
                    :color="info.color"
                    small
                    >
                    <div>
                        <div class="font-weight-normal">
                        <strong>{{ info.infoTitle }}</strong>
                        </div>
                        <div>{{ info.infoValue }}</div>
                    </div>
                    </v-timeline-item>
                </v-timeline>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>


<script>
export default {
    props: {
        profile: {
            require: true,
            type: Object
        }
    },
    data() {
        return {
            bannerImgUrl: '',
            username: null,
            description: null,
            fistname: null,
            lastname: null
        }
    },
    created() {
        this.bannerImgUrl = this.$axios.defaults.baseURL + this.profile.profileBannerUrl
        this.username = this.getProperText(this.profile.username, 'has no username')
        this.description = this.getProperText(this.profile.description, 'has no bio')
        this.firstname = this.getProperText(this.profile.firstname, 'has no firstname')
        this.lastname = this.getProperText(this.profile.lastname, 'has no lastname')
    },
    computed: {
        getProfileFirstChar() {
            return this.profile.firstname.slice(0, 1).toUpperCase()
        },
        getProfileImgUrl() {
            return this.$axios.defaults.baseURL + this.profile.profileImageUrl
        },
        getProfileFirstNameAndLastName() {
            return `${this.profile.firstname} ${this.profile.lastname}`
        },
        getProfileBannerImgUrl() {
            return this.bannerImgUrl
        },
        getProfileInfo() {
            return ([
                {
                    infoTitle: 'Username',
                    infoValue: this.username,
                    color: 'deep-purple lighten-1',
                },
                {
                    infoTitle: 'Bio',
                    infoValue: this.description,
                    color: 'green',
                },
                {
                    infoTitle: 'Firstname',
                    infoValue: this.firstname,
                    color: 'deep-purple lighten-1',
                },
                {
                    infoTitle: 'Lastname',
                    infoValue: this.lastname,
                    color: 'green',
                }
            ])
        }
    },
    methods: {
        cancelOverlay() {
            this.$emit('cancel')
        },
        imgError() {
            this.bannerImgUrl = '/images/login-background.jpg'
        },
        getProperText(text, substituteText) {
            if (text !== null && text !== undefined & text.length !== 0) {
                return text
            }

            return substituteText
        },
        redirectToProfilePage() {
            this.$router.push({
                path: `/profile/${ this.profile.username }`
            })
        }
    }
}
</script>

<style scoped>
.no-background-hover {
    background-color: transparent !important;
}

</style>