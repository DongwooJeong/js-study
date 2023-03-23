JavaScript Study
===
노마드코더 JavaScript 기초 강의: [바닐라 JS로 크롬 앱 만들기](https://nomadcoders.co/javascript-for-beginners/lobby?utm_source=free_course&utm_campaign=javascript-for-beginners&utm_medium=site)
***
# Table of Contents
1. [Introduction](#1-introduction)
2. [Welcome to JavaScript](#2-welcome-to-javascript)
3. [JavaScript on the Browser](#3-javascript-on-the-browser)
4. [Login](#4-login)
5. [Clock](#5-clock)
6. [Quotes and Background](#6-quotes-and-background)
7. [To Do List](#7-to-do-list)
8. [Weather](#8-weather)
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
### 2.4 Booleans
* Boolean: true or false
    - 파이썬에서는 capitalized
* null: 변수에 아무 것도 없음
    - 자연적으로 발생 불가
    - 파이썬에서는 none
* undefined: 아직 값을 대입하지 않음
***
### 2.5 Arrays
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
### 2.6 Objects
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
### 2.7 Functions I
* functions: 반복해서 사용할 수 있는 코드 모음
    - function으로 선언
    - 함수이름.( )
    - { } 안에 내용 적기 

### 2.8 Functions II
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
### 2.9 Recap I
***
### 2.10 Recap II
* 계산기 만들기
***
### 2.11 Returns
* 함수에서 말고 나에게 결과를 제공하도록 만들기
    - console.log나 alert는 그냥 실행하고 끝
    - return: function의 결과를 대체함
        - function의 목적은 결과를 return하는 것
        - 값을 출력하고 끝내는 게 아니라 나중에 저장된 값을 다시 사용할 수 있음
***
### 2.12 Recap
***
### 2.13 Conditionals
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
### 2.14 Conditionals II
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
### 2.15 Conditionals III
* if~ else if~ else~
* AND: &&
* OR: ||
***
### 2.16 Recap
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
4\) Login
---
### 4.0 Input Values
* application을 만들어보자
    1. 유저에게 input을 받기
    2. 정보를 받기
    3. 받은 정보를 표시하기
* HTML의 요소를 끌고와서 JS에서 작업하기
### 4.1 Form Submission 
* 입력값에 제한을 두기
    1. JS 파일에서 if else 문 사용하기
        + if(조건) {코드} else {코드}
            * value.length: 길이 출력
    2. HTML 내장 기능 사용하기
        + form 내부에서 input에 제한
            * required
            * maxlength
        + 더이상 button이 click되는 event에 집중할 필요가 없음
        + 단, 출력할 때 매번 페이지가 새로고침되는 문제가 있음
### 4.2 Events
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
### 4.3 Events part Two
* Default Behavior of a *form*: submit
* Default Behavior of a *link*: go to a webpage once clicked
* JS는 함수를 실행시키는 동시에 그 함수의 첫번째 인자에 object를 넣어줌
    - 그 object는 방금 일어난 event에 대한 정보를 담고 있음
* addEventListener의 argument에 있는 function은 user가 실행시키는 것이 아니라 브라우저가 실행시키는 것
    - 거기다가 event의 정보도 담아줌
        - 우리가 자리를 만들어주면 실행
### 4.4 Getting Username
* 유저가 이름을 제출하면 원래의 form을 없애기
    1. css에 class 만들기
        + display: none;
    2. js의 함수에 class를 실행하는 걸 추가하기
* 변수에 별로 안 중요한 string을 저장할 때에는 변수이름을 대문자로 적는게 컨벤션
* "string" + variablename == `string ${variablename}`
### 4.5 Saving Username
* username 기억하기
    - localStorage에 저장하기
        + setItem(key, value)
        + getItem(key)
        + removeItem(key)
### 4.6 Loading Username
* form을 보여주기 전에 local storage을 확인해서, 정보가 있으면 h1을 보여주기
    1. local storage에 유저정보 유무를 확인
    2. if else 절로 유저정보가 있으면 greetings, 없으면 form을 보여주기
* 항상 중복되는 코드가 있으면 함수로, 중복되는 string이 있으면 변수로 만들자
### 4.7 Recap
***
5\) Clock
---
### 5.0 Intervals
* js가 복잡해지지 않게 각 기능별로 다른 파일을 만들어두자
* interval: 매번 일어나야 하는 무언가
    - ex. 매 2초마다
    - setInterval 함수: 매 interval마다 특정 동작을 실행시킴
        + 첫번째 argument: 실행하고자 하는 함수
        + 두번째 argument: milliseconds
***
### 5.1 Timeouts and Dates
* Timesouts: 매번 실행하는 게 아니라 일정 시간 기다렸다가 한번 실행하기기
    - setTimeout 함수: 일정 시간 기다렸다가 특정 동작을 한번 수행
        + 첫번째 argument: 실행하고자 하는 함수
        + 두번째 argument: milliseconds

* Dates: 날짜와 시간을 갖고 오는 함수
    - ex. getHours(), getMinutes(), ...

***
### 5.2 PadStart
* 초 단위가 00 형태가 아니라 0 형태로 나올 때
* padStart(): string의 길이를 변환시켜주는 함수
    - 첫번째 argument: 문자열의 길이
    - 두번째 argument: 채워넣을 문자열
        + ex. "1".padStart(2,"0") -> "01"
    - 비슷한 함수로 padEnd()도 있음
    - 시간의 형태를 바꿀 때, string의 형태로 변환할 것 
        + String()
***
### 5.3 Recap
***
6\) Quotes and Background
---
### 6.0 Quotes
* 페이지에 인용구를 넣어보자
    + array 형식으로: [{인용:인용구,사람:이름},...]
* 랜덤으로 숫자를 뽑기
    - Math 모듈
        + random 함수: 0과 1사이 수 무작위 출력
            * Math.random()
        + round 함수: 반올림
            * Math.round(1.5) -> 2
        + ceil 함수: 올림  
            * Math.ceil(1.4) -> 2
        + floor 함수: 내림
            * Math.floor(1.9) -> 1
* array의 길이를 알아보기
    - length
        + ex. [1,2].length -> 2
***
### 6.1 Background
* 랜덤 배경화면을 넣어보자
    - HTML에서 가져오는게 아니라 JS에서 만들어서 HTML에 추가하기
        1. img 파일명을 담은 array 만들기
        2. 인용구 때처럼 랜덤으로 파일명을 변수에 담기
        3. img를 만들기
            * document.createElement
        4. img의 src에 랜덤 변수를 넣기
            .src
        5. body에 img를 넣기
            * document.body.appendChild()
***
### 6.2 Recap
***
7\) To Do List
---
### 7.0 Setup
* to do list 를 만들어보자
    - ul로 묶고 안에 li로 만드는 것
    1. 우선, id를 가진 form을 만든다 (html) 
    2. form 안에 id를 가진 ul을 만든다 (html)
    3. JS로 id를 이용해서 위 요소들을 가져온다 (JS)
        1. id로 form과 list를 가져와서 변수에 넣는다 
        2. function을 만들어서 form의 기본 동작을 만든다
            + form은 기본적으로 페이지를 refresh하는 기능을 갖기 때문에 이를 막아줘야 함([참조](#43-events-part-two))
        3. document 전체에서 querySelector로 toDoForm의 id에서의 input을 찾는다 (JS)
            + 아니면 toDoForm이 이미 만들어져있으므로 toDoForm에서 바로 input을 찾을 수도 있음
    4. to do list의 입력값을 변수에 저장한다 (JS)
    5. to do list에서 enter를 누를 때마다 안에 입력값 없앤다 (JS)
***
### 7.1 Adding To Dos
* To Do List를 구성해보자
    1. to do list를 구성할 새 function을 만들고, todolist 입력값(toDoInput.value)이 들어간 변수(newTodo)를 인자로 넣는다 (JS)
    2. 기존에 만들었던 function에 새 function을 인자와 함께 넣어준다
    3. [background할 때 했던 것](#61-background)처럼 li를 js에서 만들어서 html로 보내보자 (JS)
        1. li를 element를 만들어서 변수에 넣는다.        
        2. li 내부에 존재할 span 변수도 만든다
            * 나중에 to do를 삭제하는 버튼을 만들기 위함
        3. li 내부에 있어야 하기 때문에 span을 li의 child로 만든다
        4. span의 innerText에 newTodo를 넣는다
        5. li 변수를 실제 to do list에 넣는다
* 코딩 시 주의사항
    - getElementById는 ID가 아니라 Id이다
    - getElementById는 #으로 id를 찾는게 아니고 바로 id의 이름으로 찾음
***
### 7.2 Deleting To Dos
* 각각 생성된 to do를 없애는 button을 만들어보자 (JS)
    1. span을 li에 append 하기 전에 button 변수를 만든다
    2. button의 innerText를 만들어준다
    3. button 변수도 li 변수에 append해준다
    4. button에 click이라는 event를 listen하게 만들어준다
        + button은 click했을 때 작동되기 때문
    5. 함수 인자의 target의 parentElement를 지우도록 만들어준다
        1. parentElement를 지정한 변수를 생성한다
        2. remove 함수로 지워준다
        + button을 click하면 어떤 li를 지워줘야 하는지 모르기 때문에 target의 parentElement를 사용
            * target은 html element(클릭했을 때의 대상)
                - parentElement는 target의 property로 클릭된 element의 부모이다
***
### 7.3 Saving To Dos
* 만든 to do list를 저장하자
    - local storage 이용
    1. array를 하나 만든다
    2. 마지막에 실행시킬 함수(handleToDoSubmit)에서 todo 내용을 만드는 함수(paintToDo)를 실행시키기 전에 array에 push해주자
    3. localstorage에 array를 저장하는 함수를 만들자
        + local storage는 오로지 text 형태로만 저장해서 array 형태로 저장할 수 없음
        + 중복된 value도 저장 불가능
            * JSON.stringify라는 함수로 javascript의 어떤 코드나 element든 문자열로 만들 수 있음
                - 이건 중복 가능
    4. 마지막에 실행시킬 함수(handleToDoSubmit)에 저장하는 함수를 넣어서 실행시켜준다
***
### 7-4. Loading To Dos part One
* local storage에 있는 데이터를 array로 불러오자
    - 그냥 불러오면 string 형태로 된 array를 갖고옴
        + 이걸 JSON.parse를 사용해서 문자열을 array로 바꿀 수 있음
    1. local storage에서 값을 갖고와서 변수에 저장하자
    2. if문을 써서 local storage가 null이 아닐 때 값을 array로 바꿔서 저장하자
    3. forEach를 사용해서 array의 각 element에 function을 적용시키자
* arrow function
    - function을 직접 만들어서 사용하지 않고 화살표를 활용해서 함수와 비슷한 방법으로 동작을 수행하는 방법
    ```js
    // number one
    function sayHello() {
        console.log("this is the turn of", item);
    }
    // number two
    parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    ```
        + 1번과 2번은 같은 결과를 출력함
***
### 7.5 Loading To Dos part Two
* 불러온 data를 화면에 출력하자
    - 전에 만들었던 출력하는 함수(paintToDo)를 활용
    1. (if문 안에) foreach를 써서 불러온 array의 각 원소에 paintToDo를 적용시켜서 출력함
    2. 처음에 item을 저장하는데 쓰기 위해 만들었던 array(toDos)를 local storage에서 변환해온 todo array(parsedTodos)로 바꿔줌
        + JS파일에서 toDos array는 비어있는 상태로 시작했기 때문에 덮어쓰는 문제가 발생하기 때문
        1. 처음 array를 만드는 변수를 let을 써서 나중에 바꿀 수 있도록 함
        2. if문(savedToDos가 null이 아님, 즉, local storage에 data가 있음)에 처음의 empty array에 저장된 array를 덮어씌움
***
### 7.6 Deleting To Dos part One
* Delete할 때마다 Local Storage에 저장하기
* toDos Array가 데이터베이스
    - console에 toDos 치면 뜨는 것
    - local storage는 toDos Array를 복사해놓은 곳
* toDos에 중복된 값이 들어가면 delete를 했을 때 어떤 값을 지워야 하는지 알 수 없음
    - e.g. ["a", "a"]
    - 그래서 toDos를 dictionary로 만들어서 id를 부여함
    - text만 push하지 않고 object를 push함
* Date.now 함수: 1000분의 1초를 주는 함수
    - 랜덤 숫자를 줄 때 씀
* 투두리스트의 각 항목에 id를 부여하기
    1. 랜덤 ID(Date.now)와 text(newToDo, toDoInput의 value)를 부여하는 object를 새로 하나 만듦
    2. 기존에 newTodo를 push하는 부분에서, 새로 만든 object를 push함
    3. 화면에 투두리스트를 출력하는(HTML요소를 만드는) paintToDo 함수의 argument에 newToDo말고 새로 만든 object를 사용함
    4. paintToDo 함수에서는 기존의 newToDo를 사용했었기 때문에 화면에 [object, object] 라고 출력됨
        + span.innerText가 newToDo이기 때문에 newToDo의 ID와 Text 중 어떤 것을 출력하는지 명시를 안해놔서 object라고 출력하는 것
        + span.innerText에 newTodo.text를 입력함
    5. paintToDo에서 li element를 만들고 난 후에 li의 id를 newToDo의 id로 만들어줌
        + 유저가 투두리스트를 만들고 submit할 때마다(handleToDoSubmit 함수를 실행시킬 때마다) paintToDo를 실행하는데, 그때 만들어지는 li에 id를 부여하는 것
***
### 7.7 Deleting To Dos part Two
* Delete할 때마다 Local Storage에 저장하기
* filter 함수
    - argument에 있는 함수를 마치 forEach 함수가 실행되는 것처럼 적용시킬 array의 각 element에 실행함
        + 실행시킬 함수가 true를 return해야 array에 적용됨
        + false를 return하는 element는 제외됨
        + 즉, 특정 element에 대해 함수가 false를 return한다면 함수는 해당 element를 제외한 나머지 element가 들어있는 array를 출력함
    - 예시
        ```js
        const todos = [{text:"lalalala"}, {text:"lolololo"}];
        function sexyFilter(todo){ return todo.text !== "lolololo"};
        todos.filter(sexyFilter);
        ```
        + arrow function으로 만들어보자
            ```js
            const todos = [{text:"lalalala"}, {text:"lolololo"}];
            todos.filter(item => item.text !== "lolololo");
            ```
    - filter을 하면 기존의 array에서 특정 element를 지우는게 아니라 특정 element가 없어진 새로운 array를 만듦
***
### 7.8 Deleting To Dos part Three
* Delete할 때마다 local storage에 저장하기
* 화면의 x버튼을 누를때마다 id를 받아서 그 id에 해당하는 todo를 지우기
    1. li.remove를 한 다음에 todos에 filter를 적용해서 해당 id를 갖고 있는 element를 삭제한 array를 toDos에 저장함
        + 위의 arrow function 참조
    2. saveToDos를 해서 local storage에 변경한 array를 저장함
***
8\) Weather
---
### 8.0 Geolocation
* 화면에 날씨를 출력하기
* 우선 geolocation을 알아내자
    * navigator.geolocation.getCurrentPosition(SuccessCallback, errorCallback)
        + SuccessCallback: 모든 게 잘 됐을 때 실행될 함수
        + errorCallback: 에러가 생겼을 때 실행될 함수
        1. 성공했을 때 실행될 함수에 JS가 정보를 담을 자리(argument)를 만들어 둠
        2. 위도와 경도를 받을 변수를 만들어서 방금 만든 자리에 coords를 넣어줌
***
### 8.1 Weather API
* 화면에 날씨를 출력하기
* weather api를 가져오기
    - api: 다른 서버와 이야기할 수 있는 방법
        + openweathermap 서버와 대화해보자
    1. openweathermap.org에 가입함
    2. current weather data의 api doc에 들어감
    3. 거기서 위도와 경도, api key를 입력하면 되는 주소를 복붙해서 해당 정보를 입력하면 정보가 나옴
        + 이메일 인증하고 좀 기다려야 함 (10분 정도?)
    4. js파일에 url을 담은 변수를 만들어줌
        + 백틱(`)을 이용해서 위도와 경도, api를 넣어줌
        + 섭씨로 바꿔주려면 url 뒤에 &units=metric을 넣어줌
    5. fetch를 사용해서 url을 call함
        + Network를 들어가면 인터넷에서 무슨일이 일어나는지 보여주는데, js가 해당 url을 요청했다는 것을 보여줌
        + fetch는 promise라서 서버의 응답을 기다려야 함
        + then()을 사용해서 response의 json()을 받아야 함
            * 해당 부분은 json에 대한 이해가 필요
            ```js
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = data.weather[0].main;
            });
            ```
            * HTML에 span을 두 개 따로 만든 후, js에 weather 변수에는 json data의 weather을, city data에는 weather 안의 city를 넣어주도록 함
    6. temp도 넣어줌
***
### 8.2 Conclusion
* 웹사이트 끝
* api key와 같은 민감한 정보가 들어있는 변수를 gitignore에 넣어주기
    1. api key의 변수를 별도의 파일을 만들어 저장함
        + 전역변수로 설정하여 다른 파일에서 접근할 수 있도록 한다
            ```js
            var API_KEY = "abcd";
            ```
    2. .gitignore 파일에 해당 파일을 넣어둠
    3. git에 push할 때 제외되었는지 확인함
***