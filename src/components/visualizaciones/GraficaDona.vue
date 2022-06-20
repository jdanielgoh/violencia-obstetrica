<template>
	<div :id=dona_id class="contenedor-dona">
		<div>
			<h5 class="titulo" v-if="titulo">{{titulo}}</h5>
		</div>
		<svg class="svg-dona">
			<g class="grupo-contenedor-de-dona"></g>
			<g class="grupo-contenedor-tooltip">
				<foreignObject>
					<div class="tooltip-contenido">
						<div class="contenedor-boton-cerrar">
							{{titulo_tooltip}}
							<button class="boton-cerrar-tooltip">
								&times;
							</button>
						</div>
						<p class="tooltip-variable"></p>
						<p class="tooltip-cifra"></p>
					</div>
				</foreignObject>
			</g>
		</svg>
		<div :id="`${dona_id}-leyenda`" class="leyenda-dona">
			<button class="boton-categoria" v-for="(datum,indice) in datos" :key="datum.nombre" @click="clickButtonCategoria(indice)" :class="'label-'+indice">
				<span class="categoria-color" :style="{background:datum.color}"></span>
				<span class="categoria-texto">{{datum.nombre}}</span>
			</button>
		</div>
		
	</div>
</template>

<script>
	import * as d3 from "d3";

	export default {
		name: 'DaiDona',
		props: {
			dona_id: {
				type: String,
				required: true
			},
			datos: {
				type: Array,
				required: true
			},
			titulo: String,
			instruccional: String,
			titulo_leyenda: String,
			enlace_proyecto: String,
			titulo_proyecto: String,
			texto_fuente: String,
			texto_notas: String,
			link_descarga_csv: String,
			columnas_descargables: {
				type: Array,
				default: function () {
					return ['nombre', 'cantidad'];
				},
			},
			titulo_tooltip: {
				type: String,
				default: ""
			},
			ancho_tooltip: {
				type: Number,
				default: 165
			},
			radio_interno: {
				type:Number,
				default: .18
			},
			radio_externo: {
				type: Number,
				default: .32
			},
			radio_texto: {
				type: Number,
				default: .33
			},
		},
		watch: {
			datos: function(new_val,old_val) {
				this.configurandoDimensionesParaDona();
				if (new_val.length > old_val.length) {
					//Actualizamos paths
					this.segmentos = this.grupo_contenedor
						.selectAll("path")
						.data(this.data_para_pay);
					
					this.segmentos = this.segmentos.enter()
						.append("path").style("cursor","pointer")
						.merge(this.segmentos);

					this.segmentos.exit().remove();

					//Actualizamos textos
					this.textos_porcentajes = this.grupo_contenedor
						.selectAll("text")
						.data(this.data_para_pay);

					this.textos_porcentajes = this.textos_porcentajes.enter()
						.append("text")
						.merge(this.textos_porcentajes);

					this.textos_porcentajes.exit().remove();
				}
				else {
					this.segmentos.data(this.data_para_pay)
						.exit()
						.remove();

					this.textos_porcentajes.data(this.data_para_pay)
						.exit()
						.remove();
				}

				//Ajustes
				this.textos_porcentajes.style("fill-opacity", "1");
				this.reestablecerVista();

				this.actualizandoDona();
			}
		},
		
		data: function () {
			return {
				es_notas_abiertas:false,
			}
		},
		mounted: function () {
			this.svg = d3.select("#"+this.dona_id+" svg.svg-dona");
			this.grupo_contenedor = this.svg.select("g.grupo-contenedor-de-dona");
			this.grupo_contenedor_tooltip = this.svg.select("g.grupo-contenedor-tooltip");

			this.configurandoDimensionesParaSVG();

			/* 
			 Creando la funcion y dimensiones para el pie:
			 Es importante que el pie no tenga ninguna funcion sort y que las 
			 rebanadas hereden el orden de la base de datos para que los indices
			 de las rebanadas coincidan con los indices de la nomenclatura  
			*/
			this.pie = d3.pie().sort(null);
            this.arc = d3.arc();
            this.arc_texto = d3.arc();

			this.configurandoDimensionesParaDona();
			this.creandoDona();
			this.actualizandoDona();
			this.contenedor_leyenda = d3.select("#"+this.dona_id+"-leyenda");
			this.tooltip = this.grupo_contenedor_tooltip.select("foreignObject");

			window.addEventListener("resize", this.reescalandoPantalla);
		},
		methods: {
			configurandoDimensionesParaDona: function () {
				this.pie.value((d) => d.cantidad);
				this.data_para_pay = this.pie(this.datos);
				this.arc.innerRadius(this.ancho * this.radio_interno)
					.outerRadius(this.ancho * this.radio_externo);
				this.arc_texto.innerRadius(this.ancho * this.radio_texto)
					.outerRadius(this.ancho * this.radio_texto);
			},
			configurandoDimensionesParaSVG: function () {
				this.ancho = document.getElementById(this.dona_id).clientWidth;
				this.alto = this.ancho;
				this.svg.attr("width", this.ancho).attr("height", this.ancho);
				this.grupo_contenedor.attr("transform", `translate(${this.ancho * .5}, ${this.alto * .5})`);
				this.grupo_contenedor_tooltip.attr("transform", `translate(${this.ancho * .5}, ${this.alto * .5})`);
			},
			creandoDona: function () {
				this.segmentos = this.grupo_contenedor
					.selectAll("paths")
					.data(this.data_para_pay)
					.enter()
					.append('path')
					.style("cursor", "pointer");
				
				this.textos_porcentajes = this.grupo_contenedor
					.selectAll('allLabels')
					.data(this.data_para_pay)
					.enter()
					.append("text");
			},
			actualizandoDona: function () {
				this.segmentos
					.attr('d', this.arc)
					.attr('fill', (d) => d.data.color)
					.attr("class", (d,i) => "rebanada-"+i)
					.attr("stroke-opacity", 0)
					.on("click", (event,d) => this.clickButtonCategoria(d.index));

				this.textos_porcentajes
					.text((d) => (Math.round(1000 * d.data.cantidad / d3.sum(this.datos.map(d => d.cantidad))) / 10 ) +"%")
					.attr("class", (d,i) => "texto-"+i)
					.style("font-size", "20px")
					.style("fill", d => d.data.color)
					.style("font-weight", "700")
                    .attr('transform', (d) => {
                        var pos = this.arc_texto.centroid(d);
                        return 'translate(' + pos + ')';
                    })
					.style("fill-opacity", 1)
					//
					// Los siguientes dos estilos alinean el texto segun el angulo en el que se encuentre
                    .style('text-anchor', (d) => {
                        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                        return (midangle < Math.PI ? 'start' : 'end');
                    })
					.style('dominant-baseline', (d) => {
                        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
                        return (midangle < .5 * Math.PI || midangle > 1.5 * Math.PI ? 'auto' : 'hanging');
                    });
			},
			reescalandoPantalla: function () {
				this.configurandoDimensionesParaSVG();
				this.configurandoDimensionesParaDona();
				this.actualizandoDona();
			},
			clickButtonCategoria: function(indice) {
				this.segmentos.interrupt()
					.transition()
					.duration(500)
					.style("fill-opacity", .25);
				this.textos_porcentajes.interrupt()
					.transition()
					.duration(500)
					.style("fill-opacity", 0);
				// 
				// Si el click ocurrio en un elemento que no esta seleccionado, este se resalta
				if (!this.svg.select("path.rebanada-"+indice).classed("activo")) {
					this.svg.select("path.rebanada-"+indice)
						.interrupt()
						.transition()
						.duration(500)
						.style("fill-opacity", 1);

					this.svg.select("text.texto-"+indice).interrupt()
						.transition()
						.duration(500)
						.style("fill-opacity", 1);
					this.svg.selectAll("path")
						.classed("activo", false);
					
					this.contenedor_leyenda
						.selectAll(".boton-categoria")
						.classed("inactivo", true);
					this.contenedor_leyenda
						.select(".boton-categoria.label-"+indice)
						.classed("activo", true)
						.classed("inactivo", false);
					this.mostrarTooltip(indice);
				}
				// 
				// Si el click ocurrio en un elemento que ya estaba seleccionado, este se regresa a su estado original
				else {
					this.reestablecerVista();
				}
				this.svg.select("path.rebanada-"+indice)
					.classed("activo", !this.svg.select("path.rebanada-"+indice).classed("activo"));
			},
			mostrarTooltip: function(indice) {
				this.tooltip.style("visibility", "visible");

				let pos = this.arc_texto.centroid(this.data_para_pay[indice]);
				let angulo_medio = this.data_para_pay[indice].startAngle + (this.data_para_pay[indice].endAngle - this.data_para_pay[indice].startAngle) / 2;

				this.tooltip
					.attr("x", angulo_medio > Math.PI ? pos[0] : pos[0] - this.ancho_tooltip)
					.attr("y", pos[1])
					.attr("width", this.ancho_tooltip)
					.attr("height", 30);
				
				let contenido_tooltip = this.tooltip.select("div.tooltip-contenido")
					.style("background", "rgba(0, 0, 0, .8)")
					.style("min-width", this.ancho_tooltip)
					.style("border-radius", "8px")
					.style("width", this.ancho_tooltip+"px")
					.attr("height", 70 )
					.style("padding", "0 3px 0 10px");
				
				this.svg.select("button.boton-cerrar-tooltip")
					.on("click", this.reestablecerVista);

				contenido_tooltip
					.select("p.tooltip-variable")
					.text(this.datos[indice]["nombre"])
					.style("margin", "0")
					.style("padding", "0");
					
				contenido_tooltip
					.select("p.tooltip-cifra")
					.html(`${this.datos[indice]["cantidad"].toLocaleString("en")} | <b>${(Math.round(1000 * this.datos[indice]["cantidad"] / d3.sum(this.datos.map(d=>d.cantidad))) / 10 ) +"%"}<b>`)
					.style("margin", "0")
					.style("padding", "0 0 5px 0");
				
				this.tooltip
					.attr("height", contenido_tooltip.style("height"))
					.style("height", contenido_tooltip.style("height"))
					.attr("width", parseInt(contenido_tooltip.style("width")) + 13)
					.attr("y", angulo_medio < .5 * Math.PI || angulo_medio > 1.5 * Math.PI ? pos[1] : pos[1]-parseInt(contenido_tooltip.style("height")));
			},

			reestablecerVista: function () {
				this.tooltip.style("visibility", "hidden");
				this.segmentos.interrupt()
					.transition()
					.duration(500)
					.style("fill", d => d.color)
					.style("fill-opacity", 1);
				this.textos_porcentajes.interrupt()
					.transition()
					.duration(500)
					.style("fill-opacity", 1);
				
				this.contenedor_leyenda
					.selectAll(".boton-categoria")
					.classed("activo", false)
					.classed("inactivo", false);
			},

			
		}
	}
</script>

<style scoped lang="scss">
	$margen: 10px;
	$radio: 10px;
	.contenedor-dona {
		margin: auto;
		background: var(--color-fondo);
		border: solid var(--color-bordes) 1px;
		border-radius: $radio;
		color: var(--color-texto);
        font-family: "Raleway";
		max-width: 700px;
		width: calc(100% - 20px);
	}
	.titulo-proyecto {
		font-size: 14px;
		margin: 20px $margen;
		text-align: right;
	}
	.titulo {
		font-size: 16px;
		font-weight: 700;
		margin: $margen;
				text-align: center;

	}
	.actualizacion {
		font-size: 12px;
		margin: $margen;
	}
	.instruccional {
		font-size: 14px;
		margin: $margen;
		opacity: .7;
	}
	.leyenda-dona {
        font-family: "Raleway";
		display: flex;
        justify-content: center;
		flex-wrap: wrap;
		border-radius: $radio;
		box-shadow: 0px -5px 5px -1px rgba(var(--color-sombra),.2);
		margin-bottom: $margen;
		.titulo-leyenda {
			flex: 1 0 100%;
			font-size: 14px;
			font-weight: 700;
			margin: $margen * 2 $margen $margen;
			text-align: center;
		}
		.boton-categoria {
            font-family: "Raleway";
            font-size: 14px;
			background: none;
			border: none;
			color: var(--color-texto);
			cursor: pointer;
			margin: $margen;
			align-items: center;
			max-width: calc(50% - 20px);
			display: flex;

			transition: opacity .3s ease-in-out;
			.categoria-color {
				width: 25px;
				height: 25px;
				border-radius: 25px;
			}
			.categoria-texto {
				padding-left: 5px;
			}
			&.activo {
				opacity: 1;
			}
			&.inactivo {
				opacity: .3;
			}
		}
	}

	// svg
	svg.svg-dona ::v-deep foreignObject {
		color: #000;
		font-size: 12px;
	}
	svg.svg-dona ::v-deep div.contenedor-boton-cerrar {
		height: auto;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		width: 100%;
		padding-top: 5px;
	}
	svg.svg-dona ::v-deep button.boton-cerrar-tooltip {
		background: none;
		border: none;
		padding: 0 0 0 5px;
		cursor: pointer;
		img {
			width: 30px;
			height: 30px;
		}
	}
	// a11y
	.a11y-solo-lectura {
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		top: -1px;
		left: -1px;
	}
</style>
