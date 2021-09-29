
const superEggDrop = (K, N) => {
  var res = Array.from({ length: K }, () => 1);
    while (res[K-1]<N){
        for (var i=K-1;i>=1;i--){
            res[i]=res[i]+res[i-1]+1;
        }
        res[0]++;

        console.log(res);
    }
      return res[0];
}

console.log(superEggDrop(3, 14));