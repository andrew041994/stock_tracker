# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
stocks = Stock.create([
                       { name: "MIST", amount: 100, purchase_price: 2.00, selling_price: 3.00 },
                       { name: "KOS", amount: 100, purchase_price: 2.00, selling_price: 3.00 },
                       { name: "NCLH", amount: 100, purchase_price: 2.00, selling_price: 3.00 },
                       { name: "JBLU", amount: 100, purchase_price: 2.00, selling_price: 3.00 },
                       { name: "BO", amount: 100, purchase_price: 2.00, selling_price:3.00 }
                       ])