# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all

category_list = [

{
  "name": "produce",
  "img_url": "https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
},
{
  "name": "meat/dairy",
  "img_url": "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lYXQlMjBkYWlyeXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
  "name": "canned/dry",
  "img_url": "https://images.unsplash.com/photo-1596990803625-12e67163e8b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FubmVkJTIwZ29vZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
},
{
  "name": "sundries",
  "img_url": "https://images.unsplash.com/photo-1588473659682-911dca65e676?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dG9vdGhicnVzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
}
]

Category.create(category_list)