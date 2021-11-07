#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(nlogn)
// Space complexity - O(1)
void heapify(vector<int>& v, const int& n, int i){
    int largest = i;
    int l = 2*i + 1, r = 2*i + 2;
    if(l < n && v[l] > v[largest]) largest = l;
    if(r < n && v[r] > v[largest]) largest = r;
    if(largest != i){
        swap(v[largest], v[i]);
        heapify(v, n, largest);
    }
}

void heapSort(vector<int>& v){
    int n = v.size();
    for(int i=n/2-1; i>=0; i--){
        heapify(v, n, i);
    }
    for(int i=n-1; i>=0; i--){
        swap(v[i], v[0]);
        heapify(v, i, 0);
    }
}

int main(){
    vector<int> v = {1, -12, 7, 3, 11,-8,0,-33,-100};
    heapSort(v);
    for(int& i : v) cout<<i<<" ";
}