## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() is used to select one element using its unique id. Since id should be unique, it always returns a single element.

getElementsByClassName() selects elements based on class name. It returns a collection of elements, not just one. Even if there is only one element, it still returns a collection.

querySelector() is more flexible. It can select elements using CSS selectors like class, id, tag, or even combinations. But it only returns the first matching element.

querySelectorAll() also uses CSS selectors, but it returns all matching elements as a NodeList.

### 2. How do you create and insert a new element into the DOM?

Ans: To create a new element, we use document.createElement(). After creating it, we can set its content using innerText, innerHTML, or set attributes and classes.

To insert it into the page, we can use methods like appendChild(), append(), or prepend(). These methods place the new element inside a parent element in the DOM.

### 3. What is Event Bubbling? And how does it work?

Ans: Event bubbling means when an event happens on an element, it first runs on that element and then moves upward to its parent elements.

For example, if we click a button inside a div, the click event first works on the button, then it can also trigger the click event on the parent div if there is one.

So the event starts from the target element and bubbles up through its ancestors.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans : Event delegation is a technique where instead of adding event listeners to many child elements, we add one listener to their parent and handle events from there.

It works because of event bubbling. The parent can detect which child triggered the event using event.target.

This is useful because:

It reduces the number of event listeners

It works for dynamically added elements

It keeps the code cleaner and more efficient

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is used to stop the default behavior of an element. For example, stopping a form from submitting or preventing a link from navigating.

stopPropagation() is used to stop the event from moving up or down in the DOM tree. It prevents the event from bubbling or capturing further.

So, preventDefault() stops the default action, and stopPropagation() stops the event flow.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
