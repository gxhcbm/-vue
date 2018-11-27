<template>
	<div class="nav">
		<div class="navHeader">
			<ul>
				<router-link tag='li' active-class="#fb7299" @click="nameItem(item)" :class="name===item?'gl':''" v-for="(item,index) in nav" :key="index" :to='{path:item.path}'>
					{{item.name}}
				</router-link>
			</ul>
			<div @click="lItem">
				<i class="fa fa-angle-down"></i>
			</div>
		</div>
		<NavList :show='isShow'></NavList>
	</div>

</template>

<script>
	import NavList from './NavList.vue'
	export default {
		name: 'Nav',
		components: {
			NavList
		},
		data() {
			return {
				nav: [{
						name: '首页',
						path: '/home'
					},
					{
						name: '动画',
						path: '/Cartoon'
					},
					{
						name: '番剧',
						path: '/Drama'
					},
					{
						name: '国创',
						path: '/Create'
					},
					{
						name: '音乐',
						path: '/Music'
					}
				],
				name: "首页",
				isShow: false,
			}
		},
		methods: {
			nameItem(item) {
				this.name = item
			},
			lItem() {
				this.isShow = !this.isShow
			},
		},
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	.nav {
		.w(375);
		.h(40);
		.fs(15);
		font-family: "楷体";
		.navHeader {
			.w(375);
			.h(40);
			ul {
				.w(330);
				.h(40);
				.lh(40);
				float: left;
				text-align: center;
				color: #757575;
				li {
					.w(65);
					.h(32);
					.lh(32);
					margin: 0 auto;
					float: left;
				};
			}
			div {
				.w(40);
				.lh(40);
				.fs(20);
				float: left;
				text-align: center;
			};
			.gl{
				color: #fb7299;
				border-bottom: 2px solid #fb7299;
			};
			.router-link-active>li {
				color: #fb7299;
				border-bottom: 2px solid #fb7299;
			};
		}
	}
</style>