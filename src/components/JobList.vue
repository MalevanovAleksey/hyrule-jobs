<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary">
                    <p>{{ job.salary }}</p>
                </div>
                <div class="descroption">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, laboriosam iure dolor a, 
                        dignissimos assumenda sint magni molestias ullam voluptas amet, rem maiores! Optio dolore repellat iste 
                        ullam atque voluptatem.
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Job from '@/types/Job';
import OrderTerm from '@/types/OrderTerm';
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    },

    setup(props) {
        const orderedJobs = computed(()=>{
            return [...props.jobs].sort((a: Job,b: Job)=> {
                return a[props.order] > b[props.order] ? 1 : -1;
            })
        })
        return {orderedJobs}
    }
})
</script>

<style scoped>

</style>