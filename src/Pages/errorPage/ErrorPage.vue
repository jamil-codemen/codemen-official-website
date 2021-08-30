<template>
 <div class="container max-w-screen-xl mx-auto md:px-6 px-4">
        <div class="row min-h-screen items-center justify-center">
            <!---------------------------image section --------------------------------------->
            <div class="md:w-1/2 px-4">
                <img src="../../assets/images/404.png" class="w-full">
            </div>
            <!---------------------------written section --------------------------------------->
            <div class="md:w-1/2 px-4 text-center">
                <h1 class="text-6xl font-bold mb-8">404 Not Found</h1>
                <p class="text-gray-400 mb-8">The page you are looking for might be changed, removed or not exists.<br> Go back and try other links</p>
                <a href="/" class="text-blue-900 font-bold hover:text-blue-700">Go To Homepage...</a>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"ErrorPage"
}
</script>