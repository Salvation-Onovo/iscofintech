const URL = 'http://localhost:5000/api/v1'

export const sendMessage = async (data) => {
  try {
    const res = await fetch(`${URL}/contact`, {
      method: "POST",
      mode: "cors",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    return res.json()
  } catch (error) {
    return error
  }
}
