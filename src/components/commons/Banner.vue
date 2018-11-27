<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for='(item ,index) in list ' :key='index'>
					<img :src="item.image" />
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination">q</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Vue from 'vue';

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				name: '我是banner',
				list: [],
			}
		},
		methods: {
			getBanner() {
//				console.log(this)
				this.$axios.get('api/banner/getAllBanners', {
						params: {}
					})
					.then((res) => {
						this.list = res.banners
						Vue.nextTick(() => {

							this. MySwiper = new Swiper('.swiper-container', {
								loop: true,
								spaceBetween: 30,
								centeredSlides: true,
								autoplay: {
									delay: 3000,
									disableOnInteraction: false,
								},
								pagination: {
									el: '.swiper-pagination',
									clickable: true,
								},
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								},
							});

						})
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		created() {
			this.getBanner()
		},
		mounted() {

		},
		destroyed(){
            delete this.mySwiper
		},

	}
</script>

<style lang="less" scoped>
	@import url("../../style/base.css");
	@import url("../../style/SizeRem.less");
	@import url("../../../node_modules/swiper/dist/css/swiper.css");
	.banner {
		.w(375);
		.h(210);
		position:relative;
		.swiper-container {
			position:absolute;
			top:0;
			.w(375);
			.swiper-slide {
				.w(375);
				.h(210);
				img {
				.w(375);
				.h(210);
			}
			}
		}
	}
</style>