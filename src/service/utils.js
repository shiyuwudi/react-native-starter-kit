export const url = 'http://192.168.1.197';

export const form2Form = (form) => {
  const formData = new FormData();
  const keys = Object.keys(form);
  keys.forEach((key) => {
    formData.append(key, form[key]);
  });
  return formData;
};

export const mFetch = (mUrl, form) => {
  const storage = global.storage;
  // 读取
  return storage.load({
    key: 'loginState',

      // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true,

      // syncInBackground(默认为true)意味着如果数据过期，
      // 在调用sync方法的同时先返回已经过期的数据。
      // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
    syncInBackground: true,

      // 你还可以给sync方法传递额外的参数
    syncParams: {
      extraFetchOptions: {
          // 各种参数
      },
      someFlag: true,
    },
  }).then((ret) => {
      // 如果找到数据，则在then方法中返回
      // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
      // 你只能在then这个方法内继续处理ret数据
      // 而不能在then以外处理
      // 也没有办法“变成”同步返回
      // 你也可以使用“看似”同步的async/await语法

    const formData = form2Form(form);

    const option = {
      headers: {
        verify: ret.verify,
        userId: ret.userId,
        token: ret.token,
      },
      credentials: 'same-origin',
      method: 'POST',

    };
    if (Object.keys(form).length > 0) {
      option.body = formData;
    }
    return fetch(`${url}/app${mUrl}`, option);
  })
    .then(response => {
      // const r = response.url.split('/');
      // console.group(r[r.length-1]);
      // console.log(clone(response).json());
      // console.groupEnd();
      return response.json();
    })
    .catch((err) => {
      // 如果没有找到数据且没有sync方法，
      // 或者有其他异常，则在catch中返回
      switch (err.name) {
        case 'NotFoundError':
          // TODO;
          break;
        case 'ExpiredError':
          // TODO
          break;
        default:
          break;
      }
    });
};

function clone(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}