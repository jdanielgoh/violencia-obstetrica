<template>
	<div class="quienessomos container main">
		<div class="row">
		<div class="imagen">
			<ImagenPie
			:link='"img/portada-rellax/0004.jpg"'
			:pie="'nombre de persona'"
			:altura="'500px'"
			/>
		</div>
		<div class="texto">
			<h1>¿Quiénes somos?</h1>
			<p>
			En septiembre de 2020 publicamos una investigación sobre violencia
			obstétrica en Cuba que fue replicada por varios medios independientes.
			De inmediato, el reportaje generó en redes una avalancha de denuncias.
			Mujeres cubanas de diferentes edades y regiones aseguraron haber
			sufrido violencia al momento de dar a luz.
			</p>
		</div>
		</div>
		<div class="row">
		<div class="texto">
			<p>
			Las cientos de denuncias que contabilizamos entonces nos sugirieron
			que la violencia obstétrica no se reducía a las experiencias aisladas
			que habíamos expuesto, sino que era una práctica recurrente en nuestro
			país. Una práctica que no es medida en las estadísticas oficiales y de
			la que apenas se habla.
			</p>
			<p>
			Por la importancia de visibilizar estas historias y denunciar la
			violencia que padecen las mujeres y sus hijos e hijas durante la
			gestación y el alumbramiento, hemos continuado reportando sobre el
			tema durante el último año. El resultado es este especial que ahora
			presentamos y que parte de una veintena de entrevistas en profundidad
			y 514 encuestas realizadas a madres cubanas entre 20 y 60 años.
			</p>
			<p>
			Periodistas desde Cuba, México y Estados Unidos investigamos cómo
			viven las mujeres de la isla su maternidad y partos, en qué
			condiciones lo hacen y cómo recuerdan esa experiencia. Estas son sus
			historias, sus rostros y sus voces.
			</p>
			<p>
			El resultado es este especial que ahora presentamos y que parte de una
			veintena de entrevistas en profundidad y 514 encuestas realizadas a
			madres cubanas entre 20 y 60 años.
			</p>
		</div>
		<div class="imagen">
			<ImagenPie
			:link='"img/portada-rellax/0008.jpg"'
			:pie="'nombre de persona'"
			:altura="'500px'"
			/>
		</div>
		</div>
		<div class="row">
		<div class="imagen">
			<ImagenPie
			:link='"img/portada-rellax/0014.jpg"'
			:pie="'nombre de persona'"
			:altura="'500px'"
			/>
			<p>
			Periodistas desde Cuba, México y Estados Unidos investigamos cómo
			viven las mujeres de la isla su maternidad y partos, en qué
			condiciones lo hacen y cómo recuerdan esa experiencia.
			</p>
			<p class="cita">ESTAS SON SUS HISTORIAS, SUS ROSTROS Y SUS VOCES.</p>
		</div>
		<div class="texto">
			<p class="cita">
			UNA VEINTENA DE ENTREVISTAS EN PROFUNDIDAD Y 514 ENCUESTAS REALIZADAS
			A MADRES CUBANAS ENTRE 20 Y 60 AÑOS.
			</p>
			<ImagenPie
			:link='"img/portada-rellax/0017.jpg"'
			:pie="'nombre de persona'"
			:altura="'500px'"
			/>
		</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import ImagenPie from "@/components/utils/ImagenPie.vue";

export default {
    name: "QuienesSomos",
    components: {
        ImagenPie,
    },
};
</script>
<style scoped lang="scss">
.row {
    display: flex;
    flex-wrap: nowrap;
        div {
            padding: 15px;
            flex: 0 1 50%;
        }
    
    }
</style>