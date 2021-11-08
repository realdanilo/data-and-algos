#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(n^2)
// Space complexity - O(1)
void insertionSort(vector<int>& v){
    int hole, val;
    for(int i=1; i<v.size(); i++){
        hole = i, val = v[i];
        while(hole > 0 && v[hole-1] > val){
            v[hole] = v[hole-1];
            hole--;
        }
        v[hole] = val;
    }
}

int main(){
    vector<int> v = {1, 12, 7, 9, 3, 0};
    insertionSort(v);
    for(int& i : v) cout<<i<<" ";
}