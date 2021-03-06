<template>
  <div v-if="isPageLoading">
    <ProfileHeaderLoader/>
    <v-row>
      <v-col cols="12" lg="3" sm="12">
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <PostQuickViewLoader v-for="i in 5" :key="i"/>
      </v-col>
      <v-col cols="12" lg="3" sm="12">
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-row>
      <v-img :src="getProfileBanner" lazy-src="/images/login-background.jpg"
             :eager="true" @load="imageLoaded" max-height="300">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"/>
          </v-row>
        </template>
      </v-img>
    </v-row>
    <v-row class="primary" justify="center" align="center">
      <div>
        <v-btn
          color="rgb(255, 0, 0, 0)"
          elevation="0"
          :class="getPaddingAndMargin">
          <span class="mr-2">{{ profile.numberOfPosts }}</span> Posts
        </v-btn>
      </div>
      <v-divider class="my-3" vertical/>
      <div>
        <v-btn
          color="rgb(255, 0, 0, 0)"
          elevation="0"
          @click="openFollowersDialog"
          :class="getPaddingAndMargin">
          <span class="mr-2">{{ profileInfo.followers.length }}</span> Followers
        </v-btn>
      </div>
      <v-divider class="my-3" vertical/>
      <div>
        <v-btn
          color="rgb(255, 0, 0, 0)"
          elevation="0"
          @click="openFollowingDialog"
          :class="getPaddingAndMargin">
          <span class="mr-2">{{ profileInfo.followings.length }}</span> Following
        </v-btn>
      </div>
      <v-divider class="my-3" vertical/>
      <div>
        <v-btn
          color="rgb(255, 0, 0, 0)"
          elevation="0"
          :class="getPaddingAndMargin">
          <span class="mr-2">{{ profile.numberOfLikes }}</span> Likes
        </v-btn>
      </div>
      <v-divider class="my-3" vertical/>
      <div>
        <v-btn
          color="rgb(255, 0, 0, 0)"
          elevation="0"
          :class="getPaddingAndMargin">
          <span class="mr-2">{{ profile.numberOfComments }}</span> Comments
        </v-btn>
      </div>
      <v-divider
        v-if="this.$route.params.username === this.$auth.user.username"
        class="my-3" vertical/>
      <div
        v-if="this.$route.params.username === this.$auth.user.username">
        <nuxt-link
          class="text-decoration-none"
          to="/preferences">
          <v-btn
            color="rgb(255, 0, 0, 0)"
            elevation="0"
            :class="getPaddingAndMargin">
            <v-icon class="mr-2">mdi-cog</v-icon>
            Settings
          </v-btn>
        </nuxt-link>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" lg="3" sm="12">
        <ProfileDescription :updateFollowers="fetchFollowers"/>
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-tabs style="border-radius:2px" class="tab-stick mb-4" v-model="selectedTab">
          <v-tab @click="switchToPosts" :key="1">Posts</v-tab>
          <v-tab @click="switchToComments" :key="2">Comments</v-tab>
          <v-tab @click="switchToLikes" :key="3">Likes</v-tab>
        </v-tabs>
        <v-container class="ml-0 pa-0" v-for="(object, index) in getComponentObjects" :key="index">
          <component :is="comp" v-bind="componentArgs(index)" @hook:mounted="countChild"/>
        </v-container>
      </v-col>
      <v-col cols="12" lg="3" sm="12">
      </v-col>
    </v-row>

    <UserListDialog
      :title="userListDialog.title"
      :isDialogEnabled="userListDialog.isEnabled"
      :user-list="userListDialog.userList"
      :closeFunc="()=>{userListDialog.isEnabled=false}"/>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import anime from 'animejs/lib/anime.es.js'

  import ProfileDescription from '@/components/profile/ProfileDescription'
  import ProfilePosts from '@/components/profile/ProfilePosts'
  import ProfileComments from '@/components/profile/ProfileComments'
  import ProfileLikes from '@/components/profile/ProfileLikes'
  import UserAvatar from "../../components/shared/UserAvatar";
  import UserListDialog from "../../components/shared/User-List-Dialog";
  import PostQuickViewLoader from "../../components/homepage/Post-Quick-View-Loader";
  import ProfileHeaderLoader from "../../components/profile/Profile-Header-Loader";

  export default {
    data: () => {
      return {
        n: 10,
        model: 0,
        username: '',
        selectedTab: 0,
        comp: ProfilePosts,
        componentObjects: [],
        numberOfChildRendred: 0,
        hash: '',

        bannerImageForError: '/images/login-background.jpg',
        hasError: false,
        isCompleted: false,
        errorTime: null,

        userListDialog: {
          title: "",
          isEnabled: false,
          userList: []
        },

        profileInfo: {
          followers: [],
          followings: [],
        },


        loading: {
          isFollowersLoading: true,
          isFollowingLoading: true,
        },
      }
    },
    components: {
      ProfileHeaderLoader,
      PostQuickViewLoader,
      UserAvatar,
      ProfileDescription,
      UserListDialog
    },
    mounted() {
      this.fetchFollowers();
      this.fetchFollowings();
    },
    watch: {
      getStatusOfReq: {
        handler: function (val, oldVal) {
          console.log(val)
          if (val === true) {
            this.errorTime = setTimeout(() => {
              this.hasError = true
            }, 2000)
            this.isCompleted = true
          }
        }
      }
    },
    computed: {
      ...mapGetters('modules/profile/profilePosts', ['getPosts']),
      ...mapGetters('modules/profile/profileComments', ['getComments']),
      ...mapGetters('modules/profile/profileLikes', ['getLikes']),
      ...mapGetters('modules/profile/profileInfo', ['getProfile']),
      ...mapGetters('modules/profile/profileInfo', ['getProfile', 'getStatusOfReq']),
      getPaddingAndMargin() {
        if (this.$vuetify.breakpoint.xl) {
          return 'text-body-2 py-8 px-5 mx-1'
        } else if (this.$vuetify.breakpoint.lg) {
          return 'text-caption py-8 px-5 mx-1'
        } else if (this.$vuetify.breakpoint.md) {
          return 'text-caption py-8 px-5 mx-1'
        } else if (this.$vuetify.breakpoint.sm) {
          return 'text-caption py-8 px-5 mx-1'
        } else if (this.$vuetify.breakpoint.xs) {
          return 'text-caption py-8 px-5 mx-1'
        }
      },
      profile() {
        return this.getProfile
      },
      getProfileBanner() {
        if (this.hasError) {
          return this.bannerImageForError
        }
        return this.$axios.defaults.baseURL + this.profile.profileBannerUrl
      },
      getComponentObjects() {
        if (this.comp === ProfilePosts) {
          this.componentObjects = this.getPosts
        } else if (this.comp === ProfileComments) {
          this.componentObjects = this.getComments
        } else {
          this.componentObjects = this.getLikes
        }
        return this.componentObjects
      },
      isPageLoading() {
        for (const [key, value] of Object.entries(this.loading)) {
          if (value) {
            return true;
          }
        }
        return false;
      },
    },
    created() {
      this.username = this.$route.params.username;
      console.log(this.$route);
      this.getProfileInfo(this.username)
      .catch((error) => {
        if (error.response.status == 404) {
          this.$nuxt.error({ statusCode: 404, message: 'profile not found' })
        }
      });
      let query = this.$route.query.show;
      this.switchToProperTab(query);
      console.log(this.$route.params.username);
      this.hash = this.$route.hash;
    },
    methods: {
      ...mapActions('modules/profile/profileInfo', ['getProfileInfo']),
      ...mapActions('modules/profile/profilePosts', ['getProfilePosts']),
      ...mapActions('modules/profile/profileComments', ['getProfileComments']),
      ...mapActions('modules/profile/profileLikes', ['getProfileLikes']),
      ...mapActions('modules/follow', ['getFollowings']),
      ...mapActions('modules/follow', ['getFollowers']),
      fetchFollowings() {
        this.getFollowings({
          username: this.$route.params.username
        }).then(({ data }) => {
          this.loading.isFollowingLoading = false;
          this.profileInfo.followings = data.user_followings;
          this.profileInfo.followings.map((user) => {
            user.isFollowLoading = false;
            return user;
          });
        })
      },
      fetchFollowers() {
        this.getFollowers({
          username: this.$route.params.username
        }).then(({ data }) => {
          this.loading.isFollowersLoading = false;
          this.profileInfo.followers = data.user_followers;
          this.profileInfo.followers.map((user) => {
            user.isFollowLoading = false;
            return user;
          });
        })
      },
      switchToProperTab(query) {
        if (query) {
          if (query === 'comments') {
            this.selectedTab = 1;
            this.switchToComments();
            return
          } else if (query === 'likes') {
            this.selectedTab = 2;
            this.switchToLikes();
            return
          }
        }
        this.switchToPosts()
      },
      switchToPosts() {
        this.getProfilePosts(this.username)
        .catch((error) => {
          this.showErrorWithMessage('Something went wrong')
        });
        this.comp = ProfilePosts
      },
      switchToComments() {
        this.getProfileComments(this.username)
        .catch((error) => {
          this.showErrorWithMessage('Something went wrong')
        });
        this.comp = ProfileComments
      },
      switchToLikes() {
        this.getProfileLikes(this.username)
        .catch((error) => {
          this.showErrorWithMessage('Something went wrong')
        });
        this.comp = ProfileLikes
      },
      componentArgs(index) {
        if (this.comp === ProfilePosts) {
          return {
            post: this.getComponentObjectById(index)
          }
        } else if (this.comp === ProfileComments) {
          return {
            comment: this.getComponentObjectById(index)
          }
        } else {
          return {
            likedObj: this.getComponentObjectById(index),
            nickname: this.getProfile.nickname
          }
        }
      },
      getComponentObjectById(id) {
        return this.componentObjects[id]
      },
      setHash(hash) {
        if (hash) {
          let element_to_scroll_to = document.getElementById(hash.slice(1));
          element_to_scroll_to.scrollIntoView();
          setTimeout(() => {
            anime({
              targets: element_to_scroll_to,
              opacity: 0.3,
              direction: 'alternate',
              duration: 1000,
              easing: 'easeInOutSine'
            });
          }, 500)
        }
      },
      countChild() {
        this.numberOfChildRendred++;
        if (this.numberOfChildRendred === this.componentObjects.length) {
          setTimeout(() => {
            this.setHash(this.hash)
          }, 1)
        }
      },
      showErrorWithMessage(message) {
        this.$notifier.showMessage({ content: message, color: 'error' });
      },
      imageLoaded(event) {
        if (this.errorTime) {
          clearTimeout(this.errorTime);
          this.errorTime = null
        }
      },
      openFollowersDialog() {
        this.userListDialog.isEnabled = true;
        this.userListDialog.title = "Followers";
        this.userListDialog.userList = this.profileInfo.followers;
      },
      openFollowingDialog() {
        this.userListDialog.isEnabled = true;
        this.userListDialog.title = "Followings";
        this.userListDialog.userList = this.profileInfo.followings;
      },
      redirectToNotFound() {
        this.$router.push({
          path: '/404'
        })
      }
    }
  }
</script>

<style scoped>

</style>
