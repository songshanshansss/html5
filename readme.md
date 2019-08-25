PC项目(电商类)：

需要完成功能：

1. 首页
2. 登录
3. 注册
4. 列表
5. 详情
6. 购物车
7. 确认订单

cnpm install gulp-sass --save-dev
cnpm install gulp-uglify --save-dev
cnpm install gulp-babel --save-dev
cnpm install babel-core --save-dev
cnpm install babel-preset-env --save-dev
cnpm install @babel/core --save-dev
cnpm install gulp-htmlmin --save-dev
cnpm install gulp-connect --save-dev
前景：工作上一直在用gulp 3.9.1的配置 回家自己电脑安装的时候发现版本太高  跑不起来，想想以前也是遇到这个情况研究了一会才解决，今天又遇到了就顺便把方法记录一下。进行全局安装gulp 如用cnpm 后续保持一致cnpm安装全局安装 gulp：
cnpm install --global gulp     作为项目的开发依赖（devDependencies）安装：
cnpm install --save-dev gulp         这时候会gulp -v会出现两个版本 CLI version是2版本的 Local version是4版本 显然不合符需求找完资料后代行：
cnpm i -g gulp@3.9.1                  
cnpm install --save-dev gulp@3.9.1   有没有发现是不是多了@3.9.1接着gulp -v 看到的CLI version和Local version都是3.9.1了~以上为初次遇到问题时的复盘操作~QAQ

a. 如果本地没有版本库，克隆版本库
			git clone 版本库URL
		   如果本地已有版本库，更新：
		   	git pull
		b. 在工作空间中实现编码
		c. 通常在完成一个功能并通过测试后，提交本地版本库
			git add .
			git commit -m "message"
		d. 推送到远程仓库
			git push

下载安装，全局配置：
		git config --global user.name "runoob"
		git config --global user.email test@runoob.com

	概念：
		工作区：就是你在电脑里能看到的目录。
		暂存区：英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
		版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库

	使用：
		a. git init -- 初始化版本库
		b. 
			git status -- 查看版本库状态   touch .gitignore    然后在gitignore中添加不需要提交到暂存区中的文件名字
			git add <file> -- 将指定文件添加到暂存区  git add .   所有文件
			git commit -m "message" -- 将暂存区中数据提交到版本库
			git log -- 查看提交日志  git reflog    查看本次编号
		c. 分支：
			列出所有分支：git branch
			创建分支：git branch <branch-name>
			切换分支：git checkout <branch-name>
			合并分支：git merge <branch-name>
			删除分支：git branch -d <branch-name>
		d. 远程仓库
			https://github.com/
			github是一个基于git的代码托管平台