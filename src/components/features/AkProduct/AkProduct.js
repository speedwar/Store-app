import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { productActions } from 'redux/actions'
import './AkProduct.scss'

const AkProduct = (props) => {
  const [ productSize, setProductSize ] = useState('')
  const { product, isProductSuccess, isProductFailure } = props
  const productSizeOption = [
    {'value': 'xs', 'label': 'XS'},
    {'value': 's', 'label': 'S'},
    {'value': 'm', 'label': 'M'},
    {'value': 'l', 'label': 'L'},
    {'value': 'xl', 'label': 'XL'}
  ]

  useEffect(() => {
    const { dispatch } = props
    dispatch(productActions.getProducts())
  }, [])

  const handleFilterChange = (event) => {
    const { dispatch } = props

    // Enforce that value is written with all uppercase letters
    const selectedSize = event.target.value.toUpperCase()
    setProductSize(event.target.value)
    dispatch(productActions.postProductsFilterOption(selectedSize))
  }

  const isSale = (
    <span className="ak-product__promo-text ak-product__promo-text--sale">
      Sale
    </span>
  )

  const isExclusive = (
    <span className="ak-product__promo-text ak-product__promo-text--exclusive">
      Exclusive
    </span>
  )

  const productList = (
    <ul className="ak-product__list">
      {product && product.map((item, i) => (
        <li className="ak-product__item" key={`${item.productName}`}>
          <img
            src={'/assets/images/' + item.productImage}
            className="ak-product__image"
            alt={item.productName}
          />
          <div className="ak-product__detail">
            <div className="ak-product__promo">
              {item.isSale && isSale}
              {item.isExclusive && isExclusive}
            </div>
            <div className="ak-product__caption">
              <span className="ak-product__name">
                {item.productName}
              </span>
              <span className="ak-product__price">
                {item.price}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )

  const productNotFound = (
    <ul className="ak-product__list ak-product__list--failure">
      No products
    </ul>
  )

  return (
    <div className="ak-product">
      <div className="ak-product-header">
        <h3 className="ak-product-header__title">
          Women&apos;s Tops
        </h3>
        <select
          className="ak-product-header__filter"
          value={ productSize }
          onChange={ handleFilterChange }
        >
          <option value="" disabled>
            Filter by size
          </option>
          {productSizeOption.map((option, i) => (
            <option
              value={option.value}
              key={i + '_' + option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {isProductSuccess && productList}
      {isProductFailure && productNotFound}
    </div>
  )
}

function mapStateToProps(state) {
  const {
    product,
    productError,
    isProductRequesting,
    isProductSuccess,
    isProductFailure,
    isProductFilterSuccess,
    isProductFilterRequesting,
    productFilterError
  } = state.product
  return {
    product,
    productError,
    isProductRequesting,
    isProductSuccess,
    isProductFailure,
    isProductFilterSuccess,
    isProductFilterRequesting,
    productFilterError
  }
}

export default connect(mapStateToProps)(AkProduct)
