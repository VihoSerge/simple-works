import React from 'react';
import '../css/Product.css';

class Product extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedImagePath : null,
      selectedImageClass: '',
      cartClass: ['btn', 'btn-cart'],
      product: props.product
    }
  }

  componentDidMount() {
    this.setState(state => ({
      selectedImagePath : this.state.product.image,
    })) 
  }

  changeImage = (image) => {
    this.setState(state => ({
      selectedImagePath: image.path
    }))
  }

  addToCart = (e) => {
    this.setState(state => ({
      cartClass: [...state.cartClass, 'is-added']
    }));

    setTimeout(() => {
      this.setState(state => {
        state.cartClass.pop();
        const arr = [...state.cartClass];
        return {
          arr
        }
      });
    }, 1000)

    this.props.onAddToCart();
  }  

  render() {
    return (
      <div className="product-container">
        <div className="left-shape">
          <div className="square"></div>
        </div>
        <div className="right-shape">
          <div className="square"></div>
        </div>
        <div className="row">
            <div className="md-7 product-images">
              <div className="row">
                <div className="md-2">
                  <ul>
                    {
                      this.state.product.images.map((image, i)=> <li key={i}><img onClick={e => this.changeImage(image)} className={'thumbnail ' + (this.state.selectedImagePath === image.path ? ' thumbnail-hover' : '')} src={image.path} alt="product" /></li>)
                    }
                  </ul>
                </div>
                <div className="md-10">
                  <img src={this.state.selectedImagePath} className="full-image" alt="product" />
                </div>
              </div>
            </div>
            <div className="md-5 product-infos">
              <h1 className="title">{this.state.product.name}</h1>
              <p className="description">{this.state.product.description}</p>
              
              <div className="color-options">
                {
                  this.state.product.colors.map((color, i) => <button key={i} className="color-item" style={{backgroundColor: color.color}}></button>)
                }
                <span className="price">{this.state.product.currency} {this.state.product.price}</span>
              </div>
              <div>

                <button onClick={e => this.addToCart(e)} className={this.state.cartClass.join(' ')}>
                  <span>Add to cart</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/></svg>
                </button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;
