<template>
<!------------------------------------------    text-area component ------------------------------------------------->
  <textarea
    v-if="isTextArea"
    :name="inputName"
    :rows="textAreaRows"
    class="px-4 py-4 w-full focus:outline-none"
    :class="inputClass"
    :placeholder="inputPlaceholder"
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" 
    @blur="$emit('blur',$event.target.value)" 
    @focus="$emit('focus',$event.target.value)"
    required
  ></textarea>
<!------------------------------------------    input component ------------------------------------------------->
  <input v-else :class="inputClass" :name="inputName" :placeholder="inputPlaceholder"  :type="inputType" class="px-4 py-4 w-full focus:outline-none" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur',$event.target.value)" @focus="$emit('focus',$event.target.value)" required/>
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
    modelValue:String
  },
  emits: ['update:modelValue','blur','focus'],
};
</script>
