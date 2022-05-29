<template>
    <footer :class="{'fondo-morado': fondo_morado}">
        <div class="container main" >
            <div class="logo">
                <img class="menu-morado" src="@/assets/img/iconos/PARTOS ROTOS_01.svg"/>
                <img class="menu-blanco" src="@/assets/img/iconos/PARTOS ROTOS_01-morado.svg"/>
            </div>
            <div class="contenidos">
                <p class="footer-titulo">Contenido</p>
                <div class="lista-enlaces">
                    <div class="columna-enlaces">
                        
                        <p><router-link :to="{name:'Inicio', hash:'#especiales'}">Reportajes</router-link></p>
                        <p><router-link :to="{name:'Inicio', hash:'#visualizaciones'}">Visualizaciones</router-link></p>
                        <p><router-link :to="{name: 'Testimonios'}">Testimonios</router-link></p>
                        <p><router-link :to="{name: 'Podcasts'}">Podcast</router-link></p>
                    </div>
                    <div class="columna-enlaces segunda-columna">
                        <p><router-link :to="{name: 'QueEsLaViolenciaObstetrica'}">Tus derechos</router-link></p>
                        <p><router-link :to="{name: 'QuienesSomos'}">¿Quiénes somos?</router-link></p>
                        <p><router-link :to="{name: 'Metodologia'}">Metodología</router-link></p>
                        <p><router-link :to="{name:'Creditos'}">Créditos</router-link></p>
                    </div>
                </div>
                
            </div>
            <div class="multimedia">
                <p class="footer-titulo">Multimedia</p>
                <div class="enlaces-multimedia">
                    <div>
                        <a href="https://www.youtube.com/channel/UCcEgnE14zwefuZtaroPx9Yw" target="_blank">
                            <img class="img-youtube icono-blanco" :src="require('@/assets/img/iconos/youtube.svg')"/>
                            <img class="img-youtube icono-morado" :src="require('@/assets/img/iconos/youtube_mor.svg')"/>
                            <span>YouTube</span>
                        </a>
                    </div>
                    <div>
                        <a href="https://anchor.fm/isla-violeta/" target="_blank">
                            <img class="img-anchor icono-blanco" :src="require('@/assets/img/iconos/anchor.svg')"/>
                            <img class="img-anchor icono-morado" :src="require('@/assets/img/iconos/anchor_mor.svg')"/>
                            <span>Podcast</span>
                        </a>
                    </div>
                </div>
                <p class="footer-titulo">Encuestas</p>
                <p><a href="https://capir.limequery.org/571399">Cuéntanos tu parto</a></p>
                <p><a href="https://capir.limequery.org/145636">Encuesta de muerte materna</a></p>
            </div>
            <div class="contacto">
                <p class="footer-titulo">Contacto</p>
                <a href = "mailto: mujeres@partoscuba.info">mujeres@partoscuba.info</a>
                <p class="copy">Copyright © Partos Rotos. Todos los derechos reservados</p>
            </div>

        </div>
    </footer>
</template>
<script>

export default {
    name: "Footer",
    components:{
    },
    data(){
        return{
            menu_activo: false,
            fondo_morado: true,
            es_inicio: true,
            lista_morado:["Inicio","QuienesSomos","Testimonios","QueEsLaViolenciaObstetrica","Podcasts","DatosViolencia","Historietas"]
        }
    },
    watch:{
        $route (to, from){
            this.show = false;
            if(this.lista_morado.includes(to.name) || to.fullPath.includes("visualizaciones")){
                this.fondo_morado = true
            }
            else{this.fondo_morado=false}

        }
    },
    mounted(){
            if(this.lista_morado.includes(this.$route.name) || this.$route.fullPath.includes("visualizaciones")){
                this.fondo_morado = true
            }
            else{this.fondo_morado=false}
            console.log(this.fondo_morado)
    }

}
</script>

<style lang="scss" >
footer{
    padding-top: 180px;
    padding-bottom:100px;
    background: #fff;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1001;
    .container.main{
        display: flex;
        padding: 48px 15px;
        border-top: 1px solid #4A258280;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: auto auto;
        gap: 30px;
        p.footer-titulo{
            color: #4A2582;
            margin: 10px 0;
            font-weight: 700;
        }
        .logo{
                img.menu-blanco{
                    display: inline-block;
                }
                img.menu-morado{
                    display: none;
                }
            }
        .contenidos{
            display: block;
    
            div.lista-enlaces {
                display: flex;
                flex-wrap: wrap;
                
                color:#4A2582;
                div.columna-enlaces{
                    display: block;
                    margin: 5px 0 0 0px;
                    width:150px;
                    margin-top: 0;
                    a{
                        color:#4A2582!important;
                        text-decoration: underline;
                    }
                    p{
                        margin: 0 0 10px 0;
                    }
                    color:#4A2582!important;
                } 
            }
        }
        .multimedia{
            p{
                        margin: 0 0 10px 0;
                    }
            
            .enlaces-multimedia{
                display: flex;
                margin: 14px 0 10px 0;
                flex-wrap: nowrap;
                gap:10px;
                a{
                    color: #4A2582;
                    display: flex;
                    text-decoration: underline;
                    img.img-youtube{
                        margin-right: 10px;
                        height: 20px
                    }
                    img.img-anchor{
                        margin-right: 10px;
                        height: 20px
                    }
                    img.icono-blanco{
                        display: none;
                    }
                    img.icono-morado{
                        display: inline-block;
                    }
                }
            }
            p{
                a{
                    color: #4A2582;
                }
            } 

        }
        .contacto{
            max-width: 230px;
            color:#4A2582;
            flex: 1;
            &> *{
                display: block;
                margin: 5px 0 0 0px;

                a{
                    color:#4A2582;
                    text-decoration: underline;
                }
                color:#4A2582;
            }
            p.copy{
                margin-top:20px;
            }

        }
        
    }

    &.fondo-morado{
        background: #4A2582;
        .container.main{
     
            border-top: 1px solid #FFFFFF80;
            p.footer-titulo{
                color: #fff;
                margin: 10px 0;
                font-weight: 700;
            }
            .logo{
                img.menu-blanco{
                    display: none;
                }
                img.menu-morado{
                    display: inline-block;
                }
            }
            .contenidos{
                div.lista-enlaces {
                    color:#fff;
                    div.columna-enlaces{
                        a{
                            color:#fff!important;
                        }
                        color:#fff!important;
                    } 
                }
            }
            .multimedia{
                p strong{
                    color: #fff;
                }
                .enlaces-multimedia{
                    a{
                        color: #fff!important;
                        img.icono-blanco{
                            display: inline-block;
                        }
                        img.icono-morado{
                            display: none;
                        }
                    }
                }
                p{
                    a{
                        color: #fff;
                    }
                } 

            }
            .contacto{
                &> *{
                    a{
                        color:#FDA1C9;
                    }
                    color:#FDA1C9;
                }
                p.copy{
                    color: #fff;
                }

            }
        }
        
    }
}
</style>