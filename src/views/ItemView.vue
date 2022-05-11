<template>
  <div>
    <section>
      <!-- 사용자정보 -->
      <user-profile :user="fetchedAskData">
        <router-link slot="username" :to="`/user/${fetchedAskData.user}`">
          {{ fetchedAskData.user }}
        </router-link>        
        <template slot="time">{{ 'Posted ' + fetchedAskData.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedAskData.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedAskData.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedAskData'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_DATA', id);
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.6rem;
}
.fa-user {
  font-size: 1.85rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>