const input = "username=admin&password=123456&loginType=qrcode";

// 1. 用 '&' 分割成多个键值对
const pairs = input.split('&');

// 2. 遍历每一对，再用 '=' 分割键和值
const result = {};
pairs.forEach(pair => {
  pair= pair.split('=');
  result[pair[0]] = pair[1];
});

console.log(result);
// 输出：{ username: 'admin', password: '123456', loginType: 'qrcode' }