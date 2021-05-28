console.log("-- Pengulangan dan Pengkondisan Bersarang");

var code = document.getElementById('code');

// Pola 1
function coba0() {
   var item = '';
  for (var i = 0; i < 10; i++) {    // baris ke-
    for (var s = 0; s < 5; s++) {   // jumlah setiap item
      item += '*';
    }
  item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
      var item = '';
     for (var i = 0; i < 10; i++) {    // baris ke-
       for (var s = 0; s < 5; s++) {   // jumlah setiap item
         item += '*';
       }
     item += '\\n';
     }   console.log(item);
  `);
}

// Pola 2
function coba1() {
     var item = '';
    for(var i = 0; i < 10; i++) {
       for(var s = 0; s <= i; s++) {
         item += '*';
       }
    item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
      var item = '';
     for(var i = 0; i < 10; i++) {
        for(var s = 0; s <= i; s++) {
          item += '*';
        }
     item += '\\n';
   }   console.log(item);
  `);
}

// Pola 3
function coba2() {
     var item = '';
    for(var i = 10; i >= 0; i--) {
       for(var s = 0; s < i; s++) {
         item += '*';
       }
    item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
      var item = '';
     for(var i = 10; i >= 0; i--) {
        for(var s = 0; s < i; s++) {
          item += '*';
        }
     item += '\\n';
   }   console.log(item);
  `);
}

// Pola 4
function coba3() {
    var item = '';
    // segitiga ke-1
    for(var i = 0; i <= 10; i++) {
      for(var s = 0; s <= i; s++) {
        item += '*';
      }
    item += '\n';
    }
    // segitiga ke-2
    for(var i = 10; i >= 0; i--) {
      for(var s = 0; s <= i; s++) {
        item += '*';
      }
    item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
    var item = '';
    // segitiga ke-1
    for(var i = 0; i <= 10; i++) {
      for(var s = 0; s <= i; s++) {
        item += '*';
      }
    item += '\\n';
    }

    // segitiga ke-2
    for(var i = 10; i >= 0; i--) {
      for(var s = 0; s <= i; s++) {
        item += '*';
      }
    item += '\\n';
  }   console.log(item);
  `);
}

// Pola 5
function coba4() {
    var item = '';
   for (var i = 1; i <= 6; i++) {
     for (var j = 0; j < i; j++) {
       item += i;
     }
   item += '\n';
   }
   console.log(item);
   code.innerHTML = (`
     var item = '';
    for (var i = 1; i <= 6; i++) {
      for (var j = 0; j < i; j++) {
        item += i;
      }
    item += '\\n';
   }   console.log(item);
   `);
}

// Pola 6
function coba5() {
    var item = '';
    for (var i = 1; i <= 6; i++) {
     for (var j = 1; j <= i; j++) {
       item += j;
     }
    item += '\n';
    }
    console.log(item);
    code.innerHTML = (`
      var item = '';
      for (var i = 1; i <= 6; i++) {
       for (var j = 1; j <= i; j++) {
         item += j;
       }
      item += '\\n';
    }   console.log(item);
    `);
}

function coba6() {
    var item = '';
    // segitiga ke-1
    for (var i = 0; i <= 10; i++) {
      for (var k = 0; k <= (10 - i); k++) {
        item += ' ';
      }
       for (var j = 0; j <= i; j++) {
         item += '*';
       }
    item += '\n';
    }
    // segitiga ke-2
    for (var i = 10; i >= 0; i--) {
      for (var k = 0; k <= (10 - i); k++) {
        item += ' ';
      }
       for (var j = 0; j <= i; j++) {
         item += '*';
       }
    item += '\n';
   }
    console.log(item);
    code.innerHTML = (`
      var item = '';
      // segitiga ke-1
      for (var i = 0; i <= 10; i++) {
        for (var k = 0; k <= (10 - i); k++) {
          item += ' ';
        }
         for (var j = 0; j <= i; j++) {
           item += '*';
         }
      item += '\\n';
    }
    
      // segitiga ke-2
      for (var i = 10; i >= 0; i--) {
        for (var k = 0; k <= (10 - i); k++) {
          item += ' ';
        }
         for (var j = 0; j <= i; j++) {
           item += '*';
         }
      item += '\\n';
      }
      console.log(item);
    `);
}

// Pola 7
function coba7() {
    var item = '';
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      if (i <= 10 / 2 && j >= (10 / 2) - (i - 1) && j <= (10 / 2) + (i - 1)) {
        item += '*';
      } else if (i >= 10 / 2 && j > ((10 / 2) - i) * (-1) && j < (10 - ((10 / 2) - i) * (-1))) {
        item += '*';
      } else {
        item += ' ';
      }
    }
    item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
    var item = '';
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      if (i <= 10 / 2 && j >= (10 / 2) - (i - 1) && j <= (10 / 2) + (i - 1)) {
        item += '*';
      } else if (i >= 10 / 2 && j > ((10 / 2) - i) * (-1) && j < (10 - ((10 / 2) - i) * (-1))) {
        item += '*';
      }
      else {
        item += ' ';
      }
    }
    item += '\\n';
  }
  console.log(item);
  `);
}

// Pola 8
function coba8() {
     var item = '';
    for (var i = 0; i < 10; i++) {
      for (var k = 10; k >= i; k--) {
        item += ' ';  // jarak spasi
      }
      for (var l = 1; l <= i; l++) {
        item += '*';
      }
      for (var m = 0; m <= i; m++) {
        item += '*';
      }
      item += '\n';
    }
  console.log(item);
  code.innerHTML = (`
    var item = '';
   for (var i = 0; i < 10; i++) {
     for (var k = 10; k >= i; k--) {
       item += ' ';
     }
     for (var l = 1; l <= i; l++) {
       item += '*';
     }
     for (var m = 0; m <= i; m++) {
       item += '*';
     }
     item += '\n';
   }   console.log(item);
  `);
}

// Pola 9
function coba9() {
     var item = '';
    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < i; k++) {
        item += ' ';
      }
      for (var l = 10; l > i; l--) {
        item += '*';
      }
      for (var m = 9; m > i; m--) {
        item += '*';
      }
      item += '\n';
    }
  console.log(item);
  code.innerHTML = (`
     var item = '';
    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < i; k++) {
        item += ' ';
      }
      for (var l = 10; l > i; l--) {
        item += '*';
      }
      for (var m = 9; m > i; m--) {
        item += '*';
      }
      item += '\n';
    }   console.log(item);
  `);
}

function coba10() {
   var item = '';
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 6; j++) {
      if (i % 2 === 0) {
        item += '# ';
      } else {
        item += ' #';
      }
    }
  item += '\n';
  }
  console.log(item);
  code.innerHTML = (`
      var item = '';
     for (var i = 0; i < 10; i++) {
       for (var j = 0; j < 6; j++) {
         if (i % 2 === 0) {
           item += '# ';
         } else {
           item += ' #';
         }
       }
     item += '\n';
     }   console.log(item);
  `);
}
