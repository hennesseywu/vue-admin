<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	
		<!--列表-->
		<template>
						<el-table :data="userList" highlight-current-row v-loading="loading" style="width: 100%;">
							<el-table-column type="index" width="60">
							</el-table-column>
							<el-table-column prop="name" label="姓名" width="120" sortable>
							</el-table-column>
							<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
							</el-table-column>
							<el-table-column prop="age" label="年龄" width="100" sortable>
							</el-table-column>
							<el-table-column prop="birth" label="生日" width="120" sortable>
							</el-table-column>
							<el-table-column prop="addr" label="地址" min-width="180" sortable>
							</el-table-column>
						</el-table>
</template>

	</section>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false
			}
		},
		computed:{	
...mapState('nav1',['userList'])
		},
		methods: {
			...mapActions('nav1', ['userListAction']), //使用对象展开暴露方法
			//性别显示转换
			formatSex(row) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			async getUser() {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				await this.userListAction(para);
				this.loading = false;
			}
		},
		mounted() {
			this.getUser();
		}
	};
</script>

<style scoped>
	
</style>