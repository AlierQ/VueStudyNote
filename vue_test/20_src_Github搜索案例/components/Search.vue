<template>
<section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;<button @click="getUsersByName">Search</button>
      </div>
    </section>
</template>

<script>
  import axios from 'axios'
  export default {
      name:'Search',
      data() {
        return {
          keyWord:''
        }
      },
      methods:{
        getUsersByName(){
          // 也可以使用es6中的模板字符串
          // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
          this.$bus.$emit("loading")
          axios.get('https://api.github.com/search/users?',{
            params:{
              q:this.keyWord
            }
          }).then(
            response => {
              console.log(response.data.items);
              this.$bus.$emit('getUsers',response.data.items)
            },
            error => {
              console.log(error.message);
              this.$bus.$emit('error',error.message)
            }
          )
        }
      }
  }
</script>

<style>

</style>