var vm = new Vue({
    el: '#labelBox',
    data: {
        selectedLable: [], // 选中标签文本集合
        selectedLableId: [], // 选中标签ID集合
        disallowSelect:[], //禁止选择的集合

        projectType: [], // 项目类型集合
        projectStatus: [], // 项目状态集合
        strictLabel: [], // 严格标签
        fuzzyLabel: [], // 模糊标签
        projectTypeLen:0,// 项目类型一级标签数
        projectStatusLen:0,// 项目状态一级标签数
        strictLabelLen:0,// 严格标签一级标签数
        fuzzyLabelLen:0// 模糊标签一级标签数

    },
    created: function() {
        var arr1 = [
            {
                id:'IPO',
                name:'拟IPO项目',
                pid:'0',
                childList:[
                    {
                        id:'ipo_son',
                        name:'ipo二级子元素',
                        pid:'IPO',
                        childList:[
                            {
                                id:'ipo_son_son',
                                name:'ipo三级子元素',
                                pid:'ipo_son',
                                childList:[
                                    {
                                        id:'ipo_son_son_son',
                                        name:'ipo四级子元素',
                                        pid:'ipo_son_son',
                                        childList:[
                                            {
                                                id:'ipo_son_son_sob_son',
                                                name:'ipo五级子元素',
                                                pid:'ipo_son_son_son',
                                                childList:[]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id:'bgbuy',
                name:'并购买方',
                pid:'0',
                childList:[]
            },
            {
                id:'bgsell',
                name:'并购卖方',
                pid:'0',
                childList:[]
            },
            {
                id:'gqzy',
                name:'股权质押',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc',
                name:'特定股东增减持',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc2',
                name:'特定股东增减持2',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc3',
                name:'特定股东增减持3',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc4',
                name:'特定股东增减持3',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc5',
                name:'特定股东增减持5',
                pid:'0',
                childList:[]
            },
            {
                id:'tdgdzjc6',
                name:'特定股东增减持6',
                pid:'0',
                childList:[]
            }

        ];
        var arr2 = [
            {
                id:'dgz',
                name:'待关注',
                pid:'0',
                childList:[]
            },
            {
                id:'gzz',
                name:'关注中',
                pid:'0',
                childList:[]
            },
            {
                id:'jcz',
                name:'接触中',
                pid:'0',
                childList:[]
            },
            {
                id:'tpz',
                name:'谈判中',
                pid:'0',
                childList:[]
            },
            {
                id:'cg',
                name:'成功',
                pid:'0',
                childList:[]
            }
        ];
        var arr3 = [
            {
                id:'yysr',
                name:'营业收入',
                pid:'0',
                childList:[
                    {
                        id:'yysrSon1',
                        name:'营业收入二级标签1',
                        pid:'yysr',
                        childList:[
                            {
                                id:'yysrSon1_son1',
                                name:'营业收入三级标签1',
                                pid:'yysrSon1',
                                childList:[
                                    {
                                        id:'yysrSon1_son1_son1',
                                        name:'营业收入四级标签1',
                                        pid:'yysrSon1_son1',
                                        childList:[]
                                    },{
                                        id:'yysrSon1_son1_son2',
                                        name:'营业收入四级标签2',
                                        pid:'yysrSon1_son1',
                                        childList:[]
                                        }]
                            }]
                    },
                    {
                        id:'yysrSon2',
                        name:'营业收入二级标签2',
                        pid:'yysr',
                        childList:[]
                    }
                    ]
            },
            {
                id:'ylzk',
                name:'盈利状况',
                pid:'0',
                childList:[]
            },
            {
                id:'qylx',
                name:'企业类型',
                pid:'0',
                childList:[]
            }
            ,{
                id:'companyArea',
                name:'企业所在地',
                pid:'0',
                childList:[{
                    id:'hebei',
                    name:'河北省',
                    pid:'companyArea',
                    childList:[]
                },{
                    id:'shanxxi',
                    name:'山西省',
                    pid:'companyArea',
                    childList:[]
                }]
            },
            {
                id:'tzfs',
                name:'投资方式',
                pid:'0',
                childList:[]
            }
        ];
        var arr4 = [
            {
                id:'sfjsbg',
                name:'是否接受并购',
                pid:0,
                childList:[
                    {
                        id:'jsbg',
                        name:'接受并购',
                        pid:'sfjsbg',
                        childList:[]
                    },
                    {
                        id:'bjsbg',
                        name:'不接受并购',
                        pid:'sfjsbg',
                        childList:[]
                    }]
        },{
            id:'sfdd',
            name:'是否对赌',
            pid:0,
            childList:[{
                id:'dd',
                name:'对赌',
                pid:'sfdd',
                childList:[]
            },{
                id:'bdd',
                name:'不对赌',
                pid:'sfdd',
                childList:[]
            }]
        },{
            id:'dtpe',
            name:'动态PE',
            pid:0,
            childList:[]
        },{
            id:'sfyzdyx',
            name:'是否有指定意向',
            pid:0,
            childList:[]
        }];
        var arr5 = ['IPO','sfjsbg','sfdd'];

        this.projectType = arr1;//项目类型
        this.projectStatus = arr2;//项目状态
        this.strictLabel = arr3;//严格标签
        this.fuzzyLabel = arr4;//模糊标签

        this.disallowSelect = arr5;//禁止选中的标签

        this.projectTypeDefault = arr1.slice(0, 8);//默认展示项目类型
        this.projectStatusDefault = arr2.slice(0, 8);//默认展示项目状态
        this.strictLabelDefault = arr3.slice(0, 8);//默认展示严格标签
        this.fuzzyLabelDefault = arr4.slice(0, 8);//默认展示模糊标签

        this.projectTypeLen = this.projectType.length;
        this.projectStatusLen = this.projectStatus.length;
        this.strictLabelLen = this.strictLabel.length;
        this.fuzzyLabelLen = this.fuzzyLabel.length;
    },
    methods: {
        //选中标签
        addselectedLable: function (item, item2, item3, item4) {
            var clickItem = item.name || item2.name || item3.name || item4.name;
            var clickItemId = item.id || item2.id || item3.id || item4.id;
            console.log({'name':clickItem+'','id':clickItemId+'selected'});
            console.log('selectlabelIndex:'+selectlabelIndex);
            var selectlabelIndex = this.selectedLableId.indexOf(clickItemId+'selected');
            //判断已选标签中是否含有此标签
            if (selectlabelIndex !== -1) {
                this.selectedLable.splice(selectlabelIndex, 1);
                this.selectedLableId.splice(selectlabelIndex, 1);
                /*点击已选中的元素则移除选中*/
            } else if (this.disallowSelect.indexOf(clickItemId) !== -1) {//判断此标签是否为禁止选中标签
               /* layer.msg('该标签不可选择', {
                    icon: 2,
                    time: 1000 //1秒关闭（如果不配置，默认是3秒）
                })*/
            } else {
                this.selectedLableId.push(clickItemId+'selected');
                this.selectedLable.push({'name':clickItem+'','id':clickItemId+'selected'});
            }
        },

        //点击选中标签删除
        deleteItself:function (index) {
            this.selectedLable.splice(index, 1);
            this.selectedLableId.splice(index, 1);
        },

        //清除所有选中标签
        clearAllLabel:function () {
            this.selectedLable = [],
            this.selectedLableId = []
        },

        //行业/产业选择
        selectIndustry:function () {
            var relText = $("#suggestion2").attr("relText");
            var relVal = $("#suggestion2").attr("relvalue");
            var relId = 'industry'+'selected'+relVal;
            var selectlabelIndex = this.selectedLableId.indexOf(relId);

            if(relText!==''){
                if (selectlabelIndex !== -1) {  //判断已选标签中是否含有此标签
                    layer.msg('不可重复选择该标签', {
                        icon: 2,
                        time: 1000 //1秒关闭（如果不配置，默认是3秒）
                    })
                }else {
                    this.selectedLableId.push(relId);
                    this.selectedLable.push({'name':relText+'','id':relId});
                    console.log('行业、产业 '+relText);
                }
            }

            $('#suggestion3_input').val('');/*清空输入框*/

        },
        
        //项目类型》更多
        projectTypeMore:function () {
            layer.open({
                type: 1,
                title: '项目类型全部标签',
                closeBtn: 1,
                area: ['80%', '100%'],
                shadeClose: true,
                content: $('#projectTypePop')
            })
        },
        
        //项目状态》更多
        projectStatusMore:function () {
            layer.open({
                type: 1,
                title: '项目状态全部标签',
                closeBtn: 1,
                area: ['80%', '100%'],
                shadeClose: true,
                content: $('#projectStatusPop')
            })
        },
        
        //严格标签》更多
        strictLabelMore:function () {
            layer.open({
                type: 1,
                title: '严格标签全部标签',
                closeBtn: 1,
                area: ['80%', '100%'],
                shadeClose: true,
                content: $('#strictLabelPop')
            })
        },
        
        //模糊标签》更多
        fuzzyLabelMore:function () {
            layer.open({
                type: 1,
                title: '模糊标签全部标签',
                closeBtn: 1,
                area: ['80%', '100%'],
                shadeClose: true,
                content: $('#fuzzyLabelPop')
            })
        }
    }
})