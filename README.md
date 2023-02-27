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
### 3.3 Events
* console.dir: 안에 내용 보고 싶을때
    - on~: events
* event: 페이지에서의 모든 동작
    - javascript가 listen할 수 있음
    - click: 
        + addEventListener(): event를 listen함
            * 두번째 argument에 함수를 넣어서 event를 감지할 때마다 함수를 실행시킬 수 있음
                - JavaScript가 함수를 대신 실행하게 하기 위해 ()를 안 씀 
***
### 3.4 Events part Two
* WebAPI: JavaScript
* mouseenter: 마우스 올라가는 이벤트
* mouseleave: 마우스 올라갔다가 나가는 이벤트
***
### 3.5 More Events
* another way to listen: 
> element.oneventname = functionname;
* window: 윈도우 창에 관한 것
***
### 3.6 CSS in JavaScript
* if~else~문을 사용해서 style을 변경하기
* getter와 setter
* 변수를 사용해서 코드를 깔끔하게 만들자
***
### 3.7 CSS in JavaScript part Two
* style은 CSS, JavaScript는 상호작용
    - 따라서 3-6과 같은 JS는 css에서 하는게 낫다
* style 바꾸기
    - css에서 클래스를 만들기
    - js에서 클래스를 가져와서 html에 영향
    - class 오타나면 안됨
    - string을 변수로 만들면 에러 최소화 가능
        + console에서 뭐 틀렸는지 알려주기 때문
    - 문제: class가 여러 개인데 JS에서 하나의 classname에 대해서만 실행하면 나머지 class가 없어짐
***
### 3.8 CSS in JavaScript part Three
* 앞선 문제 해결: classList.contains() 사용
    - add, remove로 특정 class를 추가하고 삭제
    ```js
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    ```
    - 근데 이거 toggle로 한번에 가능
***
### 4.0 Input Values
* application을 만들어보자
    1. 유저에게 input을 받기
    2. 정보를 받기
    3. 받은 정보를 표시하기
* HTML의 요소를 끌고와서 JS에서 작업하기
### 4.1 Form Submission 
* 입력값에 제한을 두기
    1. JS 파일에서 if else 문 사용하기
        + if(~~) {~~} else {~~}
            * value.length: 길이 출력
    2. HTML 내장 기능 사용하기
        + form 내부에서 input에 제한
            * required
            * maxlength
        + 더이상 button이 click되는 event에 집중할 필요가 없음
        + 단, 출력할 때 매번 페이지가 새로고침되는 문제가 있음
### 4-2. Events
* form을 submit할 때 새로고침되는게 디폴트임
* 이 기본동작을 없애기 위해
* 함수 뒤에 ()가 붙어있으면 function을 자동으로 실행
    - 사실 JS가 함수를 호출할 때 () 내의 정보(event object)를 전달함
    ```js
    function onLoginSUbmit(tomato) {
        tomato.preventDefault();
        console.log(tomato);
    }
    ```
    - preventDefault(): 브라우저가 기본적으로 동작(ex. 새로고침)하려는 걸 막는 것
    - 위와 같이 tomato 같은 event object를 적어줌으로써 event에 대한 정보를 얻을 수 있음
        + event object도 함수가 있음
            * preventDefault()
    - tomato 말고 event라고 적는게 컨벤션
### 4-3.Events part Two
* Default Behavior of a *form*: submit
* Default Behavior of a *link*: go to a webpage once clicked
* JS는 함수를 실행시키는 동시에 그 함수의 첫번째 인자에 object를 넣어줌
    - 그 object는 방금 일어난 event에 대한 정보를 담고 있음
* addEventListener의 argument에 있는 function은 user가 실행시키는 것이 아니라 브라우저가 실행시키는 것
    - 거기다가 event의 정보도 담아줌
        - 우리가 자리를 만들어주면
### 4-4. Getting Username
* 유저가 이름을 제출하면 원래의 form을 없애기
    1. css에 class 만들기
        + display: none;
    2. js의 함수에 class를 실행하는 걸 추가하기
* 변수에 별로 안 중요한 string을 저장할 때에는 변수이름을 대문자로 적는게 컨벤션
* "string" + variablename == `string ${variablename}`
### 4-5. Saving Username
* username 기억하기
    - localStorage에 저장하기
        + setItem(key, value)
        + getItem(key)
        + removeItem(key)
### 4-6. Loading Username
* form을 보여주기 전에 local storage을 확인해서, 정보가 있으면 h1을 보여주기
    1. local storage에 유저정보 유무를 확인
    2. if else 절로 유저정보가 있으면 greetings, 없으면 form을 보여주기
* 항상 중복되는 코드가 있으면 함수로, 중복되는 string이 있으면 변수로 만들자
### 4.7 Recap
***