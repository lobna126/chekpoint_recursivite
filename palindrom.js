function estPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();  
    
    if (str.length <= 1) {
      return true;
    }
  
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    return estPalindrome(str.slice(1, str.length - 1));
  }
  