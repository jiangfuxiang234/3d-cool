var boxBg = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#564545', '#607d8b', '#405d6b', '#9e9e9e', '#70737d', '#389fa0', '#38a05e', '#b3c981', '#76a803', '#fecf43', '#e2785f'];	//box背景色
var bodyBg = ['#F7E8ED', '#F2D9E6', '#ECC6DE', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#E0E1F5', '#F7E8ED', '#F2D9E6', '#E0ECF5', '#DDF4DE', '#F0F1D5', '#EEDECD', '#B8E6B3', '#ABE3D8', '#DFD1F0', '#6161616'];	//body背景色
var boxs = document.querySelectorAll('.wrap .box');
var style = document.createElement('style');
var str = '';
var rot = ['rotateX(-180deg)', 'rotateY(-180deg)', 'rotateX(180deg)', 'rotateY(180deg)'];
for(var i = 0; i < boxBg.length; i++){
    str +=`.box:nth-of-type(${i + 1}) div{
        background: ${boxBg[i]} url(images/${i + 1}.png) no-repeat center;
    }`
}
style.innerHTML = str;
document.head.appendChild(style);
boxs.forEach(function(box,index){
    box.onmouseenter = function(e){
     var zd = getAngle(e,this);
     this.style.transform =  rot[zd]; // 
     document.body.style.background = bodyBg[Math.floor(Math.random() * bodyBg.length - 1)] // 移入box随机切换背景

    }
    box.onmouseleave = function(){
     this.style.transform = '';
    }
})
function getAngle(ev,box){
var l = box.getBoundingClientRect().left; // 只能用getBoundingClientRect()获取left值，因为要获取的是这个盒子离可视区的距离，而offsetLeft会对父级有定位的元素进行定位
var t = box.getBoundingClientRect().top;
var w = box.offsetWidth;
var h = box.offsetHeight;
var x = ev.clientX - (l + w / 2);
var y = ev.clientY - (t + h / 2);
var deg = Math.atan2(y,x) / (Math.PI / 180); // Math.atan2(y,x) 返回的结果是弧度制，所以要把他转换成角度值
var d = (Math.round((deg + 180) / 90) + 3) % 4;	 // 计算鼠标移入正方形哪条边的公式
return d;
}
var wrap = document.querySelector('.wrap');
document.onmousemove = function(e){
    console.log(1)
    var x = (0.5 - e.clientY / window.innerHeight) * 15; // 换算完相当于将坐标轴的原点放到可视区的中心，y轴正方向向上(正常的数学坐标轴)
    var y = (e.clientX / window.innerWidth - 0.5) * 15;  // 在x轴上移动的距离靠y轴来旋转，在y轴上移动的距离靠x轴来旋转
wrap.style.transform =  'rotatex(' + x + 'deg)' + ' rotatey(' + y + 'deg)'
}