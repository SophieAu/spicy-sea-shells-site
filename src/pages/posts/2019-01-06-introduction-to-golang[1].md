---
title:  "Introduction to Golang [Part I]"
date:   2019-01-06 11:35:00
slug: "introduction-to-golang"
author: "Kamalashree N"
---

Working for one of the clients here at ThoughtWorks, I found myself working a lot on Golang. **Go** has been a great language to work on but it never felt that way the first time I started on it. To begin with, it has a strange syntax, as opposed to most other *strongly typed languages*. The [Golang tour](https://tour.golang.org/) is a great place to start with. 

Over the next few articles, I will walk you through the basic **Setup** and **CRUD operations** in Golang using **PostgreSQL** database. You can find the repository [here](https://github.com/KamalashreeNagaraj/Goex).

## Server setup 

As part of this project, I will be using [Mux](https://github.com/gorilla/mux) as a request router and dispatcher for matching incoming requests to their respective handler. 

Let's start with `/ping`, the basic health-check route. 

1. Create a file named `main.go` under project root directory. Add the following lines in your `main()`.
    ```
    func main() {
        r := mux.NewRouter()
        r.HandleFunc("/ping", handler.PingHandler).Methods("GET")
    
        if err := http.ListenAndServe(":3000", r); err != nil {
            log.Fatal(err)
        }
    }
    ```  
2. Create a directory named `handler` and a file `ping_handler.go` under it.
3. Add the following lines in `ping_handler.go`.
    ```
    func PingHandler(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusOK)
        w.Write([]byte("{\"success\": \"pong\"}"))
    }
    ```
3. In your terminal, run the command `go run main.go`. You should now see your server running on **_port 3000_**. 
4. `localhost:3000/ping` should now return something like `{"success": "pong"}`.

There you go. You have your Golang server up and running, ready to serve more requests. In the next article, I will demonstrate the usage of **.yml** files in Golang.