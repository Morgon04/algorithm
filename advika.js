if (this.state.localCart != null && this.state.localCart != "") {
  const existingProduct = this.state.localCart.data.find((d) => {
    return d.id_product === Number(this.productDetails.id_product);
  }); // Finding Matching Product

  if (existingProduct && existingProduct.option) {
    // if it's existing Product
    const selectedOption = this.state.cart.option[0];
    const existingOption = existingProduct.option.find((o) => {
      return o.id_product_option === selectedOption.id_product_option;
    });

    if (existingOption) {
      existingProduct.quantity =
        existingProduct.quantity + this.state.cart.quantity;
      pushProductIntoCart(existingProduct);
    } else {
    }
  } else {
    pushProductIntoCart(this.state.cart);
  }

  // Local Cart, has more than one product
  // pushing elements into guest cart for
  // the total
  if (
    this.state.localCart &&
    this.state.localCart.data &&
    this.state.localCart.data.length > 0
  ) {
    this.state.localCart.data.forEach((da) => {
      if (da.id_product !== Number(this.productDetails.id_product)) {
        pushProductIntoCart(da);
      }
    });
  }
} else {
  // if the local is Empty
  pushProductIntoCart(this.state.cart);
}

// Pushing Product into Cart
// using object destructuring
function pushProductIntoCart({ id_product, option, quantity }) {
  this.state.guestcart.push({
    id_product: id_product,
    option: option,
    quantity: quantity,
  });
}

for (let i = 0; i < this.state.localCart.data.length; i++) {
  if (
    this.state.localCart.data[i].id_product == this.productDetails.id_product
  ) {
    let existingOption = false;
    let indexvalue = -1;
    for (let j = 0; j < this.state.localCart.data[i].option.length; j++) {
      var guestdata = this.state.localCart.data[i].option[j]
        .id_product_option_value;
      var cartData = this.state.cart.option[j].id_product_option_value;
      if (guestdata == cartData) {
        existingOption = true;
        indexvalue = i;
        this.state.localCart.data[i].quantity =
          this.state.localCart.data[i].quantity + this.state.cart.quantity;
        this.state.guestcart.push({
          id_product: this.state.cart.id_product,
          option: this.state.localCart.data[i].option,
          quantity: this.state.localCart.data[i].quantity,
        });
      } else {
        const existingProduct = this.state.guestcart.find((g) => {
          return g.id_product === this.state.cart.id_product;
        });
        if (!existingProduct) {
          this.state.guestcart = this.state.localCart.data.map((element) => {
            return {
              id_product: element.id_product,
              option: element.option,
              quantity: element.quantity,
            };
          });
          this.state.guestcart.push({
            id_product: this.state.cart.id_product,
            option: this.state.cart.option,
            quantity: this.state.cart.quantity,
          });
        }
      }
    } //End of for loop

    if (existingOption) {
      this.state.localCart.data.splice(indexvalue, 1);
    }
  } //End of product id matching if condition
  else {
    if (this.state.localCart !== "" && this.state.localCart !== null) {
      this.state.guestcart = this.state.localCart.data.map((element) => {
        return {
          id_product: element.id_product,
          option: element.option,
          quantity: element.quantity,
        };
      });
    }
  }
} //end of for loop
