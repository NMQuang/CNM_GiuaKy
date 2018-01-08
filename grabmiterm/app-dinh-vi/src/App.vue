<template>
  <div id="app">
  <nav class="navbar navbar-custom navbar-expand-lg fixed-top">
    <div class="container">
     
      <a class="navbar-brand title" href="index.html"><span>Grab QV</span> System</a>
      
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <a class="navbar-brand" href="#">Quản lý khách hàng</a>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid app-content">
    <router-view/>
  </div>

  <footer class="py-2 fixed-bottom">
    <nav class="navbar navbar-custom navbar-fixed-bottom" role="navigation">
      <div class="container-fluid">
          <div class="navbar-header">
              
              <a class="navbar-brand" href="index.html"><span>Development by QV</span> Solution</a>
          </div>
      </div><!-- /.container-fluid -->
    </nav>
  </footer>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app .app-content {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 40px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-x: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar-custom {
    background: #222;
    height: 60px;
}

.title {
  float: left;
}
</style>
