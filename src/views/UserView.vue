<template>
  <div>
    <user-profile :user="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">{{ 'Joined ' + user.created }}, </span>
      <span slot="karma">{{ user.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },  
  created() {
    const userName = this.$route.params.id;

    this.$store.dispatch('FETCH_USER',  userName);
  },
}
</script>

<style>

</style>