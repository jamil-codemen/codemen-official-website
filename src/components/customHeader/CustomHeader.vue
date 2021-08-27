<template>
  <h2 v-if="blockFirst" :class="headerClass" class="uppercase md:leading-tight">
    <span class="prm-color rounded pb-2 pt-2 px-4"
      ><span class="text-white">{{ firstSpan }}</span></span
    >
    {{ SecondSpan }}
  </h2>
  <h2 v-if="blockSecond" :class="headerClass" class="">
    {{ firstSpan
    }}<span class="prm-color rounded text-white px-4 pb-2 pt-2 uppercase">{{
      SecondSpan
    }}</span>
  </h2>
  <p v-if="block" class="prm-color rounded text-white px-4 pb-4 pt-2 font-bold text-4xl inline"
    >{{ firstSpan }}</p>
</template>
<script>
export default {
  name: "CustomHeader",
  props: {
    headerClass: String,
    firstSpan: String,
    SecondSpan: String,
    blockFirst: Boolean,
    blockSecond: Boolean,
    block:Boolean
  },
};
</script>