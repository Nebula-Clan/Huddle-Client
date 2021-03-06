<template>
    <div :class="[getClass, 'd-inline-flex']" :message-id="message.messageID">
        <Avatar v-if="!message.isSender && previousId != currentId"
                class="avatar mt-5 ml-4" 
                :substituteChar="getProfileFirstChar" 
                :avatarUrl="getProfieImageUrl"
                :timeOut="12000" 
                :avatarSize="35" 
                :textSize="5"
                @error="imgError"
                :showByName="!profile.isValidProfileImg" />
        <v-card max-width="350" elevation="3" :class="['card-back', 'text--secondary', 'pa-3', 'card-border', getTriangleClass]">
            <v-card-text :class="getText" v-html="getMessage">
            </v-card-text>
            <component :is="getMessageComponent" v-bind="messageProps" v-if="isComponentMessage">

            </component>
            <v-card-actions class="pa-0">
                <div class="mb-0 ml-auto" style="font-size:13px">
                    {{ date() }}
                    <v-icon v-if="message.isSender" color="blue-grey darken-1" class="ml-auto" size="16" style="filter: contrast(20%);">
                        {{ getMessgaeStatusIcon }}
                    </v-icon>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

import VoiceMessage from './VoiceMessage'
import ImageMessage from './ImageMessage'
import FileMessage from './FileMessage'

export default {
    props: {
        profile: {
            type: Object,
            required: true
        },
        message: {
            type: Object,
            required: true
        },
        previousId: {
            type: Number,
            required: false,
            default: 1
        },
        currentId: {
            type: Number,
            required: false,
            default: 1
        },
        observer: {
            required: true,
        }
    },
    data() {
        return {
            random: false,
            isUnderObserver: false
        }
    },
    mounted() {
        if (!this.message.isSeen && !this.message.isSender) {
            this.addToObserver()
        } 
    },
    beforeUpdate() {
        
    },
    updated() {
        if (!this.isUnderObserver && !this.message.isSeen && !this.message.isSender) {
            this.addToObserver()
        } else if (this.isUnderObserver && this.message.isSeen) {
            this.removeFromObserver()
        }
    },
    beforeDestroy() {
        if (!this.message.isSeen  && !this.message.isSender && this.isUnderObserver) {
            this.removeFromObserver()
        }
    },
    watch: {
        'message.isSeen': {
            handler: function(val, oldVal) {
                if (val !== oldVal) {
                    this.$forceUpdate()
                }
            },
            deep: true
        }
    },
    computed: {
        isComponentMessage() {
            if (this.message.messageType !== 0) {
                return true
            }

            return false
        },
        messageProps() {
            if (this.message.messageType === 1) {
                return {
                    imageSrc: this.$axios.defaults.baseURL + '/' + this.message.fileUrl
                }
            } else if (this.message.messageType === 2) {
                return {
                    audioUrl: this.$axios.defaults.baseURL + '/' + this.message.fileUrl
                }
            } else if (this.message.messageType === 3) {
                return {
                    fileUrl: this.$axios.defaults.baseURL + '/' + this.message.fileUrl,
                    fileName: this.message.fileName
                }
            } 

            return null
        },
        getMessageComponent() {
            if (this.message.messageType === 1) {
                return ImageMessage
            } else if (this.message.messageType === 2) {
                return VoiceMessage
            } else if (this.message.messageType === 3) {
                return FileMessage
            } 
            return null
        },
        getClass() {
            if (this.message.isSender) {
                return 'ml-auto mr-2'
            } else {
                return 'mr-auto ml-2'
            }
        },
        getText() {
            if (this.message.isSender) {
                return 'pa-0 mr-8 green--text text--lighten-1'
            } else {
                return 'pa-0 mr-8'
            }
        },
        getTriangleClass() {
            if (this.previousId != this.currentId) {
                if (this.message.isSender) {
                    return 'right mr-7'
                } else {
                    return 'left ml-3'
                }
            } else {
                if (this.message.isSender) {
                    return 'mr-7'
                } else {
                    return 'ml-16'
                }
            }
        },
        getMessage() {
            if (this.message.messageType !== 0 ) {
                return
            }

            if (this.message == undefined || this.message == null) {
                return this.message
            }
            let newMessage = this.message.messageBody.replace(/(?:\r\n|\r|\n)/g, '<br>');
            return newMessage
        },
        getProfieImageUrl() {
            if (this.profile != undefined) {
                return this.$axios.defaults.baseURL + this.profile.profileImageUrl
            }

            return '' 
        },
        getProfileFirstChar() {
            return this.profile.firstname.slice(0, 1).toUpperCase()
        },
        getMessgaeStatusIcon() {
            if (this.message.isSeen) {
                return 'mdi-email-open'
            }
            
            return 'mdi-email'
        }
    },
    methods: {
        ...mapActions('modules/chat/chatManager', ['setValidationOfProfileImg']),
        imgError() {
            this.setValidationOfProfileImg({
                username: this.profile.username,
                isValid: false
            })
        },
        date() {
            let date = new Date(this.message.messageDate)
            return date.toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute:'2-digit',
                hour12: false
            });
        },
        addToObserver() {
            this.observer.observe(this.$el)
            this.isUnderObserver = true
        },
        removeFromObserver() {
            this.observer.unobserve(this.$el)
            this.isUnderObserver = false
        }
    }
}
</script>


<style scoped>

.avatar {
    border-radius: 5px;
}


.unseen-icon {
    filter: contrast(50%);
    position: absolute;
    right:0px;
    bottom: 0px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding-left: 5px;
}

.card-border {
    border-radius: 11px;
}

.right {
  
}



.left {
  
}


</style>