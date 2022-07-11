
async function routine() {
  const customer = await getCustomer(1)
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = await getTopMovies()
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies)
    console.log('Email sent...')
  }
}

routine()

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'ken adams',
        isGold: true,
        email: 'email'
      });
    }, 1000);
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['mac n cheese', 'days of our lives']);
    }, 1000)
  })
}

function sendEmail(email, movies,) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000);
  })
}