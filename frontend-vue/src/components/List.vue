<template>
  <b-card no-body style="width: 40rem;" img-top>
    <template v-slot:header>
      <h4 class="mb-0">Todo List App</h4>
    </template>

    <b-card-body>
      <b-card-text>
        <b-button @click="readAll">all</b-button>
        <b-form inline>
          <b-button size="md" variant="primary" class="mb-2 mt-2 mr-2" @click="create">
            <b-icon icon="plus" aria-hidden="true"></b-icon>
          </b-button>
          <b-form-input style="width:89%" class="sm-10 mb-10 mr-2" v-model="content"></b-form-input>
        </b-form>
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item
        v-for="(item,index) in items"
        :key="index"
        :color="item.status == 0?'red':'purple'"
      >
        <b-button variant="danger">Delete</b-button>
        <b-button variant="success" class="mr-2">Done</b-button>
        {{item.content}}
      </b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body>

    <b-card-footer>This is a footer</b-card-footer>
  </b-card>
</template>

<script>
const moment = require("moment");
const axios = require('axios');
export default {
  data: () => ({
    baseURL: "http://localhost:3000/api/todo",
    content: "",
    items: [
      {
        content: "A",
        status: 0,
      },
      {
        content: "B",
        status: 1,
      },
      {
        content: "C",
        status: 0,
      },
    ],
  }),
  methods: {
    async api(method, data) {
      console.log(data);
      const res = await fetch(this.baseURL, {
        method: method,
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      return res.json();
    },
    async load() {
      const res = await fetch(this.baseURL, {
        method: "get",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      this.items = res.json();
    },
    async create() {
      const id = parseInt(moment(new Date()).format("x"));
      const content = this.content;
      const create_date = new Date();
      const status = 0;
      const finish_date = "";

      this.api("post", { id, content, create_date, status, finish_date });
      this.load();
    },
    async update(id) {
      console.log(id);
    },
    async readAll() {
      try {
        const response = await axios({
            method:'get',
            url:this.baseURL,
            headers: {
          "Access-Control-Allow-Origin": "*"
        }
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteOne(id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>