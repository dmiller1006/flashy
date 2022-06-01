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

    const deleteFetch = await fetch(url, init)
    return await {"status": "done"}
}

const changeTitle = async (flashsetObj) => {
    const url = `http://127.0.0.1:8000/flashsets/${flashsetObj.id}/`
    const init = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(flashsetObj)
    }
    console.log(flashsetObj)
}


const exportItems = {
    fetchFlashsets,
    fetchSingleFlashset,
    createFlashset,
    deleteFlashset,
}

export default exportItems