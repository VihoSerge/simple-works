import React from 'react';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedImagePath : null,
      selectedColor: null,
      selectedImageClass: '',
      cartCountClass: ['nav-menu-item', 'shopping-cart'],
      cartCount: 0,
      products: [],
      product: null
    }
  }

  componentDidMount() {
    fetch('./data.json')
    .then(res => res.json())
    .then(products => {
      const index = Math.floor(Math.random() * products.length)
      const product = products[index];
      this.setState({ products, product });
    });
  }

  addToCart = () => {
    this.setState({cartCount: this.state.cartCount + 1});
    this.setState(state => ({
      cartCountClass: [...state.cartCountClass, 'is-added']
    }));

    setTimeout(() => {
      this.setState(state => {
        state.cartCountClass.pop();
        const arr = [...state.cartCountClass];
        return {
          arr
        }
      });
    }, 1000)
  }

  render() {
    return (
    <>
      <Header cartCountClass={this.state.cartCountClass.join(' ')} cartCount={this.state.cartCount} />
      {
        this.state.product === null ?
        <div></div>
        :
        <Product product={this.state.product} onAddToCart={this.addToCart} /> 
      }
      <Footer />
    </>
    );
  }
}

export default App;
