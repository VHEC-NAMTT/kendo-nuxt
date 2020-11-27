export default context => {
    const { route: { query } } = context
    switch (query.lo) {
        case 'pop':
            return 'popup'
        default:
            return 'default'
    }
  }