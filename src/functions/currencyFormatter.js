function currencyFormatter (value) {
  const valueToCLP = new Intl.NumberFormat('es-CL').format(value)
  return valueToCLP
}

export default currencyFormatter
