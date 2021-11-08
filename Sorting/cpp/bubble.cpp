#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(n^2)
// Space complexity - O(1)
void bubbleSort(vector<int>& v){
    bool flag;
    for(int i=0; i<v.size(); i++){
        flag = true;
        for(int j=0; j<v.size()-1-i; j++){
            if(v[j] > v[j+1]){
                flag = false;
                swap(v[j], v[j+1]);
            }
        }
        if(flag) break;
    }
}

int main(){
    vector<int> v = {1, 12, 7, 9, 3, 0};
    bubbleSort(v);
    for(int& i : v) cout<<i<<" ";
}