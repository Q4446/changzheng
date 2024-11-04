export default  function toAsync(fn) {
  // promisify() 返回的是一个函数，
  // 这个函数跟传入的 fn（即 wx.abcd） 签名相同（或兼容）
  return async function(args) {
  //                    ^^^^ 接受一个单一参数对象
      return new Promise((resolve, reject) => {
  //             ^^^^^^^^^^^ 返回一个 Promise 对象
          fn({
  //      ^^ ^ 调用原函数并使用改造过的新的参数对象
              ...(args || {}),
  //          ^^^^^^^^        这个新参数对象得有原本传入的参数，
  //                      ^^  当然得兼容没有传入参数的情况
              success: res => resolve(res),
  //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  注入 success 回调，resovle 它
              fail: err => reject(err)
  //          ^^^^^^^^^^^^^^^^^^^^^^^^ 注入 fail 回调，reject 它
          });
      });
  };
}