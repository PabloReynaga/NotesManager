<script>
    import Note from "./note.svelte";


function addNewNote(){

}
let NoteList =[];

let NoteObj ={
    title : {},
    text: {}
}    

</script>
<div class="notes-container">
    <button class="new-note-button" on:click={addNewNote}>New Note</button>
    <Note></Note>
 
    
</div>

<style lang="scss">
    .notes-container{
        display: flex;
        box-sizing: border-box;
        border: 1px solid $black;
        max-width: 100vw;
        height: 100%;
        margin: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .new-note-button{
        display: wrap;
        color: $gray;
        width: 380px;
        height: 300px;
        margin: 10px;
        border: dotted 2px $gray ;
        background-color: $white;
        cursor: pointer;
        

    }
    

</style>