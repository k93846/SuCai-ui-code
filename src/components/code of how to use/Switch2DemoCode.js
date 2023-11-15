const a =
`<template>
    <Switch v-model:value="bool" disabled />
</template>
<script>
import { ref } from 'vue'; 
import Switch from '../lib/Switch.vue'; 
export default {
    components: { Switch }, 
    setup() {
        const bool = ref(false)
        return { bool }
    }
}
</script>`
export default{a}

