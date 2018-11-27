<template>
	<transition enter-active-class='animated slideInDown' leave-active-class='animated slideOutUp'>
		<div class="navlist" v-show='show'>

			<ul>
				<li @click="listItem(item)" :class="name===item?'gl':''" v-for="(item,index) in navlist" :key="index">{{item}}</li>
			</ul>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'NavList',
		components: {},
		props: ['show'],
		data() {
			return {
				navlist: ['音乐', '舞蹈', '科技', '电视剧',
					'游戏', '娱乐', '鬼畜', '电影', '影视',
					'时尚', '生活', '纪录片', '广告', '直播'
				],
				name: '首页',
			}
		},
		methods: {
			listItem(item) {
				this.name = item
			},
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	.navlist {
		background: #fff;
		.w(375);
		.h(210);
		color: #757575;
		text-align: center;
		font-family: "楷体";
		.fs(15);
		position: relative;
		z-index: 50;
		ul {
			.h(210);
			li {
				.w(46);
				.h(32);
				float: left;
				.margin(5,
				23,
				0,
				23);
			}
		}
		.gl {
			color: #fb7299;
		}
	}
</style>