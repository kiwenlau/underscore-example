var X = ["b", "d", "a", "d", "d", "b", "c", "c", "d", "c"];


// 对数组元素进行计数
var A = {};

for (var i = 0; i < X.length; i++)
{
    var x = X[i];
    if (A.hasOwnProperty(X[i]))
    {
        A[x]++;
    }
    else
    {
        A[x] = 1;
    }
}


// 将对象转化为二维数组
var B = [];

for (var a in A)
{
    B.push([a, A[a]]);
}


// 根据二维数组的第二列元素进行排序
B.sort(
    function(a, b)
    {
        return a[1] - b[1];
    }
);


// 提取二维数组的第一列元素
var Y = [];

for (var i = 0; i < B.length; i++)
{
    Y.push(B[i][0]);
}


console.log(Y); // [ 'a', 'b', 'c', 'd' ]
