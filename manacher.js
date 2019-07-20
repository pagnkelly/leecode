// 马拉车算法， 计算回文字符串最大长度

var manacher = {
  str: '',
  init: function(s) {
    if (typeof(s) !== 'string') {
      return false;
    }
    // 确保字符串没有#
    const news = '#' + s.split('').join('#') + '#\n';
    this.str = news;
    return this;
  },
  main: function() {
      if(!this.str && typeof(this.str) !== 'string') {
        return false;
      }
      const s = this.str;
      console.log('ssss', s);
      const p = [];
      let mx = 0;
      let id = 0;
      let maxLen = 0;
      for (var i = 0; i < s.length; i++) {
          console.log('id', id, i);
          if (i < mx) {
            // 最关键在这一句 https://www.cnblogs.com/z360/p/6375514.html 助我理解
            p[i] = Math.min(p[2 * id -i], mx-i);
          } else {
            p[i] = 1;
          }
          console.log('p[i]', p[i]);
          while (s.charAt(i - p[i]) == s.charAt(i + p[i])) {
            p[i] += 1;
          }

          if (mx < i + p[i]) {
            mx = i + p[i];
            id = i;
          }
          console.log('mx', mx);
          maxLen = Math.max(maxLen, p[i] - 1);
      }
      return maxLen;

  }
}

var a = manacher.init('ac').main();
console.log(a);
