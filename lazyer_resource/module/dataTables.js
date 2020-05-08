var lazyer_dataTables = {
    elId:"dataTables",
    thead:{ //指定列名
        id:"编号",
        name:"姓名",
        age:"年龄",
        addr:"地址",
        operation:"操作",
    },
    columns:[ //指定表格数据
        {
            id:1,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:2,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:3,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:4,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:5,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:6,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:7,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:8,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:9,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:10,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:11,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:12,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:13,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:14,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:15,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:16,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:17,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:18,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:19,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:20,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:21,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:22,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:23,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:24,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:25,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:26,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:27,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:28,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:29,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
        {
            id:30,
            name:"张三",
            age:24,
            addr:"福建省厦门市湖里区",
        },
    ],
    dataLen:0,   //总数据条数
    pageSize:0,   //总页数
    dataNum:5,  //每页显示数据条数
    selIndex:0,  //筛选框每页显示数据条数索引
    numShowLen:5,  //数字按钮每页显示的个数
    numCount:1,    //数字按钮当前页数
    numIndex:1,    //数字按钮当前页码索引
    numDiv:'',


     init:function(){
         let _this = this;
         let $ =  lazyerJs.$;
         //获取dom元素
         var tableDom = document.getElementById(_this.elId);
         //创建表格
         var table = document.createElement("table");
         table.setAttribute("cellspacing",0);
         //创建表头
         var thead = document.createElement("tr");
         thead.id = "thead";
         var selTh = document.createElement('th');
         thead.appendChild(selTh);
         Object.keys(_this.thead).forEach(function (key) {
             var th = document.createElement("th");
             th.innerText = _this.thead[key];
             thead.appendChild(th);
         })
         var theadBox = document.createElement("thead");
         tableDom.appendChild(table).appendChild(theadBox).appendChild(thead);
         //创建表体
         _this.columns.map(function (value,index) {
             var ttemp = document.createElement("tr");
             ttemp.setAttribute("style", "display:none;");
             var selTd = document.createElement('td');
             var selBtn = document.createElement("input");
             selBtn.setAttribute("class","check");
             selBtn.setAttribute("type","checkbox");
             selBtn.setAttribute("onclick","checkBtn(this)");
             selBtn.setAttribute("data-id", index);
             selTd.appendChild(selBtn);
             ttemp.appendChild(selTd);
             Object.keys(value).forEach(function (key) {
                 var td = document.createElement("td");
                 td.innerText = value[key];
                 ttemp.appendChild(td)
             })
             var endTd = document.createElement("td");
             var view = document.createElement("a");
             view.innerText = "查看";
             view.setAttribute("data-id", index);
             view.setAttribute("href", '');
             view.setAttribute("onclick", 'viewData(this)');
             var edit = document.createElement("a");
             edit.innerText = "编辑";
             edit.setAttribute("data-id", index);
             edit.setAttribute("href", '');
             edit.setAttribute("onclick", 'editData(this)');
             var del = document.createElement("a");
             del.innerText = "删除";
             del.setAttribute("data-id", index);
             del.setAttribute("href", '');
             edit.setAttribute("onclick", 'delData(this)');
             endTd.appendChild(view)
             endTd.appendChild(edit)
             endTd.appendChild(del);
             table.appendChild(ttemp).appendChild(endTd);
             setTimeout(function () {
                 if(index < _this.dataNum){
                     $("#dataTables tbody tr").eq(index).show();
                 }
             },100)
         })


         //分页
         _this.dataLen = _this.columns.length;
         _this.pageSize = Math.ceil(_this.dataLen / _this.dataNum);
         var  tabHead ="<div id='tabHead'><div id='showNumBox'>显示<select id='selData' onchange='selData()'><option>5</option><option>10</option><option>15</option><option>20</option></select>条数据</div><div id='searchBox'>搜索:<input type='text'></div></div>";
         var tabFooter= "<div id='tabFooter'><div class='footerL'><input id='checkAll' type='button' value='全选' onclick='checkAll()'><input id='unCheckAll' type='button' value='全不选' onclick='unCheckAll()'>" +
             "<input id='delCheck' type='button' value='删除' onclick='delCheck()'></div>"+
             "<div class='footerR'><div id='numBtnBox'><button id='bt0' class='oaBtn' onclick='homeBtn()'><i class='fa fa-step-backward'></i></button><button id='bt1' class='oaBtn' onclick='prevBtn()'><i class='fa fa-caret-left'></i></button>" +
             "<div id='numBox'></div><button id='bt2' class='oaBtn' onclick='nextBtn()'><i class='fa fa-caret-right'></i></button><button id='bt3' class='oaBtn' onclick='endBtn()'><i class='fa fa-step-forward'></i></button></div>   "+
             "<div id='pageSizeBox'><span id='page' class='pageNum'>1</span>/<span id='pageSize' class='pageNum'>"+ _this.pageSize+"</span>页</div>   "+
             "<div id='dataLenBox'><span>1-"+_this.dataNum+"</span>/<span id='total' class='pageNum'>"+ _this.dataLen +"</span></div>   "+
             "<div id='skipBox'>跳转至第<input type='text' id='goPage' style='width: 40px;text-align: center'>页<button id='' class='oaBtn' onclick='sureSkipBtn()'>确定</button></div></div></div> ";



         //数字按钮
         setTimeout(function () {
             if(_this.pageSize <= _this.numShowLen){
                 for(var i = 1;i< _this.pageSize + 1;i++){
                     var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                     _this.numDiv += numDiv;
                     $("#numBox").html(_this.numDiv);
                 };
             }else{
                 for(var i = 1;i< _this.numShowLen + 1;i++){
                     var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                     _this.numDiv += numDiv;
                 };
                 _this.numDiv += "<span>···</span>";
                 $("#numBox").html(_this.numDiv);
             }
             $("#numBox button").eq(0).addClass("numCur");
         },100)
         numBtn=function(i){
             $("#dataTables tbody tr").hide();
             $("#page").html(i);
             var skipData = parseInt(i-1)*_this.dataNum;
             var dataLength = Number(skipData) + Number(_this.dataNum -1)
             for (var i05 = parseInt(skipData); i05 <= dataLength; i05++) {
                 $("#dataTables tbody tr").eq(i05).show();
             };
             $("#tabFooter button").removeClass("numCur");
             $(".numBtn"+i).addClass("numCur");
             _this.numIndex = i;
         };


         //上一页
         prevBtn=function(){
             var page = $('#page').html();
             if(parseInt(page) > 1){
                 $("#dataTables tbody tr").hide();
                 $('#page').html(parseInt(page)-1);
                 var count = 0;
                 var beforePage = parseInt(page)-1;
                 var nextData = parseInt(beforePage-1)*_this.dataNum;
                 for (var i02 = parseInt(nextData); i02 <= _this.dataLen; i02++) {
                     count += 1;
                     if (count <= _this.dataNum) {
                         $("#dataTables tbody tr").eq(i02).show();
                     }
                 }
                 //
                 if(parseInt(page)-1 == _this.numShowLen * (_this.numCount - 1)){
                     _this.numDiv ='';
                     _this.numCount -= 1;
                     if(_this.numCount != 1){
                         _this.numDiv += "<span>···</span>";
                     }
                     for (var i = parseInt(page)-_this.numShowLen; i <= parseInt(page)-1; i++) {
                         var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                         _this.numDiv += numDiv;
                     }
                     _this.numDiv += "<span>···</span>";
                 }
                 $("#numBox").html(_this.numDiv);
                 _this.numIndex -= 1;
                 $("#tabFooter button").removeClass("numCur");
                 $(".numBtn"+ _this.numIndex).addClass("numCur");
             }
         };


         //下一页
         nextBtn=function(){
             var page = $('#page').html();
             var pageSize = _this.pageSize;
             if(parseInt(page) < parseInt(pageSize)){
                 $("#dataTables tbody tr").hide();
                 $("#page").html(parseInt(page)+1);
                 var nextData = parseInt(page)*_this.dataNum;
                 var count = 0;
                 for (var i02 = parseInt(nextData); i02 <= _this.dataLen; i02++) {
                     count += 1;
                     if (count <= _this.dataNum) {
                         $("#dataTables tbody tr").eq(i02).show();
                     }
                 }
                 //
                 var numSize =  Math.ceil(_this.pageSize / _this.numShowLen);
                 if(parseInt(page)+1 == _this.numShowLen * _this.numCount + 1){
                     _this.numDiv ='';
                     _this.numDiv += "<span>···</span>";
                     _this.numCount += 1;
                     if(_this.numCount < numSize){
                         for (var i = parseInt(page)+1; i <= parseInt(page)+_this.numShowLen; i++) {
                             var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                             _this.numDiv += numDiv;
                         }
                         _this.numDiv += "<span>···</span>";
                     }else{
                         for (var i = parseInt(page)+1; i <= _this.pageSize; i++) {
                             var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                             _this.numDiv += numDiv;
                         }
                     }
                 }
                 $("#numBox").html(_this.numDiv);
                 _this.numIndex += 1;
                 $("#tabFooter button").removeClass("numCur");
                 $(".numBtn"+ _this.numIndex).addClass("numCur");
             }
         };


         //首页
         homeBtn=function(){
             var page = $('#page').html();
             var pageSize = _this.pageSize;
             if(parseInt(page) > 1 ){
                 $("#dataTables tbody tr").hide();
                 $('#page').html(1);
                 for (var i0 = 0; i0 < _this.dataNum; i0++) {
                     $("#dataTables tbody tr").eq(i0).show();
                 }
                 //
                 _this.numDiv ='';
                 _this.numCount=1;
                 if(_this.pageSize < _this.numShowLen){
                     for(var i = 1;i< _this.pageSize + 1 ;i++){
                         var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                         _this.numDiv += numDiv;
                     };
                 }else{
                     for(var i = 1;i< _this.numShowLen + 1 ;i++){
                         var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                         _this.numDiv += numDiv;
                     };
                 }
                 var numSize =  Math.ceil(_this.pageSize / _this.numShowLen);
                 if(numSize !=  1){
                     _this.numDiv += "<span>···</span>";
                 }
                 $("#numBox").html(_this.numDiv);
                 _this.numIndex = 1;
                 $("#tabFooter button").removeClass("numCur");
                 $(".numBtn"+ _this.numIndex).addClass("numCur");
             }
         };


         //尾页
         endBtn=function(){
             var page = $('#page').html();
             var pageSize = _this.pageSize;
             if (parseInt(page) < parseInt(pageSize)) {
                 $("#dataTables tbody tr").hide();
                 $("#page").html(pageSize);
                 var nextData = parseInt(pageSize-1)*_this.dataNum;
                 for (var i03 = parseInt(nextData); i03 <= _this.dataLen; i03++) {
                     $("#dataTables tbody tr").eq(i03).show();
                 }
                 //
                 _this.numDiv ='';
                 var numSize =  Math.ceil(_this.pageSize / _this.numShowLen);
                 if(numSize !=  1){
                     _this.numDiv += "<span>···</span>";
                 }
                 _this.numCount=numSize;
                 var numData = parseInt(numSize-1)*_this.numShowLen;
                 for (var i = parseInt(numData)+1; i <= _this.pageSize; i++) {
                     var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                     _this.numDiv += numDiv;
                 }
                 $("#numBox").html(_this.numDiv);
                 _this.numIndex = _this.pageSize;
                 $("#tabFooter button").removeClass("numCur");
                 $(".numBtn"+ _this.numIndex).addClass("numCur");
             }
         };



         //跳转页码
         sureSkipBtn=function(){
             var page = $('#page').html();
             var pageSize = _this.pageSize;
             var skipVal = $('#goPage').val();
             if(skipVal > 0 && skipVal <= parseInt(pageSize)){
                 $("#dataTables tbody tr").hide();
                 $("#page").html(skipVal);
                 var skipData = parseInt(skipVal-1)*_this.dataNum;
                 var dataLength = Number(skipData) + Number(_this.dataNum -1)
                 for (var i04 = parseInt(skipData); i04 <= dataLength; i04++) {
                     $("#dataTables tbody tr").eq(i04).show();
                 }
                 //
                 _this.numDiv ='';
                 var numSize =  Math.ceil(_this.pageSize / _this.numShowLen);
                 if(skipVal==1){
                     _this.numCount=1;
                     if(_this.pageSize < _this.numShowLen){
                         for(var i = 1;i< _this.pageSize + 1 ;i++){
                             var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                             _this.numDiv += numDiv;
                         };
                     }else{
                         for(var i = 1;i< _this.numShowLen + 1 ;i++){
                             var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                             _this.numDiv += numDiv;
                         };
                     }
                     if(numSize != 1){
                         _this.numDiv += "<span>···</span>";
                     }
                 }else if(skipVal==_this.pageSize){
                     if(numSize != 1){
                         _this.numDiv += "<span>···</span>";
                     }
                     _this.numCount=numSize;
                     var numData = parseInt(numSize-1)*_this.numShowLen;
                     for (var i = parseInt(numData)+1; i <= _this.pageSize; i++) {
                         var numDiv = "<button class='numBtn"+i+"' onclick='numBtn("+i+")'>"+i+"</button>";
                         _this.numDiv += numDiv;
                     }
                 }else{
                     for (var i = 1 ; i<= numSize;i++){
                         if(skipVal>_this.numShowLen*i-_this.numShowLen && skipVal <= _this.numShowLen*i){
                             if(i==1){
                             }else{
                                 if(numSize != 1){
                                     _this.numDiv += "<span>···</span>";
                                 }
                             }
                             if(_this.pageSize < _this.numShowLen){
                                 for (var k = _this.pageSize*i-_this.pageSize+1; k <= _this.pageSize*i; k++) {
                                     var numDiv = "<button class='numBtn"+k+"' onclick='numBtn("+k+")'>"+k+"</button>";
                                     _this.numDiv += numDiv;
                                 }
                             }else{
                                 for (var k = _this.numShowLen*i-_this.numShowLen+1; k <= _this.numShowLen*i; k++) {
                                     var numDiv = "<button class='numBtn"+k+"' onclick='numBtn("+k+")'>"+k+"</button>";
                                     _this.numDiv += numDiv;
                                 }
                             }
                             if(i==numSize){
                             }else{
                                 if(numSize != 1){
                                     _this.numDiv += "<span>···</span>";
                                 }
                             }
                         }
                      }
                 }
                 $("#numBox").html(_this.numDiv);
                 _this.numIndex = skipVal;
                 $("#tabFooter button").removeClass("numCur");
                 $(".numBtn"+ _this.numIndex).addClass("numCur");
             }
         };


         //选择框
         checkBtn=function(e){
             e.setAttribute("checked", "true");
         }
         //全选
         checkAll=function(){
             document.querySelectorAll(".check").forEach(function (ele,index) {
                 ele.checked = true
             })
         }
         //全不选
         unCheckAll=function(){
             document.querySelectorAll(".check").forEach(function (ele,index) {
                 ele.checked = false
             })
         }
         //选择删除
         delCheck=function(){

         }


         $('#dataTables').html(tabHead + $('#dataTables').html()+ tabFooter)
         $("#selData").get(0).selectedIndex=_this.selIndex;
     },

    setDataTables:function () {
        let _this = this;
        let $ =  lazyerJs.$;
        console.log(_this.dataNum)
        $("#selData option").each(function (index) {
            if($(this).text() == _this.dataNum){
                $(this).attr('selected','true')
                _this.selIndex = index;
            }

        })


        console.log(_this.selIndex)
        //设置每页显示几条数据
        selData=function(){
            _this.dataNum = $("#selData").find("option:selected").text();
            _this.selIndex = $("#selData").get(0).selectedIndex;
            _this.numDiv = ''
            $('#dataTables').html('')
            _this.init()
        };
    },



}