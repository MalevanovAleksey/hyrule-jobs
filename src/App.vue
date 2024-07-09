<template>
    <div class="app">
        <Header />
        <MainLayout />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import Header from "./components/Layout/Header.vue";
import MainLayout from "./components/Layout/MainLayout.vue";

export default defineComponent({
    name: "App",
    components: {
        Header,
        MainLayout,
    },
    setup() {
        const hi = ref("");
        return {};
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
    margin: 0;
    min-height: 10000px;
}
</style>
