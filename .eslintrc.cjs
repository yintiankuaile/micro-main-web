module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': ['off'], // 禁止使用 any
    '@typescript-eslint/ban-ts-comment': ['off'], // 禁止使用 @ts-ignore
    '@typescript-eslint/no-empty-function': ['off'], // 禁止出现空函数
    'valid-typeof': ['off'], // 禁止表达式与有效的字符串进行比较
    'no-unsafe-optional-chaining': ['off'], // 可选的链式（?.）表达式可以用 undefined 的返回值进行短路
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁用 console
    'prettier/prettier': 'error',
    'prefer-const': ['off'], // 要求使用 const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁用 debugger
    'key-spacing': ['off'], // 强制在对象字面量的属性中键和值之间使用一致的间距
    'eol-last': ['off'], // 要求或禁止文件末尾存在空行
    semi: ['off'], // 要求或禁止使用分号代替 ASI
    'no-unused-vars': ['warn'], // 禁止出现未使用过的变量
    'no-var': ['error'], // 禁止使用var
    quotes: ['off'], // 强制使用一致的反勾号、双引号或单引号
    indent: ['warn', 2, { SwitchCase: 1 }], // 设置缩进为4,临时
    'arrow-spacing': ['off'], // 强制箭头函数的箭头前后使用一致的空格
    'object-curly-spacing': ['off'], // 强制在大括号中使用一致的空格
    // 'comma-dangle': ['off'], // 要求或禁止末尾逗号
    'comma-spacing': ['off'], // 强制在逗号前后使用一致的空格
    'no-multiple-empty-lines': ['off'], // 禁止出现多行空行
    'no-unused-expressions': [
      // 禁止出现未使用过的表达式
      // 一个未使用的表达式对程序的状态没有影响，表明是一个逻辑错误。
      // 例如，n + 1; 并非语法错误，但它可能是错别字，程序员的意思是一个赋值语句 n += 1;。
      // 有时，这种未使用的表达式可能会被生产环境中的一些构建工具消除，这可能会破坏应用逻辑。
      'error',
      {
        allowShortCircuit: true, // 设置为 true 将允许你在表达式中使用逻辑短路求值。（默认为 false）
      },
    ],
    'global-require': 0, // 强制在模块顶部调用 require()
    'import/no-dynamic-require': 0,
    'linebreak-style': 0, // 强制使用一致的换行风格
    'max-len': 0, // 强制一行的最大长度
    'no-restricted-syntax': 0, // 禁用特定的语法
    eqeqeq: 0, // 要求使用 === 和 !==
    'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线，悬空的下划线是指在标识符的开头或结尾处的下划线，例如：let _foo;
    'arrow-parens': 0, // 要求箭头函数的参数使用圆括号 坏：a => {}，好：(a) => {}
    'object-curly-newline': 0, // 强制大括号内换行符的一致性，这条规则要求或不允许在 { 和其后面的标记之间，以及在 } 和其前面的对象字面或结构化赋值的标记之间进行换行
    'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
    'no-lonely-if': 0, // 禁止 if 作为唯一的语句出现在 else 语句中 例如：if() {} else { if() {}}，使用else if
    // 'no-restricted-globals': 0, // 禁用特定的全局变量
    // 'no-restricted-globals': ["error", "event", "fdescribe"], // 禁用特定的全局变量
    "no-restricted-globals": [
        "error",
        {
            "name": "event",
            "message": "Use local parameter instead."
        },
        {
            "name": "fdescribe",
            "message": "Do not commit fdescribe. Use describe instead."
        }
    ], // 禁用特定的全局变量
    'no-unreachable': 0, // 防止使用swtich语句 语法检查报错,禁止在 return、throw、continue 和 break 语句之后出现不可达代码，例如：function fn() {x = 1; return x; x = 3;} x = 3;为不可达代码
    'implicit-arrow-linebreak': 0, // 强制隐式返回的箭头函数体的位置
    // 例如，错误：
    // (foo) =>
    //  bar;
    // 正确：
    // (foo) => bar;
    'function-paren-newline': 0, // 强制在函数括号内使用一致的换行，许多风格指南要求或不允许在函数括号内使用换行符。
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // 大括号风格要求  其中import  { } from xxx 不换行,
    'import/prefer-default-export': 0,
    'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
    'no-param-reassign': 0, // 禁止对函数参数再赋值，对作为函数参数声明的变量进行赋值可能会产生误导并导致混乱的行为，因为修改函数参数也会改变 arguments 对象。
    // 错误示例
    // function foo(bar) {
    //   bar = 13;
    // }
    // function foo(bar) {
    //   bar++;
    // }
    'no-prototype-builtins': 0, // 禁止直接调用 Object.prototypes 的内置属性
    // 错误示例
    // var hasBarProperty = foo.hasOwnProperty("bar");
    // var isPrototypeOfBar = foo.isPrototypeOf(bar);
    // var barIsEnumerable = foo.propertyIsEnumerable("bar");
    // 正确示例
    // var hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
    // var isPrototypeOfBar = Object.prototype.isPrototypeOf.call(foo, bar);
    // var barIsEnumerable = {}.propertyIsEnumerable.call(foo, "bar");
    'class-methods-use-this': 0, // 强制类方法使用 如果一个类方法不使用 this，可以安全的做为静态函数出现。
    // 如果一个类的方法没有使用 this，它有时可以被做成一个静态函数。
    // 如果你真的将该方法转化为静态函数，那么调用该方法的类的实例也必须转化为静态调用（MyClass.callStaticMethod())
    // class A {
    //   constructor() {
    //       this.a = "hi";
    //   }
    //   print() {
    //       console.log(this.a);
    //   }
    //   sayHi() {
    //       console.log("hi");
    //   }
    // }
    // let a = new A();
    // a.sayHi(); // => "hi"
    // 在上面的例子中，sayHi 方法没有使用 this，所以我们可以把它改成静态方法。
    // class A {
    //   constructor() {
    //       this.a = "hi";
    //   }
    //   print() {
    //       console.log(this.a);
    //   }
    //   static sayHi() {
    //       console.log("hi");
    //   }
    // }
    // A.sayHi(); // => "hi"
    // 在上面的例子中还要注意，如果你把一个方法换成静态方法static sayHi() {}，那么调用静态方法的类的实例（let a = new A(); a.sayHi();）必须更新为静态调用（A.sayHi();），而不是让类的实例调用这个方法
    'prefer-destructuring': 0, // 不强制使用解构操作符
    'func-names': 0, // 函数可以没有名字
    'array-callback-return': 0, // 箭头函数可以不返回
    // Array 有几种过滤、映射和折叠的方法。 如果我们忘记在这些回调中写上 return 语句，那可能是个错误。如果你不想使用返回，或者不需要返回的结果，可以考虑使用 .forEach 代替
    // 错误示例
    // let indexMap = myArray.reduce(function(memo, item, index) {
    //   memo[item] = index;
    // }, {});
    // 正确示例
    // let indexMap = myArray.reduce(function(memo, item, index) {
    //   memo[item] = index;
    //   return memo;
    // }, {});
    "no-extra-parens": [ // 这条规则限制了括号的使用，只在有必要的地方使用。
      2,
      "functions"
    ],
  },
}
