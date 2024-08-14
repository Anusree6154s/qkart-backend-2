# Setup file template to upload data to MongoDB Atlas
mongoimport --uri mongodb://anilkumaranusree113:anilkumar113anusree@qkart-node.w0cqm.mongodb.net/qkart --drop --collection users --file data/export_qkart_users.json
mongoimport --uri mongodb://anilkumaranusree113:anilkumar113anusree@qkart-node.w0cqm.mongodb.net/qkart --drop --collection products --file data/export_qkart_products.json
