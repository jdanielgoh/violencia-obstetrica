<template>
    <div class="imagen-blend-pie">
        <div class="cover" :style="{
            backgroundImage: `url('${link}')`}"></div>
        <slot name="pie-foto">

        </slot>
    </div>
</template>

<script>
export default {
    name: 'ImagenPie',
    props:{
        link: String,
        pie: String,
        
    }
}
</script>

<style lang="scss">
.imagen-blend-pie{
    width:100%;
    
    .cover{
        min-height: 200px;
        width: 100%;
        background-size: cover;
        height: 400px;
        background-position: 50%;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        
        background-blend-mode: luminosity;
        transition: background-color .5s;
        background-color: transparent;
        &:hover{
            background-color: #4A2582;
        }
    }
    .pie-foto{
        p{
            font-size: 16px;
            color: #fff;
        }
    }
}
</style>