<template>
	<div class="my">
		<div class="lr">
			<img src="../../../img/bannerTop.png"/>
			<router-link tag='button' to='/Login' class="btn1">登录/注册</router-link>
			<!--<router-link tag='button' to='/Reg' class="btn2">注册</router-link>-->
			<canvas id="canvas" style='width: 100%;height: 800px;'>你的浏览器不支持canvas</canvas>
		</div>
		<Bottom/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Bottom from '../../commons/Bottom'
	import  {asd} from "../../../js/text"
	export default {
		name: 'My',
		components: {
			Bottom
		},
		data() {
			return {
				name: '这里是我的界面！'
			}
		},
		 methods:{
         diyfun(){
            asd()
         }
      }
		
	}
</script>

<style lang="less" scoped>
	@import url("../../../style/base.css");
	@import url("../../../style/SizeRem.less");
.my{
	.lr{
		.w(375);
        .h(130);
        position:relative;
        img{
        .w(375);
        .h(130);
        }
       .btn1{
       	.w(100);
       	.h(30);
        position: absolute;
        .top(70);
        .left(130);
        background:#fff;
        color:#fb7299;
        font-weight: 700;
        border-radius:5px ;
        }
        
	}
}
</style>
	