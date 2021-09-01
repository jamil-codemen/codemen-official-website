<template>
<top-bar/>
   <member-table/> 
</template>
<script>
import TopBar from '../component/TopBar.vue'
import MemberTable from '../component/MemberTable.vue'
export default {
    name:'MemberList',
    components:{
        MemberTable,
        TopBar
    }
}
</script>