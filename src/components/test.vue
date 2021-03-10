<template>
<v-card class="wall">
  <b-navbar :sticky= 'true' id="navBar" class="navBar">
    <a v-scroll-to="{el: '#home', offset: -60}" class="mx-auto">Home</a>
    <a v-scroll-to="{el: '#links', offset: -60}" class="mx-auto">Links</a>
  </b-navbar>
  <div class="title">
    <h1>Juan Leyva's Drawfolio</h1>
  </div>

  <b-container>
    <b-row class="justify-content-md-center">
      <div id="home" class="home">
        <h2>Welcome to my little digital canvas</h2>
      </div>
    </b-row>
    <b-row class="justify-content-md-center">
      <div id="links" class="links">
        <a class="a" href="https://github.com/JuanLeycal" target="_blank" rel="noopener noreferrer">
        <img src="../assets/git.png" class="img static"><img src="../assets/gato.gif" class="active"></a>
      </div>
    </b-row>
  </b-container>

</v-card>
</template>

<script>
export default {
  name: 'test',
  
}

</script>


<style scoped lang="scss">


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
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  color: #000b3f;
  background: #dbdff8;
  
}
.navBar{
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  background: #000b3f;
  z-index: 1;
}
.a{
  
  &:hover{
    .img{
      opacity: 0;
    }
    .active{
      opacity: 80%;
    }
  }
}
.img{
  transition: all 0.5s;
}
.active{
  transition: all 0.5s;
}

.static {
  position:absolute;
}

.home{
  margin-bottom: 100rem;
}
.links{
  margin-bottom: 100rem;
}

</style>