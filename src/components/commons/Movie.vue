<template>
	<div class="movie">
		<ul>
			<router-link tag='li'
				:to="{path:'/Details',query:{ id:item.id }}"
				  v-for="(item,index) in films" 
				  :key="index">
				<img :src="item.cover.origin" />
				<div class="content">
					<p>{{item.name}}</p>
					<i>{{item.grade}}</i>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Movie',
		components: {},
		data() {
			return {
				name: "这里是Movie",
				films: [],
			}
		},
		methods: {
			getData() {
				//https://m.maizuo.com/v4/api/film/coming-soon?__t=1542685786137&page=1&count=3
				this.$axios.get('cpi/v4/api/film/now-playing', {
						params: {
							__t: Date.now(),
							page: 1,
							count: 20,
						}
					})
					.then((res) => {
						this.films = res.data.films
						console.log(res)
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	.movie {
		ul {
			.w(373);
			.mt(20);
			
			li {
				.w(175);
				.h(150);
				.mt(20);
				float: left;
				.ml(8);
				border:1px solid #333333;
				img {
					.w(174);
					.h(110);
				}
				.content {
					.w(174);
					.h(40);
					p {
						.w(140);
						.h(40);
						.fs(15);
						.pt(10);
						.pl(10);
						font-family: "楷体";
						color: #333333;
						float: left;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
					}
					i {
						.w(34);
						.h(40);
						.fs(16);
						display: inline-block;
						float: left;
						text-align: center;
						.lh(40);
						color: #f78360;
					}
				}
			}
		}
	}
</style>