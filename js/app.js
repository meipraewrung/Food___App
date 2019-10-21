// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBUlFjZa62lUH7QCzhllaVyiLM1FwKL8P0",
  authDomain: "foodapp-93536.firebaseapp.com",
  databaseURL: "https://foodapp-93536.firebaseio.com",
  projectId: "foodapp-93536",
  storageBucket: "foodapp-93536.appspot.com",
  messagingSenderId: "882312058634",
  appId: "1:882312058634:web:ad3a59826029b2e279ccf3",
  measurementId: "G-EL08Y20FEL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

var db = firebase.firestore();

document.addEventListener('init', function (event) {
  var page = event.target;

  if (page.id === 'homePage') {
    console.log("homePage");

    $("#userbtn").click(function () {
      $("#content")[0].load("login.html");
    });

    $("#resListbtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });

    $("#KittiDuckNoodle").click(function () {
      $("#content")[0].load("resturantMenu/KittiDuckNoodle.html");
    });
    $("#SweetLamoon").click(function () {
      $("#content")[0].load("resturantMenu/SweetLamoon.html");
    });
    $("#Mr.INK").click(function () {
      $("#content")[0].load("resturantMenu/Mr.INK.html");
    });
    $("#SalaLoi").click(function () {
      $("#content")[0].load("resturantMenu/SalaLoi.html");
    });
    $("#RimThangChalong").click(function () {
      $("#content")[0].load("resturantMenu/RimThangChalong.html");
    });

    
    $("#thaibtn").click(function () {
      $("#content")[0].load("resturantList/ThaiFood.html");
    }); 
    $("#chinesebtn").click(function () {
      $("#content")[0].load("resturantList/ChineseFood.html");
    });
    $("#vietnambtn").click(function () {
      $("#content")[0].load("resturantList/VietnamFood.html");
    });
    $("#japanesebtn").click(function () {
      $("#content")[0].load("resturantList/JapaneseFood.html");
    });
    $("#fastbtn").click(function () {
      $("#content")[0].load("resturantList/FastFood.html");
    });
    $("#seabtn").click(function () {
      $("#content")[0].load("resturantList/Seafood.html");
    });
    $("#sweetbtn").click(function () {
      $("#content")[0].load("resturantList/Sweets&Appetizers.html");
    });
    $("#beveragebtn").click(function () {
      $("#content")[0].load("resturantList/Beverage.html");
    });

    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var recommend = `<ons-carousel-recommend modifier="nodivider" id="recommend1${doc.data().id}" class="recomended_recommend">
            <div class="thumbnail" style="background-image: url('${doc.data().url}')">
            </div>
            <div class="recomended_recommend_title" id="recommend2_${doc.data().id}">${doc.data().name}</div>
        </ons-carousel-recommend>`
        $("#carousel").append(recommend);
      });
    });

  }

  if (page.id === 'resturantListALLPage') {
    console.log("resturantListALLPage");

    $("#Mr_INK").click(function () {
      $("#content")[0].load("resturantMenu/Mr_INK.html");
    });
    $("#KittiDuckNoodle").click(function () {
      $("#content")[0].load("resturantMenu/KittiDuckNoodle.html");
    });
    $("#PaLai").click(function () {
      $("#content")[0].load("resturantMenu/PaLai.html");
    });
    $("#RimThangChalong").click(function () {
      $("#content")[0].load("resturantMenu/RimThangChalong.html");
    });
    $("#SweetLamoon").click(function () {
      $("#content")[0].load("resturantMenu/SweetLamoon.html");
    });
    $("#SalaLoi").click(function () {
      $("#content")[0].load("resturantMenu/SalaLoi.html");
    });
  }

  if (page.id === 'BeveragePage') {
    console.log("BeveragePage");
    $("#Mr_INK").click(function () {
      $("#content")[0].load("resturantMenu/Mr_INK.html");
    });
  } else if (page.id === 'ChineseFoodPage') {
    console.log("ChineseFoodPage");
  } else if (page.id === 'FastFoodPage') {
    console.log("FastFoodPage");
  } else if (page.id === 'JapaneseFoodPage') {
    console.log("JapaneseFoodPage");
  } else if (page.id === 'SeafoodPage') {
    console.log("SeafoodPage");
    $("#PaLai").click(function () {
      $("#content")[0].load("resturantMenu/PaLai.html");
    });
    $("#RimThangChalong").click(function () {
      $("#content")[0].load("resturantMenu/RimThangChalong.html");
    });
    $("#SalaLoi").click(function () {
      $("#content")[0].load("resturantMenu/SalaLoi.html");
    });
  } else if (page.id === 'Sweets&AppetizersPage') {
    console.log("Sweets&AppetizersPage");
    $("#RimThangChalong").click(function () {
      $("#content")[0].load("resturantMenu/RimThangChalong.html");
    });
    $("#SweetLamoon").click(function () {
      $("#content")[0].load("resturantMenu/SweetLamoon.html");
    });
  } else if (page.id === 'ThaiFoodPage') {
    console.log("ThaiFoodPagee");
    $("#KittiDuckNoodle").click(function () {
      $("#content")[0].load("resturantMenu/KittiDuckNoodle.html");
    });
  } else if (page.id === 'VietnamFoodPage') {
    console.log("VietnamFoodPage");
  }

  if (page.id === 'KittiDuckNoodlePage') {
    console.log("KittiDuckNoodlePage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  } else if (page.id === 'Mr_INKPage') {
    console.log("Mr_INKPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  } else if (page.id === 'PaLaiPage') {
    console.log("PaLaiPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  } else if (page.id === 'RimThangChalongPage') {
    console.log("RimThangChalongPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  } else if (page.id === 'SalaLoiPage') {
    console.log("SalaLoiPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.h  tml");
    });
  } else if (page.id === 'SweetLamoonPage') {
    console.log("SweetLamoonPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
  
  if (page.id === 'orderConfirmPage') {
    console.log("orderConfirmPage");
    $("#BackCatebtn").click(function () {
      $("#content")[0].load("resturantList/resturantListALL.html");
    });
    $("#BackHomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }

  if (page.id === 'registerPage') {
    console.log("registerPage");
    $("#signinbtn").click(function () {
      var email = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        content.load('home.html');
      })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak');
          } else {
            alert(errorMessage);
            content.load('login.html');
          }
        });
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#googlebtn").click(function () {
      //console.log("gg");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        content.load('home.html');
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
    });

    $("#signinbtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        content.load('home.html');
      }).catch(function (error) {
        console.log(error.message);
      });
    })

    $("#registerbtn").click(function () {
      content.load('register.html');
    })
  }

  // ************************************************
  // menubtn
  // ************************************************
  fn = {};
  fn.openMB = function () {
    var menu = document.getElementById('menu');
    menu.open();
  };
  fn.load = function (page) {
    var content = document.getElementById('content');
    var menu = document.getElementById('menu');
    content.load(page)
      .then(menu.close.bind(menu));
  };
  fn.openHB = function () {
    var home = document.getElementById('home');
    home.open('home.html');
  };

  // ************************************************
  // Shopping Cart API
  // ************************************************
  var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    // Constructor
    function Item(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    // Add to cart
    obj.addItemToCart = function (name, price, count) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
      for (var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart[item].count--;
          if (cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
      }
      saveCart();
    }
    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
      for (var item in cart) {
        if (cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
    // Clear cart
    obj.clearCart = function () {
      cart = [];
      saveCart();
    }
    // Count cart 
    obj.totalCount = function () {
      var totalCount = 0;
      for (var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
    // Total cart
    obj.totalCart = function () {
      var totalCart = 0;
      for (var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
    // List cart
    obj.listCart = function () {
      var cartCopy = [];
      for (i in cart) {
        item = cart[i];
        itemCopy = {};
        for (p in item) {
          itemCopy[p] = item[p];
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
    return obj;
  })();
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  // Clear items
  $('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
  });
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for (var i in cartArray) {
      output += "<tr>" +
        "<td>" + cartArray[i].name + "</td>" +
        "<td>(" + cartArray[i].price + ")</td>" +
        "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>" +
        "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
        "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>" +
        "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>" +
        " = " +
        "<td>" + cartArray[i].total + "</td>" +
        "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  // Delete item button
  $('.show-cart').on("click", ".delete-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  // -1
  $('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  // Item count input
  $('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  displayCart();

});
