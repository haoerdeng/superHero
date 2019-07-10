<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" class="carousel">
			<swiper-item v-for="(item,index) in arr" :key="index">
				<image :src="item.image" class="carousel"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
				arr:[]
			}
		},
		onLoad() {
			var me = this
			//获取common.js的服务器地址
			// var requestUrl = common.requestUrl;
			
			//通过挂在带main.js中获取服务器地址，作为全局变量
			var requestUrl = me.requestUrl;
			uni.request({
				url: requestUrl + '/banner/list', 
				method:"POST",
				success: (res) => {
					console.log(res.data.data);
					me.arr = res.data.data
				}
			});
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("index.css");
</style>
