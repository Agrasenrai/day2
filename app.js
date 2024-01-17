//assignment 1:
function check(n){
    if (n<0){
    console.log('Number is negative:', n)
    }
    else if (n==0){
        console.log('Number is zero:', n)
    }
    else {
        console.log('Number is positive:', n)
    }
    }
    check(0)
    check(10)
    check(-1)
     
    //assignment 2:

    function factorial(n){
        let x=1
    for(i=1;i<=n;i++){
       x=x*i
    }
   console.log(x)
   }
   factorial(5)

   //assignment 3:

   function greater(a, b){
    if(a<b){
console.log(b)
}
else if (a==b){
console.log('equal')
}
else {
console.log(a)
}
}
greater(9, 8)
greater(8, 8)
greater(6, 2)

//assignment 4:
function palindrome(str)
{
    str = str.split(' ').join("").toLowerCase();
    let ulta = ""
    for(i=str.length-1;i>=0;i--)
    {
        ulta = ulta+str[i]
    }
    if(ulta==str){
    console.log('palindrome')}
    else{
        console.log('not palindrome')
    }
}
palindrome('anaman')
palindrome('naman')

//assignment 5:
function prime(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(i);
        }
        count = 0;
    }
}

prime(5);

//assignment 6:

function operation(a, opr, b){
    if(opr=='+'){
        console.log(a+b)
    }
    else if(opr=='-'){
        console.log(a-b)
    }
    else if(opr=='/'){
        console.log(a/b)
    }
    else if(opr=='*'){
        console.log(a*b)
    }
    else{
        console.log('operator not found')
    }
    }
    operation(3, '+', 2)
    operation(3, '-', 2)
    operation(3, '*', 2)
    operation(3, '/', 2)
    operation(3, '%', 2)

    //assignment 7:

    function vowel(str){
        let vowel = ['a', 'e', 'i', 'o', 'u']
        count = 0
        for(i=0;i<str.length;i++){
            for(j=0;j<=5;j++){
                if(str[i]==vowel[j])
                count++
            }
        }
        console.log(count)
        }
        vowel('agrasen')

        //assignment 8:

        function perfect(n){
            let j=0
            for(i=1;i<n;i++){
                if(n%i==0){
                j+=i}
            }
                
        if(j==n)
                    console.log('n is perfect integer')
                    else
                    console.log('n is not perfect integer')
            
        }
        perfect(6)

        //assignment 9:

        function fibo(n){
            let a=0
            let b=1
            if(n==0){
                console.log(0)
            }
            else if(n==1){
                console.log(0)
                console.log(1)
            }
            else if(n>1)
            console.log(a, b)
            for(i=1;i<n-1;i++){
            
           let sum = a+b
           console.log(sum)
           a=b
           b=sum
            }
        }
        fibo(9)

        //assignment10:

        function table(n){
            for(i=1;i<=10;i++){
                console.log(n*i)
            }
        }
        table(2)
