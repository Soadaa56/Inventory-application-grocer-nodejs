document.addEventListener('DOMContentLoaded', () => {
  const supplierSelect = document.getElementById('supplierId')
  const productsDivList = document.getElementById('shipment-form-products-container')

  console.log(supplierSelect)
  console.log(productsDivList)

  supplierSelect.addEventListener('change', async () => {
    supplierId = supplierSelect.value
    console.log(supplierId)
  })
})