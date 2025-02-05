package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/time", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		currentTime := time.Now()
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"dateTime": "%s"}`, currentTime.Format("2006-01-02 15:04:05"))
	})

	fmt.Println("Server is listening on port 8080...")
	http.ListenAndServe(":8080", nil)
}
