<script>
 
import NoteComponent from "./note.svelte";

let note = {
    title: 'title',
    color: 'red',
    text: 'text'
};

let notes =[];
let copyNotes =[...notes]

let addNewNote = () =>{
    const color = randomColorGenerator()
    const note ={
        title:'',
        color: color,
        text:''
    }
    notes = [ note,...notes];
   
    
    console.log(notes)
    
    
}

function randomColorGenerator(){
    let colors = ['#DDFFC2', 'FFC2C2','#FFEAC"', '#C2FFD3', '#C2FFEC', 'C2FAFF','#C2E2FF','#CBC2FF','#EBC2FF','#FFC2F7','#FFC2D8']
    let index = Math.floor(Math.random()* colors.length)
    return colors[index]
}


</script>
<div class="notes-container">
    <button class="new-note-button" on:click={addNewNote}>New Note</button>
    {#each notes as note, i}
           <NoteComponent title={note.title} text={note.text} color={note.color}></NoteComponent>
    {/each} 
</div>

<style lang="scss">
    .notes-container{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        width: 100vw;
        height: 100%;
        margin: 10px;
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