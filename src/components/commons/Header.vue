<template>
	<div class="header">
		<router-link tag='div' to='/Home' class="log">
			<img src="../../img/log.png" />
		</router-link>
		<div class="seek">
			<i class="fa fa-search"></i>
		</div>
		<router-link tag='div' class="login" to='/My'>
			<img src="../../img/login.png"  />
		</router-link>
		<div class="download">
			<p>下载 &nbsp;APP</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		components: {},
		data() {
			return {
				name: "这是header"
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	.header {
		.w(375);
		.h(50);
		
		.log {
			.w(180);
			.h(50);
			float:left;
			img {
				.w(62);
				.h(28);
				.ml(18);
				.mb(12);
			}
		}
		.seek{
			.w(50);
			.h(50);
			float:left;
			.fs(25);
			text-align: center;
			.lh(50);
			color:#b5b5b5;
		}
		.login{
			.w(50);
			.h(50);
			float:left;
			.fs(25);
			text-align: center;
			.lh(50);
		}
		.download{
			.w(82);
			.h(50);
			color:#fff;
			float:left;
			.fs(16);
			p{
			.w(82);
			.h(25);	
			background:#fb7299;
			text-align: center;
			border-radius: 5px;
			.mt(15);
			}
		}
	}
</style>