var vm = new Vue({
	el: '#app',
	data: {
		selectedLable: [], // 选中集合
        disallowSelect:[], //禁止选择的集合
		defaultLable: [], // 默认集合
		systemLable: [], // 系统标签集合
		customLable: [], // 自定义标签集合
		length: 0, // 全部标签数量
        systemLableLen: 0, // 系统标签数
        customLableLen:0  // 自定义标签数

	},
	created: function() {
        this.length = this.systemLable.length + this.customLable.length;
		var arr1 = ["宏观经济", "混改", "5G", "人工智能", "区域规划", "新能源汽车", "环境", "房地产开发", "通用航空"];
		var arr2 = ["自定义标签1", "自定义标签2", "自定义标签3", "自定义标签4", "自定义标签5", "自定义标签6", "自定义标签7", "自定义标签8", "自定义标签9"];
        var arr3 = arr1.concat( arr2 ).slice(0, 15);
        var arr4 = ["宏观经济","混改","自定义标签2"];/*禁止选中的标签集合*/
		this.systemLable = arr1;
		this.customLable = arr2;
		this.defaultLable = arr3;
		this.disallowSelect = arr4;
		this.length = this.systemLable.length + this.customLable.length;
	},
	methods: {
		//在页面默认显示的标签里 添加采访标签
		addselectedLable: function(index) {
			var item = this.defaultLable[index];
			//console.log(item)
			var selectLabelHasItem = 0;
			if(this.selectedLable.length < 3) {
				/*判断已选的数组是否含有正在选择的元素*/
				if(this.selectedLable.indexOf(item)!==-1){
					alert('不要重复选择同一标签！')
				}else if(this.disallowSelect.indexOf(item)!==-1){
                    alert('该标签已禁止选中')
				}else{
                    this.selectedLable.push(item);
                }
			} else {
				alert("只能选中三个标签！");
			}
		},
		//在系统标签里添加 采访标签
        xt_addselectedLable: function(index) {
            var item = this.systemLable[index];
            //console.log(item)
            var selectLabelHasItem = 0;
            if(this.selectedLable.length < 3) {
                /*判断已选的数组是否含有正在选择的元素*/
                if(this.selectedLable.indexOf(item)!==-1){
                    alert('不要重复选择同一标签！')
                }else if(this.disallowSelect.indexOf(item)!==-1){
                    alert('该标签已禁止选中')
                }else{
                    this.selectedLable.push(item);
                }
            } else {
                alert("只能选中三个标签！");
            }
        },
		//在自定义标签里添加 采访标签
        zdy_addselectedLable: function(index) {
            var item = this.customLable[index];
            //console.log(item)
            var selectLabelHasItem = 0;
            if(this.selectedLable.length < 3) {
                /*判断已选的数组是否含有正在选择的元素*/
                if(this.selectedLable.indexOf(item)!==-1){
                    alert('不要重复选择同一标签！')
                }else if(this.disallowSelect.indexOf(item)!==-1){
                    alert('该标签已禁止选中')
                }else{
                    this.selectedLable.push(item);
                }
            } else {
                alert("只能选中三个标签！");
            }
        },
		// 删除标签
		deleteLable: function(index) {
			var item = this.selectedLable[index];
			// 查找元素位置索引
			var i = this.selectedLable.indexOf(item);
			// 删除元素
			this.selectedLable.splice(i, 1);
		},
        //添加用户自定义标签
        add_customLabel: function () {
		    var customLableArr = this.customLable;
            layer.prompt({title: '输入自定义标签名称'}, function(text, index){
                layer.close(index);
                customLableArr.push(text)
            });
        }
	}
})