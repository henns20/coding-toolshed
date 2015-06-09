##learnyounode stuff takeaways

1. Hello world
- console.log - most basic output

2.Baby steps
- sum of number command line arguments
- command line arguments
- process object 

3. My first io
- count number of lines in a supplied file 
- fs module - work with and manipulate files - idea of posix
- buffer object   
- readFileSync(file, utf8)

4. My first async io 
    - readFile - uses a callback  
    - introduces a callback function to workflow

5. Filtered List
    requirements
    - given a directory and ext in the console line arguments
    - filter out form the directory - the files with the ext given.
     - reads directory with readdir()
     - readdir() is async
        - takes a directory
        - feeds a callback fn with a a) error or or b) a (null, list) of files 
        in an Array
        - filter 
         - foreach console.log

6. Make it modular 
    - task same as filtered list 
    - But - making a module - separate file that does the work - a filterfn
        - which procides to the callback on success a list of only the files 
        in the dir that have that ext. 
        - it this case it takes a dir, ext name cb
        - and it provides the call back an err if it can not be read 
        - or, an Array of
     takeaways:
          moudel 
            - ./modulename for a local module
            - creating a function that uses async pattern*
            - i don't understand the contract thing completely.
            - the double callback - is a little confusing. 
            
7. Http client
    - introduces the http module - 
    - Takeaways
    - get request return a response object - which is a stream object
    - treat Stream objects as if they emit events
    - response.setEncoding('utf8') will return string - otherwise it will return 
     a buffer object.
    -.on("data", console.log) is an okay code
    
8. http-collect
    - collects multiple dta events from a response/stream collects it using
        - bl or concat -stream  (you can do it without them)
        - buffer list and concat stream 0 you don't need to do response.end
        
        
9. juggling async 
    - counts callbacks and keeps order of get request responses
    - uses closure and an index variable to print in order responses in order

     

     
     

     


