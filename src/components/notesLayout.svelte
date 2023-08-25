<script>

import { v4 } from 'uuid';
import NoteComponent from "./note.svelte";
import NavBar from './navBar.svelte';
  import { darkMode } from '../store/store';


$: countNotas = notes.length



let notes =[];
let copyNotes =[...notes]

let addNewNote = () =>{
    const color = randomColorGenerator()
    const id = v4();
    const note ={
        id: id ,
        title:'',
        color: color,
        text:''
    }
    notes = [ note,...notes];
    copyNotes = [... notes]
   
    console.log(notes)
}

function deleteNote(e){
   const response = notes.filter(n => n.id !== e.detail.id)
    notes = [...response];
    copyNotes=[...notes]
}


function handleChange(e){
    const note = e.detail;
    const index = notes.findIndex(n => n.id === note.id);
    notes[index] = note;
    copyNotes = [...notes];

}


function randomColorGenerator(){
    let colors = ['#DDFFC2', '#FFC2C2','#FFEAC2', '#C2FFD3', '#C2FFEC', '#C2FAFF','#C2E2FF','#CBC2FF','#EBC2FF','#FFC2F7','#FFC2D8']
    let index = Math.floor(Math.random()* colors.length)
    return colors[index]
}

function changeColor(e){
    const id = e.detail.id
    const index = notes.findIndex(n => n.id === id)
    notes[index].color = randomColorGenerator();
    copyNotes[index].color = notes[index].color;
   
}

function handleInput(e){
    const query = e.target.value;
    console.log(query)
    if(query===""){
        copyNotes=[...notes];
        return false;
    }  
    const results = notes.filter(note=>{
        const text = note.text.toLowerCase();
        const title = note.title.toLowerCase();
        return title.indexOf(query) > -1 || text.indexOf(query) > -1;

    });
    
    copyNotes=[...results];
    

}

</script>

<header class={$darkMode? 'darkMode':''}>
    <NavBar on:input={handleInput}></NavBar>	
</header>
<main class={$darkMode? 'darkMode':''}>
    <div class={$darkMode? 'darkMode':''}>
    <p class="counter">Notes {countNotas}</p>

    <div class="notes-container" >
    
    <button class='new-note-button' on:click={addNewNote}>New Note</button>
    {#each notes as note, i}
           <NoteComponent bind:title={note.title} bind:text={note.text} color={note.color} id={note.id}
           on:update={handleChange} on:remove={deleteNote} on:color={changeColor}></NoteComponent>
    {/each} 
    </div>
</div>

</main>
<style lang="scss">

    .counter{
        float: right;
       margin: 15px;
    }
    .notes-container{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        width: 100%;
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
        border-radius: 5px;
        cursor: pointer;
        
        
    }
    .new-note-button:hover{
       color: rgb(35, 58, 134);
        border: dotted 2px rgb(31,101,167);
        background-color: rgb(223,239,255);
    }
    header.darkMode{
        color: $white;
        background-color: #153244;
    }
    main.darkMode, div.darkMode{
        color: $white;
        background-color: #031926;
    }
    
    
</style>