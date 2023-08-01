<script>
let title;
let note;


</script>


<div class="note">
    <button>editar</button>
    <button>borrar</button>
    <h1>{title}</h1>
    <textarea placeholder="Write a note...">{note}</textarea>
</div>


<style lang="scss">
    .note{
        display: wrap;
        display: block;
        background-color: $gray;
        width: 380px;
        height: 300px;
        margin: 10px;
  
    }
</style>