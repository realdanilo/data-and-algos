#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(nlogn)
// Space complexity - O(n)
void merge(vector<int>& v, vector<int>& v1, vector<int>& v2){
    int i = 0, j = 0, k = 0;
    while(i < v1.size() && j < v2.size()){
        if(v1[i] < v2[j]) v[k] = v1[i++];
        else v[k] = v2[j++];
        k++;
    }
    while(i < v1.size()) v[k++] = v1[i++];
    while(j < v2.size()) v[k++] = v2[j++];
}

void mergeSort(vector<int>& v){
    int n = v.size();
    if(n == 1) return;
    vector<int> v1(v.begin(), v.begin()+n/2);
    vector<int> v2(v.begin()+n/2, v.end());
    mergeSort(v1);
    mergeSort(v2);
    merge(v, v1, v2);
}

int main(){
    vector<int> v = {1, 12, 7, 9, 3, 0};
    mergeSort(v);
    for(int& i : v) cout<<i<<" ";
}