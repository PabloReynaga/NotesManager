<script>
import { createEventDispatcher } from "svelte";

export let search;

const dispatch = createEventDispatcher()

let searchQuery = () =>{
   dispatch('search',{
      search: search
   })
}


</script>

<h1 class="page-title">Notes Manager</h1>   
<input class="search-input" placeholder="search..." on:input={searchQuery} bind:value={search}>


<button class="button">Switch</button>

<style lang="scss">
   .page-title{
        display: inline-block;
        justify-content: right;
        font-size: 24px;
    }
    .search-input{
       display: flex;
       align-items: center;
       justify-content: center;
       position: relative;
       margin: 5px;
    }
  
</style>