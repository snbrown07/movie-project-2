QUnit.module("Movie Site", function() {
  //movieQueue Array Test
    test("movieQueue array", function() {
    ok(typeof movieQueue !== "undefined", "movieQueue variable is defined.");
    ok(Object.prototype.toString.call(movieQueue) === '[object Array]',"movieQueue is a valid array");
    
    expect(2);
  });
  
    //addMovie Function
  test("addMovieToEnd()", function(){
  ok(typeof addMovieToEnd !== "undefined", "addMovieToEnd() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var currLength = movieQueue.length;
    var result = addMovieToEnd("Test Movie");
    
    ok(movieQueue.length === (currLength + 1), "addMovieToEnd() increases the length of the movieQueue array by 1");
    ok(movieQueue[movieQueue.length-1] === "Test Movie", "addMovieToEnd(\"Test Movie\") adds the value \"Test Movie\" to the end of the movieQueue array");
    ok(result === "Test Movie", "addMovieToEnd(\"Test Movie\") returns \"Test Movie\"");
    
    movieQueue = saveArray;
    expect(4);
  });
  
      //addMovieToFront Function
  test("addMovieToFront()", function(){
  ok(typeof addMovieToFront !== "undefined", "addMovieToFront() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var currLength = movieQueue.length;
    var result = addMovieToFront("Test Movie");
    
    ok(movieQueue.length === (currLength + 1), "addMovieToFront() increases the length of the movieQueue array by 1");
    ok(movieQueue[0] === "Test Movie", "addMovieToFront(\"Test Movie\") adds the value \"Test Movie\" to index 0 in the movieQueue array");
    ok(result === "Test Movie", "addMovieToFront(\"Test Movie\") returns \"Test Movie\"");
    
    movieQueue = saveArray;
    expect(4);
  });
  
  

  //changeMovie Function
  test("changeMovie()", function(){
  ok(typeof changeMovie !== "undefined", "changeMovie() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var currLength = movieQueue.length;
    var index = currLength-1;
    var result = changeMovie(index,"Test Movie");
    
    ok(movieQueue.length === (currLength), "changeMovie() does not change the length of the movieQueue array");
    
    ok(movieQueue[index] === "Test Movie", "changeMovie("+index+",\"Test Movie\") changes the value at "+index+" to \"Test Movie\"");
    
    ok(result === "Test Movie", "changeMovie(\"Test Movie\") returns \"Test Movie\"");
    
    movieQueue = saveArray;
    expect(4);
  });
  
  //getMovie Function
  test("getMovie()", function(){
  ok(typeof getMovie !== "undefined", "getMovie() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var result = getMovie(1);
    
    ok(movieQueue[1] === result, "When movieQueue is [\"zero\",\"one\",\"two\"], getMovie(1) returns \"one\"");
   
    movieQueue = saveArray;
    expect(2);
  });

});
