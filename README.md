# ⚙️ Toolsy
In different projects, we create different tools to make things easier. These tools may be very effective for many projects, so we always have these tools with us in different projects.
So we decided to make a great collection of these tools in one package that we call it **toolsy**.

### Features:
- **Different tools in all fields of JavaScript.**
- **Documented and tested tools.**
- **Low code and maximum performance.**
- **Easy to use in various modes.**

**🌟 STAR to add more features/customizations.**

#🏁 Start
* [Installation](#-installation)
* [Usage](#-usage) _- Get Started_
* [API](#-api)
  - [Object ](#ios)

# 🌵 Installation

You can install the library with awesome **yarn**:

```
yarn add toolsy
```

or with **npm**:

```
npm install toolsy
```

# 📟 Usage

You can import the library in the following ways:

```javascript
import * as toolsy from 'toolsy';
// Import all tools named toolsy.

console.log(toolsy.isEven(5));
```
Or:

```javascript
import { isEven } from 'toolsy';
// Direct import of required tools.

console.log(isEven(5));
```

# ⛏️ API

### Number

|  Name | Type | Description |
| ------------ | ------------ | ------------ |
| isNumber()  | Number  |  Pass your parameter to isNumber() to check if it is number or not. |
| isEven()  | Number  |  Pass your parameter to isEven() to check if it is even or not. |
| isOdd()  | Number  |  Pass your parameter to isOdd() to check if it is odd or not. |
| putCommas()  | Number  |  Pass your number to putCommas() and deliver it with a comma between each 3-digit piece. |
| toEnglish()  | String  | Pass your Arabic (or similar languages) number to the toEnglish() utility and deliver it with a English digits as integer type. |
| toArabic()  | Number  | Pass your English number to the toArabic() utility and deliver it with a Arabic digits as string type. |


### Object

|  Name | Type | Description |
| ------------ | ------------ | ------------ |
| isEmpty()  | Object  |  Pass your object to isEmpty() to check if it is empty or not. |
| toArray()   | Object  |  Pass your object to toArray() to convert all values as a array index. |

### Array

|  Name | Type | Description |
| ------------ | ------------ | ------------ |
| isEmpty()  | Array  |  Pass your array to isEmpty() to check if it is empty or not. |
| sort()   | Array  |  Pass your array to sort() to arrange your array. |
| sortByProp()   | Array, String  |  Pass your array to sortByProp() to sort by alphabet for strings and sort by number for numbers. |



# Number

   - #### isNumber()
```javascript
   isNumber(2)
   // true
```
   - #### isEven()
```javascript
   isEven(2)
   // true
```
   - #### isOdd()
```javascript
   isOdd(2)
   // false
```
   - #### putComma()
```javascript
   putCommas (123)
   // 123
   
     putCommas (1234)
   // 1,234
   
     putCommas (1234567)
   // 1,234,567
```
   
   - #### toEnglish()
```javascript
   toEnglish("۱۲۳۴")
   // 1234
```
   - #### toArabic()
```javascript
   toArabic(12345)
   // "۱۲۳۴۵"
```

# Object 
- #### isEmpty ()
```javascript
   isEmpty({})
   // true
   
   isEmpty({ name: 'toolsy' })
   // false
```
- #### toArray()
```javascript
   toArray({ name: 'toolsy', language: 'javaScript' })
   // ['toolsy', 'javaScript']
```

# Array

   - #### isEmpty()
```javascript
   isEmpty([])
   // true
```
   - #### sort()
```javascript
   sort([1,66, 12, 20])
   // [1, 12, 20, 66]
```
   - #### sortByProp()
```javascript
   sortByProp([ { name: 'Sarah', age: 19 }, { name: 'Alex', age: 12 } ], "age")
   // [ { name: 'Alex', age: 12 }, { name: 'Sarah', age: 19 } ]
```

# ⚖️ License

The library is released under the MIT license. Copyright © 2020 [Mohammad Goldast](https://github.com/mohammad-goldast).

See [LICENSE](https://github.com/mohammad-goldast/toolsy/blob/main/LICENSE) for more information.






