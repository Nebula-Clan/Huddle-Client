<template>
  <v-card class="mb-2 pa-1" elevation="2">

    <v-row>
      <v-col class="ml-5">
        <nuxt-link class="text-decoration-none white--text" to="#">
          <div class="text-h2">{{ post.title }}</div>
        </nuxt-link>
        <div class="mr-2 my-2">
          <v-icon size="15">
            mdi-clock
          </v-icon>
          <span style="font-size: smaller">{{ dateDuration }}</span>
        </div>
      </v-col>

      <v-col
        class="text-right"
        cols="2">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <span>More</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <div class="ma-3" v-html="content"></div>

    <v-divider></v-divider>

    <v-row class="mx-2">
      <v-col>
        <nuxt-link class="text-decoration-none white--text d-flex"
                   :to="'/profile/'+author.username">
          <div>
            <v-avatar
              class="profile-pic"
              size="40">
              <img
                :alt="author.username"
                :src="$axios.defaults.baseURL + author.profile_picture">
            </v-avatar>
          </div>
          <div class="d-flex flex-column ml-3">
            <span><b>{{ author.username }}</b></span>
            <span style="font-size: smaller">{{ author.first_name }} {{ author.last_name }}</span>
          </div>
        </nuxt-link>
      </v-col>
      <v-col
        class="text-right d-flex justify-end align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Like</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="setCommentToPost(isCommentToPostExpanded)"
              v-bind="attrs"
              v-on="on"
              icon>
              <v-icon>mdi-comment</v-icon>
            </v-btn>
          </template>
          <span>Comment</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-row>
    </v-row>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'PostView',
  data: () => ({}),
  computed: {
    dateDuration: {
      get: function () {
        const unixTime = new Date(this.post.date_created).getTime()
        const now = new Date().getTime()
        if (now - unixTime < 36e+5) {
          return Math.floor((now - unixTime) / 60000) + ' m'
        } else if (now - unixTime > 36e+5 && now - unixTime < 36e+5 * 24) {
          return Math.floor((now - unixTime) / 36e+5) + ' h'
        } else {
          return Math.floor((now - unixTime) / (36e+5 * 24)) + ' day(s)'
        }
      }
    },
    ...mapGetters('modules/post', ['isCommentToPostExpanded'])
  },
  methods: {
    ...mapActions('modules/post', ['setCommentToPost']),
  },
  props: ['post', 'author', 'content'],
}
</script>

<style lang="scss" scoped>
.header-image {
  text-align: center;

  img {
    width: 90%;
    height: 250px;
    border-radius: 5px;
  }
}
</style>