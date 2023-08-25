<script>
   import {darkMode} from '../store/store.js';
   let checkMode = false
   let buttonPosition = "left"; 

   function changeMode(){
      darkMode.update(darkMode=> !darkMode)
      
      if(checkMode){
         buttonPosition = "left";
         checkMode = !checkMode
      }else{
         buttonPosition = "right"
         checkMode = !checkMode
      }
   }
 

</script>

<h1 class="page-title">Notes Manager</h1>   
<input class="search-input" placeholder="search..." on:input>
<div class="switch-container">
   <button style={'float: ' + buttonPosition } class="button" on:click={changeMode}></button>
</div>


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
    .switch-container{
      background-color: $gray;
      width: 50px;
      height: 25px;
      border: 30px;
      border-radius: 30px;
      


    }
    .button{
      height:25px ;
      width: 25px;
      border-radius: 30px;
      background-color: rgb(208, 208, 208);
      border: none;
      cursor: pointer;
      
    }
  
    
  
  
</style>