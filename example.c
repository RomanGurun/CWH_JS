#include<stdio.h>
#include<conio.h>
int main(){
int a[10][10],b[10][10],mul[10][10],i,j,sum=0;
int r,c,k;

printf("Enter a row:\n");
scanf("%d",&r);
printf("Enter a column\n");
scanf("%d",&c);

printf("ENter the value of first matrix\n");
for(i=0;i<r;i++){
for(j=0;j<c;j++){
scanf("%d",&a[i][j]);
    printf("\t");

}
printf("\n");
}

printf("ENter the value of second matrix\n");
for(i=0;i<r;i++){
for(j=0;j<c;j++){
scanf("%d",&b[i][j]);
printf("\t");
}
printf("\n");
}

printf("Displaying the matrix result:\n");
for(i=0;i<r;i++){
for(j=0;j<c;j++){
mul[i][j]=0;
for(k=0;k<c;k++){
mul[i][j]+=a[i][k]*b[k][j];


}
}
}

for(i=0;i<r;i++){
for(j=0;j<c;j++){
printf("%d\t",mul[i][j]);


}
printf("\n");

}

return 0;
}

