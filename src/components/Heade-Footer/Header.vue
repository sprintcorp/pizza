<template>
    <div>
        <header>
            <div class="container clear">
                <div class="logo">
                    <img :src="logoIcon">
                </div>
                <div class="nav">
                    <img :src="menuIcon" @click="showSidePanel = !showSidePanel">
                </div>
                <md-drawer :md-active.sync="showSidePanel" :md-right="true" class="side-drawer">
                <div @click="showSidePanel = !showSidePanel" class="closeSide">X</div>
                </md-drawer>

            </div>
        </header>
    </div>
</template>

<script>
    import Logo from '../../assets/images/logo.png';
    import Menu from '../../assets/images/menu.png';
    
    export default {
        data(){
            return{
                logoIcon:Logo,
                menuIcon:Menu,
                showSidePanel:false
            }
        }
    }
</script>
<style>
    .closeSide{
        float: left;
        padding: 10px 10px;
    }
</style>