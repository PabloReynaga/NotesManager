<script>

export let title;
export let text;
export let color;

</script>

<div class="note" style={'background-color: ' + color}>
    <button class="button-edit">edit</button>
    <button class="button-delete">delete</button>
    <input class="title" placeholder="Write a title for your note" bind:value={title}>
    <textarea style={'background-color: ' + color} class="textarea" placeholder="Write a note..." bind:value={text}></textarea>
   
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
    }
    .button-delete{
        float: right;
        margin: 5px;
    }
</style>