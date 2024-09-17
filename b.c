// #include<stdio.h>
// int main()
// {
// 	int n,i,j;
// 	printf("Enter a number:");
// 	scanf("%d",&n);
// 	printf("First %d odd numbers are:\n",n);
// 	for(j=1,i=1;j<=n;i=i+2,j++)
// 	{
// 		printf("%d\n",i);
// 	}
// 	return 0;
// }

// #include<stdio.h>
// void main(){
// int num=1570;
// int left=num<<3;
// int right=num>>3;
// printf("Left shift = %d",left);

// printf("Right shift = %d",right);
// }


// // 
// #include<stdio.h>
// void main(){
//     int num1=6,num2=8;
//     printf("Bitwise AND =%d",num1 &num2);
//     printf("\nBitwise OR =%d",num1 |num2);
//     printf("\nBitwise XOR =%d",num1 ^num2);
    
// }

// #include<stdio.h>
// void main(){
// int age;
// printf("ENter your age:\n");
// scanf("%d",&age);
// (age>=18)?(printf("You can vote")):(printf("You cannot vote"));


// }


// #include<stdio.h>

// void main(){

// int i,j,sum;
// i=1;
// sum=0;
// printf("Displaying a number from 1 to 20.\n");
// j=1;
// do{
// i=0;
// sum+=i;
// i=i+2;
// printf("%d\n",i);
// j++;

// }
// while(j<=20 ) ;
// printf("The total sum of the odd natural numbers is %d",sum);


// }

// #include<stdio.h>
// void main(){
//     int n, i,j;
//     printf("Enter the odd number you want \n");
//     scanf("%d",&n);
//     printf("First %d odd numbers are :\n",n);

//     for(j=1,i=1;j<=n;i=i+2;j++){

//     }
// // }
// #include <stdio.h>
// void main()
// {
//    int i,n,sum=0;

//    printf("Input number of terms : ");
//    scanf("%d",&n);
//    printf("\nThe odd numbers are :");
//    for(i=1;i<=n;i++)
//    {
//      printf("%d ",2*i-1);
//      sum+=2*i-1;
//    }
//    printf("\nThe Sum of odd Natural Number upto %d terms : %d \n",n,sum);
// }

#include<stdio.h>
void main(){

int swap,a,b;
printf("Enter the value of a :\n");
scanf("%d",&a);
printf("Enter the value of b :\n");
scanf("%d",&b);

a=a+b;

// b=a+b-b;
b=a-b;

a=a-b;
// a=a-a+b;
// a=b;
// a=a-b;
// for(int i=1;i<=5;i++){
//     for(int j=1;j<=5;j++){

// printf("%d",j);


//     }
// printf("\n");
// }

printf("The value of a is %d and b is %d ",a,b);


}