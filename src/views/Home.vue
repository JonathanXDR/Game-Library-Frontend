<template>
  <div>
    <div class="dropdown">
      <button class="accountBtn">
        Username <i class="fa fa-angle-down"></i>
        <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path
          d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
        />
      </svg> -->
      </button>
      <ul class="dropdown-content">
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
    <table>
      <tr id="th">
        <th>Name</th>
        <th>Year</th>
        <th colspan="3">Rating</th>
      </tr>
      <tr
        class="tableRow"
        v-for="game in games"
        :key="game.id"
        v-bind:class="{ active: game.isActive }"
      >
        <td>{{ game.name }}</td>
        <td>{{ game.year }}</td>
        <td class="tdRating">{{ game.rating }}</td>

        <td class="btnCell">
          <button
            class="replaceBtn"
            @click="stateActive(game)"
            ref="updateButton"
          >
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
          </button>
        </td>

        <td class="btnCell">
          <button class="deleteBtn" @click="deleteGame(game)">
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
        <td>
          <input
            class="input100 adjustInput"
            type="text"
            placeholder="Tetris..."
            maxlength="40"
            v-model.trim="name"
            v-bind:class="{ notValid: !validation.name }"
          />
        </td>
        <td>
          <input
            class="input100 adjustInput"
            type="text"
            pattern="\d*"
            min="1900"
            max="2021"
            maxlength="4"
            placeholder="1984..."
            v-model="year"
            v-bind:class="{ notValid: !validation.year }"
          />
        </td>
        <td colspan="3">
          <input
            class="input100 adjustInput"
            type="text"
            pattern="\d*"
            min="1"
            max="10"
            maxlength="3"
            placeholder="9.5..."
            v-model="rating"
            v-bind:class="{ notValid: !validation.rating }"
          />
        </td>
      </tr>
      <tr>
        <td class="tdSubmit">
          <button
            class="login100-form-btn adjustBtn"
            v-bind:disabled="disableBtn()"
            @click="submitGame"
          >
            Submit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from '../../Services/HTTPService';
export default {
  name: 'Home',
  data() {
    return {
      games: [],
      name: '',
      year: '',
      rating: '',

      validation: {
        name: false,
        year: false,
        rating: false,
      },

      axiosConfig: {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      },
    };
  },
  methods: {
    async submitGame() {
      this.disableBtn();
      const activeGame = this.games.filter((game) => game.isActive === true);
      if (activeGame.length === 1) {
        this.replaceGame(...activeGame);
      } else {
        const createdGame = await axios.post(
          'game',
          {
            name: this.name,
            year: this.year,
            rating: this.rating,
          },
          this.axiosConfig
        );

        this.games.push(createdGame.data);

        this.resetInputs();
      }
    },

    async deleteGame(game) {
      await axios.delete(`game/${game.id}`, this.axiosConfig);

      this.games = this.games.filter((thisGame) => thisGame.id !== game.id);
    },

    async replaceGame(game) {
      const updatedGame = await axios
        .put(
          `game/${game.id}`,
          {
            name: this.name,
            year: this.year,
            rating: this.rating,
          },
          this.axiosConfig
        )
        .then((res) => res.data);

      this.$set(
        this.games,
        this.games.findIndex((game) => game.id === updatedGame.id),
        updatedGame
      );

      this.resetInputs();
    },

    resetInputs() {
      this.name = '';
      this.year = '';
      this.rating = '';
    },

    disableBtn() {
      if (
        this.validation.name === true &&
        this.validation.year === true &&
        this.validation.rating === true
      ) {
        return false;
      } else {
        return true;
      }
    },

    stateActive(g) {
      this.games = this.games.map((game) => {
        if (g.id === game.id) {
          return { ...game, isActive: !game.isActive };
        } else {
          return { ...game, isActive: false };
        }
      });
      const foundGame = this.games.find((game) => g.id === game.id);
      this.fillInput(foundGame);
    },

    fillInput(game) {
      if (game.isActive === true) {
        this.name = game.name;
        this.year = game.year;
        this.rating = game.rating;
      } else {
        this.resetInputs();
      }
    },
  },

  async mounted() {
    const response = await axios.get('game', this.axiosConfig);
    this.games = response.data.map((res) => ({ ...res, isActive: false }));
  },
  watch: {
    name() {
      if (this.name === '') {
        this.validation.name = false;
      } else {
        this.validation.name = true;
      }
      this.disableBtn();
    },

    year() {
      const intYear = parseInt(this.year);
      const currentYear = new Date().getFullYear();
      if (this.year !== '' && intYear >= 1900 && intYear <= currentYear) {
        this.validation.year = true;
      } else {
        this.validation.year = false;
      }
      this.disableBtn();
    },

    rating() {
      const floatRating = parseFloat(this.rating);
      if (this.rating !== '' && floatRating >= 1 && floatRating <= 10) {
        this.validation.rating = true;
      } else {
        this.validation.rating = false;
      }
      this.disableBtn();
    },
  },
};
</script>
<style scoped>
@import '../assets/main.css';
</style>
