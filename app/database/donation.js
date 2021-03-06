const db = require('./')

const create = data => {
  data.type = 'donation'
  data.state = 'in_queue'
  data.time = Date.now()
  return db.insert(data)
}

const queue = () => {
  const params = {
    descending: true
  }

  return db.view('views', 'queue', params)
  .then(result => result.rows.map(el => el.value))
}

const leaderboard = () => {
  const params = {
    group: true
  }
  return db.view('views', 'sum_email', params)
  .then(result => {
    return result.rows
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)
  })
}

const sum = (state) => {
  const params = {
    key: state
  }
  return db.view('views', 'sum', params)
  .then(result => ({
    sum: result.rows[0].value
  }))
}

const spent = (from, to) => {
  const params = {
    startkey: from,
    endkey: to
  }
  return db.view('views', 'spent', params)
  .then(result => result.rows.map(el => el.value))
}

module.exports = {
  create,
  queue,
  leaderboard,
  sum,
  spent
}
