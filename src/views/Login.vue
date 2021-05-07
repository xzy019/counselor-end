<template>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  background-image: url('../assets/5c4813a21733c.jpg');
}

.forms-container{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup{
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 44%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

</style>
