<template>
  <div id="Category">
      <label>
        Consulta por id: <input placeholder="Id" v-model="idCategory" />
      </label><br/>
      <input type="button" value="Consultar" v-on:click="getCategory" />
      <h3 v-show="show">Caracteristicas de la categoria <span> {{ idCategory }} </span></h3>
      <label v-show="show">
        Nombre:&emsp;&emsp;<input placeholder="Nombre de la categoria" v-model="categoryName" /><br/>
      </label>
      <label v-show="show">
        Descripcion:&emsp;&emsp;<input placeholder="Descripcion de la categoria" v-model="categoryDescription" /><br/>
      </label>
      <div v-show="show">
        <input v-if="creacion" type="button" value="Crear" v-on:click="createCategory" />
        <input v-if="creacion===false" type="button" value="Actualizar" v-on:click="updateCategory" />
        <!--<input type="button" value="Borrar" v-on:click="createProduct" /> -->
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Category",
  data: function () {
    return {

      creacion: false,
      show: false,
      idCategory: "",
      categoryName: "",
      categoryDescription: ""
    };
  },
  methods: {
    getCategory: function () {
      let self = this;
      axios
        .get("https://g3m2-8-sprint2.herokuapp.com/category/" + this.idCategory)
        .then((result) => {
          self.categoryDescription="";
          self.categoryName="";
          self.idCategory="";
          self.creacion=false;
          self.show=true;
        })
        .catch((error) => {
          if (error=404) {
            alert("La categoría no existe, a continuacion puedes crearla");
            self.categoryName = "";
            self.categoryDescription = "";
            self.show=true;
            self.creacion=true;

          }else{
            alert("ERROR Servidor" + error);
          } 
        });
    },

    createCategory: function () {
      let post = {
        "idCategory": parseInt(this.idCategory),
        "categoryName": this.categoryName,
        "categoryDescription": this.categoryDescription,
      };
      axios
        .post("https://g3m2-8-sprint2.herokuapp.com/category/", post, {
          headers: {},
        })
        .then((result) => {
          alert("Creación Correcta");
            self.idCategory = "";
            self.categoryName = "";
            self.categoryDescription = "";
            self.creacion=false;
            self.show=false;
        })
        .catch((error) => {
          alert("ERROR Creación");
        });
    },
    updateCategory: function () {
      let put = {
        "productId": parseInt(this.productid),
        "productName": this.productName,
        "category": this.category,
        "picture": this.picture,
        "sellUnit": this.sellUnit,
        "price": this.price,
        "qtyAvaliable": this.qtyAvaliable,
        "brand": this.brand
      };
      axios
        .put("https://g3m2-8-sprint2.herokuapp.com/category/update/", put, {
          headers: {},
        })
        .then((result) => {
          alert("Actualizacion Correcta");
            self.idCategory = "";
            self.categoryName = "";
            self.categoryDescription = "";
            self.creacion=false;
            self.show=false;
        })
        .catch((error) => {
          alert("ERROR Actualizacion");
        });
    },
  },
};
</script>

<style>
#Category {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#Category button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
#Category button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #283747;
}
img {
  max-width: 30%;
  max-height: 30%;
}
#Category h2 {
  font-size: 50px;
  color: #283747;
}
#Category span {
  color: crimson;
  font-weight: bold;
}
</style>