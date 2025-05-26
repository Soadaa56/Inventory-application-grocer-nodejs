document.addEventListener('DOMContentLoaded', () => {
  const supplierSelect = document.getElementById('supplierId')
  const productsListDiv = document.getElementById('shipment-form-products-container')

  supplierSelect.addEventListener('change', async () => {
    const supplierId = supplierSelect.value
    const url = `/api/products?supplierId=${supplierId}`
    const response = await fetch (url)
    const products = await response.json()

    console.log(products)

    productsListDiv.innerHTML = ''

    products.forEach(product => {
      const productDiv = document.createElement('div')
      productDiv.classList.add('form-field')

      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.name = 'productIds[]'
      checkbox.value = product.id
      checkbox.id = `product-${product.id}`

      const label = document.createElement('label')
      label.htmlFor = checkbox.id
      label.textContent = (product.name + ', ' + product.size)

      productDiv.appendChild(label)
      productDiv.appendChild(checkbox)

      productsListDiv.appendChild(productDiv)
    });
  })
})