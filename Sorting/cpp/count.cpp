#include<bits/stdc++.h>
using namespace std;
#define endl "\n"

// Time complexity - O(n+k)
// Space complexity - O(n+k) where k = range
void countSort(vector<int>& v){
    int min_ele = *min_element(v.begin(), v.end()), n = v.size();
    int range = *max_element(v.begin(), v.end()) - min_ele + 1;
    vector<int> count(range), output(n);
    for(int i=0; i<n; i++){
        count[v[i] - min_ele]++;
    }
    for(int i=1; i<range; i++){
        count[i] += count[i-1];
    }
    for(int i=n-1; i>=0; i--){
        output[count[v[i] - min_ele] - 1] = v[i];
        count[v[i] - min_ele]--;
    }
    v = output;
}

int main(){
    vector<int> v = {2, 3, 2, 2, 5, 3, 4, 5, 2};
    countSort(v);
    for(int& i : v) cout<<i<<" ";
}