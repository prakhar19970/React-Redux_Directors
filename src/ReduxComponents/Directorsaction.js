export const getAll = 'getAll';
const url = "http://localhost:8081/api/directors/"
//export const gotData = 'gotData'

export const getAllDirectors = () => ({
    type: 'getAll',
})

export const deleteDirector = (id) => ({
    type: 'delDir',
    id,
})
export const addDirector = (Director) => ({
    type: 'addDir',
    Director,
})

export const editDirector = (id, Director) => ({
    type: 'editDir',
    id,
    Director,
}
)

export const singleDirector = (id) => ({
    type: 'singDir',
    id,
}
)
