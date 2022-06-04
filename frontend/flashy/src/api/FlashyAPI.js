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
        return null
    }
}

const fetchFlashsets = async () => {
    const url = 'http://127.0.0.1:8000/flashsets/'
    return await tryCatchFetch(url)
}

const fetchSingleFlashset = async (flashsetId) => {
    const url = `http://127.0.0.1:8000/flashsets/${flashsetId}/`
    return await tryCatchFetch(url)
}

const createFlashset = async (flashsetObj) => {
    const url = 'http://127.0.0.1:8000/flashsets/'
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(flashsetObj)
    }
    return await tryCatchFetch(url, init)
}

const deleteFlashset = async (flashsetObj) => {
    const url = `http://127.0.0.1:8000/flashsets/${parseInt(flashsetObj.id)}/`

    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }

    await fetch(url, init)
    return await {"status": "done"}
}

const editFlashsetTitle = async (flashsetObj, newName) => {
    const url = `http://127.0.0.1:8000/flashsets/${flashsetObj}/`
    const bodyObj = {
        "title": newName
    }
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj)
    }
    return await tryCatchFetch(url, init)
}

const createCard = async (frontText, backText, flashsetID) => {
    const url = `http://127.0.0.1:8000/cards/`
    const bodyObj = {
        "front_text": frontText,
        "back_text": backText,
        "flashset": flashsetID
    }
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyObj)
    }

    return await tryCatchFetch(url,init)
}

const getRandomTrivia = async (num) => {
    const url = `https://the-trivia-api.com/api/questions?limit=${num}`
    const data = await tryCatchFetch(url)
    console.log(data)
    return data
}

const shuffle = (arr) => {
    let currentIndex = arr.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}

const exportItems = {
    fetchFlashsets,
    fetchSingleFlashset,
    createFlashset,
    deleteFlashset,
    editFlashsetTitle,
    createCard,
    getRandomTrivia,
    shuffle,
}


export default exportItems