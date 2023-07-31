package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DogController {

  @Autowired
  DogService dogService;

  @GetMapping("/")
  public String getWelcome() {
    return "Dogs API is up and running!";
  }

  @GetMapping("/dogs")
  public List<Dog> getAllDogs(){
    return dogService.getAllDogs();
  }

  @PostMapping("/dogs")
  public HttpStatus saveNewDog(@RequestBody Dog dog) {
    Dog result = dogService.addDog(dog);
    if (result == null) {
      return HttpStatus.PRECONDITION_FAILED;
    }
    else {
      return HttpStatus.CREATED;
    }
  }

}
