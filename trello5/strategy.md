Board
- an overall view
This should just be a View 

List 
- a project
- This will be a Model, Collection and View
- List will have a title , id and cards json


Card
- individual task
- This will be a Model, Collection and View
- Card will have a title, comments, labels, due date, subscribe, description


Views 
- board view （done)
- card modal view (done)
- label popup , create label popup  (done)
- due date popup 
- move card popup
- copy card popup
- delete comment popup
- notification popup



router url
- clicking a card detail view will change the url 


USEFUL NOTES
H1 is the name of Trello
H2 is the name of the Board
H3 is the name of the List
H4 is the name of the Card
H5 is section title in the Card Modal
H6 is the name of the user in the Card Modal's comment


Requirement
At the Board View (the overall view)
- can create List 
  - click "add a list" at the most right of the list.
  - Lists.add(the List Model);
  - On the List Model, on Add , then update to the server.
- can create Card
  - click "add a card" at the bottom of the list
  - Cards.add(the Card Model);

- can edit Card (pencil icon)
  - you can edit Card Title via the pencil icon (card only !)

- can drag and drop Cards and List (use a library)

- search functionality for Cards. (match title and description)


At the Card View (the detailed modal view)
  - can edit Card Title by clicking on the title
  - can add and edit Description by clicking "edit" and "save"
  - can add comments
  - underneath "Add"
    - add and remove labels on a card. Able to create new labels
    - add a due date.

  - underneath "Actions"
    - can move Card to another List
    - can copy Card to another List
    - can subscribe to a card activity
      -all activity will be moved to a Notification.
    - can archive / delete the card 






# Presentation

Data modeling: How do you model boards, lists, cards, comments, and labels? They are "hierarchical" entities and can be modeled using either references or embedding. Did you choose one or the other or a combination, and why?

Assumptions: What assumptions did you make in order to limit the scope of the project? You should make reasonable assumptions how the app is going to be used, such as, the typical board would have up to a few thousand cards, and be aware of the implications of how you implement features.

Client and server communication: How did you design the API endpoints? What modeling choices did you make on the frontend and backend? How often are Ajax requests made and how large is their typical payload?

Structure: How did you chose to structure and organize the project's code and files? Why?

Libraries: What library research did you do, and how did this influence your choices?

Date Picker - Pikaday or Jquery UI 
choosed Jquery UI because it is well documented
- and it also have a draggable UI.

Challenges: What difficulties did you face and overcome (or not)? Would you do anything differently next time?

- how to put Cards collection into List.
- how to add labels to the card and refresh it in the data file.

- how to have a separate data to store available labels.

- how to have the labels point to a master list using ID.

- how to have a back button for the detail card view and changing the url.

- two major decision - how to structure my data structure , whether card is within the list . or separate.

- how to send the data to the server without losing  information

Future improvements: What additional functionality would you implement if you have the time?




## Remaing Steps ( 6 more days)

2. Labels
  - search label


bonus: time element of comment.


7. Notification
  - able to log all activity into notification if subscribed.



Underneath "Actions":

Implement "Subscribe". When you subscribe to a card's activities, all the changes to a card, including editing title and description, adding comments and labels, change of due dates etc will be sent to the "notifications" which can be pulled out by clicking the bell icon.

1. edit title
2. edit description
3. adding comments
4. adding labels
5. change of due date.

to allow the change of due date to be handle by backbone model.

