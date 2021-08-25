<template>
  <textarea
    v-if="isTextArea"
    :name="inputName"
    :rows="textAreaRows"
    class="px-4 py-4 w-full focus:outline-none"
    :class="inputClass"
    :placeholder="inputPlaceholder"
  ></textarea>

  <input v-else :class="inputClass" :name="inputName" :placeholder="inputPlaceholder"  :type="inputType" class="px-4 py-4 w-full focus:outline-none" />
</template>
<script>
export default {
    name:'customInput',
  props: {
    isTextArea: Boolean,
    inputClass: String,
    inputPlaceholder: String,
    inputName: String,
    inputType: String,
    textAreaRows: String,
  },
};
</script>
