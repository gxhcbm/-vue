<template>
	<div class="bottom">
		<p>哔哩哔哩 沪ICP备13002172号-3</p>
		<p>信息网络传播视听节目许可证：0910417</p>
	</div>
</template>

<script>
	export default{
		name:"Bottom",
		conponents:{},
		data(){
			return{
				name:"我是bottom"
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
.bottom{
	position: absolute;
	bottom:0;
	left:0;
	right:0;
		.w(375);
	.h(100);
	font-family:"楷体";
	p{
		.fs(12);
		text-align: center;
		color: #999;
		.pt(15);
	}
}
</style>