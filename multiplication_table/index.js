for(var i=1;i<=9;i++){
	var str="";
	var arr=[];
	for(var j=1;j<=i;j++){
		str=i+"*"+j+"="+i*j;
		arr.push(str);
	}
	console.log(arr.join(" "));
}