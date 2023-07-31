package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.service.DogService;
import org.aspectj.lang.annotation.DeclareError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DogController {

  @Autowired
  DogService dogService;

//  @GetMapping("/")
//  public String getWelcome() {
//    return "Dogs API is up and running!";
//  }

  @GetMapping("/return number of dogs in database")
  public long getNoOfDogs(){
    return dogService.getNoOfDogs();
  }

  @GetMapping("/return all dogs")
  public List<Dog> getAllDogs(){
    return dogService.getAllDogs();
  }

  @GetMapping("/return dog by name")
  public Dog getDogByName(String dogsName){
    return dogService.getDogByName(dogsName);
  }

  @GetMapping("/return dog by id")
  public Dog getDogById(long uniqueId){
    return dogService.getDogById(uniqueId);
  }


  @PostMapping("/add a new dog")
  public HttpStatus saveNewDog(@RequestBody Dog dog) {
    Dog result = dogService.addDog(dog);
    if (result == null) {
      return HttpStatus.PRECONDITION_FAILED;
    }
    else {
      return HttpStatus.CREATED;
    }
  }

  @DeleteMapping("/remove dog")
  public boolean removeDog(long uniqueId){
    return dogService.removeDog(uniqueId);
  }

  @PutMapping("/modify an existing dog")
  public Dog updateDogDetails(Dog dogToUpdate){
    return dogService.updateDogDetails(dogToUpdate);
  }


}
