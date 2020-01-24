import { put, takeLatest, all, fork } from "redux-saga/effects";

let returnedData;
const url = "http://localhost:8081/api/directors/";

function* getAllDirectors() {
    returnedData = yield fetch(url, {
        method: "GET"
    }).then(res => {
        return res.json();
    });

    yield put({ type: "gotData", returnedData });
}

function* deleteDirector(data) {
    console.log(data);
    returnedData = yield fetch(url + data.id, {
        method: 'DELETE'
    })

    yield put({ type: 'delData' })
}

function* singleDirector(data) {
    const id = data.id;
    console.log(url + id)
    returnedData = yield fetch(url + id, {
        method: "GET"
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    console.log(returnedData);
    yield put({ type: "singleDir", returnedData });
}

function* addDirector(data) {
    console.log(data);
    returnedData = yield fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    yield put({ type: 'addData' })
}

function* editDirector(data) {
    console.log(data.id);
    returnedData = yield fetch(url + data.id.id, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    yield put({ type: 'putData' })
}

function* actionWatcher() {
    yield takeLatest("getAll", getAllDirectors);

}
function* actionWatcher2() {
    yield takeLatest('delDir', deleteDirector);
}
function* actionWatcher3() {
    yield takeLatest('addDir', addDirector);
}
function* actionWatcher4() {
    yield takeLatest('editDir', editDirector);
}
function* actionWatcher5() {
    yield takeLatest('singDir', singleDirector);
}
export default function* rootSaga() {
    yield all([
        fork(actionWatcher),
        fork(actionWatcher2),
        fork(actionWatcher3),
        fork(actionWatcher4),
        fork(actionWatcher5),
    ]);
}