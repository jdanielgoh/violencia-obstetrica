<template>
    <header class="header" :class="{'fondo-morado': fondo_morado,'menu-activo': menu_activo}">
        <div class="container main encabezado">
            <div class="logo">
                <router-link to="/" >
                    <img class="menu-morado" src="@/assets/img/iconos/PARTOS ROTOS_01.svg"/>
                    <img class="menu-blanco" src="@/assets/img/iconos/PARTOS ROTOS_01-morado.svg"/>
                </router-link>
            </div>
            <div class="botones">
                
                <!--<BotonAudio />
                <DropDown 
                    :config="config"
                ></DropDown>-->
                <button @click="menu_activo = !menu_activo" class="open"> 
                    <span v-if="!menu_activo">MENÚ</span>
                    <img v-if="!menu_activo" class="menu-morado" src="@/assets/img/iconos/menu.svg"/>
                    <img v-if="!menu_activo" class="menu-blanco" src="@/assets/img/iconos/menu-morado.svg"/>
                    <img v-if="menu_activo"  src="@/assets/img/iconos/close--filled.svg"/>
                </button>
            </div>
        </div>
        <nav :class="{'activo': menu_activo}" >
            <div class="container main">
                <div class="opciones">
                    <router-link :to="{name:'Inicio', hash:'#especiales'}" @click.native="menu_activo = !menu_activo">REPORTAJES</router-link>
                    <router-link :to="{name:'Inicio', hash:'#visualizaciones'}" @click.native="menu_activo = !menu_activo">VISUALIZACIONES</router-link>
                    <router-link :to="{name: 'Testimonios'}" @click.native="menu_activo = !menu_activo">TESTIMONIOS</router-link>
                    <router-link :to="{name: 'Testimonios', hash:'#historietas'}" @click.native="menu_activo = !menu_activo">HISTORIETAS</router-link>
                    <router-link :to="{name: 'Podcasts'}" @click.native="menu_activo = !menu_activo">PODCASTS</router-link>
                    <router-link :to="{name: 'TusDerechos'}" @click.native="menu_activo = !menu_activo">TUS DERECHOS</router-link>
                    <router-link :to="{name: 'Metodologia'}" @click.native="menu_activo = !menu_activo">METODOLOGÍA</router-link>
                    <router-link :to="{name:'QuienesSomos'}" @click.native="menu_activo = !menu_activo">¿QUIÉNES SOMOS?</router-link>
                    <a href="https://capir.limequery.org/571399" target="_blank">CUÉNTANOS TU PARTO</a>
                    <a href="https://capir.limequery.org/145636" target="_blank">ENCUESTA DE MUERTE MATERNA</a>
                    <!--<router-link to="/contacto" @click.native="menu_activo = !menu_activo">CONTACTO</router-link>-->
                </div>
            </div>

        </nav>
    </header>
</template>
<script>
//import DropDown from "@/components/utils/drop-down/DropDown.vue";

//import BotonAudio from "@/components/utils/BotonAudio.vue";

export default {
    name: "Encabezado",
    components:{
        //BotonAudio,
        //DropDown
    },
    data(){
        return{
            config: {
                options: [
                {
                    value: '<a class="enlace" href="https://capir.limequery.org/571399" target="_blank"> PARTO PROPIO </a>'
                },
                {
                    value: '<a class="enlace" href="https://capir.limequery.org/145636" target="_blank"> MUERTE MATERNA </a>'
                },
                
                ],
                placeholder: "ENCUESTAS",
                
                borderRadius: "20px",
            },
            menu_activo: false,
            fondo_morado: true,
            es_inicio: true,
            lista_morado:["Inicio","QuienesSomos","Testimonios","TusDerechos", "Podcasts"]
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
            if(this.lista_morado.includes(this.$route.name) || this.$route.fullPath.includes("visualizaciones") ){
                this.fondo_morado = true
            }
            else{this.fondo_morado=false}
    }

}
</script>

<style lang="scss" >
@import "../scss/_variables";

.header{
    background: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    box-shadow: 0px 3px 6px #00000029;

    .container{
        &.encabezado{
            overflow: inherit;
                position: relative;

           
        }
        display: flex;
        padding: 15px;
        flex-wrap: nowrap;
        margin: 0 auto;
        .logo{
            img.menu-blanco{
                display: inline-block;
            }
            img.menu-morado{
                display: none;
            }
        }
        .botones{
           
             div.dropdown{
                span.text{margin: 0 10px;}
                background: #fff;
                height: 31px;
                font-size: 14px;
                padding: 6px 10px;
                border-radius: 24px;
                color: #4A2582;
                border: 1px solid #4A2582;
                i.angle-down{
                    border-bottom: solid #4A2582;
                    border-right: solid #4A2582;
                }
                &:hover{
                    background: #4A2582!important;
                }
                .options{
                    border: none;
                    background: #fff;
                }
                .option{
                    
                    min-width: 200px;   
                }
            }
            display: inherit;
            cursor: pointer;
            .enlace{
                background: none;
                color: #4A2582;
                font-size: 14px;
                padding: 16px 4px;
                line-height: 0;
                margin-right: 15px;
            }
            margin: auto 0 auto auto;
            button.open{
                
                background: none;
                border: none;
                margin: auto;
                display: flex;
                img.menu-blanco{
                    display: inline-block;
                }
                img.menu-morado{
                    display: none;
                }
            }
        }
    }

    nav{
        display: none;
        background: #4A2582;
        &.activo{
            width: 100%;
            display: flex;
            height: calc( 100vh - 79px);
            min-height: 500px;
        }
        .opciones{
            font-size: 32px;
            font-weight: 700;
            margin:auto 100px auto auto;
            a{  
                text-decoration: none;
                color:#FFFFFF;
                display: block;
                margin-top: 12px;
            }
            @media screen and (max-width: map-get($media-queries-limit, "mobile")) {
                font-size: 24px;
                margin: 50px 100px auto auto;
                a{  

                    margin-top: 8px;
                }
            }
        }

    }
    &.fondo-morado, &.menu-activo{
        background: #4A2582;
        .container{
            
            .botones{
                
                div.dropdown{
                    background: #4A2582;
                    color: #fff;
                    font-size: 14px;
                    padding: 6px 10px;
                    border: 1px solid #fff;
                    i.angle-down{
                    border-bottom: solid #fff;
                    border-right: solid #fff;
                }
                   

                    .options{
                        border: none;
                        background: #4A2582;
                    }
                    .option{
                        
                        min-width: 200px;   
                    }
                }
                button{
                    display: flex;
                    span{
                        margin: auto 16px;
                        color: #fff;
                        font-size: 14px;
                    }
                    img.menu-blanco{
                        display: none;
                    }
                    img.menu-morado{
                        display: inline-block;
                    }
                }
                .enlace{
                    background: none;
                    color: #fff;
                    font-size: 14px;
                    padding: 16px 4px;
                    line-height: 0;
                    margin-right: 15px;
                }
            }
            .logo{
                img.menu-blanco{
                    display: none;
                }
                img.menu-morado{
                    display: inline-block;
                }
            }
        }
    }
}
</style>