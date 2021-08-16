<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Development-strategy

### `Must-have`(_milestone_)

## `for: enter new task` (_label_)

### `type: html` (_label_)

- [ ] *label* tag named add item
- [ ] *input* tag type="text" for the user to enter an item
- [ ] *add* button

### `type: css` (_label_)

- input-field
  - [ ] font-family Lato
  - [ ] font color black
  - [ ] font-size 15px
  - [ ] button background: none;
  - [ ] button font-color grey #888
  - [ ] button hover font-color: green #333
  - [ ] outline: none

### `type: handlers` (_label_)

- [ ] create a function addTask

### `type: listeners` (_label_)

- [ ] attach a click event to add button
  
## `for: tasks to be done` (_label_)

### `type: html` (_label_)

- [ ] *label* tag named TO DO
- [ ] unordered list
- [ ] tag *li* with input type="checkbox"
- [ ] button delete icon
- [ ] button edit icon

### `type: css` (_label_)

- [ ] font-family Lato
- [ ] font color black
- [ ] font-size 15px
- [ ] icons delete and edit color dark grey
- [ ] hover effect - delete icon color red
- [ ] hover effect - edit icon color black
- [ ] input border none

### `type: handlers` (_label_)

- [ ] create a function editTask
- [ ] create a function deleteTask
- [ ] create a function completedTask

### `type: listeners` (_label_)

- [ ] attach a click event to delete button
- [ ] attach a click event to edit button
- [ ] attach a click event to the checkbox
  
## `for: completed tasks` (_label_)

### `type: html` (_label_)

- [ ] *label* tag named COMPLETED
- [ ] unordered list
- [ ] tag *li* with input type="checkbox", checked
- [ ] button delete icon
- [ ] button edit icon

### `type: css` (_label_)

- [ ] font-family Lato
- [ ] font color dark grey
- [ ] font-size 15px
- [ ] icons delete and edit color dark grey
- [ ] hover effect - delete icon color red
- [ ] hover effect - edit icon color black
- [ ] input border none
- [ ] text-decoration: line-through;

### `type: handlers` (_label_)

- [ ] create a function incompleteTask

### `type: listeners` (_label_)

- [ ] attach a click event to the checkbox
