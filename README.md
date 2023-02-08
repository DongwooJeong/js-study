JavaScript Study
===
노마드코더 JavaScript 기초 강의: [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby?utm_source=free_course&utm_campaign=javascript-for-beginners&utm_medium=site)
***
# Table of Contents
1. [Introduction](#introduction)
2. [Welcome to JavaScript](#welcome-to-javascript)
3. [JavaScript on the Browser](#javascript-on-the-browser)
***
1\) Introduction
---

***
2\) Welcome to JavaScript
---


### 2.0 Your First JS Project
* 자바스크립트는 브라우저의 console을 통해 사용함
    |소스|위치|
    |-|-|
    |HTML| Elements|
    |CSS| Styles| 
    |JavaScript| Console|


    - 콘솔은 한 줄씩 작성
        + 그래서 html과 css 사용할 때처럼 따로 폴더에 자바스크립트 파일을 만들어서 사용함
            * body 태그 안에 script 태그로 넣음
            * html파일 실행하면 css처럼 자바스크립트도 작동함
    - 콘솔로 계산도 할 수 있음
    
    <br>
* 자바스크립트로 경고메시지 띄우기
    ```js
    alert("hi");
    ```
***
### 2.1 Basic Data Types
* Numeric Data Types
    - Integer: 2, 3, ...
    - Float: 1.5, 2.5, ...
    - Integer과 Float 사이에 덧셈 가능
* Text Data Types
    - String: "ㅎㅇ", 'ㅂㅇ', ...
    - String 간에 + 로 합치기 가능
***
### 2.2 Variables
* console.log( ): send message to console
    ```js
    console.log(54);
    console.log("lalala");
    ```
    * 괄호 안에서 계산 가능
* variable
    * const로 선언
    ```js
    const a = 5;
    ```
    * 변수 이름 컨벤션
        - 공백 불가, 대문자로 대체 (camelCase)
        - 파이썬은 _ (snake_case)
***

### 2.3 Variables
* const 말고 let으로 변수 선언 가능
    - const는 상수이고 변할 수 없음
    - let으로 하면 나중에 변수에 다른 값 대입 가능
    - 기본적으로는 const 사용하는 게 좋음
    - 옛날에는 var을 사용, 값 바꾸기 가능
        * 언어의 보호를 받을 수 없다?
***
### 2-4. Booleans
* Boolean: true or false
    - 파이썬에서는 capitalized
* null: 변수에 아무 것도 없음
    - 자연적으로 발생 불가
    - 파이썬에서는 none
* undefined: 아직 값을 대입하지 않음
***
### 2-5. Arrays
* 데이터 구조: 데이터 저장 방법
* Arrays
    - [ ] 형식으로 데이터의 리스트 저장
        ```js
        const nonsense = [1,2,"hello", false, null, true, undefined, "dw"];
        ```
    - 다른 타입을 넣어도 됨
    - 하나의 값을 불러오기: index 사용
        ```js
        console.log(daysOfWeek[5]);
        ```
    - 0부터 시작
    - 값 추가: push
        ```js
        daysOfWeek.push("sun");
        ```

* JavaScript의 코멘트: //
* log와 push처럼 .뒤에 오는 건 function
***
### 2-6. Objects
* 변수를 하나하나 선언하거나 array를 만드는 방식으로는 여러 개의 속성(property)를 갖는 하나의 개체를 만들기 번거로움
    - object를 만들어서 property를 사용해보자
    - { } 사용, = 대신 : 사용, 끝에 , 사용
        ```js
        const player = {
            name: "dw",
            points: 10,
            fat: true,
        };
        ```
    - 값 불러오기: . 사용 혹은 [] 사용
    ```js
    console.log(player.name);
    console.log(player["name"]);
    ```
    - const로 선언된 object의 속성에 대입된 값은 바꾸는 게 가능
    - 새로운 속성을 만들기도 바로 선언하는 방식으로 쉽게 가능함
***
### 2-7. Functions I
* functions: 반복해서 사용할 수 있는 코드 모음
    - function으로 선언
    - 함수이름.( )
    - { } 안에 내용 적기 

### 2-8. Functions II
* 함수에 argument를 추가하기
    - ( ) 안에 argument를 쓰는데, ,를 사용해서 여러 argument를 받을 수 있음
        ```js
        function sayHello2(nameOfPerson, age) {
            console.log("Hello my name is "+ nameOfPerson + " and I'm " + age);
        }

        sayHello2("dw", 10);
        sayHello2("dongs", 11);
        ```
    - argument는 function 안에서만 존재함
* NaN: 숫자가 아니라는 데이터 타입
***
### 2-9. Recap I
***
### 2-10. Recap II
* 계산기 만들기
***
### 2-11. Returns
* 함수에서 말고 나에게 결과를 제공하도록 만들기
    - console.log나 alert는 그냥 실행하고 끝
    - return: function의 결과를 대체함
        - function의 목적은 결과를 return하는 것
        - 값을 출력하고 끝내는 게 아니라 나중에 저장된 값을 다시 사용할 수 있음
***
### 2-12. Recap
***
### 2-13. Conditionals
* 조건문: if ~
* prompt: argument 두 개, 사용자에게 메시지를 출력하고 값을 받아옴
    - 안 예뻐서 잘 안 씀
    - default type: string
        + typeof 로 확인
            ```js
            console.log(typeof age);
            ```
    - string을 int 타입으로 바꾸기: parseInt
        + 숫자 형태의 string만 가능: "15"
***
### 2-14. Conditionals II
* isNaN: returns a Boolean value depending on if the value is not a number
* conditional
    ```js
     if(condition){ 
    /// condition ==true 
    } else {
    /// condition ==false
    }
    ```
    - condition should be a boolean value
***
### 2-15. Conditionals III
* if~ else if~ else~
* AND: &&
* OR: ||
***
### 2-16. Recap
***
3\) JavaScript on the Browser
---
### 3.0 The Document Object
* JavaScript 쓰는 이유: HTML과 연동하기 위해
* HTML의 객체를 가져와서 자바스크립트로 콘트롤할 수 있음    
    - console에 document를 치면 html 코드를 볼 수 있음
    - console.dir(document) -> document는 object이다
    - document.title하면 html의 title을 가져옴
    - document.title = "Hi" 라고 치면 title이 바뀜 
    - console 뿐만 아니라 JS 파일에서도 콘트롤 가능
    - document.body: body태그 내용을 가져옴
***
### 3.1 HTML in JavaScript
* HTML의 id를 JavaScript로 가져오는 법
    - document.getElementById("")
* 우리가 하는 일
    1. document로부터 항목을 가져옴
    2. 그 항목을 변경함    
***
### 3.2 Searching for Elements
* getElementByClassName(""): classname으로 가져옴, 조건에 맞는 값의 array를 출력
* getElementsByTagName: 특정 tag를 가져옴
* querySelector: CSS 방식으로 검색
    - class 등을 .으로 명시해줘야 함
    - 단 하나의 element만 출력, 여러 개 있으면 첫번째만 나옴
        + 모두 가져오려면 querySelectorAll
    - 정말 많이 사용
***
### 3.3