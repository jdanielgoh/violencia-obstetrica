<template>
    <div class="descarga-documento">
        <h5>{{titulo}}</h5>
        <p>{{autorxs}}</p>
        <a :href="ruta" > Descarga</a>
        
    </div>
</template>

<script>
export default {
    name: 'DescargaDocumento',
    props:{
        titulo: String,
        autorxs: String,
        ruta: String
    }
}
</script>

<style lang="scss">
.descarga-documento{
    width:100%;
    h5{
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        margin:10px 0 ;
    }
    p{
        letter-spacing: 0.8px;
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 14;
    }
    a{
        letter-spacing: 0.7px;
        color: #FDA1C9;
        text-transform: uppercase;
        opacity: 1;
        font-weight: 800;
        font-size: 14px;
        text-decoration: none;
    }
    padding-bottom: 10px;
    border-bottom: 1px solid #FFFFFF80;
    margin-bottom:30px;
}
</style>