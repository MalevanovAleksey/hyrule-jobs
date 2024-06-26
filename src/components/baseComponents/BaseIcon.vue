<template>
    <img :src="icon" class="icon" alt="icon" :style="styles" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, StyleValue } from "vue";

export default defineComponent({
    props: {
        iconName: {
            type: String,
            required: true,
        },
        width: Number,
        height: Number,
        size: Number,
    },
    setup(props) {
        const icon = ref("");

        onMounted(async () => {
            try {
                const { default: iconSrc } = await import(`@/assets/${props.iconName}.svg`);
                icon.value = iconSrc;
            } catch (error) {
                console.error(error);
            }
        });
        const styles = computed(() => {
            console.log(props.size);
            const defSize = props.size || 22;

            var width = props.width || defSize,
                height = props.height || defSize,
                style: StyleValue = {};

            if (width) {
                style.width = `${width}px`;
            }

            if (height) {
                style.height = `${height}px`;
            }
            return style;
        });

        return {
            icon,
            styles,
        };
    },
});
</script>

<style lang="scss" scoped>
.icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
@/types/baseTypes/BaseIcon@/types/baseTypes/IconStyles
