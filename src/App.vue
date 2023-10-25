<template>
  <div id="add">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>{{ count }}</h3>
    <h3>{{ doubleCount }}</h3>
    <button @click="increment">increment</button>
    <button @click="asyncIncrement">asyncIncrement</button>
    <hr>
    <h3>{{ Data }}</h3>
    <button @click="changeData">changeData</button>
    <hr>
    <!-- <p>{{ listData }}</p> -->
    <ul v-for="(item, index)  in segment" :key="index">
      <li>{{ item }}</li>
    </ul>
    <button :disabled="pageNum <= 0" @click="prevPage">Назад</button>
    <button :disabled="pageNum >= pageAll" @click="nextPage">далі</button>
    <hr>
    <router-link :to="{name: 'component'}">Component </router-link>
    <router-view></router-view>

  </div>
</template>

<script>
import { useAlertsStore } from '@/store/Store.js';
import { useMyStore } from '@/store/myStore.js';
import { usePaginationStore } from '@/store/paginationStore.js';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(useAlertsStore, ['increment', 'asyncIncrement', 'changeData', 'getAxios']),
    ...mapActions(usePaginationStore, ['createFakeData', 'nextPage', 'prevPage']),
  },
  computed: {
    ...mapState(useAlertsStore, ['count', 'doubleCount']),
    ...mapState(useMyStore, ['Data']),
    ...mapState(usePaginationStore, ['listData', 'pageNum', 'pageAll', 'segment']),
  },
  mounted() {
    this.getAxios();
    this.createFakeData();
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
