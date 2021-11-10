<template>
  <div>
    <div v-for="game in games" :key="game.id">{{ game.year }}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      games: [],
    };
  },
  methods: {},
  async mounted() {
    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.aGVyb2t1.5tWoGjrKqJvXwK9EkenSz5RGgbstqUZhp-xkZajGRSY`,
      },
    };

    const response = await axios.get(
      'https://crud-app-game.herokuapp.com/game',
      config
    );
    this.games = response.data;
  },
};
</script>
