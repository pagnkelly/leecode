/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
      children: {

      }
    };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let root = this.root;
  for (var i = 0; i < word.length; i++) {
    var s = word[i];
    if(root.children[s]) {
      root = root.children[s];
      if (i === word.length - 1) {
        root.isLeaf = true;
      }
    } else {
      root = root.children[s] = {
        children: {},
        isLeaf: i === word.length - 1
      }
    }
  }

  console.log(JSON.stringify(this.root));
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let root = this.root;
  for (var i = 0; i < word.length; i++) {
    var s = word[i];
    if (!root.children[s]) {
      return false
    }
    root = root.children[s];
    if (i === word.length - 1) {
      return root.isLeaf;
    }
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let root = this.root;
  for (var i = 0; i < prefix.length; i++) {
    var s = prefix[i];
    if (!root.children[s]) {
      return false
    }
    root = root.children[s];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var word = 'apple';
var prefix = 'app';

var obj = new Trie()
obj.insert(word)
var param_2 = obj.search(word)
var param_3 = obj.search(prefix)
var param_4 = obj.startsWith(prefix)
obj.insert(prefix)
var param_5 = obj.search(prefix)
console.log(param_2, param_3, param_4, param_5);