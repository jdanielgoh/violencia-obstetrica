<template>
    <section class="container main grid-secciones">
        <h3 v-if="titulo" class="blanco">
            {{titulo}}
            <hr/>
        </h3>
        <div class="contenedor-escroleable">
            <div class="contenedor-secciones">
                <div class="ficha" v-for="(datum, i) in data" :key="i" :class="datum.clase">
                    <router-link :to="datum.to" v-if="!datum.externo" >
						<div
							>
							<ImagenPie 
								:link='datum.img'
							>
								<template slot="pie-foto">
									<div class="pie-foto-template">
										<p class="titulo"><strong>{{datum.titulo}}</strong></p>
										<p class="autorxs">{{datum.autorxs}}</p>
										<p class="resumen">{{datum.resumen}}</p>
										<router-link 
											:to="datum.to" 
											class="link-ficha" 
											>
											<img src="img/iconos/arrow--right.svg"/>
											<span>{{datum.texto_boton}}</span>
										</router-link>
									</div>
								</template>
							</ImagenPie>
						</div>
					</router-link>
					<a :href="datum.to" v-if="datum.externo" target="_blank">
						<div
							>
							<ImagenPie 
								:link='datum.img'
							>
								<template slot="pie-foto">
									<div class="pie-foto-template">
										<p class="titulo"><strong>{{datum.titulo}}</strong></p>
										<p class="autorxs">{{datum.autorxs}}</p>
										<p class="resumen">{{datum.resumen}}</p>
										<router-link 
											:to="datum.to" 
											class="link-ficha" 
											>
											<img src="img/iconos/arrow--right.svg"/>
											<span>{{datum.texto_boton}}</span>
										</router-link>
									</div>
								</template>
							</ImagenPie>
						</div>
					</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import ImagenPie from "@/components/utils/ImagenPie.vue"

export default {
    name: "GridSecciones",
    components: {
        ImagenPie
    },
    props: {
        titulo: String,
        data: Array,
    }
}
</script>
<style lang="scss">
$margen-grid-secciones: 70px;
@import "../../scss/_variables";

.grid-secciones{
		padding-top: 40px;
		h3{
			font-size: 56px;
			line-height: 1;
			&.blanco{
				color: #fff
			}
			@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
				font-size: 48px;
			}
		}
		.contenedor-secciones{
			display: flex;
			flex-wrap: wrap;
			gap: 30px;

			div.ficha{
				a{
					text-decoration: none;
					&:hover, &:active{
						text-decoration: none;
					}
				}
				&.third{
					width: calc(33% - 18px) ;
					@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
						width: 100%
					}
					div.imagen-blend-pie{
						
						.pie-foto-template{
							margin: auto 0 auto 0;
							p{	
								margin-bottom: 24px;
								color: #fff;
								&.titulo{
									strong{
										font-size: 24px;
										line-height: 1.1;
										font-weight: 700;
									}
									margin-bottom:0;
								}
								&.autorxs{
									font-size: 14px;
									margin-top: 5px;
									text-transform: uppercase;
									letter-spacing: 0.7px;
									opacity: .7;
								}
								&.resumen{
									font-size: 16px;
									margin-top: 5px;
									opacity: .7;
								}
							}
							a.link-ficha{
								display: inline-block;
								text-decoration: none;
								color: #FDA1C9;
								border: 1px solid #FDA1C9;
								border-radius: 24px;
								padding: 5px 24px 14px 24px;
								font-size: 14px;
								text-transform: uppercase;
								font-weight: 700;
								img{
									height: 24px;
									position: relative;
									top: 6px;
									margin-right: 10px;
								}
							}
						}
						.cover{
							height: 360px!important;
							background-color: transparent !important;
						}
					}
				}
				&.full{
					width: 100%;
					div.imagen-blend-pie{
						display: flex;
						flex-wrap: nowrap;
						gap: 30px;
						.pie-foto-template{
							margin: auto 0 auto 0;
							width: calc(50% - 15px);
							p{	margin-bottom: 24px;
								color: #fff;
								&.titulo{
									strong{
										font-size: 32px;
										line-height: 1.1;
										font-weight: 700;
									}
									margin-bottom:0;
								}
								&.autorxs{
									font-size: 14px;
									margin-top: 5px;
									text-transform: uppercase;
									letter-spacing: 0.7px;
									opacity: .7;
								}
								&.resumen{
									font-size: 16px;
									margin-top: 5px;
									opacity: .7;
								}
							}
							a.link-ficha{
								display: inline-block;

								margin-top: 48px;
								text-decoration: none;
								color: #FDA1C9;
								border: 1px solid #FDA1C9;
								border-radius: 24px;
								padding: 5px 24px 14px 24px;
								font-size: 14px;
								text-transform: uppercase;
								font-weight: 700;
								img{
									height: 24px;
									position: relative;
									top: 6px;
									margin-right: 10px;
								}
							}
						}
						.cover{
							width: calc(50% - 15px);
							height: 480px!important;
							background-color: transparent;


						}
					}
					
				}
				&.third, &.full{
					@media screen and (max-width: map-get($media-queries-limit, "mobile")) {
						width: 100%;
						div.imagen-blend-pie{
							display: flex;
							flex-wrap: wrap;
							.pie-foto-template{
								margin-bottom: 24px;
								margin: auto 0 auto 0;
								width: 100%;
								p{
									color: #fff;
									&.titulo{
										strong{
											font-size: 24px;
											line-height: 1.1;
											font-weight: 700;
										}
										margin-bottom:0;
									}
									&.autorxs{
										font-size: 14px;
										margin-top: 5px;
										text-transform: uppercase;
										letter-spacing: 0.7px;
										opacity: .7;
									}
									&.resumen{
										font-size: 16px;
										margin-top: 5px;
										opacity: .7;
									}
								}
								a.link-ficha{
									display: inline-block;

									margin-top:48px;
									text-decoration: none;
									color: #FDA1C9;
									border: 1px solid #FDA1C9;
									border-radius: 24px;
									padding: 5px 24px 14px 24px;
									font-size: 14px;
									text-transform: uppercase;
									font-weight: 700;
									img{
										height: 24px;
										position: relative;
										top: 6px;
										margin-right: 10px;
									}
								}
							}
							.cover{
								height: 360px!important;
								width: 100%;
								background-color: transparent !important;
							}
						}
					}
				}
			}
		}
	}
</style>