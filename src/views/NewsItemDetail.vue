<template>
  <div class="container">
    <div class="title">
      <h1>{{ dataItem.title }}</h1>
    </div>
    <div class="text">
      <p class="new__type-text">{{ dataItem.category_name }}</p>
      &nbsp;
      <span class="time"> /{{ time.slice(0, 10) }}</span>
    </div>
    <div class="item__img">
      <img :src="dataItem.image_url" alt="no images" />
    </div>
    <div class="back">
      <RouterLink to="/news">
        <p>Вернуться назад</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { $http } from "../axios/axios";
import { useRoute } from "vue-router";

const props = defineProps({
  item: { type: Object },
});

const route = useRoute();

const dataItem = ref([]);
const url = ref(
  `https://apiallin.igenius.uz/api/site/news-page/news/${route.params.id}`
);
const time = ref([]);

const getData = async (url) => {
  try {
    const {
      data: { data },
    } = await $http.get(`${url.value}`);
    dataItem.value = data;
    time.value = data.created_at;
  } catch (e) {
    console.log(e);
  }
};

getData(url);
</script>

<style scoped>
@font-face {
  font-family: "MuseoSansCyrl";
  src: local("MuseoSansCyrl"),
    url(../font/Museosanscyrl500.ttf) format("truetype");
}
p {
  margin: 0 !important;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title h1 {
  max-width: 810px;
  font-size: 36px;
  font-weight: 900;
  color: #303446;
  font-family: "MuseoSansCyrl", sans-serif;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  margin-bottom: 30px;
}
.new__type-text {
  background-color: #3c6;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  /* margin-bottom: 0 !important; */
  line-height: 14px;

  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}
.time {
  margin-left: 5px;
  color: #aaa3bf;
  font-weight: 700;
}

.item__img {
  margin: 0 auto;
}
.item__img img {
  width: 100%;
  height: 100%;
}
</style>
