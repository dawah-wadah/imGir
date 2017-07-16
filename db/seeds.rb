require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)

User.create!(username: 'Wadah', password: 'password')
User.create!(username: 'Yaakov', password: 'password')
User.create!(username: 'Musgrave', password: 'SpursSpurs123')
User.create!(username: 'Chris_Hakos', password: 'password')
User.create!(username: 'CalvinLEE', password: 'password')
User.create!(username: 'WP_Johnson', password: 'password')
User.create!(username: 'BAIKEN', password: 'password')
User.create!(username: 'Jesus Christ', password: 'password')
User.create!(username: 'MikeBoan', password: 'password')
User.create!(username: 'Oscar', password: 'password')
User.create!(username: 'WenBoooooook', password: 'password')
User.create!(username: 'Mos_Steph', password: 'password')
User.create!(username: 'McBennett', password: 'password')
User.create!(username: 'Nick_da_Greek', password: 'password')
User.create!(username: 'PapaMikeNoel', password: 'password')
User.create!(username: 'TheRealSeanSnyder', password: 'password')
User.create!(username: 'TheFakeSeanChowdhury', password: 'password')
User.create!(username: 'JohnBaek', password: 'password')
User.create!(username: 'Martinian', password: 'password')
User.create!(username: 'Kingsley_Shacklebolt', password: 'password')
User.create!(username: '3r1cVooo', password: 'password')
User.create!(username: 'AmmarWonderWall', password: 'password')
User.create!(username: 'Nathaniel_Thorn', password: 'password')
User.create!(username: 'NathanNathan', password: 'password')
User.create!(username: 'Nathan', password: 'password')
User.create!(username: 'Tommy_Pickles', password: 'password')


keanuPost = Post.create({
  title: "He's God's Gift",
  description:"Keanu Reeves Everybody",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: keanuPost.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Keanu+Gift.jpg",
    main_image: true,
})
adamPost = Post.create({
  title: "He's God's Gift",
  description:"Keanu Reeves Everybody",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: adamPost.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/AdamSavage.png",
    main_image: true,
})
ants = Post.create({
  title: "Smart Ad",
  description:"When even ants wont eat candy",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: ants.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Ants.jpg",
    main_image: true,
})
goodPress = Post.create({
  title: "No Such thing as Bad Press",
  description:"Good Press",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: goodPress.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Good+Press.png",
    main_image: true,
})
japan = Post.create({
  title: "Make America Like Japan",
  description:"*hint hint Mr President",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: japan.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Japan+is+Awesome.jpg",
    main_image: true,
})
pug = Post.create({
  title: "Pugs are so cute",
  description:"Its a Shame they all have really bad genetics",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: pug.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Pugs.jpg",
    main_image: true,
})
grandad = Post.create({
  title: "DUDE HE'S ALIVE",
  description:"this guy is a freaking legend, Happy Birthday",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: grandad.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/StockPhotoGranddad.jpg",
    main_image: true,
})
avacados = Post.create({
  title: "Nice One",
  description:"",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: avacados.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/avacados.jpg",
    main_image: true,
})
cutecat = Post.create({
  title: "Zomg",
  description:"so cute",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: cutecat.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/cat.jpg",
    main_image: true,
})
dogPost = Post.create({
  title: "Dogs truly are Man's Best Friends",
  description:"Wish i had a dog, to love and support like my own",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: dogPost.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/cutedog.png",
    main_image: true,
})
  Image.create({
    imageable_id: dogPost.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/doc-doctor.jpg",
    main_image: false,
})
  Image.create({
    imageable_id: dogPost.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/dog.jpg",
    main_image: false,
})
grandma = Post.create({
  title: "So Adorable",
  description:"Taking BFF to a whole 'nother level'",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: grandma.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/grandmatext.jpg",
    main_image: true,
    })
spiderGrape = Post.create({
  title: "With Great Power",
  description:"Comes Greater Risk of Dying",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: spiderGrape.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/grapes-spider.jpg",
    main_image: true,
    })
dog2 = Post.create({
  title: "Look how happy he is",
  description:"",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: dog2.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/happy-dog.jpg",
    main_image: true,
    })
jesus = Post.create({
  title: "I mean, he's not wrong",
  description:"Probably not the smartest thing though",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: jesus.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/jesus.png",
    main_image: true,
    })
plane = Post.create({
  title: "In Soviet Russia",
  description:"Plane Flys You",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: plane.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/plane.jpg",
    main_image: true,
    })
puffy = Post.create({
  title: "Is this bacteria>",
  description:"Nah Just Popcorn",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: puffy.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/puffy.gif",
    main_image: true,
    })
cuteDog = Post.create({
  title: "Brace Yourself, the Dogs are Coming>",
  description:"Woof",
  author_id: User.all.sample.id
  })
  Image.create({
    imageable_id: cuteDog.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/01+-+v86HkxZ.jpg",
    main_image: true,
    })
  Image.create({
    imageable_id: cuteDog.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/02+-+tUB757I.gif",
    main_image: false,
    })
  Image.create({
    imageable_id: cuteDog.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/03+-+WxJ27xu.png",
    main_image: false,
    })
  Image.create({
    imageable_id: cuteDog.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/04+-+2z66VeE.jpg",
    main_image: false,
    })
  Image.create({
    imageable_id: cuteDog.id,
    imageable_type: 'Post',
    image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/05+-+DTakFeb.jpg",
    main_image: false,
    })
    ['https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/05+-+DTakFeb.jpg',
    'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/06+-+p77KOiE.jpg',
    'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/07+-+kZ1waAm.jpg',
    'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/08+-+BsYF98x.jpg',
    'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Dump/09+-+0VfH6UP.png'
  ].each do |link|
    Image.create({
      imageable_id: cuteDog.id,
      imageable_type: 'Post',
      image: link,
      main_image: false,
      })
   end

   dump1 = Post.create({
     title: "Just Another Day in PhotoDump Land",
     description:"For Your Entertainment",
     author_id: User.all.sample.id
     })
     [
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/01+-+RyjB6U3.png',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/01+-+vnlpuTk.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/02+-+QmXpBI9.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/02+-+iNInDMm.png',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/03+-+R7kNWze.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/04+-+ZXSLRfp.png',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/04+-+vXvKFoy.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/05+-+astDa8z.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/06+-+d4d9kD0.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/06+-+oG6tjvG.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/07+-+ImsRzbd.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/07+-+VoSnr6x.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/08+-+EMrysIA.jpg',
       'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/08+-+SFLqjYA.png',

     ].each do |link|
     Image.create({
       imageable_id: dump1.id,
       imageable_type: 'Post',
       image: link,
       main_image: false,
       })
     end
     Image.create({
       imageable_id: dump1.id,
       imageable_type: 'Post',
       image:'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/05+-+q8BBcTO.jpg',
       main_image: true,
       })


   dump2 = Post.create({
        title: "DUMPERONI",
        description:Faker::ChuckNorris.fact,
        author_id: User.all.sample.id
        })
   [
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/09+-+kDgr8kK.png',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/09+-+wpbSX2R.png',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/10+-+2TuiGxM.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/10+-+EczRnHI.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/11+-+HqPwF3k.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/11+-+oxF9pYK.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/12+-+C87pf0g.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/12+-+H1WcuDJ.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/13+-+ZI0Uvi8.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/13+-+ljp8X5X.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/14+-+K2o5q96.jpg',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/14+-+UICeSrR.png',
     'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/15+-+38HwlmY.jpg',
   ].each do |link|
   Image.create({
     imageable_id: dump2.id,
     imageable_type: 'Post',
     image: link,
     main_image: false,
     })
   end
   Image.create({
     imageable_id: dump2.id,
     imageable_type: 'Post',
     image: 'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/15+-+vHVuyJT.jpg',
     main_image: true,
     })
 doubt = Post.create({
   title: "Come on, don't be a P***y",
   description:'',
   author_id: User.all.sample.id
   })
   Image.create({
     imageable_id: doubt.id,
     imageable_type: 'Post',
     image: "https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/16+-+M2mDTZq.jpg",
     main_image: true,
     })
  dump3 = Post.create({
    title: "I HEARD YOU LIKE DUMPS",
    description: Faker::ChuckNorris.fact,
    author_id: User.all.sample.id
    })
    [
      'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/16+-+VbpMn6m.jpg',
      'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/17+-+NHPfWxq.jpg',
      'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/17+-+tVpZ1kA.png',
      'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/18+-+DN97OQ1.png',
      'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/18+-+eU9R8nT.jpg',
    ].each do |link|
      Image.create({
        imageable_id: dump3.id,
        imageable_type: 'Post',
        image: link,
        main_image: false,
        })
    end

    Image.create({
      imageable_id: dump3.id,
      imageable_type: 'Post',
      image: 'https://s3.us-east-2.amazonaws.com/imgirbucket-dev/images/images/sadsada/Better+Dump/19+-+XYLhTjL.png',
      main_image: true,
      })
#   10.times do
#   post = Post.create({
#     title: Faker::Friends.quote,
#     description: Faker::Friends.quote,
#     author_id: User.all.sample.id
#     })
#     2.times do
#       Image.create({
#         imageable_id: post.id,
#         imageable_type: 'Post',
#         image: Faker::LoremPixel.image,
#         main_image: true,
#         description: Faker::Friends.quote
#     })
#       6.times do
#       comment = Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: post.id,
#           parent_type: 'Post',
#           post_id: post.id,
#           body: Faker::Friends.quote
#         })
#         rand(5).times do
#         Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: comment.id,
#           parent_type: 'Comment',
#           post_id: post.id,
#           body: Faker::Friends.quote
#           })
#         end
#       end
#     end
# end
# rand(8).times do
#   comment = Comment.create!(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Wadah your presentation is awesome')
#   Comment.create!(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Dude, this site is killer AF')
#   Comment.create!(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Right, on keep it up')
#   Comment.create!(user_id: User.find_by(username: 'MikeBoan'), parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'I\'ve seen better')
#   Comment.create!(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Wadah, you\'re the man')
#   o = Comment.create!(user_id: User.find_by(username: 'Oscar'), parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'I wish you were in my circle')
#   Comment.create!(user_id: User.find_by(username: 'MikeBoan'), parent_id: o.id, parent_type: 'Comment', post_id: post.id, body: 'Too bad')
# end
User.all.each do |user|
  Post.all.each do |post|
  Vote.create!(voter_id: user.id, voteable_type: 'Post', voteable_id: post.id, vote_type: %w[Upvote Downvote].sample)
end
end

#
# rand(10).times do
#   new_post = Post.create!(title: Faker::Friends.quote,
#    description: Faker::Friends.quote,
#     author_id: User.all.sample.id)
#
#     Image.create!(imageable_id: new_post.id,
#     imageable_type: 'Post',
#     imageable_id: new_post.id,
#     image: Faker::LoremPixel.image,
#     main_image: true,
#     description: Faker::Friends.quote)
#   end
#   #   rand(3).times do
# end
#     Image.create!(imageable_id: new_post.id,
#                  imageable_type: 'Post',
#                  image: Faker::LoremPixel.image,
#                  main_image: false,
#                  description: Faker::Friends.quote)
#               end
#
# rand(7).times do
#   Comment.create!(user_id: User.all.sample.id, parent_id: comment.id, parent_type: 'Post', post_id: new_post.id, body: Faker::Friends.quote)
# end
# User.all.each do |user|
#   Vote.create!(voter_id: user.id, voteable_type: 'Post', voteable_id: new_post.id, vote_type: ['Upvote', 'Downvote'].sample)
# end
# end
