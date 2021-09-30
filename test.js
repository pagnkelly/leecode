
public boolean validPalindrome(String s) {
  //找到不相同的字符，删除它，再比较剩余的部分是否是回文字符串
   int i=0,j=s.length()-1;
   while(i<j){
       if(s.charAt(i)!=s.charAt(j)){
           //可删除i位置，也可删除j位置
           return isPalindrome(s,i+1,j)||isPalindrome(s,i,j-1);
       }
       i++;
       j--;
   }
   return true;
}
//判断是否是回文字符串
public boolean isPalindrome(String s,int i,int j){
   while(i<j){
       if(s.charAt(i)!=s.charAt(j)){
           return false;
       }
       i++;
       j--;
   }
   return true;

————————————————
版权声明：本文为CSDN博主「弟中弟2」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weibozhouchao/article/details/102910962