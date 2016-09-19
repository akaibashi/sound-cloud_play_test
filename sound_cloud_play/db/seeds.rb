# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Message.delete_all
Message.create!([
  {user: 'hoge1', text: 'hoge1 text'},
  {user: 'hoge2', text: 'hoge2 text'},
  {user: 'hoge3', text: 'hoge3 text'}
])

Soundcloud.delete_all
Soundcloud.create!([
  {url: 'http://google.co.jp'}
])
