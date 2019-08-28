# react-test

> A React Test

## Test requirements

## notice ##

This Test is designed to test many aspects of your coding skill.
Try to complete as much as possible.

### **Test 1** 

Render Datatable from test1.json.

- [ ] `columns` can be changed dynamically.
- [ ] Each item in `rows` is adapted to `columns` structure.
- [ ] Complete search bar(can search(order, type, question))
- [ ] Data should be available to add(type, question)

### **Test 2**

Implement input, datepicker, and select

- [ ] Get initial data from server
- [ ] Be able to retrieve new value as user change it.

>Read the note below for more detailed about select component*

### **Test 3**

Render a form with the following requirements, using components have implemented from *test2*

- [ ] Use data from this end point `localhost:3030/structure` as the structure of this form. Keep in mind that this structure can be changed dynamically.
- [ ] Use data from this end point `localhost:3030/data` as initial data.
- [ ] Be able to retrieve new value as user change it.
- [ ] Add validation (for fields those marked 'required' in structure)


### **Test 4**

Render a Chart (https://chartkick.com/react)

- [ ] Use Line chart (Multiple series)
- [ ] Calculate Average Value, Total value 
  ex) Teamwork: 3, Benefit:4, Career:2 ==> Total: 9, Average: 3

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at http://localhost:8081/
npm run dev

# start a server at localhost:3030
npm run server

## Note
Select componet:
Use the following endpoints for select component:

* http://localhost:3030/modifier
* http://localhost:3030/owner

API for Test 3:

``` bash
  {
    "value": "created",
    "label": "등록일시",
    "valueType": {
      "value": "DATE",
      "label": "Date"
    },
    "disabled": true,
    "required": false
  }
```

* `valueType`: data type of this field. In other word, this defines which component you need to render this field.
  * `LONG`: number,
  * `STRING`: text,
  * `REFERENCE`: select
  * `DATE`: datepicker
* `disabled`,`required`: validate options.
* `label`: field label
* `value`: key of this field.
