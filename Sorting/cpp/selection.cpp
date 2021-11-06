#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(n^2)
// Space complexity - O(1)
void selectionSort(vector<int>& v){
    int min_i;
    for(int i=0; i<v.size() - 1; i++){
        min_i = i;
        for(int j=i+1; j<v.size(); j++){
            if(v[j] < v[min_i]) min_i = j;
        }
        swap(v[min_i], v[i]);
    }
}

int main(){
    vector<int> v = {1, 12, 7, 9, 3, 0};
    selectionSort(v);
    for(int& i : v) cout<<i<<" ";
}