import { toRefs, reactive } from 'vue'
export default function () {
  let state = reactive({
    /* webSocket推送的数据*/
    webSocket: null,
    webSocketTaskData: {},
    showVehivlesTaskId: null,
    socketReconnectNum: 0, // 不能超过5次
    lockReconnect: false,
    connectSocketUrl: '', // socket连接的url
    connectSocketName: '', // socket连接的url
    // 心跳机制
    setHearTime: 10000,
    heartTimeOut: 20000,
    timeoutObj: null
  })
  /* 心跳*/
  const heartReset = () => {
    state.timeoutObj && clearTimeout(state.timeoutObj)
    // state.serverTimeoutObj && clearTimeout(state.serverTimeoutObj)
  }
  const heartStart = () => {
    state.timeoutObj && clearTimeout(state.timeoutObj)
    state.timeoutObj = setInterval(() => {
      // console.log('发送heartCheck',state.connectSocketName)
      if (state.webSocket.readyState !== 1) {
        // 重新连接
        console.log('重新连接', state.socketReconnectNum)
        state.socketReconnect()
      } else {
        state.webSocket.send('heartCheck' + state.connectSocketName)
      }
    }, 10000)
  }
  /* websocket重新连接*/
  const socketReconnect = async () => {
    // if(state.socketReconnectNum>7||state.lockReconnect)  {
    // socket断开后会重新连接6次
    if (state.socketReconnectNum > 5) {
      state.heartReset()
    } else {
      // console.log('socket重新连接了' + state.connectSocketName+"count"+state.socketReconnectNum)
      state.socketReconnectNum++
      state.socketConnectHook()
    }
  }
  const resetSocketData = () => {
    state.socketReconnectNum = 0
    // state.lockReconnect=false
  }

  /* 使用方法*/
  const socketConnectHook = () => {
    // console.log("socketConnectHook被执行了",state.socketReconnectNum);
    return new Promise((resolve) => {
      if (typeof WebSocket === 'undefined') {
        console.log('遗憾：您的浏览器不支持WebSocket')
      } else {
        console.log(' new WebSocket', state.connectSocketUrl)
        state.webSocket = new WebSocket(state.connectSocketUrl)
        // 连接打开事件
        state.webSocket.onopen = () => {
          state.heartStart()
          resolve()
        }
        // 收到消息事件
        state.webSocket.onmessage = (msg) => {
          state.heartStart()
          state.resetSocketData()
          state.webSocketMessage(msg)
        }
        // 连接关闭事件
        state.webSocket.onclose = () => {
          // state.heartReset();
          // console.log('Socket发生了错误')
          // state.lockReconnect = false;
          // state.socketReconnect();
          console.log('Socket已关闭', state.connectSocketName)
        }
        // 发生了错误事件
        state.webSocket.onerror = () => {
          console.log('Socket发生了错误', state.connectSocketName)
          // state.lockReconnect = false;
          // state.socketReconnect();
        }
      }
    })
  }
  // webSocket消息监听
  const webSocketMessage = () => { },
  // 关闭websocket连接
  const webSocketClose = () => {
    state.webSocket.close()
    state.heartReset()
  }
  return {
    ...toRefs(state),
    heartReset,
    heartStart,
    socketReconnect,
    resetSocketData,
    socketConnectHook,
    webSocketMessage,
    webSocketClose
  }
}