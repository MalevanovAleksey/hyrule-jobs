<template>
    <div class="header-container">
        <div class="logo">
            <BaseIcon iconName="watermelon" :size="14" />
            <span class="logo-label">Weekly-Planner</span>
        </div>

        <div class="search">
            <BaseIcon iconName="loupe" :size="14" />
            <span class="search-label">Search</span>
        </div>
    </div>

    <img src="@/assets/notion.gif" alt="notion" class="notion" />

    <!-- <Layout /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseIcon from "@/components/baseComponents/BaseIcon.vue";

export default defineComponent({
    components: {
        BaseIcon,
    },
});
</script>

<style scoped lang="scss">
.notion {
    display: block;
    object-fit: cover;
    border-radius: 0px;
    width: 100%;
    height: 30vh;
    opacity: 1;
    object-position: center 50%;
}

.header-container {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    height: 52px;
}

.logo,
.search {
    display: flex;
    align-items: center;
}
</style>
