<template>
  <div v-if="items.length === 0" class="loading"><loading-api /></div>
  <div v-else-if="items.length" class="container-fluid">
    <!-- <sectionDetailsVue>
      <template v-slot:title>
        <h1>{{ items[0].slug }}</h1>
      </template>
    </sectionDetailsVue> -->
    <div class="d-flex flex-wrap justify-content-between m-3 container-fluid">
      <div class="d-flex justify-content-between flex-wrap" style="gap: 60px">
        <v-btn-toggle
          :class="toogle1 ? 'bgClick' : 'bgNoClick'"
          type="button"
          id="Все"
          class="btn"
          @click="changeButton(null)"
        >
          Все
        </v-btn-toggle>

        <v-btn-toggle
          type="button"
          :class="toogle2 ? 'bgClick' : 'bgNoClick'"
          class="btn"
          @click="changeButton(70)"
        >
          Новости
        </v-btn-toggle>
        <v-btn-toggle
          type="button"
          :class="toogle3 ? 'bgClick' : 'bgNoClick'"
          class="btn"
          @click="changeButton(71)"
        >
          События
        </v-btn-toggle>
        <v-btn-toggle
          type="button"
          :class="toogle4 ? 'bgClick' : 'bgNoClick'"
          class="btn"
          @click="changeButton(72)"
        >
          Акции
        </v-btn-toggle>
      </div>
      <div>
        <form>
          <input
            class="form-control"
            v-model="search"
            type="text"
            placeholder="Search"
            @input="searchItem"
          />
        </form>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-content-between">
      <!-- card -->
      <news-item :item="item" v-for="(item, index) in items" :key="index" />
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <v-pagination
          v-model="params.page"
          :pages="params.last_page"
          :range-size="1"
          active-color="#33CC66"
          @update:modelValue="getData"
          hideFirstButton="false"
          hideLastButton="false"
        />
      </div>
      <div class="w-50 d-flex justify-content-end">
        <select
          @change="selectOption"
          class="form-select w-25"
          v-model="selection"
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { $http } from "../../axios/axios";
import LoadingApi from "../../loading/LoadingApi.vue";
import NewsItem from "../../views/NewsItem.vue";
import sectionDetailsVue from "../sectionDetails/sectionDetails.vue";
import { debounce } from "../../util/funtion";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const params = ref({
  page: 1,
  per_page: 12,
  last_page: null,
});

const toogle1 = ref(true);
const toogle2 = ref(false);
const toogle3 = ref(false);
const toogle4 = ref(false);

const items = ref([]);
const setItems = ref([]);
const selection = ref("12");
const search = ref("");

const filter = ref({
  category_id: null,
  word: "",
});

//getData
const getData = async () => {
  try {
    const {
      data: { data, links },
    } = await $http.get(`news-page/news`, {
      params: {
        per_page: params.value.per_page,
        page: params.value.page,
        ...filter.value,
      },
    });
    items.value = data;
    setItems.value = data;
    params.value.last_page = links.last_page;
  } catch (e) {
    console.log(e);
  }
};

const selectOption = (e) => {
  params.value.per_page = selection.value;
  console.log(params.value.per_page);
  getData();
};

const searchItem = debounce(function (item) {
  console.log(item);
  filter.value.word = item.target.value;
  getData();
}, 500);

//change Button
const changeButton = (id) => {
  filter.value.category_id = id;
  console.log(filter.value);
  getData();
  if (id === null) {
    toogle1.value = true;
    toogle2.value = false;
    toogle3.value = false;
    toogle4.value = false;
  } else if (id === 70) {
    toogle1.value = false;
    toogle2.value = true;
    toogle3.value = false;
    toogle4.value = false;
  } else if (id === 71) {
    toogle1.value = false;
    toogle2.value = false;
    toogle3.value = true;
    toogle4.value = false;
  } else if (id === 72) {
    toogle1.value = false;
    toogle2.value = false;
    toogle3.value = false;
    toogle4.value = true;
  }
};

getData();
</script>

<style scoped>
.container-fluid {
  margin: 0 auto !important;
  max-width: 1250px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.bgClick {
  background: #33cc66 !important;
  color: white !important;
  font-weight: 600;
}
.bgNoClick {
  background: white !important;
  color: #33cc66 !important;
  border: 1px solid #3c6;
  font-weight: 600;
}
</style>
