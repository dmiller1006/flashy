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
    console.log(JSON.stringify(flashsetObj))
}


const exportItems = {
    fetchFlashsets,
    fetchSingleFlashset,
    createFlashset,
}

export default exportItems