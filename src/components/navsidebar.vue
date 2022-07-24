<template>
  <b-navbar toggleable type="dark" variant="dark">
    
    <div class="container fluid">
        <b-navbar-toggle v-b-toggle.sidebar-no-header>
        <b-icon icon="menu-app"></b-icon>
    </b-navbar-toggle>
    </div>
    
  <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
      <div class="container fluid">
        <b-row>
  <b-col cols="10"></b-col>
  <b-col cols="2">

              <b-icon href="#" @click="hide" class="mx-3 my-1" icon="x-lg" font-scale="1"></b-icon>
       
  </b-col>
</b-row>
      </div>

     
      <!-- <b-icon icon="menu-app" class="display-start" font-scale="1"></b-icon> -->
        <div class="p-3">
          <h4 class="text-center" id="sidebar-no-header-title">Understanding  Everthing About VueJS (B)
            
          </h4>
          <hr>
          <br>
          <div class="text-center"> 
          <b-avatar class="my-3" src="https://placekitten.com/300/300" size="4rem"></b-avatar>
          <h6>Dzikri Ardafi</h6>
          </div>
          <br>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item  v-for="item in items" :key="item.name" :to="item.path">
                  {{item.names}}            
                </b-nav-item>
              

            </b-nav>
          </nav>
          <div class="text-center">
            <b-button  variant="primary" block @click="unredirect"><span>
              <b-icon icon="arrow-left"></b-icon>
            </span> Weekly Task 1
            
            </b-button>
          </div>
          
        </div>
      </template>
    </b-sidebar>

      
    
  </b-navbar>
</template>

<script>
export default{
     name: "NavBarComponent",
     methods:{
      unredirect(){
        return this.$router.push('/')
      }
     }, 
     data(){
        return {
          items: [
            {
              names:"Version-Control-and-Branch-Management",
              path: "Version-Control-and-Branch-Management"
              
            },
            {
              names:"Introduction-UI-UX",
              path: "Introduction-UI-UX"
            
            },
            {
              names:"Figma",
              path: "Figma"
            },
            {
              names:"HTML",
              path: "HTML"
            },
            {
              names:"CSS",
              path: "CSS"
            },
            {
              names:"Bootstrap",
              path: "Bootstrap"
            },
            {
              names:"Javascript Refreshment",
              path: "Javascript-Refreshment"
            },
            {
              names:"Clean Code",
              path: "Clean-Code"
            },
            
          ]
        }
     }
}

</script>