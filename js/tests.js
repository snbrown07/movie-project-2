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
    ok("not a valid index" === getMovie(movieQueue.length), "When the index is too large, getMovie() returns 'not a valid index'");
   
   
    movieQueue = saveArray;
    expect(3);
  });
  
  //isLengthGreaterThan Function
  test("isLengthGreaterThan()", function(){
  ok(typeof isLengthGreaterThan !== "undefined", "isLengthGreaterThan() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var result = isLengthGreaterThan(2);
    
    ok(result === true, "When movieQueue is [\"zero\",\"one\",\"two\"], isLengthGreaterThan(2) returns true");
    
    var result = isLengthGreaterThan(3);
    ok(result === false, "When movieQueue is [\"zero\",\"one\",\"two\"], isLengthGreaterThan(3) returns false");
   
    var result = isLengthGreaterThan(4);
    ok(result === false, "When movieQueue is [\"zero\",\"one\",\"two\"], isLengthGreaterThan(4) returns false");
   
    movieQueue = saveArray;
    expect(4);
  });
  
  //findMovie Function
  test("findMovie()", function(){
  ok(typeof findMovie !== "undefined", "findMovie() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var result = findMovie("one");
    
    ok(result === true, "When movieQueue is [\"zero\",\"one\",\"two\"], findMovie(\"one\") returns true");
    
    var result = findMovie("four");
    ok(result === false, "When movieQueue is [\"zero\",\"one\",\"two\"], findMovie(\"four\") returns false");
   
   
    movieQueue = saveArray;
    expect(3);
  });
  
  test("addMoviesToEnd()", function(){
  ok(typeof addMoviesToEnd !== "undefined", "addMoviesToEnd() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var spy = sinon.spy(window, "addMovieToEnd");
    var originalValue = movieQueue[0];
    var currLength = movieQueue.length;
    var result = addMoviesToEnd();
    
    ok(movieQueue.length === (currLength + 3), "addMoviesToEnd() increases the length of the movieQueue array by 3");
    ok(originalValue === movieQueue[0], "addMoviesToEnd adds the values at the end of the movieQueue array and does not modify the ones at the beginning");
    ok(result[0] === movieQueue[3], "addMoviesToEnd() returns the array of movies added");
    ok(spy.calledThrice === true, "addMoviesToEnd() calls addMovieToEnd() 3 times");
    
    movieQueue = saveArray;
    expect(5);
  });
  
  test("listMovies", function(){
  ok(typeof listMovies !== "undefined", "listMovies() function is defined.");
    
    var saveArray = movieQueue;
    movieQueue = ["one","two","three"];
    
    var result = listMovies();
    
    equal(result, 'Here are the current movies: one, two, three, ', "listMovies() when movieQueue is ['one', 'two', 'three'] should return 'Here are the current movies: one, two, three, '");
    
    movieQueue = saveArray;
    expect(2);
  });
  
  

});
