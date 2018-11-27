<template>
	<div class="advertising" v-show="isShow">
		<div class="shut">
			<img v-text="btnText" @click="showToggle" src="../../img/ic_close_bottom.png" />
		</div>
		<div class="log">
			<img src="../../img/logo_bottom.png" />
		</div>
		<div class="biaot">
			上bilibili客户端 高清视频 新番电影一览无余
		</div>
		<div class="xiaz">
			立即体验
		</div>
	</div>
</template>

<script>
	export default {
		name: "Advertising",
		components: {},
		data() {
			return {
				name: '我是广告！',
				btnText: "隐藏",
				isShow: true,
			}
		},
		methods: {
			showToggle: function() {
				this.isShow = !this.isShow
				if(this.isShow) {
					this.btnText = "隐藏"
				} else {
					this.btnText = "显示"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	.advertising {
		.w(375);
		.h(65);
		background: #000;
		opacity: 0.8;
		position: fixed;
		z-index: 500;
		bottom: 0;
		right: 0;
		left: 0;
		width: auto;
		.shut {
			.w(18);
			.h(18);
			float: left;
			.ml(20);
			.lh(35);
			img {
				.w(12);
				.h(12);
			}
		}
		.log {
			.w(32);
			.h(32);
			float: left;
			.ml(25);
			.lh(35);
			img {
				.w(32);
				.h(32);
			}
		}
		.biaot {
			float: left;
			.w(147);
			.h(40);
			.fs(14);
			.ml(25);
			font-family: "楷体";
			.pt(5);
			color: #fff;
		}
		.xiaz {
			.fs(16);
			float: left;
			.w(70);
			.h(30);
			.ml(25);
			text-align: center;
			color: #fff;
			font-family: "楷体";
			.lh(30);
			background: #fb7299;
			border-radius: 5px;
			.mt(7);
		}
	}
</style>