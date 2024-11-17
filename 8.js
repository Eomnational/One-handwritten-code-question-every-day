function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj; // 基本类型或 null 直接返回
    }
  
    const copy = Array.isArray(obj) ? [] : {}; // 根据类型创建拷贝
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]); // 递归复制属性
      }
    }
  
    return copy;
  }
  
  // 测试
  const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
  const deep = deepCopy(original);
  deep.b.c = 3;
  deep.d.push(4);
  
  console.log(original.b.c); // 输出 2（原对象未受影响）
  console.log(original.d);   // 输出 [1, 2, 3]
  