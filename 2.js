function shallowCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj; // 基本类型直接返回
    }
  
    const copy = Array.isArray(obj) ? [] : {}; // 根据类型初始化拷贝对象
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = obj[key]; // 只复制第一层
      }
    }
  
    return copy;
  }
  
  // 测试
  const original = { a: 1, b: { c: 2 } };
  const shallow = shallowCopy(original);
  shallow.b.c = 3;
  
  console.log(original.b.c); // 输出 3（原对象被影响）
  