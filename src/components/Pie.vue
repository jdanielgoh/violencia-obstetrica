<template>
    <footer :class="{'fondo-morado': fondo_morado}">
        <div class="container main" >
            <div class="logo">
                <img class="menu-morado" src="@/assets/img/iconos/PARTOS ROTOS_01.svg"/>
                <img class="menu-blanco" src="@/assets/img/iconos/PARTOS ROTOS_01-morado.svg"/>
            </div>
            <div class="contenidos">
                <div class="lista-enlaces">
                    <p><strong>Contenido</strong></p>
                    <p><router-link :to="{name:'Inicio', hash:'#especiales'}">Especiales</router-link></p>
                    <p><router-link :to="{name:'Inicio', hash:'#visualizaciones'}">Visualizaciones</router-link></p>
                    <p><router-link :to="{name: 'Testimonios'}">Testimonios</router-link></p>
                    <p><router-link :to="{name: 'Podcasts'}">Podcast</router-link></p>
                </div>
                <div class="lista-enlaces segunda-columna">
                    <p><router-link :to="{name: 'TusDerechos'}">Tus derechos</router-link></p>
                    <p><router-link :to="{name: 'QuienesSomos'}">¿Quiénes somos?</router-link></p>
                    <p><router-link :to="{name: 'Metodologia'}">Metodología</router-link></p>
                    <p><router-link :to="{name:'Creditos'}">Créditos</router-link></p>
                </div>
            </div>
            <div class="multimedia">
                <p><strong>Multimedia</strong></p>
                <div class="enlaces-multimedia">
                    <div>
                        <a href="">
                            <img class="img-youtube icono-blanco" :src="require('@/assets/img/iconos/youtube.svg')"/>
                            <img class="img-youtube icono-morado" :src="require('@/assets/img/iconos/youtube_mor.svg')"/>
                            <span>YouTube</span>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img class="img-anchor icono-blanco" :src="require('@/assets/img/iconos/anchor.svg')"/>
                            <img class="img-anchor icono-morado" :src="require('@/assets/img/iconos/anchor_mor.svg')"/>
                            <span>Podcast</span>
                        </a>
                    </div>
                </div>
                <p><strong>Encuesta</strong></p>
                <p><a>Encuesta</a></p>
                <p><a>Encuesta</a></p>
            </div>
            <div class="contacto">
                <p><strong>Contacto</strong></p>
                <a href = "mailto: mujeres@partoscuba.info">mujeres@partoscuba.info</a>
                <p>Copyright © Partos Rotos. Todos los derechos reservados</p>
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
            lista_morado:["Inicio","Creditos","Testimonios","TusDerechos","Podcasts"]
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
    padding-top:100px;
    padding-bottom:100px;
    background: #fff;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1001;
    .container.main{
        display: flex;
        padding: 15px;
        border-top: 1px solid #4A258280;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        gap: 30px;
        .logo{
                img.menu-blanco{
                    display: inline-block;
                }
                img.menu-morado{
                    display: none;
                }
            }
        .contenidos{
            display: flex;
            flex-wrap: wrap;

            div.lista-enlaces {
                width:250px;
                color:#4A2582;
                flex: 1;
                &.segunda-columna{
                    margin-top: 33px;
                }
                &> *{
                    display: block;
                    margin: 5px 0 0 0px;
                    a{
                        color:#4A2582!important;
                        text-decoration: none;
                    }
                    color:#4A2582!important;
                }
                
            }

        }
        .multimedia{
            p{
                display: block;
                    margin: 5px 0 0 0px;
            }
            p strong{
                color: #4A2582;
                margin-bottom:10px;
            }
            .enlaces-multimedia{
                display: flex;
                flex-wrap: nowrap;
                gap:10px;
                a{
                    color: #4A2582!important;
                    display: flex;
                    text-decoration: none;
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

        }
        .contacto{
            max-width: 230px;
            color:#4A2582;
            flex: 1;
            &> *{
                display: block;
                margin: 5px 0 0 0px;

                a{
                    color:#4A2582!important;
                    text-decoration: none;
                }
                color:#4A2582!important;
            }

        }
        
    }

    &.fondo-morado{
        background: #4A2582;
        .container.main{
            display: flex;
            padding: 15px;
            border-top: 1px solid #FFFFFF80;
            flex-wrap: nowrap;
            justify-content: space-between;
            margin: 0 auto;
            gap: 30px;
            .logo{
                    img.menu-blanco{
                        display: none;
                    }
                    img.menu-morado{
                        display: inline-block;
                    }
                }
            .contenidos{
                display: flex;
                flex-wrap: nowrap;

                div.lista-enlaces {
                    color:#fff;
                    flex: 1;
                    &.segunda-columna{
                        margin-top: 33px;
                    }
                    &> *{
                        display: block;
                        margin: 5px 0 0 0px;
                        a{
                            color:#fff!important;
                            text-decoration: none;
                        }
                        color:#fff!important;
                    }
                    
                }

            }
            .multimedia{
                p{
                    display: block;
                        margin: 5px 0 0 0px;
                }
                p strong{
                    color: #fff;
                    margin-bottom:10px;
                }
                .enlaces-multimedia{
                    display: flex;
                    flex-wrap: nowrap;
                    gap:10px;
                    a{
                        color: #fff!important;
                        display: flex;
                        text-decoration: none;
                        img.img-youtube{
                            margin-right: 10px;
                            height: 20px
                        }
                        img.img-anchor{
                            margin-right: 10px;
                            height: 20px
                        }
                        img.icono-blanco{
                        display: inline-block;
                        }
                        img.icono-morado{
                            display: none;
                        }
                    }
                    

                }

            }
            .contacto{
                max-width: 230px;
                color:#fff;
                flex: 1;
                &> *{
                    display: block;
                    margin: 5px 0 0 0px;

                    a{
                        color:#fff!important;
                        text-decoration: none;
                    }
                    color:#fff!important;
                }

            }
        }
        
    }
}
</style>