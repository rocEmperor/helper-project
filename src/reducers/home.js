import { all, takeEvery, put, call } from 'redux-saga/effects';

const nameSpace = 'home';

const initDate = {
  num: 0
}

const homeData = {
  reducer: (state = initDate, action) => {
    let { type, payload = {} } = action;
    switch (type) {
      case `${nameSpace}/concat`:
        return { ...state, ...payload}
      default:
        return state
    }
  },
  saga: function* homeSaga () {
    yield all([
      yield takeEvery(`${nameSpace}/async`, homeData.effects.async)
    ])
  },
  effects: {
    async: function* async ({ payload }) { // 异步测试
      let data = yield call(function () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(payload.num)
          }, 1000)
        })
      })
      yield put({
        type: `${nameSpace}/concat`,
        payload: {
          num: data
        }
      })
    }
  }
}

export let homeReducer = homeData.reducer;
export let homeSaga = homeData.saga;