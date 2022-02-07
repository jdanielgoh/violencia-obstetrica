<template>
    <div class="imagen-blend-pie">
        <div class="cover" :style="{
            backgroundImage: `url('${link}')`,
            height: `${altura}`}"></div>
        <div class="pie-foto">
            <p>{{pie}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImagenPie',
    props:{
        link: String,
        pie: String,
        altura: {
            type: String,
            default: "400px"
        }
    }
}
</script>

<style lang="scss">
.imagen-blend-pie{
    width:100%;
    
    .cover{
        min-height: 300px;
        width: 100%;
        background-size: cover;
        background-position: 50%;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-color: #4A2582;
        background-blend-mode: screen;
        transition: background-color .5s;
        &:hover{
            background-color: transparent;

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