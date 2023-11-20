/_ spellchecker: disable _/

<!-- prettier-ignore-start -->
# 1. CSS

1. trình bày về position các kiểu position  <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> abosolute, static, fixed, sticky.
2. phân biệt block, inline, inline block <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> phân biệt block, inline, inline block <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> inline cùng nằm trên 1 dòng <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> chỉ có thể set pl-pr, block perline, inline-block giống inline nhưng set đc w, h, p
3. metag là gì. ví dụ
4. semantic tag là gì. ví dụ <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> html tag its meaning clearly to both developer and the browser
5. độ ưu tiên selector <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> #id, .class, p.class, \*, p.
6. các kiểu selector
7. thiết kế dàn hàng ngang 3 cột có độ rộng như nhau, chiếm toàn bộ màn hình không sử dụng flex, grid <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> wfull, w-1/3, inline-block
8. responsive cho mobile, khi flex-direction: column thì các item trong 1 div xếp hàng dọc. thay vì xếp item 1 2 3. Nó có thể bị đảo vị trí thành 1 3 2. Nếu gặp tình huống này, cách giải quyết? ( ngoài cách bạn đang nghĩ còn cách nào ) <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> use flex-order
9. hiểu BEM là gì?
10. biết dùng SCSS : tạo biến, mixin include, extend không
11. trong flex, muốn thiết lập độ rộng cho các item, dùng thuộc tính nào.
12. difference of opacity:0, visible:hidden, display:none  <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> display:none not rendered and turn off layout element, visibility:hidden hides the elements without changing their layouts, opacity:0 causes element transparent but users can still interact with them.
13. Margin and padding: margin outside of element and border, padding inside of element and between element and border
14. HTML vs HTML5 -> HTML5 được bổ sung thêm các tags: SVG, canvas, header, footer, article, nav, HTML5 có các tags giúp cải thiện ngữ nghĩa cho elements, cập nhật session Storage & local Storage, hỗ trợ video, âm thanh, hình ảnh, animation
15. CSS vs CSS3: CSS3 hỗ trợ Responsive, hỗ trợ màu sắc HSL, RGBA, gradient, bổ sung Pseudo-Classes chính là những tương tác như :link, :hover, :active, :visited, :focus 
16. Priority of CSS -> 
   - Important
   - Inline styles (style inner tag HTML)
   - Media Query
   - Selector styles (#id, .className)
   - Rule order (thứ tự viết CSS)
17. Rem, Em, Px ->
   - Rem: đc tính toán dựa trên font-size của html
   - Em: đc tính toán dựa trên font-size của parent
# 2. Javascript

1. programming principles là gì
2. function programing là gì
3. let var const ( ví dụ khi nào dùng let, khi nào dùng const ) -> var -> function scope, let -> block scope
4. scope
5. bind "this" bằng cách nào
6. phân biệt arrow function vs declare function <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> arrow fc: kh co arguments binding, kh có this keyword in object, tránh sử dụng Arrow Func khi: event handlers, object methods, prototype methods, and functions that use the arguments object.
7. phân biệt call bind apply
8. ví dụ về shallow copy và deep coppy , đoán kết quả log.
9. spread vs rest operator. tình huống nào dùng destructering <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> destructering: use to copy array or object, spread: use to iterable array, object, rest: put remaining elements into a vairiable
10. isNaN() vs Number.isNaN() <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> isNaN:convert to number and check, Number.isNaN:check number & return true if NaN
11. xử lý lỗi và create lỗi vs async await như thế nào
12. tình huống bất lợi khi dùng async await mà promise sẽ khắc phục được <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> promise: khi xử lý nhiều task nối tiếp và liên quan đến nhau, khi ấy cần sử dụng nhiều .then nối tiếp nhau dẫn đến code trên nên dài và khó đọc, await:chỉ cần bọc các fc fetch data vào hàm async, promise better than await: khi xử lý các task fetch data nối tiếp và ảnh hưởng dến nhau <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> dùng promise.all
13. trình bày js runtime envirorment ( nhớ nói cả mircrotask )
14. promise là gì, các promise như all, race, any... <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> Promise.all(), Promise.race(), Promise.any() & Promise.finally()
15. các cách để copy 1 object.
16. các cách để copy array
17. tìm số phần tử trùng lặp trong mảng, tìm số lớn thứ 2 trong mảng
18. Why JS is single thread -> meaning that just one line of code may be run at once,  serve the needs of a single user on a single window of the browser, eliminating the need for multithreading
19. Why JS is interpreted language
20. Why JS is weakly type language -> JS build to run on browser, not system hardware, so JS engine can pick  whatever memory is available
21. Closure: Remove redundant code, provide modularity in the codebase
   Example:
      <code>
         function closure(){
            let arr=[1,2,3,4,5,6,7,8,9,10]
            return (index)=>{
               return arr[index]
            }
         }
         const find = closure()
         find(6) //Time optimisze when finding
         find(50)
      </code>
22. Bind, Apply, call ->
   - Bind: dùng để mượn methods của các function khác mà không cần phải implement lại
   - Apply: Có sẵn 1 func, muốn sử dụng func này cho 1 ob bất kì -> sử dụng apply
   - Khác nhau giữa Bind vs Call: Bind tạo 1 func mới và gắn new this, Call gọi func và gán this
   - Call and apply: Call nhận đối số thứ 2 là 1 array, apply thì nhận 1 biến
   Example Code:
   <code>
      const ob = {
         a :"Hello From Object1"
      }
      function print(){
         console.log(this.a) //"Hello From Object1"
      }
      print.apply(ob)
   </code>
23. Callback: a function passed as an argument to another function
24. Why two objects always different -> Với kiểu dữ liệu nguyên thủy (number, string, boolean, undefined, null, BigInt, Symbol) giá trị được lưu trữ trong bộ nhớ stack là cố định, ngược lại với kiểu (Array, Object, Function), giá trị được trữ trong Stack Memory là giá trị của địa chỉ tham chiếu -> vì vậy khi so sánh 2 objects giá trị trong Stack Memory luôn luôn khác nhau
    <b>Stack Memory</b>
      - number 1
      - string "hello"
      - Array ref#123
      - Object ref#456
      - Object ref#789

25. ES6 ->
   - let, const
   - arrow function
   - Temple literal (templete string)
   - destructuring, spread
   - for...of 
   - Promise, callback
   - Module export, import
   - DEfault function parameters
   - Collections Set, Map
   - Array.from(), array.find(), array.findIndex()
   - Object.assign()
26. Promise vs Async/Await -> 
   - Giống: Là cơ chế trong javscript cho phép lập trình viên quản lí các mã code không đồng bộ trở nên dễ dàng
   - Khác: 
      + Syntax: Async/Await -> built on top of promise -> làm cho code trở nên dễ đọc, việc bảo trì bảo dưỡng cũng trở nên dễ dàng hơn, sử dụng từ khóa await để chờ cho đến khi đoạn code được thực thi xong
      + Error Handling
27. Function expression -> const greet = function() {} -> func được gắn cho 1 biến
28. RESTful API -> là một tiêu chuẩn dùng trong việc thiết kế API cho các ứng dụng web
   - RESTful API bao gồm: REST và API
   - API: là một tập các quy tắc, cơ chế để 1 ứng dụng tương tác với 1 ứng dụng khác.
   - REST: là 1 kiểu kiến trúc để viết API, nó sử dụng các methods của HTTP
29. HTTP: là giao thức trao đổi thông tin qua internet
30. HTTP request bao gồm -> 
   - URL
   - HTTP method
   - A list of headers
   - Request body
31. Function : block of code designed to perform a particular task.
32. Orders of HTML, CSS, JS in browser -> 
   - displaying the text and images on the page 
   - formatting the text and layout according to the CSS styles
   - executing any JavaScript code that is present on the page
33. <code>
         for(var i = 0; i < 5; i++){
         setTimeout(function(){
            console.log(i) // 5 5 5 5 5 
         },i*1000)
         }
   </code>
      -> vì function setTimeout là bất đồng bộ vì vậy for tiếp tục chạy và tăng biến i, sau đó đoạn code trong setTimeout mới được thực thi, vì vậy sẽ in ra giá trị cuối cùng của i

34. Currying -> Thay vì sử dụng func có nhiều tham số truyền vào, ta chuyển đổi thành func có 1 tham số truyền vào và nối tiếp nhau
   Example: <b>Infinity Currying</b>
   <code>
      function first(a){
         return function(b)
         {
            if(b) return first(a + b)
            return a
         }
      }
      console.log(first(3)(4)(5)()) //12
   </code>
35. Promise -> đối tượng đại diện cho việc hoàn thành hoặc thất bại của 1 hoạt động không đồng bộ
# 3. ReactJS

1. Concept của reactjs là gì <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> components, props, state
2. Cơ chế re-render của 1 component xảy ra như thế nào <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> khi stata or
   props change, or re-rendering of parent component
3. Phiên bản 18 có cải tiến gì 
   - Cơ chế concurrency rendering -> Render UI đồng thời
   - Automatic batching -> cập nhật tất cả state trong 1 lần render áp dụng cho tất cả, chứ kh còn chỉ trong function trước các phiên bản trước
   - Transition: Urgent update và transition update
   
4. phân biệt state vs props <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> state: hold data & information about
   components that may change over the lifetime of component, props: passed from
   parent to children, props read-only
5. controller vs uncontroller component -=> controller:state control by parent,
   change through callback, uncontroller compoennt: state control by internal
   state
6. tại sao setState lại bất đồng bộ <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> useState do not immediately mutate
   the state but create a pending state transition, browser unresponsive due to
   huge number of updates, multiple state updates can be batched for performance
   reasons,
7. useEffect với life cycle method -Việc useEffect có depencies thay đổi sẽ run
   lại callback , react dùng cơ chế so sánh như thế nào? -useLayoutEffect vs
   useEffect? khi nào dùng useLayoutEffect <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> useLayoutEffect: perform the
   layout measurements before the browser repaints the screen, You don’t want
   the user to see the tooltip moving
8. React fragment nên dùng ko vì sao? <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> faster, readable as compared to
   an extra div, less memory
9. các cách để optimize
10. so sánh usememo vs usecallback <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> useMemo return value, useCallback is
    useMemo but return function
11. Folder structure cho một project React.
12. Khi nhập URL và nhấn enter trên browser thì quá trình sau đó diễn ra ntn cho
    tới khi trang web đc hiển thị? <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> Browser looks up Ip address, init
    TCP connection with server, send HTTP request to server, server process and
    sends back a response
13. Optimize page load time -> lazy loading
14. Tại sao lại sử dụng React thay vì library hay framework khác.
15. Cơ chế SSR và SSG <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> SSR: render the page on server upon receiving a request, ideal for dynamic or personalized content that changes frequently, SSG: the page is already rendered and waiting to be served to the client
16. Ưu điểm và nhược điểm của Micro-frontend.
17. Tại sao React lại sử dụng Virtual DOM.
18. So sánh DOM và Virtual DOM. <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> DOM: được biểu diễn dưới dạng ctdl cây, vì vậy mỗi node lá thay đổi dẫn đến re-rendering or re-painting ui vì vậy gây ra sự chậm chạp, Virtual DOM: khi state change, 1 cây virtual DOM sẽ được tạo ra và so sánh với cây DOM trước đó, sau đó nó sẽ tính toán và giảm thiểu việc cập nhật <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> giảm hao tốn hiệu suất trong việc cập nhật cây DOM thực, vì DOM thực chỉ cập nhật cái node, leaf thay đổi, React sử dụng thuật toán 'diffing' cho việc cập nhật này
19. Inheritance trong JS ntn <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> reuse properties and methods in parent class
20. phân biệt website với webpage <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> website is a collection of multiple webpages, webpage is single document on the web using unique URL
21. phân biệt abstract class và interface, 4 tính chất OOP, từ khóa 'static'
22. Keyword 'Key' <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> Don't use the index of the array as the key prop, reordering an item in the array make changes it. Then React will get confused and re-render the incorrect element
23. Keyword 'this' <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> trỏ về đối tượng nó đang thuộc về, không có đối tượng thuộc về sẽ trả về window, trong strict mode thì sẽ là undefined, arr fc kh có context <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> kh có this, vì vậy nó sẽ lấy this gần nhất
24. Hoisting <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> Phần khai báo đưa lên trên đầu, phần gắn value có thể đưa xuống dưới cùng
25. bind, call, apply <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> bind: ràng buộc 'this' và trả về hàm mới; call, apply: gọi hàm luôn và truyền đối số 'this': dùng để mượn hàm 
26. PUT & PATCH  <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> PUT: update or create, work on entire fields; PATCH: update a few fields in modal
27. LocalStorage, Session Storage, Cookies
- LocalStorage: limited 10MB Không mất đi khi browser đóng <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> khi hợp khi lưu trữ data cần sử dụng ở lần sau, settings; Lưu theo cặp [key,value]
- Session Storage: limited 5MB Chỉ lưu ở session hiện tại mất đi khi đóng browser, kh share với others sites <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> thích hợp lưu những data nhạy cảm (login credentials)
- Cookies: limited 4kb <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> lưu những data kh nhạy cảm như user preferences; cookies over local, session in can be set to expire at a certain time and cookies sent with the request of client
28. HTTP Request bao gôm: URL, Methods, Others information (query params, data, cookies) 
29. 'for...of' and 'for...in' <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> for...of: duyệt qua các phẩn tử trong mảng, for...in: duyệt qua các properties trong object, array cũng có thể sử dụng for...in vì array inherit từ objects -> khi dùng for in sẽ duyệt qua các vị trí của array.
30. TCP & UDP: 
31. What is JSX -> JavaScript XML. JSX allows us to write HTML in React. Make code readable, manipulate variable.
32. Lifecircle of React -> Components have a lifecircle, that consists of three main phases:Mounting, updating, unmounting: updating occurs when state or props change, unmounting occurs when a component is removed from DOM
33. Controlled Component and Uncontrolled Component -> Controlled Component their state controlled by the parent component.
34. useTransitrion -> đánh dấu ui ở mức độ "concurrency" (mức độ ưu tiên thấp, không khẩn cấp), tại sao phải dùng: vì các tác vụ nặng, không khẩn cấp, làm chậm việc cập nhật Ui ở các tác vụ nhẹ và khẩn cấp
35. Why useCallback is used: 
   - It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
36. Lazy loading -> Trì hoãn các ui, tấm ảnh khuất màn hình, The data is only rendered when visited or scrolled it can be images, scripts, etc



# 4. Typescript

1. Why shouldn't use ENUM <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> enum generate additional code -> increase size of final file, unsafe.

# 5. Web Browser
1. What is SSR -> HTML rendered on server, The main benefit of server side rendering is page load speed, aspect of technical SEO
2. What is CSR -> HTML rendered in the browser
3. Event Loop: The event loop simply checks the call stack, and if it is empty (which means there are no functions in the stack) it takes the oldest callback from the callback queue and pushes it into the call stack which eventually executes the callback <h2>(Là vòng lặp liên tục kiểm tra và thực thi các callback trong call stack và callback queue)</h2>
Example: 
<code>
   console.log('hi');

   setTimeout(function() {
      console.log('freecodeCamp')
   },5000);

   console.log('JS')
</code>
Explain: 
1. push "console.log('hi')" to CALL STACK, excute and pop()
2. push "setTimeout(function())" to CALL STACK.
3. Khi execute setTimeout, browser nhận ra đó là web API, và chuyển nó cho browser, browser bắt đầu đếm và runtime pop() "setTimeout" ra khỏi stack
4.push "console.log('JS')" to CALL STACK, excute and pop()
5. When 5 seconds have elapsed the browser goes ahead and pushes the callback function into <b>CALLBACK QUEUE</b>
6. Event loop check if CALL STACK is free, it takes the callback function and pushes it again back to the call stack which executes the code inside it.
4. TCP và UDP -> 
   - Giống: các giao thức được sử dụng để gửi các bit dữ liệu qua môi trường Internet, tới một địa chỉ IP
   - Khác: UDP: Giao thức UDP hoạt động tương tự như TCP, nhưng nó bỏ qua quá trình kiểm tra lỗi. Nếu bạn mất kết nối trong vài giây, video sẽ bị dừng hoặc bị giật trong giây lát và sau đó chuyển sang bit hiện tại của chương trình phát sóng.
           TCP: Giao thức TCP có độ tin cậy cao, các gói tin được gửi bằng TCP sẽ được theo dõi do vậy dữ liệu sẽ không bị mất hoặc hỏng trong quá trình vận chuyển. Đầu tiên, nó yêu cầu các gói tin bằng cách đánh số chúng. Thứ hai, nó kiểm tra lỗi bằng cách yêu cầu bên nhận gửi phản hồi đã nhận được cho bên gửi. Nếu bên gửi không nhận được phản hồi đúng, nó có thể gửi lại gói tin để đảm bảo bên nhận nhận chúng một cách chính xác.

# 6. NodeJS
1. What is Function API -> 
   - Asynchronous, Non-blocking functions -> Khi gọi request để lấy data, Nodejs sẽ kh chờ cho đến khi data được trả về, mà thực hiện tiếp các tác vụ tiếp theo, sau khi request thực hiện xong sẽ có 1 callback trả về để to handle result
   - Synchronous, Blocking functions -> Các dòng code thực hiện 1 cách tuần tự, chờ cho request thực hiện xong mới chuyển qua các tác vụ tiếp theo
2. What is ORM -> is a technique used in creating a "bridge" between object-oriented programs and, in most cases, relational databases. (tạo các model tham chiếu tới database)
3. What is ORM tool -> sequelize, prisma is ORM tool
4. What type of API functions does Nodejs have? -> Asynchronous, non-blocking functions.
5. Two types of API functions in Node.js -> 
   - Asynchronous, non-blocking functions -> A Node.js-based server never waits for an API to return data. Instead, it moves to the next API after calling it, and a notification mechanism from a Node.js event responds to the server for the previous API call
   - Synchronous, blocking functions

6. Middleware in Nodejs -> Middleware is a function that receives the request and response objects. Most tasks that the middleware functions perform are
   - Execute any code
   - Update or modify the request and the
   response objects
   - Finish the request-response cycle
   - Invoke the next middleware in the stack
7. Module.export ->  used to export functions, objects, or values from a module and is returned as the value of the require(), import function when have a requirement from another module.
8. What is the difference between asynchronous and synchronous functions? -> 
   a. Synchronous functions block the execution of other code until they are complete
   b. Asynchronous functions allow other code to continue executing while they are running, making them essential for writing scalable Node.js applications.
9. What is "non-blocking" in Nodejs -> Non-blocking refers to the ability of the runtime environment to execute multiple tasks simultaneously without waiting for the completion of one task before starting the next. This is achieved through the use of asynchronous I/O operations, which allow Node.js to handle multiple requests concurrently. 
10. "Blocking" -> Blocking refers to operations that block further execution until that operation finishes
11. Callbacks -> is a function passed as an argument into another function
# 7. NestJS
1. With the use of these protections, it can be challenging to track down
   a. Request
   b. Middleware.
   c. Guards: <i><b>allow or deny access to the NestJS endpoints (ex: role)</b></i>
   d. Interceptors (request)
   e. Pipes: <i><b>transform incoming data</b></i>
   f. Process (controller,service)
   j. Interceptors (response)
   h. Filter
   i. Response
2. What is middleware

# 8. NextJS
1. How many ways to fetch data? 
   a. Using "fetch" in server components
   b. Using third library in server components (axios)
   c. On the client, using router handler
   d. On the client, with third library
2. Fetch data with Nextjs -> 
   - Client-side data fetching: data is fetched on the client, after the UI has been sent to the user. Using the "useState" and "useEffect"
   - Server-side data fetching: data is fetched while the UI is still on the local machine. Using "getServerSideProps", page always has the most up-to-date data when accessed by users
   - Static-site generation: data is pre-fetched from the backend and sent to the UI before the UI is sent to the user. Using "getStaticProps", "getStaticPaths", Nextjs runs the function during the build process (not on each request)
* Note: 
   - getStaticProps()                 -> use fetch with Cached Data
   - getStaticProps() with revalidate -> use fetch with Revalidating Data
   - getServerSideProps()             -> use fetch with Dynamic Data


 


<!-- prettier-ignore-end -->
