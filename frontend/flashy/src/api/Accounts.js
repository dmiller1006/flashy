const tryCatchFetch = async (url, init = null) => {
    try {
        const response = await fetch(url, init)
        if (response.ok) {
            return await response.json()
        }
        else {
            throw new Error(`Bad response: ${response.status} ${response.statusText}`)
        }
    }
    catch (e) {
        console.error(e)
        return e
    }
}

const signupUser = async (username, password) => {
    console.log(username,password)
    // post request to http://127.0.0.1:8000/accounts/signup with username/password body
    const url = 'http://127.0.0.1:8000/accounts/signup'
    const user = {
        "username": `${username}`,
        "password": `${password}`
    }
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    return await tryCatchFetch(url, init)
}

const loginUser = async (username, password) => {
    const url = 'http://127.0.0.1:8000/accounts/get-token'
    const user = {
        "username": `${username}`,
        "password": `${password}`
    }
    console.log(JSON.stringify(user))
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    return await tryCatchFetch(url, init)
}

const exportItems = {
    signupUser,
    loginUser,
}


export default exportItems