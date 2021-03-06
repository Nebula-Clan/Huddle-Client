<template>
  <v-card class="mb-2 pa-1 layout-post" elevation="2">
    <v-row>
      <v-col class="ml-5">
        <v-row class="pb-1">
          <nuxt-link
            class="text-decoration-none link"
            :to="'/posts/' + post.id"
          >
            <h2>{{ post.title }}</h2>
          </nuxt-link>
          <nuxt-link
            style="text-decoration: none"
            v-if="post.category !== null"
            :to="`/explore?category=${post.category.title}`"
          >
            <v-sheet
              outlined
              elevation="1"
              color="blue px-3 mt-1 ml-4 rounded-pill"
            >
              <span>
                {{ post.category.title }}
              </span>
            </v-sheet>
          </nuxt-link>
        </v-row>
        <v-row class="pb-1">
          <div class="mr-2">
            <v-icon size="15"> mdi-clock </v-icon>
            <span style="font-size: smaller">{{ postDateDuration }}</span>
          </div>
        </v-row>
      </v-col>
      <v-col class="text-right" cols="2">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="ml-auto">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list elevation="24">
            <v-list-item>
              <v-icon>mdi-flag</v-icon>
              <v-list-item-title
                class="ml-1"
                style="cursor: pointer"
                @click="reportOverlay = !reportOverlay"
                >Report</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-icon>mdi-heart</v-icon>
              <v-list-item-title
                class="ml-1"
                style="cursor: pointer"
                @click="showListOfLikes"
                >List of likes</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-if="post.header_image && post.header_image !== '/media/undefined'"
        class="mx-5 header-image text-center"
      >
        <img
          alt="image"
          :src="$axios.defaults.baseURL + '/media/' + post.header_image"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mx-5">
        <p>{{ post.description }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-right ml-2">
        <v-chip
          nuxt
          :key="i"
          v-for="(tag, i) in post.hashtags"
          :to="`/explore?hashtag=${tag.text}`"
          outlined
          small
          class="mx-1"
          :color="chipsColors[i]"
        >
          #{{ tag.text }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row class="mx-2">
      <v-col>
        <nuxt-link
          class="text-decoration-none link d-flex"
          :to="'/profile/' + post.author.username"
        >
          <div>
            <UserAvatar
              color="primary"
              :avatar-string="post.author.username"
              :avatar-src="post.author.profile_picture"
            />
          </div>
          <div class="d-flex flex-column ml-3">
            <span
              ><b>{{ post.author.username }}</b></span
            >
            <span style="font-size: smaller"
              >{{ post.author.first_name }} {{ post.author.last_name }}</span
            >
          </div>
        </nuxt-link>
      </v-col>
      <v-col class="text-right d-flex justify-end align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              :color="likedPost"
              @click="likePost"
              icon
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Like</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              @click="isCommentToPostExpanded = !isCommentToPostExpanded"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon>mdi-comment</v-icon>
            </v-btn>
          </template>
          <span>Comment</span>
        </v-tooltip>
      </v-col>

      <v-overlay
      :z-index="99"
      :value="reportOverlay"
      opacity="0.8"
      >
          <LazyReport @cancel="reportOverlay = !reportOverlay" :postID="post.id"/>
      </v-overlay>

      <v-overlay
      :z-index="99"
      :value="likesOverlay"
      opacity="0.8"
      >
          <LazyOverlayListOfProfile @cancel="likesOverlay = !likesOverlay" :profiles="listOfProfileLikedPost" />
      </v-overlay>
    </v-row>

    <v-expand-transition>
      <div class="ml-3 mt-3" v-show="isCommentToPostExpanded">
        <NewComment
          :is-loading-to-send="isLoadingToSendComment"
          :submit-comment="replyComment"
        />
      </div>
    </v-expand-transition>
    <div class="report" v-if="post.is_reported" id="report">
      <p>
        This post has been reported by several users. It may contain
        inappropriate content.
      </p>
      <v-btn @click="showPost" color="accent" outlined> Show post </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserAvatar from "../shared/UserAvatar";
import { dateDuration } from "~/shared-functions/Posts";
import NewComment from "../comment/NewComment";
import Report from "~/components/shared/Report";
import OverlayListOfProfile from "~/components/profile/OverlayListOfProfile";

export default {
  name: "Post-quick-view",
  components: { NewComment, UserAvatar },
  props: ["post"],
  data: () => {
    return {
      isCommentToPostExpanded: false,
      isLoadingToSendComment: false,
      reportOverlay: false,
      likesOverlay: false,
      listOfProfileLikedPost: [],

      chipsColors: ["blue", "red", "green", "purple", "orange"],
      like: false,
      dislike: false,
    };
  },
  computed: {
    likedPost() {
      if (!this.dislike && (this.post.is_liked || this.like)) {
        return "pink";
      } else {
        return "";
      }
    },
    postDateDuration() {
      return dateDuration(this.post.date_created);
    },
  },
  methods: {
    ...mapActions("modules/profile/profileLikes", [
      "submitLikeAtPostWithID",
      "getProfilesThatLikedPostByID",
      "deleteLikeAtPostWithID",
    ]),
    ...mapActions("modules/comment/post_comment", ["replyToPost"]),

    likePost() {
      if (!this.like) {
        this.submitLikeAtPostWithID(this.post.id)
          .then(({ data }) => {
            this.like = true;
            this.dislike = false;
          })
          .catch((error) => {
            if (error.response.status == 403) {
              this.showErrorWithMessage("Please Login in or Sign Up");
            }
          });
      } else {
        this.deleteLikeAtPostWithID(this.post.id)
          .then(({ data }) => {
            this.like = false;
            this.dislike = true;
          })
          .catch((error) => {
            if (error.response.status == 403) {
              this.showErrorWithMessage("Please Login in or Sign Up");
            }
          });
      }
    },
    showErrorWithMessage(message) {
      this.$notifier.showMessage({ content: message, color: "error" });
    },
    replyComment(newComment) {
      this.isLoadingToSendComment = true;
      this.replyToPost({
        postId: this.post.id,
        content: newComment.replayText,
      })
        .then(({ data }) => {
          this.isLoadingToSendComment = false;
          this.isCommentToPostExpanded = !this.isCommentToPostExpanded;
          this.$notifier.showMessage({ content: "Sent", color: "success" });
        })
        .catch((error) => {
          this.showErrorWithMessage(error);
        });
    },
    showPost: function () {
      // document.getElementById('report').setAttribute('display', 'none')
      this.post.is_reported = false;
    },
    showListOfLikes() {
      this.getProfilesThatLikedPostByID(this.post.id)
        .then((res) => {
          console.log(res);
          this.listOfProfileLikedPost = res;
          this.likesOverlay = !this.likesOverlay;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // if (this.post.id === 88) {
    //   this.post.is_reported = true
    // }
  },
};
</script>

<style lang="scss" scoped>
.layout-post {
  position: relative;
  .report {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(15px);
    padding: 50px;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.header-image {
  text-align: center;

  img {
    max-width: 100%;
    max-height: 350px;
    border-radius: 5px;
  }
}
</style>
