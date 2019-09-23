<template>
    <div id="app">
        <mytextbox></mytextbox>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mytextbox from './components/textbox.vue'

export default {
    name: 'app',
    components: {
        HelloWorld,
        mytextbox
    }
}
</script>