import React from 'react';
import '../css/App.css';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

const product = {
  name: 'SHOE 307',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore, quisquam quam quia natus, voluptas asperiores consectetur, repellat dolores aliquam ab doloremque! Natus, sunt obcaecati sint sed rem earum perspiciatis',
  price: 243,
  currency: '$',
  image: './images/shoes-images-2.jpg',
  images: [
    {
      path: './images/shoes-images-1.jpg'
    },
    {
      path: './images/shoes-images-2.jpg'
    },
    {
      path: './images/shoes-images-3.jpg'
    },
    {
      path: './images/shoes-images-4.jpg'
    },
    {
      path: './images/shoes-images-5.jpg'
    },
    {
      path: './images/shoes-images-6.jpg'
    }
  ],
  colors: [
    {
      color: '#f38ea0'
    },
    {
      color: '#fff'
    },
    {
      color: '#5a684f'
    },
    {
      color: '#000'
    }
  ]
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      selectedImagePath : null,
      selectedColor: null,
      selectedImageClass: '',
      cartCountClass: ['nav-menu-item', 'shopping-cart'],
      cartCount: 0
    }
    
  }

  // componentDidMount() {
  //   this.setState(state => ({
  //     selectedImagePath : product.image,
  //     price: product.price,
  //     currency: product.currency
  //   })) 
  // }

  // changeImage = (image) => {
  //   this.setState(state => ({
  //     selectedImagePath: image.path
  //   }))
  // }

  // addToCart = (e) => {
  //   this.setState(state => ({
  //     cartClass: [...state.cartClass, 'is-added']
  //   }));

  //   setTimeout(() => {
  //     this.setState(state => {
  //       state.cartClass.pop();
  //       const arr = [...state.cartClass];
  //       return {
  //         arr
  //       }
  //     });
  //   }, 1000)
  // }  

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
      <Product product={product} onAddToCart={this.addToCart} />
      <Footer />
    </>
    );
  }
}

export default App;
