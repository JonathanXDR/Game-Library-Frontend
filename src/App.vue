<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Rating</th>
        <th></th>
        <th></th>
      </tr>
      <tr class="tableRow" v-for="game in games" :key="game.id">
        <td>{{ game.name }}</td>
        <td>{{ game.year }}</td>
        <td>{{ game.rating }}</td>

        <td class="btnCell">
          <input type="radio" />
          <label for="" class="replaceBtn" v-on:click="stateActive(game)">
            <svg
              class="replaceSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"
              />
            </svg>
          </label>
        </td>

        <td class="btnCell">
          <button class="deleteBtn" v-on:click="deleteGame(game)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"
              />
            </svg>
          </button>
        </td>
      </tr>

      <tr>
        <td><input type="text" placeholder="Tetris..." v-model="name" /></td>
        <td>
          <input
            type="number"
            min="1000"
            max="2021"
            placeholder="1984..."
            v-model="year"
          />
        </td>
        <td>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="9.5..."
            v-model="rating"
          />
        </td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <button class="submitBtn" v-on:click="submitGame">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      games: [],
      name: '',
      year: '',
      rating: '',

      axiosConfig: {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.aGVyb2t1.5tWoGjrKqJvXwK9EkenSz5RGgbstqUZhp-xkZajGRSY`,
        },
      },
    };
  },
  methods: {
    async submitGame() {
      // if stateActive is true, execute replaceGame
      if ( 1 == 1) {
        replaceGame();
      }

      const createdGame = await axios.post(
        'https://crud-app-game.herokuapp.com/game',
        {
          name: this.name,
          year: this.year,
          rating: this.rating,
        },
        this.axiosConfig
      );

      this.games.push(createdGame.data);

      this.name = '';
      this.year = '';
      this.rating = '';
    },

    async deleteGame(game) {
      await axios.delete(
        `https://crud-app-game.herokuapp.com/game/${game.id}`,
        this.axiosConfig
      );

      this.games = this.games.filter((thisGame) => thisGame.id !== game.id);
    },

    stateActive() {
      // change backgrond color of selected row
      const tableRows = document.querySelectorAll('.tableRow');
      tableRows.forEach((row) => {
        row.style.backgroundColor = 'red';
      });
    },

    async replaceGame(game) {
      const updatedGame = await axios.put(
        `https://crud-app-game.herokuapp.com/game/${game.id}`,
        {
          name: this.name,
          year: this.year,
          rating: this.rating,
        },
        this.axiosConfig
      );

      this.name = '';
      this.year = '';
      this.rating = '';
    },
  },
  async mounted() {
    const response = await axios.get(
      'https://crud-app-game.herokuapp.com/game',
      this.axiosConfig
    );
    this.games = response.data;
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

/* .tableRow {
  background-color: #21C4F3
} */

.replaceSvg {
}

input[type='radio'] {
  display: none;
}

.btnCell {
  width: 10px;
}

.submitBtn {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.deleteBtn {
  background-color: #f44336;
  color: white;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.replaceBtn {
  background-color: #2196f3;
  color: white;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
</style>
