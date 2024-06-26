<template>
    <!-- TODO сделать на слотах -->
    <aside>
        <div class="aside-container">
            <slot></slot>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    components: {},
});
</script>

<style scoped lang="scss">
.aside-container {
    width: 100%;
}
</style>
