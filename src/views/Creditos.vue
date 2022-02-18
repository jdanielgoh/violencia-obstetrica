<template>
  <div class="creditos">
    <div class="container text">
      <h1 class="blanco">
        Créditos
        <hr />
      </h1>
      <p>
        Partos Rotos es una investigación sobre la violencia obstétrica en Cuba.
        El proyecto, desde una visión integral, ha seguido una metodología en la
        que se emplearon métodos y técnicas de la investigación periodística
        combinadas con algunos procedimientos de la investigación social como
        cuestionarios y entrevistas en profundidad. Uno de los principales
        aportes de esta investigación es la implementación de dos cuestionarios:
        una destinada a recopilar información sobre las experiencias de partos y
        la otra enfocada en los casos de muerte materna durante el parto.
      </p>
    </div>
    <div class="container main equipos">
        <div class="equipo-titulo">
            <h5>PERIODISTAS</h5>
        </div>
        <div class="equipo-integrantes">
            <ImagenPie 
				:link='"img/creditos/CLAUDIA.jpeg"'
				:pie="'Claudia Padrón Cueto'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/Cynthia.jpg"'
				:pie="'Cynthia de la Cantera Toranzo'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/ISABEL.jpeg"'
				:pie="'Isabel Milagro Echemendía Pérez'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/María Antonieta.jpeg"'
				:pie="'María Antonieta Colunga Olivera'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/Darcy.jpeg"'
				:pie="'Darcy Borrero Batista'"
                class="ficha"
                altura="300px"
			/>
        </div>
    </div>
    <div class="container main equipos">
        <div class="equipo-titulo">
            <h5>VISUALIZACIÓN</h5>
        </div>
        <div class="equipo-integrantes">
            <ImagenPie 
				:link='"img/creditos/datacritica.jpg"'
				:pie="'Proyecto Data Crítica'"
                class="ficha"
                altura="300px"
			/>
        </div>
    </div>
    <div class="container main equipos">
        <div class="equipo-titulo">
            <h5>IWPR</h5>
        </div>
        <div class="equipo-integrantes">
            <ImagenPie 
				:link='"img/creditos/wipr.jpg"'
				:pie="'IWPR'"
                class="ficha"
                altura="300px"
			/>
        </div>
    </div>
    <div class="container main equipos">
        <div class="equipo-titulo">
            <h5>ILUSTRADORES</h5>
        </div>
        <div class="equipo-integrantes">
            <ImagenPie 
				:link='"img/creditos/Hellman .jpeg"'
				:pie="'Hellman'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/Mary Esther.jpg"'
				:pie="'Andy Ruiz'"
                class="ficha"
                altura="300px"
			/>
            <ImagenPie 
				:link='"img/creditos/Andy.jpeg"'
				:pie="'Mary Esther Lemus'"
                class="ficha"
                altura="300px"
			/>
            
            
            
        </div>   
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImagenPie from "@/components/ImagenPie.vue";

export default {
  name: "Creditos",
  components: {
    ImagenPie,
  },
};
</script>
<style scoped lang="scss">
.creditos {
    background: #4a2582;
    h1.blanco {
        line-height: 0.3;
    }
    p{
        color: #fff;
    }
    div.equipos{
        display: flex;
        margin-top: 100px;
		gap: 0px 30px; 
		flex-wrap: nowrap;
		justify-content: space-between;
        .equipo-titulo{
            flex: 0 1 25%;
            h5{
                margin-top:0;
                font-size: 24px;
                font-weight: 800;

                letter-spacing: 1.2px;
                color: #FDA1C9;
            }
        }
        .equipo-integrantes{
            flex: 0 1 75%;
            display: flex;
            flex-wrap: wrap;
            gap: 30px 30px; 
            .ficha{
                flex: 0 1 30%;


            }
        }

    }
  
}
</style>