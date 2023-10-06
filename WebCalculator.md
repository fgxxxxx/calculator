@[TOC](catalogue)
# Personal information
|The Link My Class | https://bbs.csdn.net/forums/ssynkqtd-04 |
| ----------------- |--------------- |
| The Link of Requirement of This Assignment | https://bbs.csdn.net/topics/617332156 |
| The Aim of This Assignment | Create a calculator with a visual interface	and write a blog to record your work content and process. |
| MU STU ID and FZU STU ID | 21125929_832102204 |

# 1. Description
## Task
 - Create a calculator with a visual interface.
 - Write a blog to record your work content and process.

## Program Requirements
 - Basic requirement: Implement addition, subtraction, multiplication, division, and clear functions.
 - Advanced requirement: Implement functionality for exponentiation, trigonometric functions, and more.
Before tackling the more complex requirements, you must fulfill the basic requirements.

## Coding Requirements
 - Use any of C++, Java, Python or other language you prefer to complete the work.
 - Develop appropriate code specifications and conduct tests.
 - Use Git for version control.

## Blog Requirements
 - Give the PSP form for this work.
 - Description of problem-solving ideas. This is the process of how to think and how to find information after getting the title at the beginning.
 - Design and implementation process. The design includes how the code is organized and the flow chart of the key functions.
 - Code description. Show the key code of the project and explain the idea.
 - Displaying result functions with screenshots ((or gifs) and text descriptions.
 - Summarize this assignment.

# 2. Work Procedure
 - Create a GitHub repository for the job.
 - Write the program and commit actively.
 - Iteratively update and optimize the code.
 - Complete your work and write a blog.

# 3. Personal Software Process (PSP) Form
| **Personal Software Process Stages**    | Estimated Time（/minutes） | Actual Time（/minutes） |
| :-------------------------------------- | :------------------------ | :--------------------- |
| •Planning                                |             60             |            45            |
| • Estimate                              |              30            |               15         |
| •Development                         |              40             |                30        |
| • Analysis                              |                30           |            30            |
| • Design Specification                           |      20                     |             20           |
| • Design Review                         |              15             |               10         |
| • Coding Standard                       |             10              |             10          |
| • Design                                |               120            |               100         |
| • Coding                                |                 180          |              150        |
| • Code Review                           |                45           |             60           |
| • Test                                  |             45              |           20             |
| • Reporting                               |             120              |           100             |
| • Test Report                            |                60           |             40           |
| • Size Measurement                      |             20              |          10              |
| • Postmortem & Process Improvement Plan |            100               |           20             |
| **Sum**                                 |              895             |           660             |

# 4. Problem-solving Ideas
 In this assignment, we are asked to make **a simple web calculator**. This assignment needs to design the front end of the calculator to visualize it. After consulting relevant articles, I found that ***Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), Java Script (JS)*** are all separate languages, but they form the basis of the front-end technology.

 - ***HTML***:  a language used to describe the web page, responsible for the architecture of the web page

 - ***CSS***: a language used to lay out color, text content of the web page, responsible for the style of the web page, beautification

 - ***JS***: a language that runs on the client side and is responsible for the behavior of web pages

To sum up, the way to solve the problem is to use programming software (I used ***WebStorm*** in this assignment) to write HTML, CSS and JS respectively and integrate them to realize the functions of a simple web calculator.
 
# 5. Design and Implementation Process
 
## Design Process
 A simple calculator should contain numbers, operators and function keys.

***Numbers***: ***integers from 0 to 9***
***Operators***: the basic four operations **addition, subtraction, multiplication and division**
***Function***: empty, backspace, parentheses, equal functions. On the basis of realizing these functions, **trigonometric function and inverse trigonometric function** as well as **square and square root operations** are performed on the results.

## Implementation Process
1. The interface only needs to fix the width and height of the calculator panel and the width and height of the button. Then select text styles and page colors to beautify it.
2. If a number (0,1,2,3,4,5,6,7,8,9) and "(", ")", "." is clicked, it will be displayed in the input text box above (hereinafter referred to as the output box) and append (+=) in a string content.
3. If an operator button (+, -, *, /, ^, √, sin, cos, tan, arcsine, arccosine, arctan) is clicked, it will perform related operations and output results.
4. If "C" is clicked, the string content is cleared, and the output box is also cleared.
5. If "←" is clicked, clear the content string with the last character and set the output box to the value of content.
6. If you click "=", the result of the calculation is displayed in the output box and the content is cleared.
7. Using the eval () function, this function can execute the js statement in it, and return the result if it can be executed, or directly return the original statement if it cannot be executed.![](https://img-blog.csdnimg.cn/ee36325de97240e3b62ef7303d296b6b.png#pic_center)
# 6. Code Description
***HTML***
```html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset="utf-8" />
    <title>Calculator</title>
    <link href="./style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="./cal.js"></script>
</head>
<body>
<div id="calculator">
    <div id="head"><h3>gxCalculator</h3></div>
    <div id="show" align="center">
        <input type="text" id="text" >
    </div>
    <div id="fgx">
        <table align="center">
            <tr>
                <td><input type="button" value="7" onclick="display(7)"></td>
                <td><input type="button" value="8" onclick="display(8)"></td>
                <td><input type="button" value="9" onclick="display(9)"></td>
                <td><input type="button" value="+" onclick="display('+')"></td>
                <td><input type="button" value="-" onclick="display('-')"></td>
                <td><input type="button" value="sin" onclick="sin()"></td>
                <td><input type="button" value="asin" onclick="asin()"></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onclick="display(4)"></td>
                <td><input type="button" value="5" onclick="display(5)"></td>
                <td><input type="button" value="6" onclick="display(6)"></td>
                <td><input type="button" value="*" onclick="display('*')"></td>
                <td><input type="button" value="/" onclick="display('/')"></td>
                <td><input type="button" value="cos" onclick="cos('cos(')"></td>
                <td><input type="button" value="acos" onclick="acos('acos(')"></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onclick="display(1)"></td>
                <td><input type="button" value="2" onclick="display(2)"></td>
                <td><input type="button" value="3" onclick="display(3)"></td>
                <td><input type="button" value="(" onclick="display('(')"></td>
                <td><input type="button" value=")" onclick="display(')')"></td>
                <td><input type="button" value="tan" onclick="tan()"></td>
                <td><input type="button" value="atan" onclick="atan()"></td>
            </tr>
            <tr>
                <td><input type="button" value="." onclick="display('.')"></td>
                <td><input type="button" value="0" onclick="display(0)"></td>
                <td><input type="button" value="←" onclick="back()"></td>
                <td><input type="button" value="c" onclick="reset()"></td>
                <td><input type="button" value="=" onclick="equals()"></td>
                <td><input type="button" value="^" onclick="square('^')"></td>
                <td><input type="button" value="√" onclick="sqrt('√')"></td>
            </tr>
            </table>
            </div>
        </div>
    </body>
</html>

```
HTML is used to build web pages, and integrate CSS, JS to achieve the overall function of the web page.
- ***< !DOCTYPE html >***: This element is used to associate HTML authoring specifications for features such as automatic debugging.
- ***< html >< /html >***: This element contains all the content of the entire page and is sometimes called the root element. It also contains the lang attribute, which specifies the main language of the page.
- ***< head >< /head >***: All the members of the page that you add to the page and don't show to the viewer use this element as a container. These include things like keywords and page descriptions for search engines, CSS for stylizing pages, character set declarations, and so on.
- ***< body >< /body >***: This element contains all the content you expect the user to see when they visit the page, including text, images, videos, games, playable audio tracks, or other content.
- ***< div >< /div >***: As a "pure" container, the <div> element does not semantically represent any particular type of content. However, it can group content so that it can be conveniently formatted using the class or id attribute, or it can be divided within a document to mark content written in another language (using the lang attribute), and so on.
- ***< table >< /table >***: Represents tabular data - that is, information presented in a two-dimensional table consisting of rows and columns containing data.
- ***< td >< /td >***：The <td> HTML element defines a cell of a table that contains data. It participates in the table model.
- ***< tr >< /tr >***：The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.
- ***< input type="button" >***: <input> elements of type button are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event). We use the button to set its relevant properties such as color, size, etc., and perform the relevant operations when the button is clicked.

***CSS***

```css
body{
    //
    background: rgba(0, 65, 253, 0.14);
    border: 1px solid rgba(0, 65, 253, 0.14);
    box-shadow: 2px 2px 2px rgba(0, 65, 253, 0.14);
}
h3{
    font-size: 35px;
    text-align: center;
}
#show input{
    width:720px;
    height:60px;
    font-size:30px;
    border: 1px solid rgba(0, 65, 253, 0.14);
    box-shadow: 3px 3px 3px rgb(0, 104, 253);
    background: rgba(0, 65, 253, 0.14);
}
#fgx input{
    width: 100px;
    height: 70px;
    font-size: 28px;
    box-shadow: 3px 3px 3px rgb(0, 104, 253);
}
#fgx input:hover{
    background: lightgray;
}
```
This is a block of CSS code that adjust page layout, form, and color. We use it to beautify the web page.
 - ***body***: In body we set the size and color of background, border and box-shadow respectively.
 - ***h3***: In h3 we set all h3 elements' font-size and text-align.
 - ***#show input***: This targets id="show" element's input element and set the property of it. 
 -  ***#fgx input***: This targets id="fgx" element's input element and set the property of it. 
 - ***#fgx input : hover***: This targets id="fgx" element's input element and when the buttons are hovered over, we set the color of button. 
 
***JS***

```javascript
function $(id){return document.getElementById(id);}
var str;
var result;
function display(str0)	//display to text
{
    str = document.getElementById("text");
    str.value = str.value + str0;
}
function equals()	//equal to
{
    str = document.getElementById("text");
    result = eval(str.value);
    str.value = result;
}
function back()		//back
{
    str = document.getElementById("text");
    str.value = str.value.substring(0,str.value.length-1);
}
function reset()	//clear
{
    str = document.getElementById("text");
    str.value = "";
}

function sqrt() {
    str = document.getElementById("text");
    if (str.value >= 0) {
        str.value = Math.sqrt(str.value);
    } else {
        str.value = "Erro";
    }
}
function square() {
    str = document.getElementById("text");
    str.value = Math.pow(str.value,2);
}
function sin() {
    str = document.getElementById("text");
    str.value = Math.sin(str.value*(Math.PI / 180));
}
function asin() {
    str = document.getElementById("text");
    str.value = Math.asin(str.value )/(Math.PI / 180);
}
function cos() {
    str = document.getElementById("text");
    str.value = Math.cos(str.value*(Math.PI / 180));
}
function acos() {
    str = document.getElementById("text");
    str.value = Math.acos(str.value )/(Math.PI / 180);
}
function tan() {
    str = document.getElementById("text");
    str.value = Math.tan(str.value*(Math.PI / 180));
}
function atan() {
    str = document.getElementById("text");
    str.value = Math.atan(str.value )/(Math.PI / 180);
}

```
This is a block of JS code that implements web behavior. We use JS to get the result after calculation.

 - ***function $ (id)***  : This function nested a function, getElementById (), which returns an element matching a specific ID. Since element ids are required to be unique in most cases, this function is a natural and efficient way to find specific elements.
- ***function display (str)***: This function is used to input the clicked character into the output box and update the string. For example, if we input 1, the output box will show 1, and if we input 2, the output box will show 12.
 - ***function equals ( )***: This function nested a function, eval (), it will evaluate the string str as a valid expression and returns the result, so when we click the button "=", we will get the final calculation results.
- ***function back ( )***: This function nested a function, substring (0, p), it will intercept the string to remove the last character, so when we click the button "←", we will remove the last string.
 - ***function reset ( )***: This function is used to empty the string, we directly make the string empty to implement this function, so when we click the button "C", we can reset the result.
 -   ***function square ( )***: Thie function is used to make a square of input, for example, if we input 2, we will get 4. The function sqrt( ) works the same way as this function, if we input 4, we will get 2.
 - ***function sin ( )***: Thie function is used to get the sine of input, for example, if we input 30, we will get 0.5. The function cos( ) and tan() work the same way as this function. But the value returned by the trigonometric function is in radians, so we need to convert the radians and the Angle values to get the correct result.
 - ***function asin ( )***: Thie function is used to get the arcsine of input, for example, if we input 0.5, we will get 30. The function acos( ) and atan() work the same way as this function.
# 7. Result Displaying and Text Description

[video(video-uX72DmyY-1696599766528)(type-csdn)(url-https://live.csdn.net/v/embed/333065)(image-https://live-file.csdnimg.cn/release/live/file/1696595870328.png?x-oss-process=image/resize,l_300)(title-Calculator Displaying)]

In the video above, we clicked each key and did related operations, we did separate operations, we did mixed operations, and all the results were correct. We also carried out trigonometric functions, inverse trigonometric functions, square and root operations on the result, and also got the correct result, the clear key and the return key were also correct.

# 8. Summary
 The goal of this project is to achieve a simple version of the web calculator, which needs to realize the visualization and related functions of the calculator, which uses HTML,CSS and JS to build and beautify the web page, HTML is responsible for the web structure,CSS is responsible for the layout and beautification,JS is responsible for the behavior of the web page, in the process of using WebStorm programming, I learned how to build and improve my own web front end. In the process of using Github to record my own code base and using CSDN to write my own blog to record the development, I learned how to fully prepare, design, summarize and review my own project.
