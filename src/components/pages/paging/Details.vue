<template>
	<div class="details">
		<div class="topimg">
			<img :src='films' />
		</div>
		<div class="jies">
			影片简介
		</div>
		<div class="jiex">
			<div class="jiet">
				导&nbsp;&nbsp;&nbsp;&nbsp;演:
			</div>
			<p></p>
		</div>
		<div class="jiex">
			<div class="jiet">
				主&nbsp;&nbsp;&nbsp;&nbsp;演:
			</div>
			<p></p>
		</div>
		<div class="jiex">
			<div class="jiet">
				地区语言:
			</div>
			<p></p>
		</div>
		<div class="jiex">
			<div class="jiet">
				类&nbsp;&nbsp;&nbsp;&nbsp;型:
			</div>
			<p></p>
		</div>
		<div class="jieq">
			<p>
				万里家书只为墙
				让人三尺又何妨
				万里长城今犹在
				不见当年秦始皇
				孩儿立志出乡关
				学不成名誓不还
				埋骨何须桑梓地
				人生无处不青山
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Details',
		components: {},
		data() {
			return {
				name: "我是详情页啊",
				films:[],
			}
		},
		methods:{

		getData() {
			var id = this.$route.query.id;
			//https://m.maizuo.com/v4/api/film/4449?__t=1542685790106
			this.$axios.get("cpi/v4/api/film/" +id+' ? ',{
				params: {
							__t: Date.now(),
						}
			})
			.then((res) => {
			this.films = res.data.films
				console.log(res);
	
			})
			.catch((err)=> {
				console.log(err);
			});
		}
					
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../../style/base.css");
	@import url("../../../style/SizeRem.less");
	.details {
		background: #ebebeb;
		.topimg {
			.w(375);
			.h(240);
			.mt(20);
			img {
				display: inline-block;
				.w(375);
				.h(240);
			}
		}
		.jies {
			.w(375);
			.h(40);
			.fs(22);
			.pl(20);
			font-family: "楷体";
			color: #333;
			.lh(40);
			.mt(25);
		}
		.jiex {
			.w(375);
			.h(40);
			.fs(16);
			.lh(40);
			font-family: "楷体";
			color: #333;
			.jiet {
				.w(100);
				.h(40);
				float: left;
				.pl(20);
			}
			p {
				.w(240);
				.h(40);
				float: left;
				.ml(30);
			}
		}
		.jieq {
			.w(375);
			.fs(15);
			.h(180);
			.mt(10);
			font-family: "楷体";
			color: #333;
			p {
				.pl(20);
				.pr(20);
			}
		}
	}
</style>