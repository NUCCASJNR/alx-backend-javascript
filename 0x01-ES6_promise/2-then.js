export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success'
    }))
    .catch(() => Error())
    .finally(() => { console.log('Got a message from the API'); });
}
