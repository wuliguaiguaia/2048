document.addEventListener("DOMContentLoaded",()=>{
    new newgame();
});
let df = '';
class newgame{
    constructor(){
        this.W = document.body.clientWidth;
        this.parent = document.querySelector("#grid-container");
        this.boxW = this.parent.clientWidth;
        this.scorenum =document.getElementById("num");
        this.over = document.querySelector("#over");
        this.result = document.querySelector("#resultnum");
        this.best = document.querySelector("#bestnum");
        this.spaceBoard=[]; //二维数组，保存 空格子 的 索引
        this.board = [];    //二维数组 保存 所有 格子的数值
        this.bestscore = 0;
        this.score = 0;
        this.conflictArr = []; //判断是否叠加
        this.gridCell = document.querySelectorAll(".grid-cell");
        this.oneCell = document.querySelectorAll(".grid-cell")[1];
        
        this.cellW = this.boxW *0.21;
        this.diff = 0.0399*this.boxW;
        this.init();
    }
    init(){
        this.over.style.display = 'none';
        this.parent.style.height = this.boxW + 'px';
        this.parent.style.border = `${this.diff/2}px solid #9d8177`;
        [...this.gridCell].forEach((item)=>{
            item.style.height = this.cellW + 'px';
        })
        this.score = 0;
        // 清空number
        this.removeNumberCell();

        // 1.为减少DOM操作，将 append 分离出来
        this.appendNumberCell();
        
        // 2.初始化 board conflictArr，默认为0
        for(let  i = 0 ; i < 4 ; i++){
            this.board[i] = [];
            this.conflictArr[i] = [];
            for(let  j = 0 ; j < 4 ; j++){
                this.board[i][j] = 0;
                this.conflictArr[i][j] = false;
            }
        } 

        // 3. board 里先添加两个, 此时动画 需要同步进行，所以必须分离出来 为每个新增加的都添加动画
        this.generatorOneNumber();
        this.generatorOneNumber();
       
        // 4.事件触发 
        this.register();
        return true;
       
    }
    // 成绩动画
    updateScore(){
        this.scorenum.addEventListener('myEvent',()=>{
            this.scorenum.classList.add('score-animation')
            this.scorenum.innerText = this.score ;
            setTimeout(()=>{
                this.scorenum.classList.remove('score-animation')
            },300);
        },false);

        let event = document.createEvent("CustomEvent");
        event.initCustomEvent("myEvent",false,true,"");
        this.scorenum.dispatchEvent(event);
        setTimeout(() => {
            event = null;
        }, 300);
        
    }

    appendNumberCell(){
        let  numcell = null;
        for(let  i = 0 ; i < 4 ; i++){
            for(let  j = 0 ; j < 4 ; j++){
                numcell = document.createElement("div");
                numcell.id = `number-cell-${i}-${j}`;
                numcell.classList.add("number-cell");
                this.parent.appendChild(numcell);
            }
        }
    }
    removeNumberCell(){
        let numberCell = document.querySelectorAll('.number-cell');
        let len = numberCell.length;
        if(document.querySelectorAll('.number-cell').length>0){
            for(let i = 0 ; i <len ; i++){
                this.parent.removeChild(numberCell[i]);
            }
        }
    }
    updateBoardView(){
        // 对board 循环，根据board值为其 设置样式
        let cell = null;
        for(let  i = 0 ; i < 4 ; i++){
            for(let  j = 0 ; j < 4 ; j++){
                cell = document.querySelector(`#number-cell-${i}-${j}`);
                cell.classList.remove("number-cell-warn");
                
                if(this.board[i][j] == 0){
                    cell.innerText = '';
                    cell.style.cssText = "width:0;height:0;";
                }else{
                    cell.innerText = this.private2048(this.board[i][j]);
                    console.log(this.private2048(this.board[i][j]))
                    cell.style.cssText =   `width:${this.cellW}px;
                                            height:${this.cellW}px;
                                            top:${this.getPosition(i,j).top}px;
                                            left:${this.getPosition(i,j).left}px;
                                            background-color:${this.getBgcolor(this.board[i][j])};
                                            color:${this.getColor(this.board[i][j])}`;
                    
                }
                this.conflictArr[i][j] = false;
            }
        }
    }
   
    generatorOneNumber(){  
        this.spaceBoard = [];
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(this.board[i][j] == 0){
                    this.spaceBoard.push([i,j]);
                }
            }
        }
        let len = this.spaceBoard.length;
        // console.log('空格子数量',len)
        let random = [];
        if(len == 0) return;
        random = this.spaceBoard[~~(Math.random()*len)];
        this.randomX = random[0];
        this.randomY = random[1];
       
        // 随机产生数字2/4;
        this.randomNum = Math.random() > 0.5 ? 2:4;
        // 随机位置 产生 随机数字
        this.board[this.randomX][this.randomY] = this.randomNum;

        this.productWithAnimation(this.randomX,this.randomY,this.randomNum);
        this.spaceBoard = []; //每次必须提前清空，之后再次清空的 要么局部变量，要么封装成其他方法 比如 nospace()
        
    }
    nospace(){
        // 分离出来
        // 1. 添加新的格子是需要判断
        // 2. 游戏结束时需要 判断
        for(let i = 0; i < 16 ;i++){
            // console.log(~~(i/4),~~(i%4));
            if(this.board[~~(i/4)][~~(i%4)] == 0){
                return false;
            }
        }
        return true;
    }
    register(){
        // document.addEventListener('keydown',(e)=>{
        document.onkeydown = (e)=>{
            let key = e.key.toLocaleLowerCase();
            switch(key){
                case "arrowleft":
                //a. 发生移动才能进行 generate 和 update
                // 1. 设置this.flag
                // 2. 或者 移动函数里面返回true,只有产生移动才重置  
                //         函数返回 if(this.moveLeft()) 即执行又返回
                //b. 移动会产生动画 需要延迟 改变board 需要时间 再延迟
                    this.moveLeftEvent(e);
                    break;
                case "arrowright":
                    this.moveRightEvent(e);
                    break;
                case "arrowup":
                    this.moveUpEvent(e);
                    break;
                case "arrowdown":
                    this.moveDownEvent(e);
                break;
            }
                // })
        };
        let [e,preX,preY,nextX,nextY,deltX,deltY] = [];
        document.addEventListener('touchstart',(ev)=>{
            e = ev.touches[0];
            preX = e.pageX;
            preY = e.pageY;
        },false);
        document.addEventListener('touchend',(ev)=>{
            e = ev.changedTouches[0];
            nextX = e.pageX;
            nextY = e.pageY;
            deltX = nextX-preX;
            deltY = nextY-preY;
            if(Math.abs(deltX) > Math.abs(deltY)){
                if(deltX > 0){
                    this.moveRightEvent(ev);
                }
                if(deltX < 0){
                    this.moveLeftEvent(ev);
                }
            }
            if(Math.abs(deltY) > Math.abs(deltX)){
                if(deltY > 0){
                    this.moveDownEvent(ev);
                }
                if(deltY < 0){
                    this.moveUpEvent(ev);
                }
            }
        },false);
        document.addEventListener("touchmove",(e)=>{
            e.preventDefault();//阻止页面下拉刷新功能neng
        })
    }
    moveRightEvent(e){
        e.preventDefault();
        if(this.moveRight()){
            setTimeout(()=>{
                this.updateBoardView();  
                this.generatorOneNumber();
            },300); 
            setTimeout(()=>{
            },350);
            setTimeout(()=>{
                this.isgameover();
            },650);
        }
    }
    moveLeftEvent(e){
        e.preventDefault();
        if(this.moveLeft()){
            setTimeout(()=>{
                this.updateBoardView(); 
                this.generatorOneNumber();
            },300); 
            setTimeout(()=>{
            },350);
            setTimeout(()=>{
                this.isgameover();
            },650);
        }
    }
    moveUpEvent(e){
        e.preventDefault();
        if(this.moveUp()){
            setTimeout(()=>{
                this.updateBoardView();
                this.generatorOneNumber();
            },300); 
            setTimeout(()=>{
                this.isgameover();
            },350);
            setTimeout(()=>{
                this.isgameover();
            },650); 
        }
    }
    moveDownEvent(e){
        e.preventDefault();
        if(this.moveDown()){
            setTimeout(()=>{
                this.updateBoardView();
                this.generatorOneNumber();
            },300); 
            setTimeout(()=>{
            },350);
            setTimeout(()=>{
                this.isgameover();
            },360);
        }
    }
    isgameover(){
        if(!this.ismove() && !this.isnospace()){
            this.bestscore = localStorage.best!==undefined ? localStorage.best : this.score;
            this.result.innerText  = this.score;
            this.best.innerText = Math.max(this.score,this.bestscore);
            this.over.style.display = "block";
            localStorage.best = Math.max(this.score,this.bestscore);
            return;
        }
    }
    over(){
        // if()
    }
    isnospace(){
        for(let i = 0 ;i<4;i++){
            for(let j = 0 ; j<4 ; j++){
                if(this.board[i][j] == 0){
                    return true;
                }
            }
        }
        return false;
    }
    ismove(){
        if(this.canmoveUp() || this.canmoveLeft() || this.canmoveRight() || this.canmoveDown() ){
            return true;
        }
        return false;
    }
    moveDown(){
        if(!this.canmoveDown()){
            return false;
        }
        for(let  j = 0 ; j < 4 ; j++){
            for(let i = 2 ; i >= 0 ; i--){
                if(this.board[i][j] != 0){
                    for(let k = 3 ; k > i ; k--){
                        if(this.board[k][j] == 0 && this.noblockVertical(j,k,i,this.board)){
                            this.showMoveVerticalAnimation(i,j,k,j);
                            this.board[k][j] = this.board[i][j];
                            this.board[i][j] = 0;
                            break;
                        }else if(this.board[k][j] == this.board[i][j] 
                            && this.noblockVertical(j,k,i,this.board) 
                            && !this.conflictArr[k][j]){
                            
                            
                            this.showMoveVerticalAnimation(i,j,k,j);
                            this.board[k][j] += this.board[i][j];
                            this.board[i][j] = 0;
                            this.score += this.board[k][j];
                            this.conflictArr[k][j] = true;
                            this.updateScore()
                            break;
                        }
                    }
                }
            }
        }
        return true;
    }
    canmoveDown(){
        for(let i = 0 ;i< 3 ;i++){
            for(let j  = 0 ; j < 4 ; j++){
                if(this.board[i][j] != 0){
                    if(this.board[i+1][j] == 0 || this.board[i+1][j] == this.board[i][j]){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    moveRight(){
        if(!this.canmoveRight()){
            return false;
        }
        for(let i = 0 ; i < 4 ; i++){
            for(let j = 2 ; j >= 0 ; j--){ // must begin right side
                if(this.board[i][j]!=0){
                    for(let k = 3 ; k > j ; k--){ // judge begin right side
                        if(this.board[i][k] == 0 && this.noblockHorizonal(i,k,j,this.board)){
                            this.showMoveHorizonalAnimation(i,j,i,k);
                            this.board[i][k] = this.board[i][j];
                            this.board[i][j] = 0;
                            break; //表示已经移动过，不需要在循环k了
                        }else if(this.board[i][k] == this.board[i][j] 
                            && this.noblockHorizonal(i,k,j,this.board)
                            && !this.conflictArr[i][k]){

                            this.showMoveHorizonalAnimation(i,j,i,k);
                            this.board[i][k] += this.board[i][j];
                            this.board[i][j] = 0;
                            this.score += this.board[i][k];
                            this.conflictArr[k][j] = true;
                            
                            this.updateScore()
                            break;
                        }
                    }
                }
            }
        }
        return true;
    }
    canmoveRight(){
        for(let i = 0; i < 4 ; i++){
            for(let j = 0;j < 3 ; j++ ){
                if(this.board[i][j] != 0){
                    if(this.board[i][j+1] == 0 || this.board[i][j+1] == this.board[i][j]){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    moveLeft(){
        // 是否可以向左移动
        if(!this.canmoveLeft()){
            return;
        }
        // console.log("canmove left")
        for(let i = 0 ; i < 4 ; i++){
            for(let j = 1 ; j < 4 ; j++){
                if(this.board[i][j] != 0){
                    for(let k=0;k<j;k++){ //从左边遍历 从小开始
                        if(this.board[i][k] == 0 && this.noblockHorizonal(i,j,k,this.board)){ // 落脚位置。。左边全为空 无障碍
                            this.showMoveHorizonalAnimation(i,j,i,k); 
                            this.board[i][k] = this.board[i][j];
                            this.board[i][j] = 0;
                            // continue;
                            break;
                        }else if(this.board[i][k] == this.board[i][j] 
                            && this.noblockHorizonal(i,j,k,this.board)
                            && !this.conflictArr[i][k]){ //可叠加 且中间无障碍
                                
                            this.showMoveHorizonalAnimation(i,j,i,k);  
                            this.board[i][k] += this.board[i][j];
                            this.board[i][j] = 0;
                            this.score += this.board[i][k];
                            this.conflictArr[k][j] = true;
                            
                            this.updateScore()
                            // continue;
                            break;
                        }  
                    }
                }
            }
        }
        return true;
    }
    canmoveLeft(){
        for(let i = 0 ; i < 4 ; i++){
            for(let j = 1 ; j < 4 ; j++){
                if(this.board[i][j] != 0){
                    if(this.board[i][j-1] == 0 || this.board[i][j-1] == this.board[i][j]){ 
                        return true;
                    }
                }
            }
        }
        return false; //默认不可移动
    }
    moveUp(){
        if(!this.canmoveUp()){
            return false;
        }
        // console.log("canmouve up");
        for(let j=0;j<4;j++){
            for(let i = 1;i<4;i++){
                if(this.board[i][j]!=0){
                    for(let k=0;k<i;k++){   // 0 1 2
                        if(this.board[k][j] == 0 && this.noblockVertical(j,i,k,this.board)){
                            this.showMoveVerticalAnimation(i,j,k,j);
                            this.board[k][j] = this.board[i][j];
                            this.board[i][j] = 0;
                            
                            break;
                        }else if(this.board[k][j] == this.board[i][j] 
                            && this.noblockVertical(j,i,k,this.board)
                            && !this.conflictArr[k][j]){
                            this.showMoveVerticalAnimation(i,j,k,j);
                            this.board[k][j] += this.board[i][j];
                            this.board[i][j] = 0;
                            this.score += this.board[k][j];
                            this.conflictArr[k][j] = true;
                            
                            this.updateScore()
                            break;//必须写在里面 只有两种情况 非此即彼
                        }
                    }   
                }
            }
        }
        return true;
    }
    canmoveUp(){
        for(let i = 1; i < 4;i++){
            for(let j = 0 ; j < 4 ;j++){
                if(this.board[i][j]!=0 ){
                    if(this.board[i][j] == this.board[i-1][j] || this.board[i-1][j] == 0){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    noblockHorizonal(i,j,k,board){ //2,2,0
        for(let c=k+1;c<j;c++){ //2,0 2,1   
            if(board[i][c] != 0){
                return false;
            }
        }
        return true;
    }
    noblockVertical(j,i,k,board){ 
        for(let c=k+1;c<i;c++){  
            if(board[c][j] != 0){
                return false;
            }
        }
        return true;
    }
    productWithAnimation(i,j,num){
        // 找到该格子，为其添加class,动画效果
        let cell = document.querySelector(`#number-cell-${i}-${j}`);
        cell.classList.add("number-cell-warn");//
        cell.innerText = this.private2048(num);
        console.log(this.private2048(num))
        cell.style.cssText=`width:${this.cellW+2}px;
                            height:${this.cellW+2}px;
                            top:${this.getPosition(i,j).top}px;
                            left:${this.getPosition(i,j).left}px;
                            background-color:${this.getBgcolor(this.board[i][j])};
                            color:${this.getColor(this.board[i][j])};
                            `;
    }    
    showMoveHorizonalAnimation(fromX,fromY,toX,toY){
        let cell = document.querySelector(`#number-cell-${fromX}-${fromY}`);
        cell.style.transition = 'left ease 300ms';
        cell.style.left = `${this.getPosition(toX,toY).left}px`;
    }
    showMoveVerticalAnimation(fromX,fromY,toX,toY){
        let cell = document.querySelector(`#number-cell-${fromX}-${fromY}`);
        cell.style.transition = `top ease 300ms`;
        cell.style.top = `${this.getPosition(toX,toY).top}px`;
      
    }
    getPosition(x,y){
        return {
            top: this.diff/2 + x*(this.diff + this.cellW),
            left: this.diff/2 + y*(this.diff + this.cellW),
        }
    }
    getBgcolor(num){
        let bg = ""
        switch(num){
            case 2:
                bg = "#fdffdf";
                break;
            case 4:
                bg = "rgb(255, 217, 161)";
                break;
            case 8:
                 bg = "rgb(202, 73, 63)";
                break;
            case 16:
                 bg = "#fee388";
                break;
            case 32:
                 bg = "#e9ae6a";
                break;
            case 64:
                 bg = "#d0e9ff";
                break;
            default:
                bg = "transparent"
        }
        return bg;
    }
    getColor(num){
        let color = num == 2 ? 'rgb(147, 125, 125)': num == 4 ? 'rgb(147, 125, 125)':"#fff";
        return color;
    }
    private2048(num){
        let text = '';
        switch(num){
            case 2:
                text = "小白";
                break;
            case 4:
                text = "实习生";
                break;
            case 8:
                text = "程序媛";
                break;
            case 16:
                text = "项目经理";
                break;
            case 32:
                text = "架构师";
                break;
            case 64:
                text = "技术经理";
                break;
            case 128:
                text = "高经经理";
                break;
            case 256:
                text = "技术总监";
                break;
            case 512:
                text = "副总裁";
                break;
            case 1024:
                text = "CEO";
                break;
            case 2048:
                text = "总裁";
                break;
            default:
                text = "神仙";
        }
        return text;
    }

}