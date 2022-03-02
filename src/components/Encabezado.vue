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
                <BotonAudio />
                <DropDown 
                    :config="config"
                ></DropDown>
                <button @click="menu_activo = !menu_activo" class="open"> 
                    
                    <img v-if="!menu_activo" class="menu-morado" src="@/assets/img/iconos/menu.svg"/>
                    <img v-if="!menu_activo" class="menu-blanco" src="@/assets/img/iconos/menu-morado.svg"/>
                    <img v-if="menu_activo"  src="@/assets/img/iconos/close--filled.svg"/>
                </button>
            </div>
        </div>
        <nav :class="{'activo': menu_activo}" >
            <div class="container main">
                <div class="opciones">
                    <router-link :to="{name:'Inicio', hash:'#especiales'}" @click.native="menu_activo = !menu_activo">ESPECIALES</router-link>
                    <router-link :to="{name:'Inicio', hash:'#visualizaciones'}" @click.native="menu_activo = !menu_activo">VISUALIZACIONES</router-link>
                    <router-link :to="{name: 'Testimonios'}" @click.native="menu_activo = !menu_activo">TESTIMONIOS</router-link>
                    <router-link :to="{name: 'Podcasts'}" @click.native="menu_activo = !menu_activo">PODCASTS</router-link>
                    <router-link :to="{name: 'TusDerechos'}" @click.native="menu_activo = !menu_activo">TUS DERECHOS</router-link>
                    <router-link :to="{name: 'QuienesSomos'}" @click.native="menu_activo = !menu_activo">¿QUIÉNES SOMOS?</router-link>
                    <router-link :to="{name: 'Metodologia'}" @click.native="menu_activo = !menu_activo">METODOLOGÍA</router-link>

                    <router-link :to="{name:'Creditos'}" @click.native="menu_activo = !menu_activo">CRÉDITOS</router-link>
                    <!--<router-link to="/contacto" @click.native="menu_activo = !menu_activo">CONTACTO</router-link>-->
                </div>
            </div>

        </nav>
    </header>
</template>
<script>
import DropDown from "@/components/utils/drop-down/DropDown.vue";

import BotonAudio from "@/components/utils/BotonAudio.vue";

export default {
    name: "Encabezado",
    components:{
        BotonAudio,
        DropDown
    },
    data(){
        return{
            config: {
                options: [
                {
                    value: '<a class="boton-enlace" href="https://capir.limequery.org/571399" target="_blank"> PARTO PROPIO </a>'
                },
                {
                    value: '<a class="boton-enlace" href="https://capir.limequery.org/145636" target="_blank"> MUERTE MATERNA </a>'
                },
                
                ],
                placeholder: "ENCUESTAS",
                backgroundColor: "#4A2582",
                textColor: "#FFF",
                borderRadius: "20px",
                border: "1px solid #fff",
                width: 150
            },
            menu_activo: false,
            fondo_morado: true,
            es_inicio: true,
            lista_morado:["Inicio","Creditos","Testimonios","TusDerechos", "Podcasts"]
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
.header{
    background: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1002;
    .container{
        &.encabezado{
            overflow: inherit;
            div.dropdown{
                
                font-size: 14px;
                padding: 0 10px;

                .options{
                    border: none;
                }
                .option{
                    
                    min-width: 200px;   
                }
            }
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
            display: inherit;
            cursor: pointer;
            .boton-enlace{
                border: 1px solid #FFFFFF;
                border-radius: 24px;
                background: none;
                color: #FFFFFF;
                font-size: 14px;
                padding: 16px 24px;
                text-decoration: none;
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
            height: 100vh;
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
            }  
        }

    }
    &.fondo-morado, &.menu-activo{
        background: #4A2582;
        .container{
            .botones{
                button{
                    img.menu-blanco{
                        display: none;
                    }
                    img.menu-morado{
                        display: inline-block;
                    }
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