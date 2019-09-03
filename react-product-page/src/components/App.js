import React from 'react';
import '../css/App.css';
import Product from './Product';
import Header from './Header';
import Footer from './Footer';

// const product = {
//   name: 'SHOE 307',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore, quisquam quam quia natus, voluptas asperiores consectetur, repellat dolores aliquam ab doloremque! Natus, sunt obcaecati sint sed rem earum perspiciatis',
//   price: 243,
//   currency: '$',
//   image: './images/shoes-images-2.jpg',
//   images: [
//     {
//       path: './images/shoes-images-1.jpg'
//     },
//     {
//       path: './images/shoes-images-2.jpg'
//     },
//     {
//       path: './images/shoes-images-3.jpg'
//     },
//     {
//       path: './images/shoes-images-4.jpg'
//     },
//     {
//       path: './images/shoes-images-5.jpg'
//     },
//     {
//       path: './images/shoes-images-6.jpg'
//     }
//   ],
//   colors: [
//     {
//       color: '#f38ea0'
//     },
//     {
//       color: '#fff'
//     },
//     {
//       color: '#5a684f'
//     },
//     {
//       color: '#000'
//     }
//   ]
// }
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
    <Product onAddToCart={this.addToCart} />
    <Footer />
    </>
      // <div className="product-container">
      //   <div className="left-shape">
      //     <div className="square"></div>
      //   </div>
      //   <div className="right-shape">
      //     <div className="square"></div>
      //   </div>
      //   <div className="row">
      //       <div className="md-7 product-images">
      //         <div className="row">
      //           <div className="md-2">
      //             <ul>
      //               {
      //                 product.images.map((image, i)=> <li key={i}><img onClick={e => this.changeImage(image)} className={'thumbnail ' + (this.state.selectedImagePath === image.path ? ' thumbnail-hover' : '')} src={image.path} alt="product" /></li>)
      //               }
      //             </ul>
      //           </div>
      //           <div className="md-10">
      //             <img src={this.state.selectedImagePath} className="full-image" alt="product" />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="md-5 product-infos">
      //         <h1 className="title">{product.name}</h1>
      //         <p className="description">{product.description}</p>
      //         <div>
  
      //         </div>
      //         <div>
      //           <button onClick={e => this.addToCart(e)} className={this.state.cartClass.join(' ')}>
      //             <span>Add to cart</span>
      //             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/></svg>
      //           </button>
      //         </div>
      //         <div className="color-options">
      //           {
      //             product.colors.map((color, i) => <button key={i} className="color-item" style={{backgroundColor: color.color}}></button>)
      //           }
      //           <span className="price">{this.state.currency} {this.state.price}</span>
      //         </div>
              
      //       </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
