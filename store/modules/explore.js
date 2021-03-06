const state = {};

const getters = {};

const actions = {
  explorePosts({ commit }, data) {
    return this.$axios.get('/api/explorer/get_posts', {
      params: {
        category_filter: data.category
      }
    })
  },
  explorePostsWithHashtag({ commit }, data) {
    return this.$axios.get('api/explorer/posts_by_hashtag', {
      params: {
        hashtag: data.hashtag
      }
    })
  },
  explorePeople({ commit }, data) {
    return this.$axios.get('api/search/search_in_users', {
      params: {
        key: data.keyword === undefined ? "" : data.keyword
      }
    })
  },
  searchPosts({ commit }, data) {
    return this.$axios.get('/api/search/search_in_posts', {
      params: {
        key: data.keyword,
      }
    })
  },
  searchHashtags({ commit }, data) {
    return this.$axios.get("api/hashtag/similarity", {
      params: {
        text: data.keyword === undefined ? "" : data.keyword
      }
    });
  },
  searchCategories({ commit }, data) {
    return this.$axios.get("api/search/search_in_categories", {
      params: {
        key: data.keyword,
      }
    });
  },
  searchCommunities({ commit }, data) {
    return this.$axios.get("/api/search/search_in_communities", {
      params: {
        key: data.keyword === undefined ? "" : data.keyword
      }
    });
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}
