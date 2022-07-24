<template>
    <div>
              <SideBar/>
            <router-view></router-view>
    </div>


        



</template>

<script>
import SideBar from '@/components/navsidebar.vue'
export default {
    name: "indexLayout",
    components: { SideBar }
}
</script>