<template>
  <v-card class="mx-auto item" max-width="366">
    <RouterLink :to="`/news/${props.item.slug}`" :item="item">
      <div class="card__img-items">
        <div class="card__img">
          <img :src="props.item.image_url" alt="rasm" />
        </div>
        <div class="new__type">
          <p class="new__type-text">
            {{ props.item.category_name }}
          </p>
        </div>
      </div>
      <v-card-text class="card_text" style="padding: 10px">
        <h6 class="text--primary max-lines">{{ props.item.title }}</h6>

        <div class="description">
          <p>
            {{ props.item.description }}
          </p>
        </div>
      </v-card-text>
    </RouterLink>
  </v-card>
</template>

<script setup>
const props = defineProps({
  item: { type: Object },
});
</script>

<style scoped>
a {
  text-decoration: none;
}
.item {
  width: calc(100% / 3 - 20px);
  margin: 10px;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
}

/* img */
.card__img-items {
  position: relative;
}

.card__img-items .card__img {
  overflow: hidden;
  height: 272px;
  border-radius: 15px 15px 0 0;
}

.card__img-items .card__img img {
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 100%;
  max-height: 272px;
  object-fit: cover;
  transition: 0.3s;
}

.card__img-items .card__img img:hover {
  border-radius: 15px 15px 0 0;
  cursor: pointer;
  transform: scale(1.1);
}

.card__img-items .new__type {
  position: absolute;
  top: calc(100% - 17px);
  background-color: #3c6;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  left: 40px;
  cursor: pointer;
}

/*  */

.new__type-text {
  margin-bottom: 0 !important;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}

.max-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 15px;
}

.card_text {
  padding: 40px;
}

.card_text h6 {
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;
  color: #303446;
}

.description {
  padding: 0 15px;
}

.description p {
  font-family: inherit;
  font-size: 20px;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #aaa3bf;
}
</style>
