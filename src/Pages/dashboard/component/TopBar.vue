<template>
  <div class="container mx-auto">
      <div class="row space-y-5 md:space-y-0 px-4 ">
          <div class="w-full md:w-6/12">
  <div class=" text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm md:text-base focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="right-0 top-0 mt-5 mr-4">
        </button>
      </div>
          </div>
          <div class="w-full md:w-6/12 md:text-right">
<a href="" class="px-3 py-3 bg-blue-700 text-white">Add Member</a>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'TopBar'
}
</script>