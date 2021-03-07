<template>
<v-card class="wall">
  <header>
  <div class="title">
      <h1>Juan Leyva's Drawfolio</h1>
  </div>
  <div class="navbar">
    <a v-scroll-to="'#home'" class="space">Home</a>
    <a v-scroll-to="'#links'">Links</a>
  </div>
  </header>
  <body>
  <div>
    <div id="home" class="home">
      <h2>Welcome to my little digital canvas</h2>
    </div>
    <div id="links" class="links">
    <a href="https://github.com/JuanLeycal" target="_blank" rel="noopener noreferrer"><img src="../assets/git.png" class="img"></a>
    </div>
  </div>
  </body>
</v-card>
</template>

<script>
export default {
  name: 'test'

}
</script>


<style scoped>


h1{
  font-family: 'Gloria Hallelujah', cursive;
   font-size: 3.5rem;
}
h2{
  font-family: 'Gloria Hallelujah', cursive;
   font-size: 3rem;
   color: #000b3f;
}
a{
  color: #9ea6cd;
}

.title{
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  color: #000b3f;
  background: #dbdff8;
  
}
.navbar{
 
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 3rem;
  background: #000b3f;
}
.img{
  transition: all 0.3s;
}
.img:hover{
  opacity: 50%;
}
.space{
  padding-right: 3rem;
}
.home{
  margin-bottom: 100rem;
}
.links{
  margin-bottom: 100rem;
}
</style>