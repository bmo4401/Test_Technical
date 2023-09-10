/_ spellchecker: disable _/

<!-- prettier-ignore-start -->
# CSS

1. trình bày về position các kiểu position  <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> abosolute, static, fixed,
   sticky
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

# JS

1. programming principles là gì
2. function programing là gì
3. let var const ( ví dụ khi nào dùng let, khi nào dùng const )
4. scope
5. bind "this" bằng cách nào
6. phân biệt arrow function vs declare function <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> arrow fc: kh co arguments binding, kh có this keyword in object
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

# ReactJS

1. Concept của reactjs là gì <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> components, props, state
2. Cơ chế re-render của 1 component xảy ra như thế nào <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> khi stata or
   props change, or re-rendering of parent component
3. Phiên bản 18 có cải tiến gì
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
13. Optimize page load time.
14. Tại sao lại sử dụng React thay vì library hay framework khác.
15. Cơ chế SSR và SSG <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> SSR: render the page on server upon receiving a request, ideal for dynamic or personalized content that changes frequently, SSG: the page is already rendered and waiting to be served to the client
16. Ưu điểm và nhược điểm của Micro-frontend.
17. Tại sao React lại sử dụng Virtual DOM.
18. So sánh DOM và Virtual DOM. <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> DOM: được biểu diễn dưới dạng ctdl cây, vì vậy mỗi node lá thay đổi dẫn đến re-rendering or re-painting ui vì vậy gây ra sự chậm chạp, Virtual DOM: khi state change, 1 cây virtual DOM sẽ được tạo ra và so sánh với cây DOM trước đó, sau đó nó sẽ tính toán và giảm thiểu việc cập nhật <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> giảm hao tốn hiệu suất trong việc cập nhật cây DOM thực, vì DOM thực chỉ cập nhật cái node, leaf thay đổi, React sử dụng thuật toán 'diffing' cho việc cập nhật này
19. Inheritance trong JS ntn <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> reuse properties and methods in parent class
20. phân biệt website với webpage <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> website is a collection of multiple webpages, webpage is single document on the web using unique URL
21. phân biệt abstract class và interface, 4 tính chất OOP, từ khóa 'static'
22. Keyword 'Key' -> Don't use the index of the array as the key prop, reordering an item in the array make changes it. Then React will get confused and re-render the incorrect element

# Typescript

1. Why shouldn't use ENUM <code><span style="color:red; font-weight: bold; font-size:16px">-></span></code> enum generate additional code ->increase size of final file, unsafe.

<!-- prettier-ignore-end -->
