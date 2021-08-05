var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var bookRead = "the book, '" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("You Already read " + bookRead);
    } else
    {
     console.log("You still need to read " + bookRead);
    }
   }
/*Expected Output                                                                                              
    You Already read the book, 'Bill Gates' by The Road Ahead.                                                     
    You Already read the book, 'Steve Jobs' by Walter Isaacson.                                                   
    You still need to read the book, 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/