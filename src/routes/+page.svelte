<script>
    import Notes from '../components/notesLayout.svelte'
	import {darkMode} from '../store/store.js'
</script>

<main class={$darkMode? 'darkMode': ''}>
    <Notes></Notes>
</main>
<style lang="scss">
   
</style>