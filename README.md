# Learn Redux Toolkit

Redux로 구현한 카운터 예제 입니다.  
`Redux Toolkit` 을 이용해서 변경해 봅시다.
```js
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return { type: INCREMENT }
}

function decrement() {
  return { type: DECREMENT }
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)
```

---
__createAction__  

`increment()` => `{ type: "INCREMENT" }` 와 같은 값을 나타낸다.  
`increment.toString()` `increment.type` => `INCREMENT` 와 같은 값을 나타낸다.  
액션 타입문자열을 받아 이 타입을 사용하는 액션 생성자 함수를 반환한다.

```js
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
```

__createReducer__  

객체의 각 키는 redux의 액션 type문자열이며 값은 reducer 함수 이다.  
액션 type 문자열을 키로 사용하므로 
[ES6 object "computed 속성"](http://javascript.info/object#computed-properties) 을 사용하며 type문자열 변수로 키를 작성할 수 있다.  
초기 상태값과 reducer함수에 대한 lookup테이블을 받아 이를 처리하는 reducer를 작성한다.

```js
const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})
```

__configureStore__

`configureStore`함수는 여러 개의 인자 대신 이름이 지정된 하나의 object를 인자로 받으므로, reducer함수를 `reducer`라는 이름으로 전달해야 한다.  
redux에서 제공하던 createStore와 같은 store를 생성하지만 인자로 객체를 사용하고 Redux DevTools Extension을 자동으로 설정합니다.
```js
const store = configureStore({
  reducer: counter
})
```

__createSlice__

`createSlice` 함수는 객체에 reducer함수들을 제공할 수 있고  
이를 기반으로 애션 타입문자열과 액션 생성자 함수를 자동으로 생성한다.  
생성된 reducer함수를 `reducer`라는 필드를 포함하는 "slice"객체와 `actions`라는 객체 내부에서 생성된 액션 함수를 반환한다.  
reducer이름과 함수가 포함된 초기 상태와 lookup테이블을 받아 액션 생성자 함수, 액션 유형 문자열 및 리듀서 함수를 자동으로 생성한다.  

ES6 구문으로 작성한 redux 코드를 `createSlice` 함수를 사용하면 다음과 같이 작성할 수 있다.  
```js
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})
```