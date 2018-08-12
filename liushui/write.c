
#include<stdio.h>


int main(){



    FILE *out=NULL;
    out = fopen("f.out","a+");
    int i=0;
    while(i<100000000){
        fprintf(out,"1");
        i++;
    }
    fclose(out);

    return 0;
}