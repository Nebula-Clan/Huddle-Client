<template>
  <v-row no-gutters class="back">
    <v-col cols="12" class="px-0">
      <v-textarea class="mx-0 chat-message-typer-textarea"  v-model="text"
       style="border-top: 1px solid gray;border-radius:0px" multi-line auto-grow rows="1"
       hide-details flat solo placeholder="Send message ..."
       @keydown="handleKey" :disabled="isInputDisable">
      </v-textarea>
    </v-col>
    <v-col cols="12" class="px-3 d-flex mb-2">
      <v-file-input @[canChoseFile].native.prevent="deleteFile" class="d-flex"
      style="filter: contrast(50%);" :prepend-icon="fileIcon" hide-input dense
        v-model="file"
      ></v-file-input>
      <EmojiIcon slot="append" class="ml-auto mt-auto mb-auto" @emoji="appendEmoji" />
      <v-icon slot="append" class="ml-3" color="green darken-2" @click="sendMessageOrRecord">
        {{ getSendIcon }}
      </v-icon>
    </v-col>
  </v-row>
</template>

<script>
import EmojiIcon from './icons-utils/EmojiIcon'
import FileIcons from './icons-utils/FileIcons'
import UserInputButton from './UserInputButton.vue'
import Suggestions from './Suggestions.vue'
import FileIcon from './assets/file.svg'
import CloseIconSvg from './assets/close.svg'
import IconCross from './icons-utils/icons/IconCross'
import IconOk from './icons-utils/icons/IconOk.vue'
import IconSend from './icons-utils/icons/IconSend.vue'
import store from './store/'

import { recordAudio, duration } from '~/components/chat/Message/utils/recorder'

export default {
  components: {
    EmojiIcon,
    FileIcons,
    UserInputButton,
    Suggestions,
    IconCross,
    IconOk,
    IconSend
  },
  data() {
    return {
      file: null,
      inputActive: false,
      showEmoji: false,
      showFile: true,
      text: null,
      timeOut: null,
      uploadedFile: false,
      file: null,
      recorder: null
    }
  },
  watch: {
    file: {
      handler: function(val, oldval) {
        if (val !== undefined && val !== null) {
          this.text = val.name
          this.uploadedFile = true
        } else {
          this.text = ''
          this.uploadedFile = false
        }
      }
    }
  },
  computed: {
    isEditing() {
      return false
    },
    fileIcon() {
      if (this.uploadedFile) {
        return 'mdi-file-remove-outline'
      }

      return 'mdi-attachment'
    },
    canChoseFile() {
      if (this.uploadedFile) {
        return 'click'
      }

      return null
    },
    getSendIcon() {
      if (this.text === null || this.text === undefined || this.text === '') {
        return 'mdi-microphone-outline'
      } else if (this.recorder !== null) {
        return 'mdi-microphone-settings'
      }

      return 'mdi-send-outline'
    },
    isInputDisable() {
      if (this.uploadedFile || this.recorder !== null) {
        return true
      }

      return false
    }
  },
  mounted() {
    
  },
  methods: {
    deleteFile() {
      this.file = null
    },
    appendEmoji(emoji) {
      this.text += emoji
    },
    sendMessageOrRecord() {
      if (this.text === null || this.text === undefined || this.text === '' || this.recorder !== null) {
        this.handleRecord()
      } else {
        this.sendMessage()
      }
    },
    sendMessage() {
      if (this.timeOut !== null) {
        clearTimeout(this.timeOut)
        this.timeOut = null
      }

      if (this.uploadedFile) {
        this.sendFileMessage()
      } else if (this.recorder !== null) {
        this.sendVoiceMessage()
      } else {
        this.sendTextMessage()
      }
    },
    sendTextMessage() {
      this.$emit('stopTyping')
      
      if (this.text != '' || this.text != null || this.text != undefined) {
        this.$emit('sendTextMessage', this.text.replace(/^\s+|\s+$/g, ''))
        this.$nuxt.$emit('hideEmoji')
        this.cleanUpInput()
      }
    },
    sendFileMessage() {
      this.$emit('sendFileMessage', this.file)
      this.cleanUpInput()
    },
    sendVoiceMessage() {
      this.recorder.then((record) => {
          record.stop().then(({ audio, audioBlob, audioUrl, play }) => {
              this.$emit('sendVoiceMessage', audioBlob)
              this.cleanUpInput()
          })
      })
    },
    handleRecord() {
      if (this.recorder !== null) {
        this.sendMessage()
      } else {
        this.startRecordingVoice()
      }
    },
    startRecordingVoice() {
      this.text = 'Recording...'
      this.recorder = recordAudio()
      this.recorder
      .then((recorder) => {
        recorder.start()
        this.$emit('recording')
      })
      .catch((err) => {
        this.cleanUpInput()
      })
    },
    handleKey(event) {
      console.log(event)
      if (event.key === 'Enter' && !event.shiftKey) {
        this.sendMessage()
        return
      }
      this.handleTyping()
    },
    handleTyping() {
      if (this.timeOut === null) {
        this.$emit('typing')
        this.timeOut = setTimeout(() => {
          this.$emit('stopTyping')
          this.timeOut = null
        }, 5000)
      } else {
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$emit('stopTyping')
          this.timeOut = null
        }, 5000)
      }
    },
    cleanUpInput() {
      setTimeout(()=> { 
        this.text = ''
        this.file = null
        this.recorder = null
       } , 50)
    }
  }
}
</script>

<style scoped>

.back {
  /* background-color: #cecece; */
}

.chat-message-typer-textarea {
  max-height: 300px;
  overflow-y: auto;
}

.sc-user-input {
  min-height: 55px;
  margin: 0px;
  position: relative;
  bottom: 0;
  display: flex;
  /* background-color: #f4f7f9; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.sc-user-input--text {
  width: 300px;
  resize: none;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  padding: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #565867;
  -webkit-font-smoothing: antialiased;
  max-height: 200px;
  overflow: scroll;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.sc-user-input--text:empty:before {
  content: attr(placeholder);
  display: block; /* For Firefox */
  /* color: rgba(86, 88, 103, 0.3); */
  filter: contrast(15%);
  outline: none;
  cursor: text;
}

.sc-user-input--buttons {
  width: 100px;
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.sc-user-input--button:first-of-type {
  width: 40px;
}

.sc-user-input--button {
  width: 30px;
  height: 55px;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sc-user-input.active {
  box-shadow: none;
  background-color: white;
  box-shadow: 0px -5px 20px 0px rgba(150, 165, 190, 0.2);
}

.sc-user-input--button label {
  position: relative;
  height: 24px;
  padding-left: 3px;
  cursor: pointer;
}

.sc-user-input--button label:hover path {
  fill: rgba(86, 88, 103, 1);
}

.sc-user-input--button input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  overflow: hidden;
}

.file-container {
  background-color: #f4f7f9;
  border-top-left-radius: 10px;
  padding: 5px 20px;
  color: #565867;
}

.delete-file-message {
  font-style: normal;
  float: right;
  cursor: pointer;
  color: #c8cad0;
}

.delete-file-message:hover {
  color: #5d5e6d;
}

.icon-file-message {
  margin-right: 5px;
}

::-webkit-scrollbar {
    width: 4px;
    height: 10px;

}
::-webkit-scrollbar-thumb {
border-radius: 8px;
background: #c2c9d2;
}
</style>
