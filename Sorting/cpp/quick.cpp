#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(nlogn) - Randomized
// Space complexity - O(1)
int partition(vector<int>& v, const int& start, const int& end){
    int pIndex = start;
    for(int i=start; i<end; i++){
        if(v[start] < v[end]){
            swap(v[pIndex], v[i]);
            pIndex++;
        }
    }
    swap(v[pIndex], v[end]);
    return pIndex;
}

void quickSort(vector<int>& v, int start, int end){
    if(start >= end) return;
    // gives wrong result
    // srand(time(NULL));
    // int random = start + rand()%(end-start+1);
    // swap(v[end], v[random]);
    int pIndex = partition(v, start, end);
    quickSort(v, start, pIndex-1);
    quickSort(v, pIndex+1, end);
}

int main(){
    vector<int> v = {1, 12, 7, 9, 3, 0};
    quickSort(v, 0, v.size()-1);
    for(int& i : v) cout<<i<<" ";
}