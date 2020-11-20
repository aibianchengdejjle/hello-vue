<template>
  <div>
    <h1>个人信息</h1>
    {{id}}
  </div>
</template>

<script>
  export default {
    props: ['id'],
    name: 'UserProfiles',
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入个人信息页"); //加载数据
      next(vm=>{      //利用vm来获取数据
        vm.getData()
      });
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("进入路由之后");
      next();
    },
    methods:{
      getData: function () {
        this.axios({
           method: 'get',
           url: 'http://localhost:8080/static/mock/data.json'
        }).then(function (response) {
            console.log(response)
        })
      }
    }

  }
</script>

<style scoped>

</style>
