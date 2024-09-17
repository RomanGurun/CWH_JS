#include<stdio.h>
#include<conio.h>
struct book{
int price;
char name[20];


}b[5],temp;


int main(){

int i;

int swap;
char sap;

for(i=0;i<5;i++){
printf("Enter the price of a book of %d number:\n",i);
scanf("%d",&b[i].price);

printf("\nEnter the name  of a book of %d number:\n",i);
scanf("%s",&b[i].name);
}

for(i=0;i<5;i++){
printf("The price of %d number book is \n%d\n",i,b[i].price);

printf("\nThe name of %d number book is %s\n",i,b[i].name);



}
int n=5,j;

printf("\nSorting in desscening to ascending number.....");
for(i=0;i< n-1;i++)
 {
  for(j=i+1;j< n;j++)
  {
   if(b[i].price>b[j].price)
   {
    temp = b[i];
    b[i] = b[j];
    b[j] = temp;
   }
  }
 }
 printf("Sorted records are:\n");
 for(i=0;i< n;i++)
 {


  printf("Name of %d student is : %d\n",i, b[i].price);
  
//   printf("Roll: %d\n", s[i].roll);
//   printf("Marks: %0.2f\n\n", s[i].marks);

 }


return 0;
}
