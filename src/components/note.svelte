<script>

import {createEventDispatcher} from 'svelte';

   
export let title;
export let text;
export let color;
export let id;

const dispatch = createEventDispatcher();

function handleChange(){
    dispatch('update',{

        text: text,
        color: color,
        title: title,
        id: id
    })
}
function handleColor(){
    dispatch('color',{
        id: id
    });
}
function handleRemove(){
    dispatch('remove',{
        id: id
    });
}

</script>

<div class="note" style={'background-color: ' + color}>
    <button class="button-edit"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>
    </button>
    <button class="button-delete" on:click={handleRemove} ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
    </button>
    <input class="title" placeholder="Write a title for your note" bind:value={title} on:change={handleChange}>
    
    <textarea style={'background-color: ' + color} 
    class="textarea" placeholder="Write a note..." 
    bind:value={text} on:change={handleChange}></textarea>
   
</div>

<style lang="scss">
    .note{
        display: block;
        width: 380px;
        height: 300px;
        margin: 10px;
        padding: 10;
  
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: none;
        outline: none;
        appearance: none;
        background-color: transparent;
        border: none;
        font-size: 25px;
        padding: 10px;
        
        

        
    }
    .textarea{
        outline: none;
        border: none;
        margin-left: 15px;
        resize: none;
        height: 70%;
        width: 91%;


    }
    .button-edit{
        margin: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .button-delete{
        float: right;
        margin: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        
    }
</style>