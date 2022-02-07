// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
Array.prototype.sameStructureAs = function (other) {
    let response = true;
    
    if (this.length != other.length){
      return false;
    }
    
    for (let i = 0; i < this.length; i++) {
      if (isArray(this[i]) && isArray(other[i])){
        if (this[i].length === other[i].length){
          return this[i].sameStructureAs(other[i]);
        } else {
          return false;
        }
        
      } else if (isArray(this[i]) || isArray(other[i])) {
        return false;
      }
    }
    
    return response;
    };
    
    
    // решение получше
    Array.prototype.sameStructureAs = function (other) {
      return isArray(other) && this.length == other.length && this.every(function (a, i) {
        var b = other[i];
        return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
      });
    };