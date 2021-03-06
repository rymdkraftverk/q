export const FETCH_QUEUE = 'FETCH_QUEUE'
export const FETCH_QUEUE_DONE = 'FETCH_QUEUE_DONE'
export const FETCH_LEADERBOARD = 'FETCH_LEADERBOARD'
export const FETCH_LEADERBOARD_DONE = 'FETCH_LEADERBOARD_DONE'
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const FETCH_ACCOUNTS_DONE = 'FETCH_ACCOUNTS_DONE'
export const FETCH_TAGS = 'FETCH_TAGS'
export const FETCH_TAGS_DONE = 'FETCH_TAGS_DONE'
export const ADD_TAG = 'ADD_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'
export const SET_ACTIVE_DONATION = 'SET_ACTIVE_DONATION'
export const FETCH_TOTAL_AMOUNT = 'FETCH_TOTAL_AMOUNT'
export const FETCH_TOTAL_AMOUNT_DONE = 'FETCH_TOTAL_AMOUNT_DONE'
export const INSERT_DONATION = 'INSERT_DONATION'
export const INSERT_DONATION_DONE = 'INSERT_DONATION_DONE'
export const SEARCH_DONATION = 'SEARCH_DONATION'

export function fetchQueue() {
  return {
    type: FETCH_QUEUE
  }
}

export function fetchQueueDone(queue) {
  return {
    type: FETCH_QUEUE_DONE,
    queue
  }
}

export function fetchLeaderboard() {
  return {
    type: FETCH_LEADERBOARD
  }
}

export function fetchLeaderboardDone(leaderboard) {
  return {
    type: FETCH_LEADERBOARD_DONE,
    leaderboard
  }
}

export function fetchAccounts() {
  console.log('fetch accounts action');
  return {
    type: FETCH_ACCOUNTS
  }
}

export function fetchTotalAmount() {
  return {
    type: FETCH_TOTAL_AMOUNT
  }
}

export function fetchTotalAmountDone(totalAmount) {
  return {
    type: FETCH_TOTAL_AMOUNT_DONE,
    totalAmount
  }
}

export function fetchAccountsDone(accounts) {
  console.log('fetchAccountsDone')
  return {
    type: FETCH_ACCOUNTS_DONE,
    accounts: accounts
  }
}

export function fetchTags() {
  return {
    type: FETCH_TAGS
  }
}

export function fetchTagsDone(accounts) {
  console.log('fetchTagsDone')
  return {
    type: FETCH_TAGS_DONE,
    accounts: accounts
  }
}

export function addTag(account, tag) {
  return {
    type: ADD_TAG,
    account: account,
    tag: tag
  }
}

export function removeTag(account, tag) {
  return {
    type: REMOVE_TAG,
    account: account,
    tag: tag
  }
}

export function setActiveDonation(id) {
  return {
    type: SET_ACTIVE_DONATION,
    id
  }
}

export function insertDonation(donation) {
  return {
    type: INSERT_DONATION,
    donation
  }
}

export function insertDonationDone() {
  return {
    type: INSERT_DONATION_DONE
  }
}

export function searchDonation(email) {
  return {
    type: SEARCH_DONATION,
    email
  }
}