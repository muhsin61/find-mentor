<template>
  <div class="container">
    <h1>Active Mentorships</h1>
    <h3>
      <a href="https://forms.gle/1517jvGHWW1Ma66K9"
        >Add your mentorship campaign</a
      >
    </h3>
    <p>This community, driven/developed by a fellow community.</p>
    <p>
      As you can see, this project is the mentorship project. Developed by
      mentees.
    </p>
    <p>You can find the mentors active mentorship campaigns below.</p>
    <p>Pick one & contribute. You're mentee now.</p>
    <div v-for="mentorship in mentorships" :key="mentorship.slug">
      <NuxtLink :to="`/peer/${mentorship.mentor.split('/').pop()}`" itemprop="url">
        <active-mentorship-card :mentorship="mentorship"></active-mentorship-card>
      </NuxtLink>
     </div>
    <hr>
    <h4>
      <a
        href="https://github.com/cagataycali/find-mentor/blob/master/pages/mentorships.vue"
        >Contribute this page</a
      >
    </h4>
  </div>
</template>

<script>
import ActiveMentorshipCard from '../components/ActiveMentorshipCard.vue'
export default {
  async fetch() {
    const data = await this.$content('activeMentorships').fetch()
    this.mentorships = data.mentorships
  },
  data() {
    return { mentorships: [] }
  }
}
</script>
