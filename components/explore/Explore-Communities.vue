<template>
  <v-card
    v-if="isLoading"
    class="mx-auto pt-2"
    max-width="100%"
    tile>
    <MenuIconLoader :number-of-items="40"/>
  </v-card>
  <v-card
    v-else-if="communities.length > 0"
    class="mx-auto pt-4"
    max-width="100%"
    tile>
    <span class="ml-3 text-h4">Accounts</span>
    <v-divider class="mt-4"/>
    <v-list dense>
      <v-list-item-group
        color="primary">
        <v-list-item
          :to="`/community/${community.name}`"
          class="py-1"
          v-for="(community, i) in communities"
          :key="i">
          <v-list-item-avatar>
            <UserAvatar color="primary" :avatar-src="community.picture" :avatar-string="community.name"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-body-1" v-text="community.name"/>
            <v-list-item-title class="mt-1 text-caption" v-text="community.about"/>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  <NoResult text="user" v-else/>
</template>

<script>
  import NoResult from "../shared/No-Result";
  import UserAvatar from "../shared/UserAvatar";
  import MenuIconLoader from "../homepage/Menu-Icon-Loader";
  export default {
    name: "Explore-Communities",
    props: ['communities', 'isLoading'],
    components: { MenuIconLoader, UserAvatar, NoResult }
  }
</script>

<style scoped>

</style>