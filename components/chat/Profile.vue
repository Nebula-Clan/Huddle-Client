
<template>
    <v-list-item two-line>
        <v-list-item-avatar size="50" class="avatar-border">
            <v-badge
                color="teal lighten-2"
                overlap
                right
                bottom
                dot
                offset-x="11"
                offset-y="11"
            >
                <Avatar class="avatar-border" :substituteChar="'K'" :avatarUrl="'/images/LL1.jpg'"
                :timeOut="12000" :avatarSize="50" :textSize="5" :avatarProperty="profileAvatar" />
            </v-badge>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title >Jhon</v-list-item-title>
            <v-list-item-subtitle> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, deserunt!</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="py-3">
            <v-icon size="11" color="blue" class="new-message">mdi-checkbox-blank-circle</v-icon>
            <v-icon size="11">mdi-pin-outline</v-icon>
        </v-list-item-action>
    </v-list-item>
</template>

<script>
import Avatar from '~/components/shared/Avatar'
export default {
    computed: {
        profileAvatar() {
            return {
                'tile': true
            }
        }
    }
}
</script>

<style scoped>
.dot {
  height: 10px;
  width: 10px;
  background-color:#4DB6AC;
  border-radius: 50%;
  display: inline-block;
  margin-left: 32px;
  margin-top: 37px;
  z-index: 10;
}

.avatar-border {
    border-radius: 10px;
}

.new-message {
    border-radius: 50%;
    box-shadow: 0px 0px 5px #2196F3;
}
</style>