# Finding Nemo Backend

## API reference

| Endpoint          | Method | Description                                             |
| ----------------- | ------ | ------------------------------------------------------- |
| /                 | any    | check if server is working                              |
| /items/?category= | GET    | Get all items having that exact category                |
| /items/:id        | GET    | Get info of specific item                               |
| /items/add        | POST   | Add new item                                            |
| /items/:id        | DELETE | To remove an item                                       |
| /files            | GET    | To get list of all files stored                         |
| /delete/:id       | DELETE | Delete file of name :id, Requires ADMIN_TOKEN in header |

## Form Data Submission

file : to contain file
studentName
itemTitle
itemDescription
email
location
contact
secret
category: LOST | FOUND

## ENV VAR

1. PORT
2. MONDO_DB URL
3. ADMIN_TOKEN
4. NODE_VERSION ( for specific cases )
