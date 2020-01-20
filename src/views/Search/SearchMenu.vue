<template>
  <div class="animated fadeIn">
          <!--[START Name input]-->
    <div class="card">
        <div class="card-header">
          <span>ค้นหาเมนูจากวัตถุดิบ</span>
        </div>
      <div class="card-body">
        <div class="form-group row" v-for="(item, index) in Search" :key="index">
                <label for="api-method" class="col-sm-2 col-form-label"> วัตถุดิบที่ : {{index + 1}}<span class="text-danger">*</span></label>
                <div class="col-sm-9 mb-2">
                  <input  type="text"
                          id="api-method"
                          v-model="item.name"
                          name="api-method"
                          class="form-control"
                          v-validate="'required'">
                </div>
          <button class="btn btn-danger" @click="deleteMenu(index)">ลบ</button>
        </div>
          <button class="btn btn-success" @click="addMenu()">เพิ่ม</button>
      </div>
    <!--[END Name input]-->
    <div class="card-footer">
      <button class="btn btn-success" @click="searchMenu()">ค้นหา</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
          Search: [
            {
              name: ''
            }
          ],
    }
  },
  methods: {
        addMenu(){
          this.Search.push({
            name: ''
            })
        },
        deleteMenu(index){
          this.Search.splice(index, 1)
        },
        searchMenu(){
          console.log('model',this.Search);
        }
      // addNameMedthod(a){
      //   this.method.push({
      //       name: this.Search[a].name
      //     })
      // },
  }
}
</script>