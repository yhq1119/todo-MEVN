<template>
  <b-card no-body style="width: 40rem;margin: 10px 10px 10px 10px" class="mt-4" img-top>
    <template v-slot:header>
      <h4 class="mb-0">Todo List App</h4>
    </template>

    <b-card-body>
      <b-card-text>
        <b-form inline>
          <b-button size="md" variant="primary" class="mb-2 mt-2 mr-2" @click="create">
            <b-icon icon="plus" aria-hidden="true"></b-icon>
          </b-button>
          <b-form-input style="width:89%" class="sm-10 mb-10 mr-2" v-model="content" required></b-form-input>
        </b-form>
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item
        v-for="(item) in items"
        :key="item.id"
        :color="item.status == 0?'red':'purple'"
      >
        <b-button variant="danger" class="mr-2" @click="deleteOne(item.id)">Delete</b-button>
        <b-button variant="success" class="mr-2" @click="update(item.id,item.status)">{{item.status == 0?"To Do":"Done"}}</b-button>
        {{item.content}}
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
   </b-card-body>

    <b-card-footer>Footer</b-card-footer>
  </b-card>
</template>

<script>
const moment = require("moment");
const axios = require("axios");
export default {
  data: () => ({
    baseURL: "http://localhost:3000/api/todo",
    content: "",
    items: [],
  }),
  methods: {
    async create() {
      const id = parseInt(moment(new Date()).format("x"));
      const content = this.content;
      const create_date = moment(new Date()).format("yyyy/MM/DD");
      const status = 0;
      const finish_date = "";

      const res = await this.API("post","", { id, content, create_date, status, finish_date });
      console.log(res)
      await this.readAll()
     },
    async update(id,status) {
        if(status == 0){
            status = 1
        }else{
            status = 0
        }
          const res = await this.API('patch',`/${id}`,{status})
      console.log(res);
      await this.readAll()
      console.log(id);
    },
    async API(method,url,data) {
      try {
        const response = await axios({
          method: method,
          baseURL: this.baseURL,
          url:url,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          data:data
        });
        console.log(response.data);
        return response.data
      } catch (error) {
        console.error(error);
      }
    },
    async readAll() {
        const res = await this.API('get',"",{})
        this.items = res.data
    },
    async deleteOne(id) {
       const res = await this.API('delete',`/${id}`,{})
      console.log(res);
      await this.readAll()
    },
  },
 async mounted(){
      await this.readAll()
  }
};
</script>

<style>
</style>