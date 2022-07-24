<template>

  <div class="container">
  <b-card no-body class="card">
    
      <b-navbar type="dark" variant="dark" class="m-0 justify-space-between">
        <div class="container">
    <b-navbar-brand>Weekly Task 1</b-navbar-brand>
      <b-btn class="light" @click="()=> redirect()">
        Weekly Task 2
        <span>
          <b-icon icon="arrow-right">

          </b-icon>
        </span>
      </b-btn>
        
   
     
    </div>
      </b-navbar>
    
    


    <b-tabs pills card vertical permanent nav-wrapper-class="w-25">

     <b-tab title="Version Control and Branch Management"><b-card-text><sec2/></b-card-text></b-tab>   
      <b-tab title="Introduction UI dan UX"><b-card-text>
       <sec3/> 
      </b-card-text>
      </b-tab>
      
      <b-tab title="Figma"><b-card-text><Sec4/></b-card-text></b-tab>
      <b-tab title="HTML"><b-card-text><sec5/></b-card-text></b-tab>
      <b-tab title="CSS"><b-card-text><Sec6/></b-card-text></b-tab>
      <b-tab title="Bootstrap"><b-card-text><Sec7/></b-card-text></b-tab>
      <b-tab title="Javascript Refreshment"><b-card-text><Sec8/></b-card-text></b-tab>
      <b-tab title="Clean Code"><b-card-text><Sec9/></b-card-text></b-tab>
      

      

    </b-tabs>
  </b-card>
  </div>
</template>

<script>


import sec2 from '../components/section2.vue'

import sec3 from '@/components/section3.vue'
import Sec4 from '@/components/section4.vue'
import Sec5 from '@/components/section5.vue'
import Sec6 from '@/components/section6.vue'
import Sec7 from '@/components/section7.vue'
import Sec8 from '@/components/section8.vue'
import Sec9 from '@/components/section9.vue'

 export default {
  name: 'HomePagesVues',

   components :{

      sec2,
      sec3,
      Sec4,
      Sec5,
      Sec6,
      Sec7,
      Sec8,
      Sec9

},
   data:() => ({

   }),
   methods:{
    redirect(){
      return this.$router.push('/task-2/Version-Control-and-Branch-Management')
    }
   }
 }
</script>

<style>


</style>

