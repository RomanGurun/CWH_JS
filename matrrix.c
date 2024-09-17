


// // // #include <stdio.h>
// // // int main() {
// // //   int r, c, a[100][100], b[100][100], sum[100][100], i, j;
// // //   printf("Enter the number of rows (between 1 and 100): ");
// // //   scanf("%d", &r);
// // //   printf("Enter the number of columns (between 1 and 100): ");
// // //   scanf("%d", &c);

// // //   printf("\nEnter elements of 1st matrix:\n");
// // //   for (i = 0; i < r; ++i)
// // //     for (j = 0; j < c; ++j) {
// // //       printf("Enter element a%d%d: ", i + 1, j + 1);
// // //       scanf("%d", &a[i][j]);
// // //     }

// // //   printf("Enter elements of 2nd matrix:\n");
// // //   for (i = 0; i < r; ++i)
// // //     for (j = 0; j < c; ++j) {
// // //       printf("Enter element b%d%d: ", i + 1, j + 1);
// // //       scanf("%d", &b[i][j]);
// // //     }

// // //   // adding two matrices
// // //   for (i = 0; i < r; ++i){
// // //     for (j = 0; j < c; ++j) {
// // //       sum[i][j] = a[i][j] + b[i][j];
// // //     }
// // //   }
// // //   // printing the result
// // //   printf("\nSum of two matrices: \n");
// // //   for (i = 0; i < r; i++)
// // //     for (j = 0; j < c; ++j) {
// // //       printf("%d   ", sum[i][j]);
// // //       if (j == c - 1) {
// // //         printf("\n\n");
// // //       }
// // //     }

// // //   return 0;
// // // }



// // #include <stdio.h>

// // // function to get matrix elements entered by the user
// // void getMatrixElements(int matrix[][10], int row, int column) {

// //    printf("\nEnter elements: \n");

// //    for (int i = 0; i < row; ++i) {
// //       for (int j = 0; j < column; ++j) {
// //          printf("Enter a%d%d: ", i + 1, j + 1);
// //          scanf("%d", &matrix[i][j]);
// //       }
// //    }
// // }

// // // function to multiply two matrices
// // void multiplyMatrices(int first[][10],
// //                       int second[][10],
// //                       int result[][10],
// //                       int r1, int c1, int r2, int c2) {

// //    // Initializing elements of matrix mult to 0.
// //    for (int i = 0; i < r1; ++i) {
// //       for (int j = 0; j < c2; ++j) {
// //          result[i][j] = 0;
// //       }
// //    }

// //    // Multiplying first and second matrices and storing it in result
// //    for (int i = 0; i < r1; ++i) {
// //       for (int j = 0; j < c2; ++j) {
// //          for (int k = 0; k < c1; ++k) {
// //             result[i][j] += first[i][k] * second[k][j];
// //          }
// //       }
// //    }
// // }

// // // function to display the matrix
// // void display(int result[][10], int row, int column) {

// //    printf("\nOutput Matrix:\n");
// //    for (int i = 0; i < row; ++i) {
// //       for (int j = 0; j < column; ++j) {
// //          printf("%d  ", result[i][j]);
// //          if (j == column - 1)
// //             printf("\n");
// //       }
// //    }
// // }

// // int main() {
// //    int first[10][10], second[10][10], result[10][10], r1, c1, r2, c2;
// //    printf("Enter rows and column for the first matrix: ");
// //    scanf("%d %d", &r1, &c1);
// //    printf("Enter rows and column for the second matrix: ");
// //    scanf("%d %d", &r2, &c2);

// //    // Taking input until
// //    // 1st matrix columns is not equal to 2nd matrix row
// //    while (c1 != r2) {
// //       printf("Error! Enter rows and columns again.\n");
// //       printf("Enter rows and columns for the first matrix: ");
// //       scanf("%d%d", &r1, &c1);
// //       printf("Enter rows and columns for the second matrix: ");
// //       scanf("%d%d", &r2, &c2);
// //    }

// //    // get elements of the first matrix
// //    getMatrixElements(first, r1, c1);

// //    // get elements of the second matrix
// //    getMatrixElements(second, r2, c2);

// //    // multiply two matrices.
// //    multiplyMatrices(first, second, result, r1, c1, r2, c2);

// //    // display the result
// //    display(result, r1, c2);

// //    return 0;
// // }

// #include<stdio.h>    
// #include<stdlib.h>  
// int main(){  
// int a[10][10],b[10][10],mul[10][10],r,c,i,j,k;    
// system("cls");  
// printf("enter the number of row=");    
// scanf("%d",&r);    
// printf("enter the number of column=");    
// scanf("%d",&c);    
// printf("enter the first matrix element=\n");    
// for(i=0;i<r;i++)    
// {    
// for(j=0;j<c;j++)    
// {    
// scanf("%d",&a[i][j]);    
// }    
// }    
// printf("enter the second matrix element=\n");    
// for(i=0;i<r;i++)    
// {    
// for(j=0;j<c;j++)    
// {    
// scanf("%d",&b[i][j]);    
// }    
// }    
    
// printf("multiply of the matrix=\n");    
// for(i=0;i<r;i++)    
// {    
// for(j=0;j<c;j++)    
// {    
// mul[i][j]=0;    
// for(k=0;k<c;k++)    
// {    
// mul[i][j]+=a[i][k]*b[k][j];    
// }    
// }    
// }    
// //for printing result    
// for(i=0;i<r;i++)    
// {    
// for(j=0;j<c;j++)    
// {    
// printf("%d\t",mul[i][j]);    
// }    
// printf("\n");    
// }    
// return 0;  
// }  


#include <stdio.h>
#include <stdlib.h>
int main()
{
    int A[2][2],d,adjA[2][2];
    int i,j;
    float invA[2][2];
    printf("Enter elements for 2 * 2 matrix\n");
    for(i=0;i<2;i++)
    {
        for(j=0;j<2;j++)
        {
            //Reading Matrix A
            scanf("%d",&A[i][j]);
        }
    }
    /* Calculate determinant of matrix A */
    d = (A[0][0]*A[1][1])-(A[0][1]*A[1][0]);
    if(d==0)
    {
        printf("Determinant cannot be ZERO");
        return 0;
    }
    /* Find adjoint of matrix A */
    adjA[0][0]=A[1][1];
    adjA[1][1]=A[0][0];
    adjA[0][1]=-A[0][1];
    adjA[1][0]=-A[1][0];
    printf("Matrix A is\n");
    for(i=0;i<2;i++)
    {
        for(j=0;j<2;j++)
        {
            printf("%d ",A[i][j]);
        }
        printf("\n");
    }
    /* Find Inverse of A */
    printf("Inverse of Matrix A is\n");
    for(i=0;i<2;i++)
    {
        for(j=0;j<2;j++)
        {
            invA[i][j]=(adjA[i][j])/(float)d;
            printf("%.1f ",invA[i][j]);
        }
        printf("\n");
    }
    return 0;
}